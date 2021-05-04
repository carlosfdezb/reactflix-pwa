/* eslint-disable camelcase */
import React, { useState, useEffect, Fragment } from 'react';
import Font, { Text } from 'react-font';
import { BsCircleFill } from 'react-icons/bs';
import { IoIosAdd, IoMdCheckmark } from 'react-icons/io';
import { reactLocalStorage } from 'reactjs-localstorage';
import { ToastContainer, toast } from 'material-react-toastify';
import { BASE_URL, IMG } from '../../../urls/url';
import { BackgroundDiv, ImageGradient, Logo, NotLogo,
  DataDiv, SmallData, GenreFont, CircleDiv, NoteDiv, NoteFont, NoteIn, AddButton, DelButton } from './styles';
import { LoadButton } from '../LoadButton';
import { TrailerCard } from '../TrailerCard';
import 'material-react-toastify/dist/ReactToastify.css';

export const DataDetailCard = ({ id, type, title, name, backdrop_path,
  original_name, genres, release_date, vote_average, overview, seasons, first_air_date, original_title, runtime, poster_path }) => {
  const [logo, setLogo] = useState([]);
  const [isFav, setIsFav] = useState(false);

  (type === 'movie' || type === 'tv') && useEffect(() => {
    window.fetch(`${BASE_URL}getLogo/${type}/${id}`)
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
          <DelButton>
            <IoMdCheckmark size={32} onClick={() => delFav(id)} />
          </DelButton>
        ) : (
          <AddButton>
            <IoIosAdd size={40} onClick={() => setFav(id, type, poster_path)} />
          </AddButton>
        )
      }

      <BackgroundDiv img={`${IMG}${backdrop_path}`}>
        <ImageGradient />
      </BackgroundDiv>
      <DataDiv>

        {
          logo[0] !== null ? <Logo src={logo} /> : (
            <Font family='Merriweather Sans'>
              <NotLogo>{(title || name) || (original_name || original_title)}</NotLogo>
            </Font>
          )
        }
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
            vote_average !== 0 && (
              <CircleDiv>
                <BsCircleFill size={3} />
              </CircleDiv>
            )
          }
          {
            genres && genres.map((g, index) => (
              <Fragment key={index}>
                <Font family='Raleway'>
                  <GenreFont>{g.name}</GenreFont>
                </Font>

                <CircleDiv>
                  <BsCircleFill size={3} />
                </CircleDiv>

              </Fragment>
            ))
          }
          {
            runtime && (
              <>
                <Font family='Raleway'>
                  <GenreFont>
                    {Math.floor(runtime / 60)}
                    {' h '}
                    {runtime % 60}
                    {' min'}
                  </GenreFont>
                </Font>

                <CircleDiv>
                  <BsCircleFill size={3} />
                </CircleDiv>

              </>
            )
          }
          {
            release_date ? (
              <>
                <Font family='Raleway'>
                  <p>{release_date.split('-')[0]}</p>
                </Font>
              </>
            ) : (
              <>
                <Font family='Raleway'>
                  {
                    seasons && (
                      <p>
                        {seasons[seasons.length - 1].season_number}
                        {' '}
                        {
                          seasons[seasons.length - 1].season_number > 1 ? 'temporadas' : 'temporada'
                        }
                      </p>
                    )
                  }
                </Font>
              </>
            )
          }

        </SmallData>

        <LoadButton
          title={(title || name) || original_name}
          original={original_name || original_title}
          first_air_date={first_air_date}
          release_date={release_date}
          type={type}
          id={id}
          seasons={seasons}
        />

        <Text family='Open Sans'>
          {overview}
        </Text>
        <TrailerCard type={type} id={id} />
      </DataDiv>
      <ToastContainer closeButton={false} />
    </div>
  );
};
