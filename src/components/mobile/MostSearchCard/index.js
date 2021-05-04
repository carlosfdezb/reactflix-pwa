/* eslint-disable camelcase */
import React from 'react';
import Font from 'react-font';
import { CgPlayButtonO } from 'react-icons/cg';
import { BoxDiv, Image, Title } from './styles';
import { IMG } from '../../../urls/url';

export const MostSearchCard = ({ title, name, backdrop_path }) => {
  return (
    <BoxDiv>

      <Image src={IMG + backdrop_path} />
      <Title>
        <Font family='Hind'><h5>{title || name}</h5></Font>
      </Title>
      <CgPlayButtonO size={32} />
    </BoxDiv>
  );
};
