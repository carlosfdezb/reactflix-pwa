import { createGlobalStyle } from 'styled-components';

const Landscape = createGlobalStyle`
    @media only screen and (orientation:portrait){
        body::fullscreen {
            height: 100vw;
            transform: rotate(90deg);
        }
        }
`;

export default Landscape;
