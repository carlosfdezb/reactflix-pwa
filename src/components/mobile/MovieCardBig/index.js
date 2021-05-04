import React from 'react';
import { MovieDiv, ImageGradient, Logo } from './styles';

export const MovieCardBig = ({ tmdb, title }) => {
  return (
    <div>
      {
        tmdb[0].logo && (
          <MovieDiv img={tmdb[0].background}>
            <ImageGradient />
            <Logo src={tmdb[0].logo} />
          </MovieDiv>
        )
      }
    </div>
  );
};
