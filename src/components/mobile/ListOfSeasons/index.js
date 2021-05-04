import React, { useState, useEffect } from 'react';
import { ListDiv, List, Item } from './styles';
import { SeasonsCard } from '../SeasonsCard';
import { BASE_URL } from '../../../urls/url';

export const ListOfSeasons = ({ id, type, idPlayer, routePlayer, desktop }) => {
  const [seasons, setSeasons] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.fetch(`${BASE_URL}getSeasons/${id}`)
      .then((res) => res.json())
      .then((info) => {
        setSeasons(info);
        setLoading(false);
      });
  }, [id]);

  return (
    <ListDiv desktop={desktop}>
      <List>
        {
          seasons && seasons.map((s, index) => (
            <Item key={index}>
              <SeasonsCard
                {...s}
                id={id}
                type={type}
                idPlayer={idPlayer}
                routePlayer={routePlayer}
              />
            </Item>
          ))
        }
      </List>
    </ListDiv>
  );
};
