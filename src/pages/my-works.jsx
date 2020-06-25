import React from 'react';

import '../sass/myWorks-style.scss';
import Card from '../components/cards/cards';
import Footer from '../components/footer/footer';

import SuperClothing from '../images/projects/super-clothing.PNG';
import Monster from '../images/projects/monster.PNG';
import Covid from '../images/projects/covid-tracker.PNG';
import Maths from '../images/projects/maths.PNG';


const MyWorks = () => (
    <div className="div-myworks">

        <main id="work">

            <h1 className="lg-heading"> 
                My <span className="text-secondary green"> Works </span> 
            </h1>
            <h2 className="sm-heading"> Check out some of my projects.  </h2>
            
            <div className="main-projects"> 

                {/* Super Clothing */}
                <Card 
                    imgProject={SuperClothing}
                    imgAlt="Super Clothing"
                    project="e-Commerce Project"
                    title="Super Clothing"
                    textFront="Website using firebase, 
                        google authentication and integrated with stripe system 
                        to make payments."
                    textBack="Responsive website using HTML5, Sass, JavaScript, React, React Hooks, 
                        Firebase."
                    publish="Publish on Heroku."
                    linkProject="https://super-clothing.herokuapp.com/"
                    linkGithub="https://github.com/allan-viveiros/super-clothing"                    
                />

                {/* Monster Search */}
                <Card 
                    imgProject={Monster}
                    imgAlt="Monster Search"
                    project="Frontend Development"
                    title="Monster Search"
                    textFront="Responsive Frontend project to search cards by the name in real time."
                    textBack="Responsive frontend website using HTML5, CSS3, JavaScript, React."
                    publish="Publish on GitHub."
                    linkProject="https://allan-viveiros.github.io/monsters-rolodex/"
                    linkGithub="https://github.com/allan-viveiros/monsters-rolodex"                    
                />

                {/* COVID-19 Tracker */}   
                <Card 
                    imgProject={Covid}
                    imgAlt="COVID-19 Tracker"
                    project="Web Development"
                    title="COVID-19 Tracker"
                    textFront="Responsive website consuming API with real information about COVID-19."
                    textBack="HTML5, CSS3, JavaScript, React , React Hooks, 
                        Material UI, Charts.js, API data fetching."
                    publish="Publish on Heroku."
                    linkProject="https://covid19-tckr.herokuapp.com/"
                    linkGithub="https://github.com/allan-viveiros/covid19-tracker"                    
                />

                {/* Maths */}
                <Card 
                    imgProject={Maths}
                    imgAlt="Maths"
                    project="Frontend Development"
                    title="Maths"
                    textFront="Website using only HTML5 CSS3."
                    textBack="Responsive website using HTML5, CSS3."
                    publish=""
                    linkProject="https://super-clothing.herokuapp.com/"
                    linkGithub="https://github.com/allan-viveiros/super-clothing"                    
                />

                {/*  */}
                <Card 
                    imgProject={SuperClothing}
                    imgAlt="Super Clothing"
                    project="e-Commerce Project"
                    title="Super Clothing"
                    textFront="Website using firebase, 
                        google authentication and integrated with stripe system 
                        to make payments."
                    textBack="Responsive website using HTML5, Sass, JavaScript, React, React Hooks, 
                        Firebase."
                    publish="Publish on Heroku"
                    linkProject="https://super-clothing.herokuapp.com/"
                    linkGithub="https://github.com/allan-viveiros/super-clothing"                    
                />


<Card 
                    imgProject={SuperClothing}
                    imgAlt="Super Clothing"
                    project="e-Commerce Project"
                    title="Super Clothing"
                    textFront="Website using firebase, 
                        google authentication and integrated with stripe system 
                        to make payments."
                    textBack="Responsive website using HTML5, Sass, JavaScript, React, React Hooks, 
                        Firebase."
                    publish="Publish on Heroku"
                    linkProject="https://super-clothing.herokuapp.com/"
                    linkGithub="https://github.com/allan-viveiros/super-clothing"                    
                />


<Card 
                    imgProject={SuperClothing}
                    imgAlt="Super Clothing"
                    project="e-Commerce Project"
                    title="Super Clothing"
                    textFront="Website using firebase, 
                        google authentication and integrated with stripe system 
                        to make payments."
                    textBack="Responsive website using HTML5, Sass, JavaScript, React, React Hooks, 
                        Firebase."
                    publish="Publish on Heroku"
                    linkProject="https://super-clothing.herokuapp.com/"
                    linkGithub="https://github.com/allan-viveiros/super-clothing"                    
                />


<Card 
                    imgProject={SuperClothing}
                    imgAlt="Super Clothing"
                    project="e-Commerce Project"
                    title="Super Clothing"
                    textFront="Website using firebase, 
                        google authentication and integrated with stripe system 
                        to make payments."
                    textBack="Responsive website using HTML5, Sass, JavaScript, React, React Hooks, 
                        Firebase."
                    publish="Publish on Heroku"
                    linkProject="https://super-clothing.herokuapp.com/"
                    linkGithub="https://github.com/allan-viveiros/super-clothing"                    
                />

            </div>

        </main>

        <Footer />
    </div>
)


export default MyWorks;
