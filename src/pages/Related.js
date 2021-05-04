import React from 'react';
import { useParams } from 'react-router-dom';
import { DetailNavBar } from '../components/mobile/HomeNavBar';
import { RelatedCard } from '../components/mobile/RelatedCard';

export const Related = () => {
  let { type, id } = useParams();
  return (
    <div>
      <DetailNavBar id={id} type={type} />
      <RelatedCard id={id} type={type} />
    </div>
  );
};
