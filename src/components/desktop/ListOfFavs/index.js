import React from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';
import { Link } from 'react-router-dom';
import { BsExclamationSquareFill } from 'react-icons/bs';
import { ListDiv, List, Item, Emptydiv } from './styles';
import { MovieCard } from '../MovieCard';

export const ListOfFavs = () => {

  const favs = reactLocalStorage.getObject('favs');
  console.log(favs);
  return (
    <ListDiv>
      <List>
        {
          Object.entries(favs).length !== 0 ? favs.map((fav) => (
            <Item>
              <Link to={`/detail/${fav.media_type}/${fav.id}`} style={{ textDecoration: 'none', color: 'white' }}>
                <MovieCard {...fav} search={true} />
              </Link>
            </Item>
          )) : (
            <Emptydiv>
              <BsExclamationSquareFill size={72} />
              <h1>¡Ups!</h1>
              <h3>Al parecer no hay nada en Mi Lista</h3>
            </Emptydiv>
          )
        }
      </List>
    </ListDiv>
  );
};
