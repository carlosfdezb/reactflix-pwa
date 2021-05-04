import React, { useState, useEffect } from 'react';
import Font from 'react-font';
import { BASE_URL } from '../../../urls/url';
import { ListDiv, Title, List, Item, GradientDiv, FlexDiv, AbsoluteDiv, FontNumber } from './styles';
import { MovieCard } from '../MovieCard';
import { DetailCard } from '../DetailCard';
import { SkeletonMovie } from '../SkeletonCard';

export const ListOfTrending = ({ title, type, bypass }) => {
  const [info, setInfo] = useState([]);
  const [data, setData] = useState([]);
  const [view, setView] = useState(false);
  const [media, setMedia] = useState('');
  const [key, setKey] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.fetch(`${BASE_URL}getTrending/${type}`)
      .then((res) => res.json())
      .then((info) => {
        setInfo(info);
        setLoading(false);
      });
  }, []);

  const changeState = (data, key, media) => {
    setView(!view);
    setData(data);
    setKey(key);
    setMedia(media);
  };

  const changeView = () => {
    setView(!view);
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
                <FlexDiv position={movie.index}>
                  <MovieCard {...movie} />
                  <AbsoluteDiv ten={movie.index}>
                    <Font family='Cairo'>
                      <FontNumber>{movie.index}</FontNumber>
                    </Font>
                  </AbsoluteDiv>
                </FlexDiv>
              </Item>

            ))
          }
        </List>

      </ListDiv>
      {
        view && (
          <>
            <GradientDiv onClick={() => changeView()} />
            <DetailCard {...data} key={key} type={media} />
          </>
        )
      }
    </>
  );
};
