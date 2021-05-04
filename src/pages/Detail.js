import React from 'react';
import { useMediaQuery } from 'react-responsive';

//mobile
import { useParams } from 'react-router-dom';
import { FetchDetail } from '../components/mobile/FetchDetail';
import { DetailNavBar } from '../components/mobile/HomeNavBar';

//desktop
import { NavBar } from '../components/desktop/NavBar';
import { Content } from '../components/desktop/NavBar/styles';
import { FetchDetail as FetchDetailDesktop } from '../components/desktop/FetchDetail';

export const Detail = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' });
  let { type, id } = useParams();
  return (
    <div>
      {
        isDesktopOrLaptop ? (
          <>
            <NavBar detail={false} />
            <Content>
              <FetchDetailDesktop id={id} type={type} />
            </Content>
          </>
        ) : (
          <>
            <DetailNavBar id={id} type={type} addButton={true} />
            <FetchDetail id={id} type={type} />
          </>
        )
      }
    </div>
  );
};
