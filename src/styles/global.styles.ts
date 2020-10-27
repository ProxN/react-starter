import { createGlobalStyle, css } from 'styled-components';
import Media from './media';

export default createGlobalStyle`
    *,
    *::before,
    *::after{
        margin:0;
        padding:0;
        box-sizing:inherit;
    }
    
    html{
        box-sizing:border-box;
        height:100%;
        width:100%;
    }
    
    #root,
    body{
        width:100%;
        min-height:100%;
    }

    body{
        line-height:1.6;
        font-weight:normal;
        ${({ theme }) => css`
          background-color: ${theme.colors.primary.dark};
          font-size: ${theme.fontSizes.small};
          color: ${theme.colors.gray.light};
          font-family: ${theme.fonts.primary};
        `};
    }

    a{
        text-decoration:none;
    }

    h1,h2,h3,h4,h5,h6{
        font-weight:normal;
        margin:0;
        font-family:${({ theme }) => theme.fonts.secondary};
    }

    section{
        padding:0px 50px;
        height:100vh;
        ${Media.thone}{
            padding:0 25px;
        }
    }

    
    ::-webkit-scrollbar {
        background:#2d2b4c;
        width:5px;
    }
    ::-webkit-scrollbar-thumb {
        background:#484567;
        border-radius:5px;
    }
    
`;
