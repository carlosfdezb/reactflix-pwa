import React from 'react';
import { useMediaQuery } from 'react-responsive';

//mobile
import { PlayerEpisodeCard } from '../components/mobile/PlayerEpisodeCard';
import { BackNavBar } from '../components/mobile/HomeNavBar';

//desktop
import { PlayerEpisodeCard as PlayerEpisodeCardDesktop } from '../components/desktop/PlayerEpisodeCard';

export const PlayerEpisode = (props) => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' });
  let { episodes } = props.location.state;
  return (
    <div>
      {
        isDesktopOrLaptop ? (
          <>
            <BackNavBar player={true} />
            <PlayerEpisodeCardDesktop episodes={episodes} />
          </>
        ) : (
          <>
            <BackNavBar player={true} />
            <PlayerEpisodeCard episodes={episodes} />
          </>
        )
      }
    </div>
  );
};
