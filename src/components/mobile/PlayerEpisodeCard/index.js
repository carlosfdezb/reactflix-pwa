import React, { useState } from 'react';
import Iframe from 'react-iframe';
import Font from 'react-font';
import { Landscape, ButtonDiv, ButtonChange } from './styles';

export const PlayerEpisodeCard = ({ episodes }) => {
  const [server, setServer] = useState(0);

  const changeServer = () => {
    server < Object.entries(episodes).length - 1 ? setServer(server + 1) : setServer(0);

  };
  return (
    <Landscape>
      {
        episodes !== undefined && Object.entries(episodes).length !== 0 &&
        <Iframe id='player' sandbox='allow-same-origin allow-scripts allow-popups allow-forms' width='100%' height='350' url={episodes[server].link} frameBorder='0' allowFullScreen />
      }
      <ButtonDiv>

        {
          episodes !== undefined ? <ButtonChange onClick={() => changeServer()}><Font family='Hind'><h4>Cambiar Servidor</h4></Font></ButtonChange> : <ButtonChange>No disponible</ButtonChange>
        }
      </ButtonDiv>
    </Landscape>
  );
};
