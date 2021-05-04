/* eslint-disable camelcase */
import React, { useState, Fragment } from 'react';
import Font from 'react-font';
import { Link } from 'react-router-dom';
import { IoIosAdd, IoMdCheckmark, IoMdTrash } from 'react-icons/io';
import { reactLocalStorage } from 'reactjs-localstorage';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import {
  Menu,
  Item,
  useContextMenu,
  theme,
} from 'react-contexify';
import { CgDetailsMore } from 'react-icons/cg';
import { Container, CardDiv, DetailDiv, BackgroundDiv, InfoDiv, Description,
  SmallData, NoteDiv, NoteIn, NoteFont, ButtonDiv, FavButton } from './styles';
import { IMG } from '../../../urls/url';
import { LoadButton } from '../../mobile/LoadButton';
import 'react-contexify/dist/ReactContexify.css';

export const MovieCard = ({ id, type, backdrop, backdrop_path, title, name,
  original_title, original_name, overview, first_air_date, release_date, vote_average, media_type, runtime, seasons, poster_path, search }) => {
  const [view, setView] = useState(false);
  const [isFav, setIsFav] = useState(false);

  const handleCard = () => {
    setView(!view);

  };

  const { show } = useContextMenu({
    id,
  });

  function displayMenu(e) {
  // put whatever custom logic you need
  // you can even decide to not display the Menu
    show(e);
  }

  //Agregar a favoritos
  const setFav = (id, type, poster_path) => {
    let fav = [];
    JSON.stringify(reactLocalStorage.getObject('favs')) !== '{}' ? fav = reactLocalStorage.getObject('favs') : fav = [];
    fav.push({
      id: id || null,
      media_type: type || null,
      poster_path: poster_path || null,
    });
    reactLocalStorage.setObject('favs', fav);
    setIsFav(!isFav);
    toast.dark('Agregado a mi lista', { hideProgressBar: false });
  };

  //Eliminar de favoritos
  const delFav = (id) => {
    let fav = reactLocalStorage.getObject('favs');
    const index = fav.findIndex((x) => x.id === id);
    fav.splice(index, 1);
    reactLocalStorage.setObject('favs', fav);
    setIsFav(!isFav);
    toast.dark('Eliminado de mi lista', { hideProgressBar: false });
  };

  const favs = reactLocalStorage.getObject('favs');
  return (
    <Container onContextMenu={displayMenu}>
      {
        view ? (
          <DetailDiv onMouseLeave={() => setTimeout(handleCard(), 500)} search={search}>
            <BackgroundDiv src={backdrop_path && IMG + backdrop_path} />
            <InfoDiv>
              <Font family='Roboto'><h2>{title || name}</h2></Font>
              <SmallData>
                <Font family='Raleway'>
                  {
                    vote_average > 6.9 && <NoteDiv color='forestgreen'><NoteIn><NoteFont>{vote_average * 10}</NoteFont></NoteIn></NoteDiv>
                  }
                  {
                    (vote_average > 4.9 && vote_average < 7) && <NoteDiv color='gold'><NoteIn><NoteFont>{vote_average * 10}</NoteFont></NoteIn></NoteDiv>
                  }
                  {
                    (vote_average > 0 && vote_average < 5) && <NoteDiv color='crimson'><NoteIn><NoteFont>{vote_average * 10}</NoteFont></NoteIn></NoteDiv>
                  }
                </Font>
                {
                  release_date && (
                    <>
                      <Font family='Raleway'>
                        <p>{release_date.split('-')[0]}</p>
                      </Font>
                    </>
                  )
                }
                {
                  first_air_date && (
                    <>
                      <Font family='Raleway'>
                        <p>{first_air_date.split('-')[0]}</p>
                      </Font>
                    </>
                  )
                }

              </SmallData>
              <Description>{overview}</Description>
              <ButtonDiv>
                <LoadButton
                  title={(title || name) || (original_title || original_name)}
                  original={original_title || original_name}
                  first_air_date={first_air_date}
                  release_date={release_date}
                  type={type}
                  id={id}
                />
                {
                  Object.entries(favs).length !== 0 && favs.find((fav) => fav.id === id) ? (
                    <FavButton>
                      <IoMdCheckmark size={32} onClick={() => delFav(id)} color='black' />
                    </FavButton>
                  ) : (
                    <FavButton>
                      <IoIosAdd size={40} onClick={() => setFav(id, type, poster_path)} color='black' />
                    </FavButton>
                  )
                }
              </ButtonDiv>
            </InfoDiv>
            <ToastContainer closeButton={false} position='bottom-right' />
          </DetailDiv>
        ) :
          backdrop && backdrop.file_path ? <CardDiv src={IMG + backdrop.file_path} onClick={() => handleCard()} /> :
            search && poster_path && (
              <Link to={`/detail/${type || media_type}/${id}`} style={{ textDecoration: 'none', color: 'white' }}>
                <CardDiv src={IMG + poster_path} search={search} />
              </Link>
            )
      }
      <Menu id={id} theme={theme.dark}>
        <Link to={`/detail/${type || media_type}/${id}`} style={{ textDecoration: 'none', color: 'white' }}>
          <Item>
            <CgDetailsMore size={24} />
            <p style={{ marginLeft: '5px' }}>Detalles</p>
          </Item>
        </Link>

        {
          Object.entries(favs).length !== 0 && favs.find((fav) => fav.id === id) ? (
            <Item onClick={() => delFav(id)}>
              <IoMdTrash size={24} />
              <p style={{ marginLeft: '5px' }}>Eliminar de mi lista</p>

            </Item>
          ) : (
            <Item onClick={() => setFav(id, type, poster_path)}>
              <IoIosAdd size={24} />
              <p style={{ marginLeft: '5px' }}>Agregar a mi lista</p>

            </Item>
          )
        }

      </Menu>
    </Container>
  );
};
