import { createGlobalStyle } from 'styled-components';
import Reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${Reset}
    a {
        text-decoration: none;
        color: inherit;
    }

    body {
        font-family : Pretendard;
    }

    *{
        font-family : Pretendard;
        box-sizing: border-box;
    }

`;

export default GlobalStyles;
