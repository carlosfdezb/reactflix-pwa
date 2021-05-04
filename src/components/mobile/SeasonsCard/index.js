/* eslint-disable camelcase */
import React, { useState } from 'react';
import Font, { Text } from 'react-font';
import { Link } from 'react-router-dom';
import { CardBox, BoxDiv, Image, DataDiv, TitleDiv, BottomDiv, ViewButton, OpenBox } from './styles';
import { IMG } from '../../../urls/url';

export const SeasonsCard = ({ id, type, name, poster_path, air_date, episode_count, overview, season_number, idPlayer, routePlayer }) => {
  const [view, setView] = useState(true);
  const changeView = () => {
    setView(!view);
  };
  const date = new Date();
  const today = (`${date.getFullYear()}-${date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`);
  return (
    <>
      {
        view ? ((name !== 'Especiales' && name !== 'Specials') && (today > air_date)) && (
          <CardBox onClick={() => changeView()}>
            <BoxDiv>
              <Image src={IMG + poster_path} />
              <DataDiv>
                <Font family='Titillium Web'>
                  <TitleDiv>{name}</TitleDiv>
                </Font>
                <Text family='Titillium Web'>{air_date.split('-')[0]}</Text>

                <Text family='Titillium Web'>
                  Número de episodios:
                  {' '}
                  {episode_count}
                </Text>

              </DataDiv>
            </BoxDiv>
          </CardBox>
        ) : ((name !== 'Especiales' && name !== 'Specials') && (today > air_date)) && (
          <OpenBox>
            <CardBox onClick={() => changeView()}>
              <BoxDiv>
                <Image src={IMG + poster_path} />
                <DataDiv>
                  <Font family='Titillium Web'>
                    <TitleDiv>{name}</TitleDiv>
                  </Font>
                  <Text family='Titillium Web'>{air_date.split('-')[0]}</Text>

                  <Text family='Titillium Web'>
                    Número de episodios:
                    {' '}
                    {episode_count}
                  </Text>

                </DataDiv>
              </BoxDiv>

            </CardBox>
            <BottomDiv>
              <Text family='Titillium Web'>
                {overview}
              </Text>

              <Link to={{ pathname: `/episodes/${type}/${id}/${season_number}`, state: { idPlayer, routePlayer } }} style={{ textDecoration: 'none', color: 'white' }}>
                <ViewButton><Font family='Hind'><h4>Episodios</h4></Font></ViewButton>
              </Link>
            </BottomDiv>
          </OpenBox>
        )
      }
    </>
  );
};
