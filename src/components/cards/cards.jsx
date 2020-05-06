import React from 'react';

import '../../sass/card-style.scss';

const Card = props => (
    <div className="main-card">

        {/* Card 3d */}
        <div className="item">                 
            <div className="container">  
                
                {/* Front side */}
                <div className="front">   
                    <div className="img-container">                                
                        <img src={props.imgProject} alt={props.imgAlt}/>
                        
                        <div className="card-text">
                            <p> {props.project} </p>                       
                                    
                            <span> {props.title} </span>
                        </div>                           
                    </div>                        

                    <div className="text-container">                            
                        <p> {props.textFront} </p>
                    </div>                        
                </div>
    

                {/* Back side */}
                <div className="back">   
                    <div className="text-back">                     
                        <h3> Technologies </h3>
                        <br />
                        <p> {props.textBack} </p>                        
                        <span> {props.publish} </span>
                    </div>

                    <div className="btn-back">
                        <a href={props.linkProject} className="btn-light" target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-eye"></i> Project
                        </a>
                        
                        <a href={props.linkGithub} className="btn-dark" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i> Github
                        </a>
                    </div>
                </div>

            </div>                
        </div>              

    </div>   
);


export default Card;
