import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './waitlist.css'
import '../logonav.css'


const WaitList = (props) => {

    const [email, setEmail] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const [statusColor, setStatusColor] = useState('');

    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };
    const handleClick = () => {

      if (!validateEmail(email)) {
        setStatusMessage('Niepoprawny e-mail. Spróbuj ponownie!');
        setStatusColor('red');
        setEmail('');
        setTimeout(() => {
          setStatusMessage('');
          }, 8000);
        return;
      }
      fetch('/.netlify/functions/server', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, listID: [4] })
      })
      .then(response => response.json())
      .then(data => {
        setStatusMessage('Gratulacje! Jesteś oficjalnie ze Smart.ie!');
        setStatusColor('#4CC366');
        setEmail('');
        setTimeout(() => {
          setStatusMessage('');
          }, 8000);
      })
      .catch(error => {
        console.error(error)
        setStatusMessage('Problem z e-mailem. Spróbuj inny e-mail lub ponownie później!');
        setStatusColor('red');
        setTimeout(() => {
          setStatusMessage('');
          }, 8000);
      });
    };

    return (
            <div class="home-container-sub">
                <Helmet>
                    <title>Wait Lista</title>
                    <meta property="og:title" content="Wait Lista" />
                </Helmet>

                <div className="navbar-logo-container">
                    <Link to="/">
                    <img
                        id="logo"
                        alt='pastedImage'
                        src='/playground_assets/logo.png'
                        className="navbar-logo-pasted-image"
                    />
                    </Link>
                    <h2 className="home-heading09 section-heading" id="heading">
                        Premiera <span style={{color: '#4CC366'}}>Smart.ie</span> już 1 września 2023!
                    </h2>
                </div>

                <section className="waitlist-section" style={{marginTop: '20vh', marginBottom: '20vh', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                    
                    <div  className="waitlist-form">
                            {statusMessage && (
                            <div style={{ fontFamily: 'Montserrat', fontSize: '16px', color: statusColor, textAlign: 'center' }}>
                            {statusMessage}
                            </div>
                            )}
                        <div className="waitlist-form-input">
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="twoj@gmail.com"
                                autoComplete="off" 
                                className="waitlist-text-input input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="waitlist-form-button" onClick={handleClick}>Zapisz się!</button>
                    </div>
                
                </section>

                <footer className="home-footer">
                <div className="home-content5" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <main className="home-main-content">
                    <div className="home-content6">
                    <header className="home-main3">
                        <div className="home-header09">
                        <div className="home-container2">
                            <span>Text</span>
                            <span className="home-text16">Smart.ie</span>
                        </div>
                        <span className="home-text17">
                            <span>Oszczędzaj bez zmiany swojego</span>
                            <br></br>
                            <span>lifestylu żywieniowego!</span>
                            <br></br>
                        </span>
                        </div>
                        <div className="home-socials">
                        <a
                            href="https://www.facebook.com/profile.php?id=100091242044447"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="home-link"
                        >
                            <svg
                            viewBox="0 0 602.2582857142856 1024"
                            className="home-icon2"
                            >
                            <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/company/smart-ie/about/"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="home-link1"
                        >
                            <img
                            alt="image"
                            src="/playground_assets/linkedin-200h.png"
                            className="home-linked-in social"
                            />
                        </a>
                        <a
                            href="https://www.tiktok.com/@smart.ie_pl"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="home-link2"
                        >
                            <img
                            alt="image"
                            src="/playground_assets/tiktok-200w.png"
                            className="home-linked-in1 social"
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/smart.ie/"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="home-link2"
                        >
                            <img
                            alt="image"
                            src="/playground_assets/instagram.png"
                            className="home-linked-in1 social"
                            />
                        </a>
                        </div>
                    </header>
                    </div>
                    <section className="home-copyright">
                    <span className="home-text33">
                        <span>© 2023 Smart.ie</span>
                        <br></br>
                    </span>
                    </section>
                </main>
                <section className="home-copyright1">
                    <span className="home-text42">
                    © 2023 Smart.ie
                    </span>
                </section>
                </div>
            </footer>        

            </div>
    )
}

export default WaitList