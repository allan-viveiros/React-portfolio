import React from 'react';

import './cardTemplate-style.scss';

const CardTemplate = props => (
    <div className="main-template-card">

        <div className="template-item">                    
            <img className="template-img" src={props.picture} alt={props.title} />
            
            <a href={props.project_link} 
            className="btn-light" 
            rel="noopener noreferrer" 
            target="_blank">

                <i className="fas fa-eye"></i> Project
            </a>          

            <a href={props.github_link} 
            className="btn-dark" 
            rel="noopener noreferrer" 
            target="_blank">

                <i className="fab fa-github"></i> Github
            </a>
        </div>
        
    </div>
    
);


export default CardTemplate;
