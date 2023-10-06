import React from 'react'
import './experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3Full} from 'react-icons/di'
import {FaBootstrap} from 'react-icons/fa'
import {FaJava} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {SiExpress} from 'react-icons/si'
import {LiaNodeJs} from 'react-icons/lia'
import {DiNodejs} from 'react-icons/di'
import {DiJavascript1} from 'react-icons/di'
import {BiLogoJavascript} from 'react-icons/bi'
import {SiMysql} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {SiCplusplus} from 'react-icons/si'
import {BiLogoPython} from 'react-icons/bi'

const Experience = () => {
  return (
    <section id='experience'>
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>

    <div className="container experience__container">
      <div className="experience_fronted">
        <h3>FrontEnd Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <AiFillHtml5 className='experience__details-icon' />
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Intermidiate</small>
            </div>
          </article>
          <article className="experience__details">
            <DiCss3Full className='experience__details-icon' />
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermidiate</small>
            </div>
          </article>
          <article className="experience__details">
            <FaBootstrap className='experience__details-icon' />
            <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Intermidiate</small>
            </div>
          </article>
          <article className="experience__details">
            <FaReact className='experience__details-icon' />
            <div>
            <h4>ReactJS</h4>
            <small className='text-light'>Intermidiate</small>
            </div>
          </article>
        </div>
      </div>
      <div className="experience__backend">
      <h3>Backend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <DiNodejs className='experience__details-icon' />
            <div>

            <h4>NodeJs</h4>
            <small className='text-light'>Intemidiate</small>
            </div>
          </article>
          <article className="experience__details">
            <BiLogoJavascript className='experience__details-icon' />
            <div>

            <h4>Javascript</h4>
            <small className='text-light'>Intermidiate</small>
            </div>
          </article>
          <article className="experience__details">
            <LiaNodeJs className='experience__details-icon' />
            <div>

            <h4>Embedded JS</h4>
            <small className='text-light'>Intermidiate</small>
            </div>
          </article>
          <article className="experience__details">
            <SiExpress className='experience__details-icon' />
            <div>

            <h4>Express</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
        </div>
      </div>
      <div className="experience__languages">
      <h3>Languages</h3>
        <div className="experience__content">
          <article className="experience__details">
            <SiCplusplus className='experience__details-icon' />
            <div>
            <h4>C++</h4>
            <small className='text-light'>Intermidiate</small>
            </div>
          </article>
          <article className="experience__details">
            <FaJava className='experience__details-icon' />
            <div>

            <h4>Java</h4>
            <small className='text-light'>Beginner</small>
            </div>
          </article>
          <article className="experience__details">
            <DiJavascript1 className='experience__details-icon' />
            <div>

            <h4>Javascript</h4>
            <small className='text-light'>Intermidiate</small>
            </div>
          </article>
          <article className="experience__details">
            <BiLogoPython className='experience__details-icon' />
            <div>

            <h4>Python</h4>
            <small className='text-light'>Beginner</small>
            </div>
          </article>
        </div>
      </div>
      <div className="experience_databases">
        <h3>Databases</h3>
        <div className="experience__content">
          <article className="experience__details">
            <SiMysql className='experience__details-icon' />
            <div>
            <h4>My-SQL</h4>
            <small className='text-light'>Intermidiate</small>
            </div>
          </article>
          <article className="experience__details">
            <SiMongodb className='experience__details-icon' />
            <div>
            <h4>MongoDB</h4>
            <small className='text-light'>Intermidiate</small>
            </div>
          </article>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Experience