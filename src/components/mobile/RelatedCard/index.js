import React, { useEffect, useState } from 'react';
import { ListDiv, List, Item, GradientDiv, HeaderDiv } from './styles';
import { MovieCard } from '../MovieCard';
import { BASE_URL } from '../../../urls/url';
import { DetailCard } from '../DetailCard';

export const RelatedCard = ({ type, id }) => {
  const [info, setInfo] = useState([]);
  const [data, setData] = useState([]);
  const [view, setView] = useState(false);
  const [key, setKey] = useState('');
  const [loading, setLoading] = useState(false);
  const bypassFix = type === 'movie' ? 'Película' : 'Serie';

  useEffect(() => {
    setLoading(true);
    window.fetch(`${BASE_URL}getRecommendations/${type}/${id}`)
      .then((res) => res.json())
      .then((n) => {
        setInfo(n[0].results);
        setLoading(false);
      });
  }, []);

  const changeState = (data, key) => {
    setView(!view);
    setData(data);
    setKey(key);
  };

  const changeView = () => {
    setView(!view);;
  };

  return (
    <div>
      <ListDiv>
        <List>
          {
            !loading && info.map((related) => (
              <Item key={related.id} onClick={() => changeState(related, related.id)}>
                <MovieCard {...related} search={true} bypass={bypassFix} />
              </Item>
            ))
          }
        </List>
      </ListDiv>
      {
        view && (
          <>
            <GradientDiv onClick={() => changeView()} />
            <DetailCard {...data} key={key} type={type} bypass={bypassFix} />
          </>
        )
      }
    </div>
  );
};
