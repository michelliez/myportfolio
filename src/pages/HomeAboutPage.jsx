import React from 'react';
import mepicture from '../assets/Me.JPG';
import CarnegieHallPicture from '../assets/Carnegie 1.JPG';

function ImageWithCaption({ src, caption, alt }) {
  return (
    <div className="image-section">
      <img src={src} alt={alt} className="section-image" />
      <p className="image-caption">{caption}</p>
    </div>
  );
}

export default function HomeAboutPage() {
  return (
    <div className="page">
      <section id="home" className="section hero">
        <h1 className="hero-title">Michelle Zhou</h1>
        <p className="hero-subtitle">Egleston Scholar @ Columbia SEAS</p>
      </section>

      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="section-text">
              Michelle Zhou studies Computer Engineering and Applied Mathematics at Columbia University's Fu Foundation School of Engineering and Applied Science (Class of 2029). 
              
              She is passionate about technology, and hopes to create medical devices in the future. 
             
              Currently, she researches at the Frank Lab and is a member of various math and engineering groups. 

            </p>
          </div>
          <div className="about-image">
            <ImageWithCaption 
              src={mepicture} 
              alt="My photo" 
              caption="Michelle Zhou" 
            />
          </div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="section-text">
             Aside from STEM involvement, Michelle is an artist. She has been trained in visual arts for over 10 years and has created numerous paintings. Additionally, Michelle is a classically-trained violinist with over 14 years of experience and has performed in Carnegie Hall several times.

            </p>
          </div>
          <div className="about-image">
            <ImageWithCaption 
              src={CarnegieHallPicture} 
              alt="Carnegie Hall1" 
              caption="Carnegie Hall" 
            />
          </div>
        </div>
      </section>
    </div>
  );
}