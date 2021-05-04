import React, { useEffect, useState } from 'react';
import Font from 'react-font';
import ScrollContainer from 'react-indiana-drag-scroll';
import { BASE_URL } from '../../../urls/url';
import { ListDiv, List, Item, Title, MoreCast, FlexButton } from './styles';
import { CrewCard } from '../CrewCard';
import { SkeletonCrew } from '../../mobile/SkeletonCard';

export const ListOfCrew = ({ type, id }) => {
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <ListDiv>

      {
        cast.length > 0 && (
          <>
            <Font family='Hind'><Title>Reparto</Title></Font>
            <ScrollContainer style={{ display: 'flex', listStyleType: 'none' }}>
              {
                loading ? <SkeletonCrew /> : cast.map((c, index) => <Item key={index}><CrewCard {...c} /></Item>)
              }
            </ScrollContainer>
          </>
        )
      }
      {
        crew.length > 0 && (
          <>
            <Font family='Hind'><Title>Producción</Title></Font>
            <ScrollContainer style={{ display: 'flex', listStyleType: 'none' }}>
              {
                loading ? <SkeletonCrew /> : crew.map((cr, index) => <Item key={index}><CrewCard {...cr} /></Item>)
              }
            </ScrollContainer>
          </>
        )
      }
    </ListDiv>
  );
};
