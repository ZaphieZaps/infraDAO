import React from 'react';
import { useNavigate } from 'react-router-dom';

function BackToHome() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      style={{
        marginTop: '2rem',
        padding: '0.6rem 1.2rem',
        backgroundColor: '#73b300',
        color: 'white',
        border: 'none',
        borderRadius: '1.5rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        fontSize: '1rem',
      }}
    >
      &larr; Back to Home
    </button>
  );
}

export default BackToHome;
