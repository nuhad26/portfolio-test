import React from 'react'
import './footer.css'
const footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
             <p>Hi !, I am a Web Developer from Calicut,Kerala. Having experience in React.js,javascript,node.js 
                    and many commonly used libraries and frameworks. I have a passion for coding and problem-solving,
                  </p> 
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div >
                   <button className='footer-email-button'>Subscribe</button>
                </div>
                    <div className="footer-bottom">
                        <div className="footer-bottom-left">
                <p>© 2025 Aman Nuhad. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Contact with Me</p>
                </div>
                        </div>
                    </div>
            </div>
      </div>
    </div>
  )
}

export default footer
