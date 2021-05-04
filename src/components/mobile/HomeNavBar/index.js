/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import Font from 'react-font';
import { IoMdSearch, IoMdArrowBack, IoIosAdd, IoIosHome } from 'react-icons/io';
import { Link, useHistory } from 'react-router-dom';
import { SiReact } from 'react-icons/si';
import { LinkTo, NormalDiv, NormalNav, TopNav, RightDiv, FixedNav, ItemNavText, BackNav, LeftDiv, LeftDivAnim, TitlePage } from './styles';

export const HomeNavBar = () => {
  const [showFixed, setShowFixed] = useState(false);
  useEffect(() => {
    const onScroll = (event) => {
      const newShowFixed = window.scrollY > 75;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };
    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [showFixed]);
  return (
    <>
      {
        showFixed ? (
          <Font family='Titillium Web'>
            <FixedNav>
              <Link to='series' style={{ textDecoration: 'none', color: 'white' }}>
                <ItemNavText>Series</ItemNavText>
              </Link>
              <Link to='movies' style={{ textDecoration: 'none', color: 'white' }}>
                <ItemNavText>Películas</ItemNavText>
              </Link>
              <Link to='mylist' style={{ textDecoration: 'none', color: 'white' }}>
                <ItemNavText>Mi lista</ItemNavText>
              </Link>
            </FixedNav>
          </Font>

        ) : (
          <NormalDiv>
            <TopNav>
              <LeftDivAnim>
                <SiReact size={35} color='white' />
              </LeftDivAnim>
              <RightDiv>
                <Link to='/search' style={{ textDecoration: 'none', color: 'white' }}>
                  <IoMdSearch size={30} />
                </Link>
              </RightDiv>
            </TopNav>
            <Font family='Titillium Web'>
              <NormalNav>
                <Link to='series' style={{ textDecoration: 'none', color: 'white' }}>
                  <ItemNavText>Series</ItemNavText>
                </Link>
                <Link to='movies' style={{ textDecoration: 'none', color: 'white' }}>
                  <ItemNavText>Películas</ItemNavText>
                </Link>
                <Link to='mylist' style={{ textDecoration: 'none', color: 'white' }}>
                  <ItemNavText>Mi lista</ItemNavText>
                </Link>
              </NormalNav>
            </Font>
          </NormalDiv>
        )
      }
    </>
  );
};

export const DetailNavBar = ({ id, type }) => {
  const [showFixed, setShowFixed] = useState(false);
  useEffect(() => {
    const onScroll = (event) => {
      const newShowFixed = window.scrollY > 75;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };
    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [showFixed]);

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      {
        showFixed ? (
          <Font family='Titillium Web'>
            <FixedNav>
              <LinkTo to={`/crew/${type}/${id}`} style={{ textDecoration: 'none', color: 'white' }}>
                <ItemNavText>Reparto</ItemNavText>
              </LinkTo>
              <LinkTo to={`/detail/${type}/${id}`} style={{ textDecoration: 'none', color: 'white' }}>
                <ItemNavText>Ver</ItemNavText>
              </LinkTo>

              <LinkTo to={`/related/${type}/${id}`} style={{ textDecoration: 'none', color: 'white' }}>
                <ItemNavText>Más</ItemNavText>
              </LinkTo>
            </FixedNav>
          </Font>

        ) : (
          <NormalDiv>
            <TopNav>
              <LeftDiv><IoMdArrowBack size={30} onClick={goBack} /></LeftDiv>
              <RightDiv>
                <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                  <IoIosHome size={26} />
                </Link>

              </RightDiv>
            </TopNav>
            <Font family='Titillium Web'>
              <NormalNav>

                <LinkTo to={`/crew/${type}/${id}`} style={{ textDecoration: 'none', color: 'white' }}>
                  <ItemNavText>Reparto</ItemNavText>
                </LinkTo>
                <LinkTo to={`/detail/${type}/${id}`} style={{ textDecoration: 'none', color: 'white' }}>
                  <ItemNavText>Ver</ItemNavText>
                </LinkTo>

                <LinkTo to={`/related/${type}/${id}`} style={{ textDecoration: 'none', color: 'white' }}>
                  <ItemNavText>Más</ItemNavText>
                </LinkTo>
              </NormalNav>
            </Font>
          </NormalDiv>
        )
      }
    </>
  );
};

export const BackNavBar = ({ type, player, media_type, id }) => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <BackNav>
      {
        type !== true ? <LeftDiv><IoMdArrowBack size={30} onClick={goBack} /></LeftDiv> : <LeftDiv><IoMdArrowBack size={30} onClick={goBack} /></LeftDiv>
      }
      <RightDiv>
        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
          <IoIosHome size={26} />
        </Link>

      </RightDiv>
    </BackNav>
  );
};

export const SeasonNavBar = () => {
  const [showFixed, setShowFixed] = useState(false);
  useEffect(() => {
    const onScroll = (event) => {
      const newShowFixed = window.scrollY > 75;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };
    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [showFixed]);

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      <NormalDiv>
        <TopNav>
          <LeftDiv><IoMdArrowBack size={30} onClick={goBack} /></LeftDiv>
          <RightDiv>
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
              <IoIosHome size={26} />
            </Link>
          </RightDiv>
        </TopNav>
      </NormalDiv>
    </>
  );
};;

export const PageNavBar = ({ title, children }) => {

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <NormalDiv>
      <TopNav>
        <LeftDiv>
          <IoMdArrowBack size={30} onClick={goBack} />
          <Font family='Hind'><TitlePage>{title}</TitlePage></Font>
        </LeftDiv>
        <RightDiv>
          <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
            <IoIosHome size={26} />
          </Link>

        </RightDiv>
      </TopNav>

    </NormalDiv>
  );
};
