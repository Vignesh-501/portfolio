import React, { useEffect, useLayoutEffect, useRef } from "react";

import './AboutSection.css'
import Rover from '../../assets/rover.svg';
import Resume from '../../assets/Resume (1).pdf'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";

export default function AboutSection() {
    const hero = useRef(null);

    // Canvas animation
    useEffect(() => {
        const myCanvas = document.querySelector('.about-canvas');
        const workArea = document.getElementById('about-section');

        const context = myCanvas.getContext('2d');
        myCanvas.width = myCanvas.offsetWidth;
        myCanvas.height = myCanvas.offsetHeight;
        let stars = [];
        const colors = ['#A775F9', '#762AEF', '#5209C7']
        
        for (let i = 0; i < 100; i++) {
            const color = Math.floor(Math.random() * 3);
            const radius = Math.floor(Math.random() * 2);
            const speed = Math.random() * 5;
            const direction = Math.random() * Math.PI * 2;
    
            stars.push({
                x: myCanvas.width/2,
                y: myCanvas.height/2,
                color: color,
                radius: radius,
                speed: speed,
                direction: direction
            })
        }

        const drawOnScreen = () => {
            stars.forEach(star => {
                context.fillStyle = colors[star.color];
                context.beginPath();
                context.arc(star.x, star.y, star.radius, 0, Math.PI*2)
                context.fill()
            })
        }
        
        function animateStars() {
            context.clearRect(0, 0, myCanvas.width, myCanvas.height);
            stars.forEach(star => {
                star.x += star.speed * Math.cos(star.direction);
                star.y += star.speed * Math.sin(star.direction);
                context.beginPath();
                context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                context.fill();
    
                if (star.x > myCanvas.width || star.x < 0) {
                    star.x = myCanvas.width/2;
                    star.y = (myCanvas.height)/2;
                }
                if (star.y > myCanvas.height || star.y < 0) {
                    star.x = myCanvas.width/2;
                    star.y = (myCanvas.height)/2;
                }
            });

            requestAnimationFrame(animateStars)
        }

        animateStars()

        drawOnScreen();
    }, [])

    useGSAP(() => {
        const aboutHead = document.querySelector('#about-section h2');
        const aboutConent = document.querySelector('.about-me-text-container p');

        const aboutText = new SplitType(aboutConent).words;

        const aboutTimeLine = gsap.timeline(
            {
                scrollTrigger: '.about-container'
            }
        );

        aboutTimeLine.fromTo(
            aboutHead,
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 1,
                ease: 'none'
            }
        ).fromTo(
            aboutText,
            {
                opacity: 0
            },
            {
                rotate: 0,
                opacity: 1,
                stagger: .1,
                duration: 3
            }
        )
    })

    return(
        <div ref={hero} className="about-container" id="about-section">
                <h2>About Me</h2>
                <canvas className="about-canvas"></canvas>
                <div className="about-me-outer-container">
                    <div className="about-me-content-container">
                        <div className="about-me-text-container"> 
                            <p>
                                Hello! I'm Vignesh, an aspiring software engineer passionate about creating innovative and efficient solutions through code. Currently pursuing my Bachelor's in Computer Science and Engineering, I am dedicated to building my skills and contributing to the tech community. I thrive on tackling complex problems and turning ideas into reality through coding. In addition to my studies, I actively participate in hackathons and open-source projects to stay at the forefront of technology. Let's connect and collaborate to shape the future of tech together!
                            </p>
                        </div>
                    </div>
                    <div className="button-container">
                        <a href={Resume} target="_" className="resume-button">
                            <span>
                                Resume
                            </span>
                        </a>
                    </div>
                </div>
        </div>
    )
}