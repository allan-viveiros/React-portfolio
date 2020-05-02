import styled from 'styled-components';

import BrandPicture from '../../images/Deadpool.jpg';

// import GlobalStyle from '../../global-style';


export const HeaderContainer = styled.header `

    .main-header {
        position: fixed;
        z-index: 2;
        width: 100%;    
        background-color: #ff00dd;
    }

    /* Main menu */
    .menu-btn {
        position: absolute;
        z-index: 3;
        right: 35px;
        top: 35px;
        cursor: pointer;
        transition: all 0.5s ease-out; 
        
        .btn-line {
            width: 23px;
            height: 2px;
            margin: 0 0 5px 0;
            background: #444;
            transition: all 0.5s ease-out; 
            background-color: #0000ff;           
        }

        /* Toggle button animation */
        &.close {
            transform: rotate(180deg);

            .btn-line {
                width: 23px;
                height: 2px;
                margin: 0 0 5px 0;
                background: #444;
                transition: all 0.5s ease-out; 
                background-color: #0000ff;           
            }

            .btn-line {
                &:nth-child(1) {
                    background: red;
                    transform: rotate(45deg) translate(5px, 5px);
                    width: 20px;
                }

                &:nth-child(2) {
                    visibility: hidden;
                    transform: rotate(45deg);
                    background: red;
                    width: 20px;
                    
                }

                &:nth-child(3) {
                    background: red;
                    transform: rotate(-45deg)  translate(5px, -5px);
                    width: 20px;
                }
            }
        }
    }

    .menu {
        position: fixed;
        top: 0;
        width: 100%;
        opacity: 0.9;
        visibility: hidden;
        

        &.show {
            visibility: visible;
        }

        &-brand, &-nav {
            display: flex;
            flex-flow: column wrap;
            align-items: center;
            justify-content: center;
            float: left;
            width: 50%;
            height: 100vh;
            overflow: hidden;
        }

        /* Only menu-nav */
        &-nav {
            background-color: #ffbb00;
            margin: 0;
            padding: 0;            
            list-style: none;
            transform: translate3d(0, -100%, 0); 
            transition: all 0.5s ease-out; 

            &.show {
                //slide to up side
                transform: translate3d(0, 0, 0);
            }
        }

        /* Only menu-brand */
        &-brand {
            background: rgba(0, 0, 0, 0.5);
            transform: translate3d(0, 100%, 0); 
            transition: all 0.5s ease-out;

            &.show {
                //Slide to down
                transform: translate3d(0, 0, 0);
            }

            .portrait {
                width: 250px;
                height: 250px;
                background: url(${BrandPicture});
                background-position: center;
                border-radius: 50%;
                border: solid 3px #ff00ff;
            }
        }

        .nav-item {
            transform: translate3d(600px, 0, 0); 
            transition: all 0.5s ease-out;

            &.show {
                //Slide from right
                transform: translate3d(0, 0, 0);
            }

            &.current > a {
                color: #ff00ff;
            }
        }

        .nav-link {
            display: inline-block;
            position: relative;
            font-size: 30px;
            padding: 0.5rem 0;
            font-weight: 500;
            color: #444;
            text-decoration: none;
            transition: all 0.5s ease-out;
            
            &:hover {
                color: #ff00ff;
            }

            &.active {
                color: tomato;
            }
        }
    }


    /* Delay nav-item to come from right in 0.1s each */
    @for $i from 1 through 4 {
        .nav-item:nth-child(#{$i}) {
            transition-delay: $i * 0.1s;
        }
    }   

`;