import React from 'react';

import '../sass/about-style.scss';
import Photo from '../images/Me-2.png';
import Footer from '../components/footer/footer';
import Resume from '../documents/Allan_Viveiros.pdf';

const AboutMe = () => (
    <div className="div-about">        
        
        <main id="about">
            <h1 className="lg-heading"> 
                About <span className="text-secondary blue"> Me </span> 
            </h1>

            <h2 className="sm-heading"> Let me tell you a few things about me.  </h2>

            <div className="about-info">

                <img src={Photo} alt="Allan Romero" className="bio-image" />

                <div className="bio">
                    <h3 className="text-secondary blue"> Bio </h3>

                    <p>
                    Hi, my name is Allan Romero de Souza Viveiros. I graduated in information systems 
                    and post-graduated in database development. I've been working in the IT sector for 
                    about 10 years in different areas such as Oracle developer and analyst, and 
                    business system analyst. At present, I live in London Ontario, and I'm trying to 
                    expand my knowledge in web development considering that it is not only a current 
                    platform but also it is on continuous expansion for the future.
                    Regarding the current search I made about the programming languages for web 
                    development around the world, I became so attracted by the JavaScript language 
                    that it gave to me the motivation to study, and then I achieved tools like React-js 
                    and Node-js. After a journey of long hours reading and coding I can say that I feel 
                    comfortable building projects using technologies such as HTML5, CSS3, Sass, 
                    Javascript, React-js, Node-js, Hooks.
                    It is possible to check some of my projects here.                       
                    </p>

                </div>
            
                <div className="personal">                    
                    <p>Nome: Allan Romero de Souza Viveiros</p>
                    <p>Birth: September 9, 1986</p>
                    <p>Country: Canada </p>
                    <p>City: London, On </p>

                    <div className="skills-image">	                        
                        <p> JavaScript - CSS3 - HTML5 -                        
                            SASS - React - Nodejs - Redux -
                            Bootstrap - Firebase - SQL -
                            Hooks - jQuery - Json
                        </p>  

                        {/*
                        <a href={Resume} target='_blank' rel="noopener noreferrer">    
                            <div className="btn-download"> 
                                <span> Download Resume </span>
                            </div>
                        </a>
                        */}
                        
                        <div class="btn-download-container">
                            <a href={Resume} target='_blank' rel="noopener noreferrer">    
                                <button class="button-border">
                                    Download Resume 
                                </button>
                            </a>
                        </div>  


                    </div>
                </div>
            

                <div className="education">
                              
                    <div className="timeline">
                        <div className="timeline-body">   

                            <div className="timeline-item">
                                <p className="time"> 2019 </p>
                                <div className="content">
                                    <h2 className="title"> Business System Analyst </h2> 
                                    <p className="sub-text"> Job position 2014 - 2019 </p>
                                    <p> Industria de produtos alimentícios Piraque, Brazil, Rio de Janeiro. 
                                    </p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <p className="time"> 2015 </p>
                                <div className="content">
                                    <h2 className="title"> MIT- Data base management </h2>
                                    <p className="sub-text"> Post-graduate 2013 - 2015 </p>
                                    <p> Instituto Infet - Brazil, Rio de Janeiro.
                                        Oracle database management system and others SGBD. 
                                    </p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <p className="time"> 2014 </p>
                                <div className="content">
                                    <h2 className="title"> Oracle analyst and PL/SQL developer </h2>
                                    <p className="sub-text"> Job position 2010 - 2014 </p>
                                    <p> Faculdade de informatica Lemos de Castro - Brazil, Rio de Janeiro.
                                        System analysis and development. 
                                    </p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <p className="time"> 2011 </p>
                                <div className="content">
                                    <h2 className="title"> Information Systems </h2>
                                    <p className="sub-text"> Bachelor degree 2006 - 2011 </p>
                                    <p> Instituto Infet - Brazil, Rio de Janeiro.
                                        Oracle database management system and others SGBD. 
                                    </p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <p className="time"> 2009 </p>
                                <div className="content">
                                    <h2 className="title"> Sales assistant </h2>
                                    <p className="sub-text"> Job position 2006 - 2009 </p>
                                    <p> Industria de produtos alimentícios Piraque, Brazil, Rio de Janeiro. 
                                    </p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <p className="time"> 2006 </p>
                                <div className="content">
                                    <h2 className="title"> Administrative auxiliary </h2>
                                    <p className="sub-text"> Job position 2005 - 2006 </p>
                                    <p> Industria de produtos alimentícios Piraque, Brazil, Rio de Janeiro. 
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                
                </div>                
                

            </div>

        </main>

        <Footer /> 
    </div>
)


export default AboutMe;
