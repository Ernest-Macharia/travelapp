import React from 'react'
import './TravelSection.css';
import '../App.css';
import { Button } from './Button';
 function TravelSection() {
    return (
        <div className="hero-container"> 
            <video src="/videos/video-1.mp4" autoPlay loop muted></video>
            <h1>AWESOME ADENTURE</h1>
            <p>What are you waiting?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    Get Started
                </Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                    Watch Trailer <i className="far fa-play-circle" />
                </Button>
            </div>
        </div>
    )
}

export default TravelSection;