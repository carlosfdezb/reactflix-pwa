import React from 'react';
import { useMediaQuery } from 'react-responsive';

//mobile
import { HomePortrait } from '../components/mobile/HomePortrait';
import { ListOfMovieCard } from '../components/mobile/ListOfMovieCard';
import { ListOfTrending } from '../components/mobile/ListOfTrending';
import { HomeNavBar } from '../components/mobile/HomeNavBar';

//desktop
import { NavBar } from '../components/desktop/NavBar';
import { Content } from '../components/desktop/NavBar/styles';
import { HomePortrait as HomeDesktop } from '../components/desktop/HomePortrait';
import { ListOfMovieCard as ListOfMovieCardDesktop } from '../components/desktop/ListOfMovieCard';

export const Home = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' });
  return (
    <div onContextMenu={(e) => e.preventDefault()}>
      {
        isDesktopOrLaptop ? (
          <>
            <NavBar />
            <Content>
              <HomeDesktop type='movie' sort='1' genre='0' bypass='Película' />
              <ListOfMovieCardDesktop title='Películas nuevas y populares' type='movie' sort='1' bypass='Película' />
              <ListOfMovieCardDesktop title='Películas populares' type='movie' sort='2' bypass='Película' />
              <ListOfMovieCardDesktop title='Películas de mayor recaudación' type='movie' sort='4' bypass='Película' />
              <ListOfMovieCardDesktop title='Series nuevas y populares' type='tv' sort='1' bypass='Serie' />

              <ListOfMovieCardDesktop title='Series populares' type='tv' sort='2' bypass='Serie' />
              <ListOfMovieCardDesktop title='Studio Ghibli' type='movie' sort='2' company='1' bypass='Película' />
              <ListOfMovieCardDesktop title='Disney' type='movie' sort='2' company='2' bypass='Película' />
              <ListOfMovieCardDesktop title='Películas de Quentin Tarantino' type='movie' sort='1' director='1' bypass='Película' />
              <ListOfMovieCardDesktop title='Películas de Wes Anderson' type='movie' sort='1' director='4' bypass='Película' />
              <ListOfMovieCardDesktop title='DreamWorks' type='movie' sort='2' company='4' bypass='Película' />
            </Content>
          </>
        ) : (
          <>
            <HomeNavBar />
            <HomePortrait type='movie' sort='1' genre='0' bypass='Película' />
            <ListOfMovieCard title='Películas nuevas y populares' type='movie' sort='1' bypass='Película' />
            <ListOfMovieCard title='Películas populares' type='movie' sort='2' bypass='Película' />
            <ListOfMovieCard title='Películas de mayor recaudación' type='movie' sort='4' bypass='Película' />
            <ListOfMovieCard title='Series nuevas y populares' type='tv' sort='1' bypass='Serie' />

            <ListOfTrending type='all' title='10 más populares hoy' />

            <ListOfMovieCard title='Series populares' type='tv' sort='2' bypass='Serie' />
            <ListOfMovieCard title='Studio Ghibli' type='movie' sort='2' company='1' bypass='Película' />
            <ListOfMovieCard title='Disney' type='movie' sort='2' company='2' bypass='Película' />
            <ListOfMovieCard title='Películas de Quentin Tarantino' type='movie' sort='1' director='1' bypass='Película' />
            <ListOfMovieCard title='Películas de Wes Anderson' type='movie' sort='1' director='4' bypass='Película' />
            <ListOfMovieCard title='DreamWorks' type='movie' sort='2' company='4' bypass='Película' />
          </>
        )
      }
    </div>
  );
};
