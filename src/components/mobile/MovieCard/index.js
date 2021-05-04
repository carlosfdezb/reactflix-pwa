/* eslint-disable camelcase */
import React from 'react';
import { Jello } from 'animate-css-styled-components';
import { MovieDiv } from './styles';
import { IMG } from '../../../urls/url';

export const MovieCard = ({ bypass, poster_path, title, search, overview, media_type, desktopSize }) => {
  return (
    <div>
      {
        ((media_type === 'movie') || (media_type === 'tv')) && poster_path &&
        <MovieDiv src={IMG + poster_path} search={search} anim={Jello} desktopSize={desktopSize} />
      }
      {
        bypass && poster_path && <MovieDiv src={IMG + poster_path} search={search} anim={Jello} />
      }
    </div>
  );
};
