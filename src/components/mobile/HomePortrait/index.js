import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../../urls/url';
import { PortraitCard } from '../PortraitCard';
import { SkeletonPortrait } from '../SkeletonCard';

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
        loading ? (
          <SkeletonPortrait />
        ) : (
          <>

            {
              info && info.map((premiere, index) => <PortraitCard {...premiere} key={index} bypass={bypass} />)
            }

          </>
        )
      }
    </>
  );
};
