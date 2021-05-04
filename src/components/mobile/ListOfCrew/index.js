import React, { useEffect, useState } from 'react';
import Font from 'react-font';
import { BASE_URL } from '../../../urls/url';
import { ListDiv, List, Item, Title, MoreCast, FlexButton } from './styles';
import { CrewCard } from '../CrewCard';
import { SkeletonCrew } from '../SkeletonCard';

export const ListOfCrew = ({ type, id }) => {
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(16);

  useEffect(() => {
    setLoading(true);
    window.fetch(`${BASE_URL}getCrew/${type}/${id}`)
      .then((res) => res.json())
      .then((info) => {
        setCast(info[0].cast);
        setCrew(info[0].crew);
        setLoading(false);
      });
  }, []);

  const moreCast = (num) => {
    setFilter(num);
  };

  return (
    <ListDiv>

      <Font family='Hind'><Title>Reparto</Title></Font>
      <List>
        {
          loading ? <SkeletonCrew /> : cast.map((c, index) => index < filter && <Item key={index}><CrewCard {...c} /></Item>)
        }
      </List>
      {
        filter !== cast.length && <FlexButton><MoreCast onClick={() => moreCast(cast.length)}><Font family='Hind'><h4>Ver más</h4></Font></MoreCast></FlexButton>
      }
      <Font family='Hind'><Title>Producción</Title></Font>
      <List>
        {
          loading ? <SkeletonCrew /> : crew.map((cr, index) => (cr.job === 'Director' ||
        cr.job === 'Writer' ||
        cr.job === 'Producer' ||
        cr.job === 'Editor' ||
        cr.job === 'Series Director' ||
        cr.job === 'Original Music Composer') &&
        <Item key={index}><CrewCard {...cr} /></Item>)
        }
      </List>
    </ListDiv>
  );
};
