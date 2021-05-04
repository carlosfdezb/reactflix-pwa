import React, { useState, useEffect } from 'react';
import { IoMdSearch } from 'react-icons/io';
import regeneratorRuntime from 'regenerator-runtime';
import { HeaderDiv, InputDiv, SearchInput, ListDiv, List, Item, GradientDiv, LabelDiv } from './styles';
import { BASE_URL } from '../../../urls/url';
import { MovieCard } from '../MovieCard';

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUrl() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setLoading(false);
    }
    fetchUrl();
  }, [url]);
  return [data, loading];
}
export { useFetch };

const SearchCard = ({ children }) => {

  const [searchTerm, setSearchTerm] = useState('');
  const [data, loading] = useFetch(
    `${BASE_URL}getSearch/${searchTerm.replace(/ñ/g, 'n')}`,
  );

  console.log(data);

  return (
    <div>
      <HeaderDiv>
        <InputDiv>
          <IoMdSearch size={30} />
          <SearchInput onChange={(e) => setSearchTerm(e.target.value)} placeholder='Buscar una serie, una película, etc.' />

        </InputDiv>
      </HeaderDiv>

      {
        data[0] && (
          <>
            <ListDiv>
              {
                data[0] && <LabelDiv><p>PELÍCULAS Y SERIES</p></LabelDiv>
              }
              <List>
                {
                  !loading && (data[0] && data[0].results.map((s) => (
                    <Item key={s.id}>
                      <MovieCard {...s} search={true} />
                    </Item>
                  )))
                }
              </List>
            </ListDiv>
          </>
        )
      }
    </div>
  );
};

export default SearchCard;
