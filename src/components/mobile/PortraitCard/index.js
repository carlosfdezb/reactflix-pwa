/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import Font from 'react-font';
import { AiOutlinePlus, AiOutlineInfoCircle } from 'react-icons/ai';
import { IoMdCheckmark } from 'react-icons/io';
import { reactLocalStorage } from 'reactjs-localstorage';
import { ToastContainer, toast } from 'material-react-toastify';
import { Div, BoxDiv,
  ImageBackground, ImageGradient, Logo, Footer, DivButton,
  AddDiv, InfoDiv, ButtonFont, NotLogo, GradientDiv } from './styles';
import { DetailCard } from '../DetailCard';
import { LoadButton } from '../LoadButton';
import { IMG } from '../../../urls/url';import 'material-react-toastify/dist/ReactToastify.css';

export const PortraitCard = ({ id, title, original_title, original_name, name, logo, backdrop_path,
  overview, poster_path, release_date, duration, media_type, bypass, first_air_date }) => {
  const [data, setData] = useState([]);
  const [view, setView] = useState(false);
  const [isFav, setIsFav] = useState(false);

  const changeState = (id, title, overview, poster_path, release_date, duration) => {
    setView(!view);
    setData({ id, overview, poster_path, release_date, title, duration });
  };

  const changeView = () => {
    setView(!view);
  };

  //Agregar a favoritos
  const setFav = (id, type) => {
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
    <>
      <Div>
        <BoxDiv>
          <ImageBackground img={IMG + backdrop_path}>
            <ImageGradient />

          </ImageBackground>
          {
            logo ? <Logo src={logo} /> : <NotLogo>{title || name}</NotLogo>
          }
        </BoxDiv>
        <Footer>
          {
            Object.entries(favs).length !== 0 && favs.find((fav) => fav.id === id) ? (
              <AddDiv onClick={() => delFav(id)}>
                <IoMdCheckmark size={20} />
                <Font family='Hind'><ButtonFont>Añadido</ButtonFont></Font>
              </AddDiv>
            ) : (
              <AddDiv onClick={() => setFav(id, media_type, poster_path)}>
                <AiOutlinePlus size={20} />
                <Font family='Hind'><ButtonFont>Mi lista</ButtonFont></Font>
              </AddDiv>
            )
          }
          <DivButton>
            <LoadButton
              title={(title || name) || (original_title || original_name)}
              original={original_name || original_title}
              first_air_date={first_air_date}
              release_date={release_date}
              type={media_type}
              id={id}
            />
          </DivButton>
          <InfoDiv onClick={() => changeState(id, (title || name), overview, poster_path, (release_date || first_air_date.split('-')[0]), duration)}>
            <AiOutlineInfoCircle size={20} />
            <Font family='Hind'><ButtonFont>Información</ButtonFont></Font>
          </InfoDiv>
        </Footer>
      </Div>
      {
        view && (
          <>
            <GradientDiv onClick={() => changeView()} />
            <DetailCard {...data} type={media_type} bypass={bypass} />
          </>
        )
      }
      <ToastContainer closeButton={false} />
    </>
  );
};
