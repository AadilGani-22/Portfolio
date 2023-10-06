import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {GiSkills} from 'react-icons/gi'
import {RiServiceLine} from 'react-icons/ri'
import {BiSolidMessageRoundedDetail} from 'react-icons/bi'
import './nav.css'
import { useState } from 'react'
const Nav = () => {
  const [activeNav , setActiveNav] = useState('')
  return (
    <nav>
      <a href="#home" onClick={()=>setActiveNav('#home')} className={activeNav==='#home' ? 'active': ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className = {activeNav==='#about'? 'active':''}><BiUser/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className = {activeNav==='#experience'? 'active':''}><GiSkills/></a>
      <a href="#services" onClick={()=>setActiveNav('#services')} className = {activeNav==='#services'? 'active':''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className = {activeNav==='#contact'? 'active':''}><BiSolidMessageRoundedDetail/></a>
    </nav>
  )
}

export default Nav