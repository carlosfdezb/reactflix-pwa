/* eslint-disable camelcase */
import React from 'react';
import { CrewBox, Image, InfoDiv, CharacterDiv, ActorDiv } from './styles';
import { IMG, NO_IMAGE } from '../../../urls/url';

export const CrewCard = ({ name, character, profile_path, job }) => {
  return (
    <CrewBox>
      <Image src={profile_path ? IMG + profile_path : NO_IMAGE} />

      <InfoDiv>
        <CharacterDiv>{name}</CharacterDiv>
        <ActorDiv>{character || job}</ActorDiv>
      </InfoDiv>

    </CrewBox>
  );
};
