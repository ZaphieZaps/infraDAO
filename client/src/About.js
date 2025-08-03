import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/background.jpg.jpg'; // Logo image
import blockchainImage from './assets/Blockchain.jpg'; // Your custom image

function About() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#000',
        color: '#fff',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: '0 1rem',
      }}
    >
      {/* Top Navbar with logo */}
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 2rem',
        }}
      >
        <img
          src={logo}
          alt="InfraDAO Logo"
          style={{
            width: '1.5in',
            height: '1.5in',
            objectFit: 'contain',
            borderRadius: '10px',
            boxShadow: '0 0 12px rgba(115, 179, 0, 0.4)',
          }}
        />
      </header>

      {/* About Page Content */}
      <main
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '2rem 0 4rem',
          lineHeight: '1.6',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            marginBottom: '2rem',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#73b300',
          }}
        >
          COMPANY PROFILE
        </h1>

        <div
          style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
            marginBottom: '3rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ flex: '1 1 300px' }}>
            <p style={{ fontSize: '1.2rem' }}>
              InfraDAO is a citizen‑driven infrastructure management platform built on blockchain.
              It empowers municipalities and residents to report and resolve city infrastructure
              issues transparently.
            </p>
          </div>

          <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
            <img
              src={blockchainImage}
              alt="Blockchain infrastructure"
              style={{
                maxWidth: '100%',
                borderRadius: '8px',
                objectFit: 'cover',
                boxShadow: '0 0 8px rgba(0, 0, 0, 0.5)',
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '4rem',
            flexWrap: 'wrap',
            marginBottom: '3rem',
          }}
        >
          <div style={{ flex: '1 1 250px' }}>
            <h2 style={{ color: '#73b300' }}>MISSION</h2>
            <p>
              Leveraging blockchain’s auditability and token incentives so that “citizens are
              partners, not customers,” in city projects.
            </p>
          </div>

          <div style={{ flex: '1 1 250px' }}>
            <h2 style={{ color: '#73b300' }}>VISION</h2>
            <p>
              InfraDAO endeavors to be Africa’s leading citizen-centered infrastructure maintenance
              and crowdfunding platform built on blockchain technology.
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: '3rem',
            padding: '2rem',
            backgroundColor: '#222',
            textAlign: 'center',
            fontWeight: '700',
            letterSpacing: '0.1em',
            fontSize: '1.25rem',
            borderRadius: '8px',
            userSelect: 'none',
            textTransform: 'uppercase',
            color: '#73b300',
          }}
        >
          <p>AUDITABILITY • TRANSPARENCY • INCORRUPTIBILITY • IDENTITY PROTECTION</p>
          <p>REAL-TIME TRANSACTIONS • DATA PROTECTION • GUARANTEED</p>
        </div>

        {/* Back to Home Button */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link
            to="/"
            style={{
              backgroundColor: '#73b300',
              color: '#fff',
              padding: '0.75rem 1.5rem',
              borderRadius: '1.5rem',
              fontWeight: 'bold',
              textDecoration: 'none',
              fontSize: '1rem',
              display: 'inline-block',
              transition: 'background 0.2s',
            }}
          >
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}

export default About;




