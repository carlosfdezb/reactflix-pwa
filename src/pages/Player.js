import React from 'react';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

//movil
import { PlayerCard } from '../components/mobile/PlayerCard';
import { BackNavBar } from '../components/mobile/HomeNavBar';

//desktop
import { PlayerCard as PlayerCardDesktop } from '../components/desktop/PlayerCard';

export const Player = (props) => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' });
  const { id, type } = useParams();
  let { idPlayer, routePlayer } = props.location.state;
  return (
    <div>
      {
        isDesktopOrLaptop ? (
          <>
            <BackNavBar player={true} id={id} media_type={type} />
            <PlayerCardDesktop id={idPlayer} route={routePlayer} />
          </>
        ) : (
          <>
            <BackNavBar player={true} id={id} media_type={type} />
            <PlayerCard id={idPlayer} route={routePlayer} />
          </>
        )
      }

    </div>
  );
};
