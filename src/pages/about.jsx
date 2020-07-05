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
                        Oi, Meu nome é Allan Viveiros, sou formado em analise de sistemas com 
                        especializacao em desenvolvimento em banco de dados, atuo na area de TI a 
                        aproximadamente 10 anos, nesse tempo trabalhei como analista e desenvolvedor
                        Oracle e analista de sistemas e negocio. Atualmente residente em London Ontario,
                        a procura de expandir meus conhecimentos na area de desenvolvimento web, pois 
                        acredito que essa é a plataforma do presente e uma area em constante expansao
                        e desenvolvimento. Todo empreendimento de sucesso preecisa ter uma boa 
                        plataforma online, atraente e intuitiva. Pensando nisso, fui formente atraido 
                        pela lingugem javaScript, por onde comecei a estudar e praticar e entao cheguei
                        a ferramentas como React e o Node. Depois de muitas horas de estudo e pratica
                        posso dizer que estou confortavel em utilizar tecnologias como: HTML5, CSS3, 
                        Sass, Javascript, React, Node, Hooks, entre outras. É possivel verificar aqui
                        alguns trabalhos.                        
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
