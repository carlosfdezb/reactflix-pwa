import React, { useState } from 'react';
import Iframe from 'react-iframe';
import Font from 'react-font';
import { Landscape, ButtonDiv, ButtonChange, PlayerContainer } from './styles';

export const PlayerEpisodeCard = ({ episodes }) => {
  const [server, setServer] = useState(0);

  const changeServer = () => {
    server < Object.entries(episodes).length - 1 ? setServer(server + 1) : setServer(0);

  };
  return (
    <Landscape>
      {
        episodes !== undefined && Object.entries(episodes).length !== 0 && (
          <PlayerContainer>
            <Iframe id='player' width='100%' height='100%' url={episodes[server].link} frameBorder='0' allowFullScreen />
          </PlayerContainer>
        )
      }
      <ButtonDiv>

        {
          episodes !== undefined ? <ButtonChange onClick={() => changeServer()}><Font family='Hind'><h4>Cambiar Servidor</h4></Font></ButtonChange> : <ButtonChange>No disponible</ButtonChange>
        }
      </ButtonDiv>
    </Landscape>
  );
};
