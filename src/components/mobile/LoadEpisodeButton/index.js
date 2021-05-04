import React, { useState, useEffect } from 'react';
import Font from 'react-font';
import ReactLoading from 'react-loading';
import { AiFillCaretRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ViewButton } from './styles';
import { BASE_URL } from '../../../urls/url';

export const LoadEpisodeButton = ({ idPlayer, routePlayer, episode, season }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.fetch(`${BASE_URL}${routePlayer}Serie${idPlayer.replace('-f001', '')}/${season}/${episode}`)
      .then((res) => res.json())
      .then((info) => {
        setData(info.result);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {
        loading ? (
          <ViewButton>
            <ReactLoading type='spin' color='black' height={30} width={30} />
          </ViewButton>
        ) : (
          <>
            {
              data && Object.keys(data).length === 0 ? (
                <ViewButton>
                  <Font family='Hind'><h4>No disponible</h4></Font>
                </ViewButton>
              ) : (
                <Link to={{ pathname: '/playerepisode', state: { episodes: data } }} style={{ textDecoration: 'none', color: 'white' }}>
                  <ViewButton>
                    <AiFillCaretRight size={20} />
                    <Font family='Hind'><h4>Ver</h4></Font>
                  </ViewButton>
                </Link>
              )
            }
          </>
        )
      }
    </div>
  );
};
