import React, { useState, useEffect } from 'react';
import { ListDiv, List, Item, GradientDiv, LabelDiv } from './styles';
import { BASE_URL } from '../../../urls/url';
import { MostSearchCard } from '../MostSearchCard';
import { DetailCard } from '../DetailCard';

export const ListOfMostSearch = () => {
  const [info, setInfo] = useState([]);
  const [data, setData] = useState([]);
  const [view, setView] = useState(false);
  const [key, setKey] = useState('');
  const [type, setType] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.fetch(`${BASE_URL}getTrending/all`)
      .then((res) => res.json())
      .then((info) => {
        setInfo(info);
        setLoading(false);
      });
  }, []);

  const changeState = (data, key, type) => {
    setView(!view);
    setData(data);
    setKey(key);
    setType(type);
  };

  const changeView = () => {
    setView(!view);;
  };
  return (
    <>
      <ListDiv>
        <LabelDiv><p>Los más buscados</p></LabelDiv>
        <List>
          {
            !loading && info && info.map((movie, index) => (
              <Item key={index} onClick={() => changeState(movie, movie.id, movie.media_type)}>
                <MostSearchCard {...movie} />
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
