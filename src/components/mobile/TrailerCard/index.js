import React, { useState, useEffect } from 'react';
import Iframe from 'react-iframe';
import Font from 'react-font';
import { MovieDiv, Title } from './styles';
import { BASE_URL, YT_VIDEO } from '../../../urls/url';

export const TrailerCard = ({ type, id }) => {
  const [video, setVideo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.fetch(`${BASE_URL}getTrailer/${type}/${id}`)
      .then((res) => res.json())
      .then((info) => {
        setVideo(info[0].results);
        setLoading(false);
      });

  }, []);

  return (
    <div>
      {
        !loading &&
        video.map((v, index) => (
          <MovieDiv key={index}>
            {
              index === 0 && (
                <Font family='Nunito'>
                  <Title>Trailer</Title>
                </Font>
              )
            }
            <Iframe
              id='player'
              sandbox='allow-same-origin allow-scripts allow-popups allow-forms'
              width='100%'
              height='350'
              url={YT_VIDEO + v.key}
              frameBorder='0'
              allowFullScreen
            />

          </MovieDiv>
        ))
      }
    </div>
  );
};
