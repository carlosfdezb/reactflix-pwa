import React, { useState, useEffect } from 'react';
import Font from 'react-font';
import { BASE_URL } from '../../../urls/url';
import { ListDiv, Title, List, Item, GradientDiv } from './styles';
import { MovieCardBig } from '../MovieCardBig';
import { DetailCard } from '../DetailCard';

export const ListOfMovieCardBig = ({ url, title, type }) => {
  const [info, setInfo] = useState([]);
  const [data, setData] = useState([]);
  const [view, setView] = useState(false);
  const [key, setKey] = useState('');

  useEffect(() => {
    window.fetch(`${BASE_URL}${url}`)
      .then((res) => res.json())
      .then((info) => {
        setInfo(info.result);
      });
  }, []);

  const changeState = (data, key) => {
    setView(!view);
    setData(data);
    setKey(key);
  };

  const changeView = () => {
    setView(!view);;
  };
  return (
    <>
      <ListDiv>
        <Font family='Nunito'>
          <Title>{title}</Title>
        </Font>
        <List>
          {
            info && info.map((movie, index) => (
              <Item key={index} onClick={() => changeState(movie, movie.id)}>
                <MovieCardBig {...movie} />
              </Item>
            ))
          }
        </List>
      </ListDiv>
      {
        view && (
          <>
            <GradientDiv onClick={() => changeView()} />
            <DetailCard {...data} key={key} type={type} />
          </>
        )
      }
    </>
  );
};
