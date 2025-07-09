import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  
  return (
    <>
    <div className='footer '>
      <ul >
        <h2>INFORMATION</h2>
      <Link to="/Store"style={{ textDecoration: 'none' }}>  <li>About Store</li></Link>
      <Link to="/NewCollection"style={{ textDecoration: 'none' }}>  <li>New Collection</li></Link>
     <Link to="/privacy" style={{ textDecoration: 'none' }}>   <li>Privacy Policy</li> </Link>
     <Link to="/terms" style={{ textDecoration: 'none' }}>    <li>Terms Of Use</li></Link>
      </ul>
      
      <ul >
      <h2> MENU</h2>
     <Link to="/Mensfooter" style={{ textDecoration: 'none' }}>   <li>Men Collection</li></Link>
     <Link to="/Bagfooter" style={{ textDecoration: 'none' }}>   <li>bag collection</li></Link>
      <Link to="/WomensCollerction" style={{ textDecoration: 'none' }}>    <li>Woman Collection</li></Link>
     <Link to="/Footwarefooter" style={{ textDecoration: 'none' }}>   <li>Footwear collection</li></Link>
      </ul>
      <ul >
       <h2>KEEP IN TOUCH</h2>
     <a href="https://www.facebook.com" target="_blank"style={{ textDecoration: 'none' }}> <li>Facebook </li></a>
     <a href="https://www.instagram.com" target="_blank"style={{ textDecoration: 'none' }}> <li>Instagram profile </li></a>
     <a href="https://www.youtube.com/" target="_blank"style={{ textDecoration: 'none' }}> <li>Youtube </li></a>
     <a href="https://x.com/?lang=en" target="_blank"style={{ textDecoration: 'none' }}> <li>X.com </li></a>
       
      </ul>
      <ul >
      <h2>About The Store</h2>
      <li></li>
      <p>STORE - worldwide fashion store since 1978. We sell over 1000+ branded products.</p>
       <li> Phone: (064) 332-1233</li>
      </ul>
    
    </div>
    </>
  )
}

export default Footer
