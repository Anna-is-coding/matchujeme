import React from 'react';
import './homepage.css';
import homepageImage from './icons/homepage_matcha_pink.jpg';


export const HomePage = () => {
  return (
     <div className="hero min-h-screen"
      style={{
      backgroundImage: `url(${homepageImage})`,
      }}>
      <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Matchujeme</h1>
      <p className="mb-8">
        Zamatchuj se do světa chutí! 
      </p>
    </div>
  </div>
</div>
  );
};
