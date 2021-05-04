import React from 'react';
import { useMediaQuery } from 'react-responsive';

//mobile
import { PageNavBar } from '../components/mobile/HomeNavBar';
import { ListOfFavs } from '../components/mobile/ListOfFavs';

//desktop
import { NavBar } from '../components/desktop/NavBar';
import { Content } from '../components/desktop/NavBar/styles';
import { ListOfFavs as ListOfFavsDesktop } from '../components/desktop/ListOfFavs';

export const MyList = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' });
  return (
    <div>
      {
        isDesktopOrLaptop ? (
          <>
            <NavBar />
            <Content><ListOfFavsDesktop /></Content>
          </>
        ) : (
          <>
            <PageNavBar title='Mi lista' />
            <ListOfFavs />
          </>
        )
      }
    </div>
  );
};
