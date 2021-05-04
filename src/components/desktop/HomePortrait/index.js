import React, { useEffect, useState } from 'react';
import { PortraitCard } from '../PortraitCard';
import { BASE_URL } from '../../../urls/url';
import { SkeletonPortraitDesktop } from '../../mobile/SkeletonCard';

export const HomePortrait = ({ type, sort, genre, bypass }) => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.fetch(`${BASE_URL}getHeaderMovies/${type}/${sort}/${genre}`)
      .then((res) => res.json())
      .then((info) => {
        setInfo(info);
        setLoading(false);
      });
  }, [genre]);

  return (
    <>
      {
        loading ? <SkeletonPortraitDesktop /> : info && info.map((movie) => <PortraitCard {...movie} key={movie.id} />)
      }
    </>
  );
};
