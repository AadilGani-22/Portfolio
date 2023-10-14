import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG7 from '../../assets/portfolio7.jpg'
import IMG8 from '../../assets/portfolio8.jpg'
import IMG9 from '../../assets/portfolio9.jpg'
import IMG10 from '../../assets/portfolio10.png'
import IMG11 from '../../assets/portfolio11.jpg'
const data =[
  {
    id:1,
    image:IMG1,
    title:'NewsApp - React and NewsApi',
    github:'https://github.com/AadilGani-22/News_App_ReactJs',
    demo:'https://github.com/AadilGani-22/News_App_ReactJs'
  },
  {
    id:2,
    image:IMG2,
    title:'TextUtils - ReactJs',
    github:'https://github.com/AadilGani-22/Textutils-ManageYourTexts',
    demo:'https://mytextsutilities.netlify.app/'
  },
  {
    id:3,
    image:IMG3,
    title:'WeatherApp - ReactJs and WeatherApi ',
    github:'https://github.com/AadilGani-22/WeatherApp_ReactJs',
    demo:'https://forecast-today.netlify.app/'
  },
  {
    id:4,
    image:IMG4,
    title:'ToDoList - EmbeddedJs App',
    github:'https://github.com/AadilGani-22/To-do-List',
    demo:'https://to-do-list-869l.onrender.com/'
  },
  {
    id:5,
    image:IMG5,
    title:'Notes Keeper App-React Js',
    github:'https://github.com/AadilGani-22/Secrets',
    demo:'https://take-a-note-apps.netlify.app/'
  },
  {
    id:6,
    image:IMG6,
    title:'News-Letter SignUp',
    github:'https://github.com/AadilGani-22/Secrets',
    demo:'https://news-letter-signup-eq85.onrender.com/'
  },
  {
    id:7,
    image:IMG7,
    title:'Secret Keeper',
    github:'https://github.com/AadilGani-22/Secrets',
    demo:'https://github.com/AadilGani-22/Secrets'
  },
  {
    id:8,
    image:IMG8,
    title:'Sentiment Analysis-Deep Learning',
    github:'https://github.com/AadilGani-22/Sentiment-Analysis-Using-RNN',
    demo:''
  },
  {
    id:9,
    image:IMG9,
    title:'Student Performace Evaluation-Fuzzy Logiz(Python)',
    github:'https://github.com/AadilGani-22/Academic-Performance-Evaluation',
    demo:'https://colab.research.google.com/drive/1Ud4O6Suc2gbwYLnmZa1Zr2crIT0xEZD-'
  },
  {
    id:10,
    image:IMG10,
    title:'Home Automation System - IOT',
    github:'https://github.com/AadilGani-22/Home-Automation-System',
    demo:'https://github.com/AadilGani-22/Home-Automation-System'
  },
  {
    id:11,
    image:IMG11,
    title:'iNotebook(In making)',
    github:'https://github.com/',
    demo:'https://github.com/'
  }
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image , title , github , demo})=>{
            return(
                <article className='portfolio__item'>
                <div className='portfolio__item_image'>
                <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target={'_blank'} rel="noreferrer">GitHub</a>
                  <a href={demo} className="btn btn-primary" target={'_blank'} rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio