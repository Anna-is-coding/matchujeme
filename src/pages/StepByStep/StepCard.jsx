import React from 'react';
import { Link } from 'react-router-dom';

export const StepCard = ({
  stepId,
  stepContent,
  stepNumber,
  totalSteps,
  currentImage,
}) => {
  return (
    <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row overflow-hidden rounded-xl shadow-xl border border-green-700 bg-white">
      <div className="w-full md:w-1/2">
        <img
          src={currentImage}
          alt={`Krok ${stepId}`}
          className="w-full h-auto md:h-full object-cover"
        />
      </div>

      <div
        className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 text-white"
        style={{ backgroundColor: 'rgba(63, 98, 18, 0.95)' }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--border-green)] text-center mb-4">
          Krok {stepId}
        </h2>
        <p className="text-lg md:text-xl text-[var(--border-green)] text-center">
          {stepContent}
        </p>

        <div className="flex gap-4 mt-6">
          {stepNumber > 1 && (
            <Link
              to={`/stepbystep/${stepNumber - 1}`}
              className="btn text-white border-none"
              style={{ backgroundColor: '#3f6212' }}
            >
              Zpět
            </Link>
          )}
          {stepNumber < totalSteps && (
            <Link
              to={`/stepbystep/${stepNumber + 1}`}
              className="btn text-white border-none"
              style={{ backgroundColor: '#3f6212' }}
            >
              Další krok
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
