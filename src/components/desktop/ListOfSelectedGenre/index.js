import React, { useEffect, useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import Font from 'react-font';
import { BASE_URL } from '../../../urls/url';
import { ListDiv, List, Item, Title } from './styles';
import { MovieCard } from '../MovieCard';
import { SkeletonMovieDesktop } from '../../mobile/SkeletonCard';

export const ListOfSelectedGenre = ({ id, type, title, bypass }) => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.fetch(`${BASE_URL}getByGenresDesktop/${type}/${id}`)
      .then((res) => res.json())
      .then((info) => {
        setInfo(info);
        setLoading(false);
      });
  }, [id]);
  console.log(`${BASE_URL}getByGenresDesktop/${type}/${id}`);
  return (
    <ListDiv>
      <Font family='Roboto'><Title>{title}</Title></Font>
      <ScrollContainer style={{ display: 'flex', listStyleType: 'none' }}>
        {
          loading ? <SkeletonMovieDesktop /> : info && info.map((movie, index) => <Item key={index}><MovieCard {...movie} type={type} /></Item>)
        }
      </ScrollContainer>
    </ListDiv>
  );
};
