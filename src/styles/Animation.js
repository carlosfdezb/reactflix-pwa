import styled, { keyframes } from 'styled-components';

export const DesktopCard = keyframes`
  from {
    width: 20vw;
    border-radius: 0px;
  }

  to {
    transform: scaleX(1);
    border-radius: 20px;
  }
`;

export const DescriptionIn = keyframes`
  0% {
    opacity: 0;
  }

  80% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const DesktopCardImage = keyframes`
  from {
    width: 20vw;
    opacity: 0;
  }

  to {
    width: 24.77vw;
    opacity: 1;
    border-radius: 17px 17px 0 0;
  }
`;

export const rotateLogo = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const displaySerie = keyframes`
    0% {
    -webkit-transform: translateY(-10px);
            transform: translateY(-10px);
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
`;

export const movieCardAnim = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const ActiveAnim = keyframes`
    0%   { transform: translate(-100%, -100%); }
    80%  { transform: translate(-100%, -100%) scale(50); }
    100% { transform: translate(-100%, -100%) scale(50); opacity: 0; }
`;

export const PortraitAnim = keyframes`
    0% {
      transform: scale(1.3) translate(-10%, 10%);
    }
    25% {
      transform: scale(1) translate(0, 0);
    }
    50% {
      transform: scale(1.3) translate(10%, 10%);
    }
    75% {
      transform: scale(1) translate(0, 0);
    }
    100% {
      transform: scale(1.3) translate(-10%, 10%);
    }
`;

export const JelloAnim = keyframes`
  0%,
  100% {
    -webkit-transform: translateX(0%);
            transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateX(-30px) rotate(-6deg);
            transform: translateX(-30px) rotate(-6deg);
  }
  30% {
    -webkit-transform: translateX(15px) rotate(6deg);
            transform: translateX(15px) rotate(6deg);
  }
  45% {
    -webkit-transform: translateX(-15px) rotate(-3.6deg);
            transform: translateX(-15px) rotate(-3.6deg);
  }
  60% {
    -webkit-transform: translateX(9px) rotate(2.4deg);
            transform: translateX(9px) rotate(2.4deg);
  }
  75% {
    -webkit-transform: translateX(-6px) rotate(-1.2deg);
            transform: translateX(-6px) rotate(-1.2deg);
  }
`;
