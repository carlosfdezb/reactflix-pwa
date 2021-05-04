/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import Font from 'react-font';
import { AiFillCaretRight } from 'react-icons/ai';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';
import { DivButton, ViewButton } from './styles';
import { BASE_URL } from '../../../urls/url';

export const LoadButton = ({ id, type, title, original, first_air_date, release_date, seasons, desktop }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

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
                        <Font family='Hind'><h4>No disponible</h4></Font>
                      </ViewButton>
                    ) : (
                      <Link to={{ pathname: `/player/${type}/${id}`, state: { idPlayer: data[0].id, routePlayer: data[0].route } }} style={{ textDecoration: 'none', color: 'white' }}>
                        <ViewButton>
                          <AiFillCaretRight size={20} />
                          <Font family='Hind'><h4>Ver</h4></Font>
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
                        <Font family='Hind'><h4>No disponible</h4></Font>
                      </ViewButton>
                    ) : (
                      desktop ? (
                        <Link to={{ pathname: `/detail/${type}/${id}`, state: { seasons, idPlayer: data[0].id, routePlayer: data[0].route } }} style={{ textDecoration: 'none', color: 'white' }}>
                          <ViewButton>
                            <AiFillCaretRight size={20} />
                            <Font family='Hind'><h4>Detalles</h4></Font>
                          </ViewButton>
                        </Link>
                      ) : (
                        <Link to={{ pathname: `/seasons/${type}/${id}`, state: { seasons, idPlayer: data[0].id, routePlayer: data[0].route } }} style={{ textDecoration: 'none', color: 'white' }}>
                          <ViewButton>
                            <AiFillCaretRight size={20} />
                            <Font family='Hind'><h4>Temporadas</h4></Font>
                          </ViewButton>
                        </Link>
                      )
                    )
                  }
                </>
              ))
            }
          </DivButton>
        )
      }
    </>
  );
};
