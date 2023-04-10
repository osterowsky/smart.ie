import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './waitlist.css'
import '../logonav.css'


const WaitList = (props) => {

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

                <section className="waitlist-section">
                
                    
                
                </section>        

            </div>
    )
}

export default WaitList