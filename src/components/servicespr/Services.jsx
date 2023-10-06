import React from 'react'
import './services.css'
import {CiBookmarkCheck} from 'react-icons/ci'

const Services = () => {
  return (
    <section id='services'>
      <h5>How can I help you</h5>
      <h2>Various Roles</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>FullStack Developer</h3>
          </div>
          <ul className="service__list">
            <li>
              <CiBookmarkCheck className='service__list-icon'/>
              <p>Have deep understanding of HTML/CSS.</p>
            </li>
            <li>
              <CiBookmarkCheck className='service__list-icon'/>
              <p>Knowledge about Bootstrap.</p>
            </li>
            <li>
              <CiBookmarkCheck className='service__list-icon'/>
              <p>Have Knowledge about Javascript.</p>
            </li>
            <li>
              <CiBookmarkCheck className='service__list-icon'/>
              <p>Implement Embedded JavaScript.</p>
            </li>
            <li>
              <CiBookmarkCheck className='service__list-icon'/>
              <p>Knowledge about React-JS framework.</p>
            </li>
            <li>
              <CiBookmarkCheck className='service__list-icon'/>
              <p>Made about 15+ projects.</p>
            </li>
            <li>
              <CiBookmarkCheck className='service__list-icon'/>
              <p>2nd at Webdev Competetion(Coding Ninjas).</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Data Analyst</h3>
          </div>
          <ul className="service__list">
            <li>
              <CiBookmarkCheck className='service__list-icon'/>
              <p>Have Knowledge about python.</p>
            </li>
            <li>
              <CiBookmarkCheck className='service__list-icon'/>
              <p>Library's such as seaborn and matplotlib.</p>
            </li>
            <li>
              <CiBookmarkCheck className='service__list-icon'/>
              <p>Worked with Tablue.</p>
            </li>
            <li>
              <CiBookmarkCheck className='service__list-icon'/>
              <p>Know Deep-Learning and Machine Learning.</p>
            </li>
            <li>
              <CiBookmarkCheck className='service__list-icon'/>
              <p>Worked on DS And Deep-Learning Projects.</p>
            </li>
            <li>
              <CiBookmarkCheck className='service__list-icon'/>
              <p>4th Place at Project Exhibition at CMRIT.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Software Engineer</h3>
          </div>
          <ul className="service__list">
            <li>
              <CiBookmarkCheck className='service__list-icon'/>
              <p>Knowledge About Data Structures And Algorithms.</p>
            </li>
            <li>
              <CiBookmarkCheck className='service__list-icon'/>
              <p>Deep Knowledge About OOP's concepts</p>
            </li>
            <li>
              <CiBookmarkCheck className='service__list-icon'/>
              <p>Knowledge in SQL and MongoDB</p>
            </li>
            <li>
              <CiBookmarkCheck className='service__list-icon'/>
              <p>Knowledge in CNS and Operating Systems. </p>
            </li>
            <li>
              <CiBookmarkCheck className='service__list-icon'/>
              <p>Certified in Java Programming Language.</p>
            </li>
            <li>
              <CiBookmarkCheck className='service__list-icon'/>
              <p>Build various projects on C++.</p>
            </li>
          </ul>
        </article>
      </div>
      
    </section>
  )
}

export default Services