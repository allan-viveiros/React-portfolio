import React from 'react';

import '../sass/about-style.scss';
import Photo from '../images/Deadpool.jpg';
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

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Aperiam omnis labore non neque eligendi consequatur odit possimus, 
                        facilis ullam cupiditate impedit incidunt dicta. Tempora numquam ad 
                        commodi praesentium beatae consequatur cupiditate </p>
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

                        <a href={Resume} target='_blank' rel="noopener noreferrer">    
                            <div className="btn-download"> 
                                <span> Download Resume </span>
                            </div>
                        </a>

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
                                <p className="time">  2014 - 2019 </p>
                                <div className="content">
                                    <h2 className="title"> Business System Analyst </h2>
                                    <p> Industria de produtos alimentícios Piraque, Brazil, Rio de Janeiro. 
                                    </p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <p className="time">  2010 - 2014 </p>
                                <div className="content">
                                    <h2 className="title"> Oracle analyst and PL/SQL developer </h2>
                                    <p> Industria de produtos alimentícios Piraque, Brazil, Rio de Janeiro. 
                                    </p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <p className="time">  2006 - 2009 </p>
                                <div className="content">
                                    <h2 className="title"> Sales assistant </h2>
                                    <p> Industria de produtos alimentícios Piraque, Brazil, Rio de Janeiro. 
                                    </p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <p className="time">  2005 - 2006 </p>
                                <div className="content">
                                    <h2 className="title"> Administrative auxiliary </h2>
                                    <p> Industria de produtos alimentícios Piraque, Brazil, Rio de Janeiro. 
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                
                </div>
                
                <div className="job job1">
                    <h3> MIT- Data base management </h3>
                    <h6> Post-graduate 2013 - 2015 </h6>
                    <p> Instituto Infet - Brazil, Rio de Janeiro.</p>
                    <p> Oracle database management system and others SGBD.</p>
                </div>

                <div className="job job2">
                    <h3> Information Systems </h3>
                    <h6> Bachelor degree 2006 - 2011 </h6>
                    <p> Faculdade de informatica Lemos de Castro - Brazil, Rio de Janeiro. </p>
                    <p> System analysis and development. </p>
                </div>

                <div className="job job3">
                    <h3> Job 3 </h3>
                    <h6> Job position </h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus 
                        eum fugit architecto asperiores illo nihil impedit eaque quibusdam 
                        ducimus tempora.
                    </p>
                </div>

            </div>

        </main>

        <Footer /> 
    </div>
)


export default AboutMe;
