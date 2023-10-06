import React from 'react'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo" >AadilGani</a>

      <ul className="permalinks">
        <li><a href="#home"> </a></li>
        <li><a href="#about" rel="noopener, noreferrer ">About</a></li>
        <li><a href="#experience" rel="noopener , noreferrer">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portolio</a></li>
        <li><a href="#testimonial">Internships</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="#contact"><BsWhatsapp /></a>
        <a href="#contact"><FiInstagram /></a>
        <a href="https://x.com/AadilGani20?t=YUHeQ4NQdthTbf7BFtLIXQ&s=08" target="_blank" rel="noopener, noreferrer"><BsTwitter /></a>
        <a href="https://github.com/AadilGani-22" target="_blank" rel="noopener, noreferrer"><BsGithub /></a>
        <a href="https://www.linkedin.com/in/aadil-gani-6978b3137/" target="_blank" rel="noopener, noreferrer"><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small> &#169; Aadil Gani </small>
      </div>
    </footer>
  )
}

export default Footer