/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import Font, { Text } from 'react-font';
import { IoIosAdd, IoMdCheckmark } from 'react-icons/io';
import { BsCircleFill } from 'react-icons/bs';
import { reactLocalStorage } from 'reactjs-localstorage';
import { ToastContainer, toast } from 'material-react-toastify';
import { BackgroundImg, DataDiv, Logo, NotLogo, Porcentaje, Year, FlexDiv, Type, CircleDiv,
  DescriptionDiv, RightDiv, ButtonDiv, Subtitle, LogoDiv, FavButton } from './styles';
import { IMG, BASE_URL } from '../../../urls/url';
import { TrailerCard } from '../TrailerCard';
import { LoadButton } from '../LoadButton';
import { RelatedCard } from '../RelatedCard';
import { ListOfCrew } from '../ListOfCrew';
import 'material-react-toastify/dist/ReactToastify.css';

export const DataDetailCard = ({ id, type, backdrop_path, title, name, original_name, original_title, media_type,
  vote_average, release_date, genres, overview, first_air_date, tagline, seasons, runtime, poster_path }) => {
  const [logo, setLogo] = useState([]);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    window.fetch(`${BASE_URL}getLogo/${type || media_type}/${id}`)
      .then((res) => res.json())
      .then((info) => {
        setLogo(info.result);
      });
  }, []);

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
    <div>
      {
        Object.entries(favs).length !== 0 && favs.find((fav) => fav.id === id) ? (
          <FavButton>
            <IoMdCheckmark size={32} onClick={() => delFav(id)} />
          </FavButton>
        ) : (
          <FavButton>
            <IoIosAdd size={40} onClick={() => setFav(id, type, poster_path)} />
          </FavButton>
        )
      }
      <BackgroundImg img={backdrop_path && IMG + backdrop_path} />
      <DataDiv>
        <LogoDiv>
          {
            logo[0] !== null ? <Logo src={logo} /> : (
              <Font family='Merriweather Sans'>
                <NotLogo>{(title || name) || (original_name || original_title)}</NotLogo>
              </Font>
            )
          }
        </LogoDiv>
        <Font family='Roboto'>
          <Subtitle>
            {tagline}
          </Subtitle>
        </Font>
        <FlexDiv>
          <Font family='Roboto'>
            <Porcentaje>
              {vote_average * 10}
              {' % para ti  '}
            </Porcentaje>
          </Font>
          {
            release_date ? (
              <Font family='Roboto'>
                <Year>
                  {release_date.split('-')[0]}
                  {' '}
                </Year>
              </Font>
            ) : (
              <Font family='Roboto'>
                <Year>
                  {first_air_date.split('-')[0]}
                  {' '}
                </Year>
              </Font>
            )
          }
          <Font family='Roboto'>
            <Year>
              {
                seasons ? (
                  <p>
                    {seasons[seasons.length - 1].season_number}
                    {' '}
                    {
                      seasons[seasons.length - 1].season_number > 1 ? 'temporadas' : 'temporada'
                    }
                  </p>
                ) : (
                  <p>
                    {Math.floor(runtime / 60)}
                    {' h '}
                    {runtime % 60}
                    {' min'}
                  </p>
                )
              }
            </Year>
          </Font>
          <Type>
            <Font family='Roboto'>
              {(media_type || type) === 'movie' ? 'Película' : 'Serie'}
            </Font>
          </Type>
        </FlexDiv>
        <FlexDiv>
          {
            genres && genres.map((genre, index) => (
              <FlexDiv key={index}>
                <Font family='Roboto'>
                  {genre.name}

                </Font>
                {index < genres.length - 1 && (
                  <CircleDiv>
                    <BsCircleFill size={3} />
                  </CircleDiv>
                )}
              </FlexDiv>
            ))
          }
        </FlexDiv>
        <DescriptionDiv>
          <Font family='Open Sans'>
            {overview}
          </Font>
        </DescriptionDiv>

        <RelatedCard type={type} id={id} />
        <ListOfCrew type={type} id={id} />
      </DataDiv>
      <RightDiv>
        <TrailerCard type={type} id={id} />
        <ButtonDiv>
          <LoadButton
            title={(title || name) || (original_title || original_name)}
            original={original_title || original_name}
            first_air_date={first_air_date}
            release_date={release_date}
            type={type}
            id={id}
          />
        </ButtonDiv>

      </RightDiv>

      <ToastContainer closeButton={false} position='top-right' />
    </div>
  );
};
