import React from 'react';

export const NextButton = ({ isLast, onClick }) => (
  <button onClick={onClick} className="next-button">
    {isLast ? 'Dokončit' : 'Další'}
  </button>
);
