import React from 'react';
import { useParams } from 'react-router-dom';
import { SeasonNavBar } from '../components/mobile/HomeNavBar';
import { ListOfSeasons } from '../components/mobile/ListOfSeasons';

export const Seasons = (props) => {
  const { id, type } = useParams();
  let { seasons, idPlayer, routePlayer } = props.location.state;
  return (
    <div>
      <SeasonNavBar />
      <ListOfSeasons seasons={seasons} id={id} type={type} idPlayer={idPlayer} routePlayer={routePlayer} />
    </div>
  );
};
