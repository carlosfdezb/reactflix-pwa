import React, { useState, useEffect } from 'react';
import Font from 'react-font';
import { BASE_URL } from '../../../urls/url';
import { ListDiv, Title, List, Item, GradientDiv } from './styles';
import { MovieCard } from '../MovieCard';
import { DetailCard } from '../DetailCard';
import { SkeletonMovie } from '../SkeletonCard';

export const ListOfMovieCard = ({ title, type, sort, genre = '0', company = '0', director = '0', bypass }) => {
  const [info, setInfo] = useState([]);
  const [data, setData] = useState([]);
  const [view, setView] = useState(false);
  const [key, setKey] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.fetch(`${BASE_URL}getListMovie/${type}/${sort}/${genre}/${company}/${director}`)
      .then((res) => res.json())
      .then((info) => {
        setInfo(info[0]);
        setLoading(false);
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
            loading ? <SkeletonMovie /> : info.map((movie, index) => (

              <Item key={index} onClick={() => changeState(movie, movie.id, movie.media_type)}>
                <MovieCard {...movie} bypass={true} />
              </Item>

            ))
          }
        </List>

      </ListDiv>
      {
        view && (
          <>
            <GradientDiv onClick={() => changeView()} />
            <DetailCard {...data} key={key} type={type} bypass={bypass} />
          </>
        )
      }
    </>
  );
};
