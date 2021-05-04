import React, { useEffect, useState } from 'react';
import { ListDiv, List, Item, Title } from './styles';
import { EpisodeCard } from '../../mobile/EpisodeCard';
import { BASE_URL } from '../../../urls/url';

export const ListOfEpisodes = ({ id, season, idPlayer, routePlayer }) => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.fetch(`${BASE_URL}getEpisodes/${id}/${season}`)
      .then((res) => res.json())
      .then((info) => {
        setEpisodes(info[0].episodes);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Title>{`Temporada ${season}`}</Title>
      <ListDiv>
        <List>
          {
            episodes && episodes.map((e, index) => <Item key={index}><EpisodeCard {...e} idPlayer={idPlayer} routePlayer={routePlayer} desktop={true} /></Item>)
          }
        </List>
      </ListDiv>
    </>
  );
};
