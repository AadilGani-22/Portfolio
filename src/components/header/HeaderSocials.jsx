import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/aadil-gani-6978b3137/" target='_blank' rel="noreferrer" ><BsLinkedin /></a>
        <a href="https://github.com/AadilGani-22" target='_blank' rel="noreferrer"><BsGithub /></a>
        <a href="https://instagram.com" target='_blank' rel="noreferrer"><FaInstagramSquare /></a>
        <a href="https://x.com/AadilGani20?t=YUHeQ4NQdthTbf7BFtLIXQ&s=08 " target='_blank' rel="noreferrer"><BsTwitter /></a>
    </div>
  )
}

export default HeaderSocials