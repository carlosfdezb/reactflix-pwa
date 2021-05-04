import React from 'react';
import ContentLoader, { rect } from 'react-content-loader';
import { Item, ItemCrew, ItemDesktop } from './styles';

export const SkeletonPortrait = () => {
  return (
    <ContentLoader
      style={{ width: '100vw', height: '65vh' }}
      backgroundColor='#1B1B1B'
      foregroundColor='#100F10'
    >
      <rect width='100vw' height='100vh' />
    </ContentLoader>
  );
};

export const SkeletonPortraitDesktop = () => {
  return (
    <ContentLoader
      style={{ width: '95vw', height: '40vh', left: '0' }}
      backgroundColor='#1B1B1B'
      foregroundColor='#100F10'
    >
      <rect width='95vw' height='100vh' />
    </ContentLoader>
  );
};

export const SkeletonMovie = () => {
  return (
    <>
      <Item>
        <ContentLoader
          backgroundColor='#1B1B1B'
          foregroundColor='#100F10'
        >
          <rect width='100' height='150' />
        </ContentLoader>
      </Item>
      <Item>
        <ContentLoader
          backgroundColor='#1B1B1B'
          foregroundColor='#100F10'
        >
          <rect width='100' height='150' />
        </ContentLoader>
      </Item>
      <Item>
        <ContentLoader
          backgroundColor='#1B1B1B'
          foregroundColor='#100F10'
        >
          <rect width='100' height='150' />
        </ContentLoader>
      </Item>
      <Item>
        <ContentLoader
          backgroundColor='#1B1B1B'
          foregroundColor='#100F10'
        >
          <rect width='100' height='150' />
        </ContentLoader>
      </Item>
      <Item>
        <ContentLoader
          backgroundColor='#1B1B1B'
          foregroundColor='#100F10'
        >
          <rect width='100' height='150' />
        </ContentLoader>
      </Item>
    </>
  );
};

export const SkeletonMovieDesktop = () => {
  return (
    <>
      <ItemDesktop>
        <ContentLoader
          style={{ width: '20vw', height: '20vh', left: '0' }}
          backgroundColor='#1B1B1B'
          foregroundColor='#100F10'
        >
          <rect width='20vw' height='20vh' />
        </ContentLoader>
      </ItemDesktop>
      <ItemDesktop>
        <ContentLoader
          style={{ width: '20vw', height: '20vh', left: '0' }}
          backgroundColor='#1B1B1B'
          foregroundColor='#100F10'
        >
          <rect width='20vw' height='20vh' />
        </ContentLoader>
      </ItemDesktop>
      <ItemDesktop>
        <ContentLoader
          style={{ width: '20vw', height: '20vh', left: '0' }}
          backgroundColor='#1B1B1B'
          foregroundColor='#100F10'
        >
          <rect width='20vw' height='20vh' />
        </ContentLoader>
      </ItemDesktop>
      <ItemDesktop>
        <ContentLoader
          style={{ width: '20vw', height: '20vh', left: '0' }}
          backgroundColor='#1B1B1B'
          foregroundColor='#100F10'
        >
          <rect width='20vw' height='20vh' />
        </ContentLoader>
      </ItemDesktop>
      <ItemDesktop>
        <ContentLoader
          style={{ width: '20vw', height: '20vh', left: '0' }}
          backgroundColor='#1B1B1B'
          foregroundColor='#100F10'
        >
          <rect width='20vw' height='20vh' />
        </ContentLoader>
      </ItemDesktop>
    </>
  );
};

export const SkeletonCrew = () => {
  return (
    <>
      <ItemCrew>
        <ContentLoader
          style={{ width: '24vw', height: '150' }}
          backgroundColor='#1B1B1B'
          foregroundColor='#100F10'
        >
          <rect width='24vw' height='150' />
        </ContentLoader>
      </ItemCrew>
      <ItemCrew>
        <ContentLoader
          style={{ width: '24vw', height: '150' }}
          backgroundColor='#1B1B1B'
          foregroundColor='#100F10'
        >
          <rect width='24vw' height='150' />
        </ContentLoader>
      </ItemCrew>
      <ItemCrew>
        <ContentLoader
          style={{ width: '24vw', height: '150' }}
          backgroundColor='#1B1B1B'
          foregroundColor='#100F10'
        >
          <rect width='24vw' height='150' />
        </ContentLoader>
      </ItemCrew>
      <ItemCrew>
        <ContentLoader
          style={{ width: '24vw', height: '150' }}
          backgroundColor='#1B1B1B'
          foregroundColor='#100F10'
        >
          <rect width='24vw' height='150' />
        </ContentLoader>
      </ItemCrew>
    </>
  );

};
