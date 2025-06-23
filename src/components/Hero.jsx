// About.jsx
import React from 'react';
import { Typed } from 'react-typed';

function Hero() {
  return (
    <div>
      <h1>
        <Typed
          strings={['Halo', 'Selamat datang', 'Ini React Typed']}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </h1>
    </div>
  );
}

export default Hero;
