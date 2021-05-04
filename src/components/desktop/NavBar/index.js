import React, { useState, useEffect } from 'react';
import { SiReact } from 'react-icons/si';
import { NavLink } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { NavBox, ContainerDiv, ItemDiv, NavBoxFix, LeftDivAnim, RightSearch } from './styles';

export const NavBar = ({ detail = true }) => {
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = (event) => {
      const newShowFixed = window.scrollY > 50;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };
    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [showFixed]);

  return (
    <ContainerDiv>
      {
        showFixed ? (
          <NavBoxFix>
            <LeftDivAnim>
              <SiReact size={55} color='white' />
            </LeftDivAnim>
            <ItemDiv>
              <NavLink
                to='/'
                style={{
                  color: 'white', textDecoration: 'none' }}
                activeStyle={{
                  fontSize: '1.1em',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                <h4>Inicio</h4>
              </NavLink>
            </ItemDiv>
            <ItemDiv>
              <NavLink
                to='/movies'
                style={{
                  color: 'white', textDecoration: 'none' }}
                activeStyle={{
                  fontSize: '1.1em',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                <h4>Películas</h4>
              </NavLink>
            </ItemDiv>
            <ItemDiv>
              <NavLink
                to='/series'
                style={{
                  color: 'white', textDecoration: 'none' }}
                activeStyle={{
                  fontSize: '1.1em',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                <h4>Series</h4>
              </NavLink>
            </ItemDiv>
            <ItemDiv>
              <NavLink
                to='/mylist'
                style={{
                  color: 'white', textDecoration: 'none' }}
                activeStyle={{
                  fontSize: '1.1em',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                <h4>Mi lista</h4>
              </NavLink>
            </ItemDiv>
            {
              detail && (
                <RightSearch>
                  <ItemDiv>
                    <NavLink
                      to='/search'
                      style={{
                        color: 'white', textDecoration: 'none' }}
                      activeStyle={{
                        fontSize: '1.1em',
                        fontWeight: 'bold',
                        color: 'white',
                      }}
                    >
                      <FiSearch size={24} color='white' />
                    </NavLink>
                  </ItemDiv>
                </RightSearch>
              )
            }

          </NavBoxFix>
        ) : (
          <NavBox>
            <LeftDivAnim>
              <SiReact size={55} color='white' />
            </LeftDivAnim>
            <ItemDiv>
              <NavLink
                to='/'
                style={{
                  color: 'white', textDecoration: 'none' }}
                activeStyle={{
                  fontSize: '1.1em',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                <h4>Inicio</h4>
              </NavLink>
            </ItemDiv>
            <ItemDiv>
              <NavLink
                to='/movies'
                style={{
                  color: 'white', textDecoration: 'none' }}
                activeStyle={{
                  fontSize: '1.1em',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                <h4>Películas</h4>
              </NavLink>
            </ItemDiv>
            <ItemDiv>
              <NavLink
                to='/series'
                style={{
                  color: 'white', textDecoration: 'none' }}
                activeStyle={{
                  fontSize: '1.1em',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                <h4>Series</h4>
              </NavLink>
            </ItemDiv>
            <ItemDiv>
              <NavLink
                to='/mylist'
                style={{
                  color: 'white', textDecoration: 'none' }}
                activeStyle={{
                  fontSize: '1.1em',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                <h4>Mi lista</h4>
              </NavLink>
            </ItemDiv>
            {
              detail && (
                <RightSearch>
                  <ItemDiv>
                    <NavLink
                      to='/search'
                      style={{
                        color: 'white', textDecoration: 'none' }}
                      activeStyle={{
                        fontSize: '1.1em',
                        fontWeight: 'bold',
                        color: 'white',
                      }}
                    >
                      <FiSearch size={24} color='white' />
                    </NavLink>
                  </ItemDiv>
                </RightSearch>
              )
            }
          </NavBox>
        )
      }
    </ContainerDiv>
  );
};

export const DetailNavBar = ({ type, id }) => {
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = (event) => {
      const newShowFixed = window.scrollY > 50;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };
    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [showFixed]);

  return (
    <ContainerDiv>
      {
        showFixed ? (
          <NavBoxFix>
            <LeftDivAnim>
              <SiReact size={55} color='white' />
            </LeftDivAnim>
            <ItemDiv>
              <NavLink
                to='/'
                style={{
                  color: 'white', textDecoration: 'none' }}
                activeStyle={{
                  fontSize: '1.1em',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                <h4>Inicio</h4>
              </NavLink>
            </ItemDiv>
            <ItemDiv>
              <NavLink
                to={`/detail/${type}/${id}`}
                style={{
                  color: 'white', textDecoration: 'none' }}
                activeStyle={{
                  fontSize: '1.1em',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                <h4>Detalle</h4>
              </NavLink>
            </ItemDiv>
            <ItemDiv>
              <NavLink
                to={`/crew/${type}/${id}`}
                style={{
                  color: 'white', textDecoration: 'none' }}
                activeStyle={{
                  fontSize: '1.1em',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                <h4>Elenco</h4>
              </NavLink>
            </ItemDiv>
            <ItemDiv>
              <NavLink
                to={`/related/${type}/${id}`}
                style={{
                  color: 'white', textDecoration: 'none' }}
                activeStyle={{
                  fontSize: '1.1em',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                <h4>Similares</h4>
              </NavLink>
            </ItemDiv>

          </NavBoxFix>
        ) : (
          <NavBox>
            <LeftDivAnim>
              <SiReact size={55} color='white' />
            </LeftDivAnim>
            <ItemDiv>
              <NavLink
                to='/'
                style={{
                  color: 'white', textDecoration: 'none' }}
                activeStyle={{
                  fontSize: '1.1em',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                <h4>Inicio</h4>
              </NavLink>
            </ItemDiv>
            <ItemDiv>
              <NavLink
                to={`/detail/${type}/${id}`}
                style={{
                  color: 'white', textDecoration: 'none' }}
                activeStyle={{
                  fontSize: '1.1em',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                <h4>Detalle</h4>
              </NavLink>
            </ItemDiv>
            <ItemDiv>
              <NavLink
                to={`/crew/${type}/${id}`}
                style={{
                  color: 'white', textDecoration: 'none' }}
                activeStyle={{
                  fontSize: '1.1em',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                <h4>Elenco</h4>
              </NavLink>
            </ItemDiv>
            <ItemDiv>
              <NavLink
                to={`/related/${type}/${id}`}
                style={{
                  color: 'white', textDecoration: 'none' }}
                activeStyle={{
                  fontSize: '1.1em',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                <h4>Similares</h4>
              </NavLink>
            </ItemDiv>
          </NavBox>
        )
      }
    </ContainerDiv>
  );
};
