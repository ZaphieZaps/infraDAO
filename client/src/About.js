import React from 'react';
import BackToHome from './BackToHome';

function About() {
  return (
    <div className="page about-page" style={{ textAlign: 'center' }}>
      <h1>About InfraDAO</h1>
      <p>This is the About page with information about InfraDAO.</p>
      <BackToHome />
    </div>
  );
}

export default About;
