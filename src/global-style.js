import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: open-'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

        @mixin mediaSm {
            @media screen and (max-width: 550px) {
                @content;
            }
        }

        @mixin mediaMd {
            @media screen and (max-width: 768px) {
                @content;
            }
        }

        @mixin mediaLg {
            @media screen and (min-width: 769px) and (max-width: 1170px) {
                @content;
            }
        }

        @mixin mediaXl {
            @media screen and (min-width: 1171px) {
                @content;
            }
        }

        /*
        // Import medias (responsive)
        @import './screens.scss';
        */
    }
`;


export default GlobalStyle;
