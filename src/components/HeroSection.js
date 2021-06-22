import React from 'react'
import './css/App.css'
import {Button} from './Button'
import './css/HeroSection.css'
import './css/Button.css'


function HeroSection() {
    return (
        <div className="hero-container">
            <img src="/images/mar.jpg"></img>
            <h1>RGAMNETIC GAMES</h1>
            <p>Do you have gaming DNA?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">GET STARTED</Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">WATCH TRAILER<i className="far fa-play-circle"/></Button>
            </div>
        </div>
    )
}

export default HeroSection
