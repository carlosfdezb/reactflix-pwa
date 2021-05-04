import React, { useEffect, useState } from 'react';
import Iframe from 'react-iframe';
import Font from 'react-font';
import { BASE_URL } from '../../../urls/url';
import { Landscape, ButtonDiv, ButtonChange, PlayerContainer } from './styles';

export const PlayerCard = ({ id, route }) => {
  const [video, setVideo] = useState([]);
  const [server, setServer] = useState(0);

  useEffect(() => {
    window.fetch(`${BASE_URL}${route}${id}`)
      .then((res) => res.json())
      .then((info) => {
        setVideo(info.result);
      });

  }, []);

  const changeServer = () => {
    server < Object.entries(video).length - 1 ? setServer(server + 1) : setServer(0);
    console.log(`${BASE_URL}${route}${id}`);
  };
  return (
    <Landscape>
      {
        video !== undefined && Object.entries(video).length !== 0 && (
          <PlayerContainer>
            <Iframe id='player' width='100%' height='100%' url={video[server].link} frameBorder='0' allowFullScreen />
          </PlayerContainer>
        )
      }
      <ButtonDiv>

        {
          video !== undefined ? <ButtonChange onClick={() => changeServer()}><Font family='Hind'><h4>Cambiar Servidor</h4></Font></ButtonChange> : <ButtonChange>No disponible</ButtonChange>
        }
      </ButtonDiv>
    </Landscape>
  );
};
