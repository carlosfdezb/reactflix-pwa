import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';

//mobile
import { SeasonNavBar } from '../components/mobile/HomeNavBar';
import { ListOfEpisodes } from '../components/mobile/ListOfEpisodes';

//desktop
import { ListOfEpisodes as ListOfEpisodesDesktop } from '../components/desktop/ListOfEpisodes';

export const Episodes = (props) => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' });
  const { id, season } = useParams();
  let { idPlayer, routePlayer } = props.location.state;
  return (
    <div>
      {
        isDesktopOrLaptop ? (
          <>
            <SeasonNavBar />
            <ListOfEpisodesDesktop id={id} season={season} idPlayer={idPlayer} routePlayer={routePlayer} />
          </>
        ) : (
          <>
            <SeasonNavBar />
            <ListOfEpisodes id={id} season={season} idPlayer={idPlayer} routePlayer={routePlayer} />
          </>
        )
      }
    </div>
  );
};
