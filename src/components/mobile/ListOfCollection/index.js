import React, { useState, useEffect } from 'react';
import Font from 'react-font';
import { BASE_URL, IMG } from '../../../urls/url';
import { ListDiv, Title, List, Item, GradientDiv, GradientPosterTop, Box } from './styles';
import { MovieCard } from '../MovieCard';
import { DetailCard } from '../DetailCard';
import { SkeletonMovie } from '../SkeletonCard';

export const ListOfCollection = ({ id, type, bypass }) => {
  const [info, setInfo] = useState([]);
  const [data, setData] = useState([]);
  const [view, setView] = useState(false);
  const [key, setKey] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.fetch(`${BASE_URL}getCollection/${id}`)
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
      <ListDiv image={IMG + info.backdrop_path}>
        <GradientPosterTop />
        <Font family='Nunito'>
          <Title>{info.name}</Title>
        </Font>
        <List>
          {
            loading ? <SkeletonMovie /> : info.parts && info.parts.map((movie, index) => (

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
