import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './waitlist.css'
import '../logonav.css'


const WaitList = (props) => {

    const [email, setEmail] = useState('');

    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };
    const handleClick = () => {

      if (!validateEmail(email)) {
        setEmail('');
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
        setEmail('');
      })
      .catch(error => {
        console.error(error)
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

                <section className="waitlist-section" style={{paddingTop: '15vh', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                
                    <div  className="waitlist-form">
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

            </div>
    )
}

export default WaitList