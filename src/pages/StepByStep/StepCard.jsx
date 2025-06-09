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
    <div className="card flex flex-col-reverse md:flex-row max-w-2xl w-full h-auto md:h-[320px] border-green-700 shadow-xl text-center transition-all duration-500 ease-in-out overflow-hidden">
      <figure className="w-full md:w-1/2 h-64 md:h-full">
        <img
          src={currentImage}
          alt={`Krok ${stepId}`}
          className="w-full h-full object-cover"
        />
      </figure>

      <div
        className="card-body w-full md:w-1/2 flex flex-col justify-center items-center p-6 
        text-white shadow-inner 
        bg-[var(--border-green)]"
        style={{ backgroundColor: 'rgba(63, 98, 18, 0.95)' }}
      >
        <h2 className="card-title text-3xl text-[var(--border-green)]">
          Krok {stepId}
        </h2>
        <p className="text-xl text-[var(--border-green)]">{stepContent}</p>

        <div className="card-actions justify-center gap-6 mt-4">
          {stepNumber > 1 && (
            <Link
              to={`/stepbystep/${stepNumber - 1}`}
              className="btn text-white hover:opacity-90 border-none"
              style={{ backgroundColor: '#3f6212' }}
            >
              Zpět
            </Link>
          )}
          {stepNumber < totalSteps && (
            <Link
              to={`/stepbystep/${stepNumber + 1}`}
              className="btn text-white hover:opacity-90 border-none"
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
