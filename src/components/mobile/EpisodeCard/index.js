/* eslint-disable camelcase */
import React, { useState } from 'react';
import Font, { Text } from 'react-font';
import { Link } from 'react-router-dom';
import { CardBox, BoxDiv, OpenBox, DataDiv, TitleDiv, BottomDiv, TitleBox, NoteDiv, NoteIn, NoteFont, NoteBox } from './styles';
import { IMG } from '../../../urls/url';
import { LoadEpisodeButton } from '../LoadEpisodeButton';

export const EpisodeCard = ({ id, type, name, air_date, still_path, episode_number, overview, season_number,
  vote_average, idPlayer, routePlayer, desktop }) => {
  const [view, setView] = useState(true);
  const changeView = () => {
    setView(!view);
  };
  const date = new Date();
  const today = (`${date.getFullYear()}-${date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`);

  return (
    <>
      {
        view ? today > air_date && (
          <CardBox onClick={() => changeView()} image={IMG + still_path} desktop={desktop}>
            <BoxDiv>
              <DataDiv>
                <TitleBox>
                  <Font family='Titillium Web'>
                    <TitleDiv>{name}</TitleDiv>
                  </Font>
                </TitleBox>
                <Text family='Titillium Web'>
                  Episodio
                  {' '}
                  {episode_number}
                </Text>
              </DataDiv>
            </BoxDiv>
          </CardBox>
        ) : ((name !== 'Especiales' && name !== 'Specials') && (today > air_date)) && (
          <OpenBox desktop={desktop}>
            <CardBox onClick={() => changeView()} image={IMG + still_path}>
              <BoxDiv>
                <DataDiv>
                  <TitleBox>
                    <Font family='Titillium Web'>
                      <TitleDiv>{name}</TitleDiv>
                    </Font>
                  </TitleBox>
                  <Text family='Titillium Web'>
                    Episodio
                    {' '}
                    {episode_number}
                  </Text>
                </DataDiv>
              </BoxDiv>

            </CardBox>

            <BottomDiv>

              <NoteBox>
                {
                  vote_average > 6.9 && <NoteDiv color='forestgreen'><NoteIn><NoteFont>{vote_average * 10}</NoteFont></NoteIn></NoteDiv>
                }
                {
                  (vote_average > 4.9 && vote_average < 7) && <NoteDiv color='gold'><NoteIn><NoteFont>{vote_average * 10}</NoteFont></NoteIn></NoteDiv>
                }
                {
                  (vote_average > 0 && vote_average < 5) && <NoteDiv color='crimson'><NoteIn><NoteFont>{vote_average * 10}</NoteFont></NoteIn></NoteDiv>
                }
                <Text family='Titillium Web'>
                  Fecha de emisión:
                  {' '}
                  {air_date}

                </Text>
              </NoteBox>
              <Text family='Titillium Web'>
                {overview}
              </Text>
              <LoadEpisodeButton idPlayer={idPlayer} routePlayer={routePlayer} episode={episode_number} season={season_number} />
            </BottomDiv>

          </OpenBox>
        )
      }
    </>
  );
};
