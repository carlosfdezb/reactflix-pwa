import React from 'react';
import { useMediaQuery } from 'react-responsive';

//mobile
import { BackNavBar } from '../components/mobile/HomeNavBar';
import SearchCard from '../components/mobile/SearchCard';
import { ListOfMostSearch } from '../components/mobile/ListOfMostSearch';

//desktop
import SearchCardDesktop from '../components/desktop/SearchCard';

export const Search = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' });
  return (
    <div>
      {
        isDesktopOrLaptop ? (
          <>
            <BackNavBar type={false} />
            <SearchCardDesktop />
          </>
        ) : (
          <>
            <BackNavBar type={false} />
            <SearchCard>
              <ListOfMostSearch />
            </SearchCard>
          </>
        )
      }
    </div>
  );
};
