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

export const Movies = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' });
  return (
    <div>
      {
        isDesktopOrLaptop ? (
          <>
            <NavBar />
            <Content>
              <GenresListDesktop type='movie'>
                <HomeDesktop type='movie' sort='2' genre='0' bypass='Película' />

                <ListOfMovieCardDesktop title='Películas nuevas y populares' type='movie' sort='1' bypass='Película' />
                <ListOfMovieCardDesktop title='Películas de mayor recaudación' type='movie' sort='4' bypass='Película' />

                <ListOfMovieCardDesktop title='Pixar' type='movie' sort='2' company='3' bypass='Película' />
                <ListOfMovieCardDesktop title='Películas de Steven Spielberg' type='movie' sort='1' director='2' bypass='Película' />

                <ListOfMovieCardDesktop title='Studio Ghibli' type='movie' sort='2' company='1' bypass='Película' />
                <ListOfMovieCardDesktop title='Disney' type='movie' sort='2' company='2' bypass='Película' />
                <ListOfMovieCardDesktop title='Películas de Quentin Tarantino' type='movie' sort='1' director='1' bypass='Película' />
                <ListOfMovieCardDesktop title='Películas de Wes Anderson' type='movie' sort='1' director='4' bypass='Película' />
                <ListOfMovieCardDesktop title='DreamWorks' type='movie' sort='2' company='4' bypass='Película' />

                <ListOfMovieCardDesktop title='Películas populares' type='movie' sort='2' bypass='Película' />
              </GenresListDesktop>
            </Content>
          </>
        ) : (
          <GenresList type='movie'>
            <HomePortrait type='movie' sort='2' genre='0' bypass='Película' />

            <ListOfMovieCard title='Películas nuevas y populares' type='movie' sort='1' bypass='Película' />
            <ListOfMovieCard title='Películas de mayor recaudación' type='movie' sort='4' bypass='Película' />
            <ListOfCollection id='10' type='movie' bypass='Película' />

            <ListOfMovieCard title='Pixar' type='movie' sort='2' company='3' bypass='Película' />
            <ListOfMovieCard title='Películas de Steven Spielberg' type='movie' sort='1' director='2' bypass='Película' />
            <ListOfTrending type='movie' title='10 películas más populares hoy' />

            <ListOfMovieCard title='Studio Ghibli' type='movie' sort='2' company='1' bypass='Película' />
            <ListOfMovieCard title='Disney' type='movie' sort='2' company='2' bypass='Película' />
            <ListOfMovieCard title='Películas de Quentin Tarantino' type='movie' sort='1' director='1' bypass='Película' />
            <ListOfMovieCard title='Películas de Wes Anderson' type='movie' sort='1' director='4' bypass='Película' />
            <ListOfMovieCard title='DreamWorks' type='movie' sort='2' company='4' bypass='Película' />
            <ListOfCollection id='119' type='movie' bypass='Película' />
            <ListOfCollection id='1241' type='movie' bypass='Película' />

            <ListOfMovieCard title='Películas populares' type='movie' sort='2' bypass='Película' />
            <ListOfCollection id='86311' type='movie' bypass='Película' />
            <ListOfCollection id='84' type='movie' bypass='Película' />

          </GenresList>
        )
      }

    </div>
  );
};
