import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../../urls/url';
import { DataDetailCard } from '../DataDetailCard';

export const FetchDetail = ({ type, id }) => {
  const [info, setInfo] = useState([]);

  console.log(info);
  useEffect(() => {
    window.fetch(`${BASE_URL}getMovie/${type}/${id}`)
      .then((res) => res.json())
      .then((info) => {
        setInfo(info.result);
      });
  }, []);
  return (
    <div>
      {
        info && info.map((data, index) => <DataDetailCard {...data} type={type} key={index} />)
      }
    </div>
  );
};
