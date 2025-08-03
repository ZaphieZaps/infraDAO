import React from 'react';
import BackToHome from './BackToHome';

function Contact() {
  return (
    <div
      className="page contact-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '1rem', color: '#73b300' }}>
        Contact Us
      </h1>

      <p style={{ fontSize: '1.5rem', marginBottom: '2rem', fontWeight: '600' }}>
        Check out our app here:{' '}
        <a
          href="https://blockchain-crowdfund-potholes.deploypad.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#73b300', textDecoration: 'underline', fontWeight: '700' }}
        >
          Blockchain Crowdfund Potholes App
        </a>
      </p>

      <p style={{ fontSize: '1.3rem', fontWeight: '600' }}>
        For inquiries, email us at:
        <br />
        <a href="mailto:admin@potholedao.space" style={{ color: '#73b300', fontWeight: '700' }}>
          admin@potholedao.space
        </a>
        <br />
        <a href="mailto:admin@infradao.space" style={{ color: '#73b300', fontWeight: '700' }}>
          admin@infradao.space
        </a>
      </p>

      <BackToHome />
    </div>
  );
}

export default Contact;




