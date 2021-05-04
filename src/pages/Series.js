import React from 'react';
import { useMediaQuery } from 'react-responsive';

//movil
import { HomePortrait } from '../components/mobile/HomePortrait';
import { ListOfCollection } from '../components/mobile/ListOfCollection';
import { ListOfTrending } from '../components/mobile/ListOfTrending';
import { GenresList } from '../components/mobile/GenresList';
import { ListOfMovieCard } from '../components/mobile/ListOfMovieCard';

//desktop
import { NavBar } from '../components/desktop/NavBar';
import { Content } from '../components/desktop/NavBar/styles';
import { HomePortrait as HomeDesktop } from '../components/desktop/HomePortrait';
import { ListOfMovieCard as ListOfMovieCardDesktop } from '../components/desktop/ListOfMovieCard';
import { GenresList as GenresListDesktop } from '../components/desktop/GenresList';

export const Series = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' });
  return (
    <div>
      {
        isDesktopOrLaptop ? (
          <>
            <NavBar />
            <Content>
              <GenresListDesktop type='tv'>
                <HomeDesktop type='tv' sort='2' genre='0' bypass='Serie' />

                <ListOfMovieCardDesktop title='Serie nuevas y populares' type='tv' sort='1' bypass='Serie' />

                <ListOfMovieCardDesktop title='Series populares' type='tv' sort='2' bypass='Serie' />
              </GenresListDesktop>
            </Content>
          </>
        ) : (
          <GenresList type='tv'>
            <HomePortrait type='tv' sort='2' genre='0' bypass='Serie' />

            <ListOfMovieCard title='Serie nuevas y populares' type='tv' sort='1' bypass='Serie' />
            <ListOfTrending type='tv' title='10 series más populares hoy' />

            <ListOfMovieCard title='Series populares' type='tv' sort='2' bypass='Serie' />
          </GenresList>
        )
      }

    </div>
  );
};
