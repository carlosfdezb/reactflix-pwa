/* eslint-disable camelcase */
import React from 'react';
import Font, { Text } from 'react-font';
import { Link } from 'react-router-dom';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BsCircleFill, BsChevronRight } from 'react-icons/bs';
import { IMG } from '../../../urls/url';
import { CardDiv, FlexDiv, Image, InfoDiv, TitleDiv,
  FooterFlex, FooterFont, SmallDiv, SmallDot, ArrowDiv, GenreFont, ImageDiv, DescriptionP } from './styles';
import { LoadButton } from '../LoadButton';

export const DetailCard = ({ bypass, id, media_type, type, poster_path, title, name, overview, release_date, original_title, original_name, anim, first_air_date }) => {

  return (
    <div>
      <CardDiv anim={anim}>
        <FlexDiv>
          <ImageDiv>
            <Image src={IMG + poster_path} />
          </ImageDiv>
          <InfoDiv>
            <Font family='Titillium Web'>
              <TitleDiv>{title || name}</TitleDiv>
            </Font>
            <Font family='Hind'>
              <SmallDiv>
                <GenreFont>{(release_date && release_date.split('-')[0]) || (first_air_date && first_air_date.split('-')[0])}</GenreFont>
                <SmallDot>
                  <BsCircleFill size={3} />
                </SmallDot>
                {
                  media_type === 'movie' && <GenreFont>Película</GenreFont>
                }
                {
                  media_type === 'tv' && <GenreFont>Serie</GenreFont>
                }
                {
                  bypass !== '' && <GenreFont>{bypass}</GenreFont>
                }
              </SmallDiv>
            </Font>
            <Text family='Titillium Web'><DescriptionP>{overview}</DescriptionP></Text>
          </InfoDiv>
        </FlexDiv>
        {
          type === 'movie' && (
            <LoadButton
              title={(title || name) || (original_title || original_name)}
              original={original_title || original_name}
              first_air_date={first_air_date}
              release_date={release_date}
              type={type}
              id={id}
            />
          )
        }
        <hr style={{ height: 0.1 }} />
        <Link to={`/detail/${media_type || type}/${id}`} style={{ textDecoration: 'none', color: 'white' }}>
          <FooterFlex>
            <AiOutlineInfoCircle size={20} />
            <Font family='Hind'>
              <FooterFont>Detalles y más</FooterFont>
            </Font>
            <ArrowDiv>
              <BsChevronRight size={21} />
            </ArrowDiv>
          </FooterFlex>
        </Link>
      </CardDiv>
    </div>
  );
};
