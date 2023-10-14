import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <div className='gpt3__footer section padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step into the future before others</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={logo} alt='logo'/>
          <p>Project By Utkarsh Ojha, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_lnk">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_lnk">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_lnk">
        <h4>Get in touch</h4>
        <p>Utkarsh Ojha_GPT3_project</p>
        <p>00000000000</p>
        <p>xyz@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 GPT-3. All rights reserved.</p>
    </div>
    </div>
  )
}

export default Footer