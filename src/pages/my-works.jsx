import React from 'react';

import '../sass/myWorks-style.scss';
import Card from '../components/cards/cards';
import CardTemplate from '../components/card-template/cardTemplate';
import Footer from '../components/footer/footer';

//Projects
import SuperClothing from '../images/projects/super-clothing.PNG';
import Monster from '../images/projects/monster.PNG';
import Covid from '../images/projects/covid-tracker.PNG';

//Apps
import StopWatch from '../images/projects/stopWatch.PNG';
import Drawing from '../images/projects/drawing.PNG';
import MathsGame from '../images/projects/mathsGame.PNG'
import Fruits from '../images/projects/Fruits.PNG';
import Breakout from '../images/projects/breakout.PNG';

//Templates
import Landing from '../images/projects/landing.PNG';
import Lovely from '../images/projects/lovely.PNG';
import Awesome from '../images/projects/awesome.PNG';
import Maths from '../images/projects/maths.PNG';


const MyWorks = () => (
    <div className="div-myworks">

        <main id="work">

            <h1 className="lg-heading"> 
                My <span className="text-secondary green"> Works </span> 
            </h1>
            <h2 className="sm-heading"> Check out some of my projects.  </h2>
            
            <h2 className="title-projects"> 
                Main Projects 
                <p> Some projects developed using React </p>
            </h2>

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
                    linkProject="https://web-covid19-tracker.herokuapp.com"
                    linkGithub="https://github.com/allan-viveiros/covid"                    
                />
            </div>       

            <h2 className="title-projects"> 
                Games Js 
                <p> Some games developed using pure JavaScript and bootstrap </p>
            </h2>

            <div className="main-projects">

                {/* StopWatch */} 
                <Card 
                    imgProject={StopWatch}
                    imgAlt="StopWatch"
                    project="Frontend JavaScript app"
                    title="StopWatch app"
                    textFront="Stopwatch app with lap count"
                    textBack="Responsive app using HTML, CSS, JavaScript and bootstrap"
                    publish="Publish on GitHub"
                    linkProject="https://allan-viveiros.github.io/Portfolio-allan/frontend-projects/7.Stopwatch%20App/StopWatch.html"
                    linkGithub="https://github.com/allan-viveiros/Portfolio-allan/tree/master/src/frontend-projects/7.Stopwatch%20App"                    
                />

                {/* Drawing */} 
                <Card 
                    imgProject={Drawing}
                    imgAlt="Drawing app"
                    project="Frontend JavaScript app"
                    title="Drawing app"
                    textFront="Make colorized Drawings and save"
                    textBack="Drawing app using HTML, CSS, JavaScript, Jquery, bootstrap and local store"
                    publish="Publish on GitHub"
                    linkProject="https://allan-viveiros.github.io/Portfolio-allan/frontend-projects/8.Drawing%20App/Drawing.html"
                    linkGithub="https://github.com/allan-viveiros/Portfolio-allan/tree/master/src/frontend-projects/8.Drawing%20App"                    
                />
                
                {/* Maths Game */} 
                <Card 
                    imgProject={MathsGame}
                    imgAlt="Maths game"
                    project="JavaScript game"
                    title="Maths Game"
                    textFront="Quiz game. Choose the correct answer and make points"
                    textBack="Quiz app using HTML, CSS and JavaScript"
                    publish="Publish on GitHub"
                    linkProject="https://allan-viveiros.github.io/Portfolio-allan/frontend-projects/2.Maths%20Game/MathGame.html"
                    linkGithub="https://github.com/allan-viveiros/Portfolio-allan/tree/master/src/frontend-projects/2.Maths%20Game"                    
                />

                {/* Fruit Game */} 
                <Card 
                    imgProject={Fruits}
                    imgAlt="Cut fruits game"
                    project="JavaScript game"
                    title="Fruits Game"
                    textFront="Cut the fruits and make points"
                    textBack="Cut fruits game using HTML, CSS, JavaScript and Jquery"
                    publish="Publish on GitHub"
                    linkProject="https://allan-viveiros.github.io/Portfolio-allan/frontend-projects/3.Fruits%20Game/FruitGame.html"
                    linkGithub="https://github.com/allan-viveiros/Portfolio-allan/tree/master/src/frontend-projects/3.Fruits%20Game"                    
                />

                {/* Breakout Game */} 
                <Card 
                    imgProject={Breakout}
                    imgAlt="Breakout game"
                    project="JavaScript game"
                    title="Breakout Game"
                    textFront="Using the ball to Break the bricks and make points"
                    textBack="breakout game using HTML, CSS, JavaScript"
                    publish="Publish on GitHub"
                    linkProject="https://allan-viveiros.github.io/Portfolio-allan/frontend-projects/BreakOut_Game/BreakOut.html"
                    linkGithub="https://github.com/allan-viveiros/Portfolio-allan/tree/master/src/frontend-projects/BreakOut_Game"                    
                />


            </div> 
          
            

            <h2 className="title-projects"> 
                Templates HTML 
                <p> Some templates developed using HTML, CSS, and bootstrap </p>
            </h2>

            <div className="main-projects"> 

                {/* Landing page */}
                <CardTemplate
                    title="Landing page"
                    picture={Landing}
                    project_link="https://allan-viveiros.github.io/Portfolio-allan/frontend-projects/4.Landing%20page/LandinPage.html"
                    github_link="https://github.com/allan-viveiros/Portfolio-allan/tree/master/src/frontend-projects/4.Landing%20page"
                />  
               
                {/* Awesome page */}
                <CardTemplate
                    title="Awesome page"
                    picture={Awesome}
                    project_link="https://allan-viveiros.github.io/Portfolio-allan/frontend-projects/5.Website/Awesome.html"
                    github_link="https://github.com/allan-viveiros/Portfolio-allan/tree/master/src/frontend-projects/5.Website"
                />  

                {/* Lovely page */}
                <CardTemplate
                    title="Lovely page"
                    picture={Lovely}
                    project_link="https://allan-viveiros.github.io/Portfolio-allan/frontend-projects/6.Lovely%20Website/Lovely.html"
                    github_link="https://github.com/allan-viveiros/Portfolio-allan/tree/master/src/frontend-projects/6.Lovely%20Website"
                />              

                {/* Maths page */}
                <CardTemplate
                    title="Maths page"
                    picture={Maths}
                    project_link="https://allan-viveiros.github.io/Portfolio-allan/frontend-projects/1.Maths%20Website/Maths.html"
                    github_link="https://github.com/allan-viveiros/Portfolio-allan/tree/master/src/frontend-projects/1.Maths%20Website"
                />
                
            </div>

        </main>

        <Footer />
    </div>
)


export default MyWorks;
