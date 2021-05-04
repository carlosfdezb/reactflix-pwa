/* eslint-disable camelcase */
import React, { useState } from 'react';
import Font from 'react-font';
import { IoIosAdd, IoMdCheckmark } from 'react-icons/io';
import { reactLocalStorage } from 'reactjs-localstorage';
import { ToastContainer, toast } from 'material-react-toastify';
import { BoxDiv, BackgroundDiv, DataDiv, Logo, Description, NotLogo, Porcentaje, Year, FlexDiv, Type, ButtonDiv, FavButton } from './styles';
import { IMG } from '../../../urls/url';
import { LoadButton } from '../../mobile/LoadButton';
import 'material-react-toastify/dist/ReactToastify.css';

export const PortraitCard = ({ id, title, name, original_title, original_name, backdrop_path, logo, overview,
  vote_average, release_date, media_type, first_air_date, poster_path }) => {

  const [isFav, setIsFav] = useState(false);

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
    <BoxDiv onContextMenu={(e) => e.preventDefault()}>
      <BackgroundDiv img={IMG + backdrop_path} />
      <DataDiv>
        {
          logo ? <Logo src={logo} /> : <NotLogo>{title || name}</NotLogo>
        }
        <FlexDiv>
          <Font family='Roboto'>
            <Porcentaje>
              {vote_average * 10}
              {' % para ti  '}
            </Porcentaje>
          </Font>
          {
            release_date && (
              <Font family='Roboto'>
                <Year>
                  {release_date.split('-')[0]}
                  {' '}
                </Year>
              </Font>
            )
          }
          <Type>
            <Font family='Roboto'>
              {media_type === 'movie' ? 'Película' : 'Serie'}
            </Font>
          </Type>

        </FlexDiv>
        <Font family='Roboto'>
          <Description>{overview}</Description>
        </Font>

        <ButtonDiv>
          <LoadButton
            title={(title || name) || (original_title || original_name)}
            original={original_title || original_name}
            first_air_date={first_air_date}
            release_date={release_date}
            type={media_type}
            id={id}
            desktop={true}
          />
          {
            Object.entries(favs).length !== 0 && favs.find((fav) => fav.id === id) ? (
              <FavButton>
                <IoMdCheckmark size={32} onClick={() => delFav(id)} color='black' />
              </FavButton>
            ) : (
              <FavButton>
                <IoIosAdd size={40} onClick={() => setFav(id, media_type, poster_path)} color='black' />
              </FavButton>
            )
          }
        </ButtonDiv>
      </DataDiv>
      <ToastContainer closeButton={false} position='top-right' />
    </BoxDiv>
  );
};
