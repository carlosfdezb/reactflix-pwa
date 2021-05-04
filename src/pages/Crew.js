import React from 'react';
import { useParams } from 'react-router-dom';

//mobile
import { DetailNavBar } from '../components/mobile/HomeNavBar';
import { ListOfCrew } from '../components/mobile/ListOfCrew';

//desktop

export const Crew = () => {
  let { type, id } = useParams();
  return (
    <div>
      <DetailNavBar id={id} type={type} />
      <ListOfCrew id={id} type={type} />
    </div>
  );
};
