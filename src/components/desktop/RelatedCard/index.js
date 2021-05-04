import React, { useEffect, useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import Font from 'react-font';
import { Link } from 'react-router-dom';
import { ListDiv, Title, Item } from './styles';
import { MovieCard } from '../../mobile/MovieCard';
import { BASE_URL } from '../../../urls/url';

export const RelatedCard = ({ type, id }) => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.fetch(`${BASE_URL}getRecommendations/${type}/${id}`)
      .then((res) => res.json())
      .then((n) => {
        setInfo(n[0].results);
        setLoading(false);
      });
  }, []);

  return (
    <ListDiv>
      <Font family='Roboto'><Title>Relacionados</Title></Font>
      <ScrollContainer style={{ display: 'flex', listStyleType: 'none' }}>
        {
          !loading && info.map((related) => (

            <Item key={related.id}>
              <a href={`/detail/${type || related.media_type}/${related.id}`} style={{ textDecoration: 'none', color: 'white' }}>
                <MovieCard {...related} desktopSize={true} />
              </a>
            </Item>

          ))
        }
      </ScrollContainer>
    </ListDiv>

  );
};
