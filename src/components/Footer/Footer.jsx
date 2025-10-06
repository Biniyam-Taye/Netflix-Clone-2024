import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
<div className="footer-icons">
    <img src={youtube_icon} alt="" />
    <img src={twitter_icon} alt="" />
    <img src={instagram_icon} alt="" />
    <img src={facebook_icon} alt="" />
</div>
<ul>
    <li>Audio Description</li>
    <li>Help Center</li>
    <li>Gift Card</li>
    <li>Media Center</li>
    <li>Investor Relation</li>
    <li>Jobs</li>
    <li>Terms of Use</li>
    <li>Privacy</li>
    <li>Legal Notices</li>
    <li>Cookie Preferances</li>
    <li>Corporate Information</li>
    <li>Contact Us</li>
</ul>
<p className='copyright-text'>© 2025 Netflix Clone by Biniyam Taye. This project is for learning and portfolio use only.</p>
    </div>
  )
}

export default Footer