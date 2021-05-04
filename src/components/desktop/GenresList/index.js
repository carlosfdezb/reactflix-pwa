import React, { useState, useEffect } from 'react';
import { IoMdArrowDropdown, IoIosClose } from 'react-icons/io';
import { BASE_URL } from '../../../urls/url';
import { AbsoluteBox, FlexBox, ModalBox, ModalButton, DataDiv } from './styles';
import { ListOfSelectedGenre } from '../ListOfSelectedGenre';
import { HomePortrait } from '../HomePortrait';

export const GenresList = ({ type, children }) => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState('Todos los géneros');
  const [view, setView] = useState(true);
  const [select, setSelect] = useState(false);
  const [itemId, setItemId] = useState('');

  useEffect(() => {
    setLoading(true);
    window.fetch(`${BASE_URL}getGenres/${type}`)
      .then((res) => res.json())
      .then((info) => {
        setInfo(info[0].genres);
        setLoading(false);
      });
  }, []);

  const showGenres = () => {
    setView(!view);
  };

  const changeGenre = (name, id) => {
    setView(!view);
    setItem(name);
    if (id === 0) { setSelect(false); return false; }
    setItemId(id);
    setSelect(true);
  };

  return (
    <>

      {
        view ? (
          <FlexBox onClick={() => showGenres()}>
            <h4>{item}</h4>
            <IoMdArrowDropdown size={20} />
          </FlexBox>
        ) : (
          <ModalBox>
            <h3
              onClick={() => changeGenre('Todos los géneros', 0)}
              style={{ cursor: 'pointer' }}
            >
              Todos los géneros
            </h3>
            {
              info && info.map((i) => ((i.name !== 'News' && i.name !== 'Soap') && (i.name !== 'Talk')) &&
              (<h3 onClick={() => changeGenre(i.name, i.id)} style={{ cursor: 'pointer' }}>{i.name}</h3>))
            }
            <ModalButton onClick={() => showGenres()}>
              <IoIosClose size={44} color='black' />
            </ModalButton>
          </ModalBox>
        )
      }
      <AbsoluteBox>
        {select ? (
          <DataDiv>
            <HomePortrait type={type} sort='2' genre={itemId} bypass={type === 'movie' ? 'Película' : 'Serie'} />
            {
              info && info.map((gen) => (((gen.name !== 'News' && gen.name !== 'Soap') && (gen.name !== 'Talk')) && (
                <ListOfSelectedGenre
                  type={type}
                  id={`${gen.id}%2C${itemId}`}
                  title={`${gen.name} ${item !== gen.name ? `y ${item}` : ''} `}
                  bypass={type === 'movie' ? 'Película' : 'Serie'}
                />
              )
              ))
            }

          </DataDiv>
        ) :
          children }
      </AbsoluteBox>
    </>
  );
};
