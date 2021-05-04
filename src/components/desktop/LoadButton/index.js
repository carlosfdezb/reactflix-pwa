/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import Font from 'react-font';
import { IoIosClose } from 'react-icons/io';
import { AiFillCaretRight } from 'react-icons/ai';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';
import { DivButton, ViewButton, ShadowDiv, FixedDiv, ModalButton, ScrollDiv } from './styles';
import { BASE_URL } from '../../../urls/url';
import { ListOfSeasons } from '../../mobile/ListOfSeasons';

export const LoadButton = ({ id, type, title, original, first_air_date, release_date, seasons }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [card, setCard] = useState(false);

  const removeAccents = (str) => {
    if (str === undefined) { return 'nn'; };
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/g, '')
      .replace(/[ñ]/g, 'n')
      .replace(/[:]/g, 'n');
  };

  const titleFix = removeAccents(title);
  const originalFix = removeAccents(original);

  const request = { title: titleFix, original: originalFix };

  useEffect(() => {
    setLoading(true);
    window.fetch(`${BASE_URL}getSearchId`, {
      method: 'POST',
      body: JSON.stringify(request),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((info) => {
        setData(info.result);
        setLoading(false);
      })
      .catch((e) => setLoading(false));
  }, []);
  return (
    <>
      {
        release_date === '' || first_air_date === '' ? <DivButton><ViewButton><Font family='Hind'><h4>Próximamente</h4></Font></ViewButton></DivButton> : (
          <DivButton>
            {
              loading ? (
                <ViewButton>
                  <ReactLoading type='spin' color='black' height={30} width={30} />
                </ViewButton>
              ) : (type === 'movie' ? (
                <>
                  {
                    Object.keys(data).length === 0 ? (
                      <ViewButton>
                        <Font family='Hind'><h3>No disponible</h3></Font>
                      </ViewButton>
                    ) : (
                      <Link to={{ pathname: `/player/${type}/${id}`, state: { idPlayer: data[0].id, routePlayer: data[0].route } }} style={{ textDecoration: 'none', color: 'white' }}>
                        <ViewButton>
                          <AiFillCaretRight size={30} />
                          <Font family='Hind'><h3>Ver</h3></Font>
                        </ViewButton>
                      </Link>
                    )
                  }
                </>
              ) : (
                <>
                  {
                    Object.keys(data).length === 0 ? (
                      <ViewButton>
                        <Font family='Hind'><h3>No disponible</h3></Font>
                      </ViewButton>
                    ) : (
                      <ViewButton onClick={() => setCard(!card)}>
                        <AiFillCaretRight size={30} />
                        <Font family='Hind'><h3>Temporadas</h3></Font>
                      </ViewButton>

                    )
                  }
                </>
              ))
            }
          </DivButton>
        )
      }
      {
        card && (
          <ShadowDiv>
            <FixedDiv>
              <ScrollDiv>
                <ListOfSeasons idPlayer={data[0].id} routePlayer={data[0].route} id={id} type={type} desktop={true} />
              </ScrollDiv>
            </FixedDiv>
            <ModalButton onClick={() => setCard(!card)}>
              <IoIosClose size={44} color='black' />
            </ModalButton>
          </ShadowDiv>
        )
      }
    </>
  );
};
