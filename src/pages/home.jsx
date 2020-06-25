import React, {Component}  from 'react';

import '../sass/home-style.scss';
import './css/animation.css';

const theme = ['blue', 'green', 'orange', 'pink', 'yellow'];    
let color;

class Home extends Component {      

    componentWillMount() {
        const number = Math.floor(Math.random() * Math.floor(5));
        // eslint-disable-next-line 

        color = theme[number];

        console.log("componentWillMount ", color);
    } 

    render() {
        function handlerEvent (event) {
            //console.log(event.type);
            const spans = document.querySelectorAll('h1 span')
            
            if(event.type === 'mouseover') {
                spans.forEach(span => 
                    span.addEventListener('mouseover', function(element) {
                        span.classList.add('animated', 'rubberBand')
                    })
                );
            } 
            else if(event.type === 'mouseout') {
                spans.forEach(span => 
                    span.addEventListener('mouseout', function(element) {
                        span.classList.remove('animated', 'rubberBand')
                    })
                );
            }            
        }


        return ( 
            <div className="main-div">        
                <div className="gray-div">
                    <div className="App">
                        
                        <main id="home">
                            <div className="text">
                                <h1 className="lg-heading" onMouseOver={handlerEvent} onMouseOut={handlerEvent}> 
                                    <span className="letter">A</span>
                                    <span className="letter">l</span>
                                    <span className="letter">l</span>
                                    <span className="letter">a</span>
                                    <span className="letter">n </span>
                                        
                                    <span className={`text-secondary ${color}`}> Viveiros </span> 
                                </h1>
                            </div>

                            <h2 className="sm-heading"> 
                                Web Developer 
                                <span className="home-skills"> 
                                    <p> HTML / JavaScript / SASS / React-js </p>
                                </span>

                            </h2>            

                            <div className="icons"> 
                                <a href="https://www.linkedin.com/in/viveirosallan" target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin"></i> </a>           
                                <a href="https://github.com/allan-viveiros" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github"></i> </a>            
                                <a href="#!"> <i className="fab fa-facebook"></i> </a>
                                <a href="#!"> <i className="fab fa-instagram"></i> </a>
                            </div>

                        </main>

                    </div>

                </div>

            </div>
        );                                  

    }
    
}


export default Home;
