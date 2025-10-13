import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { StepCard } from './StepCard';
import './stepbystep.css';

const preparationSteps = {
  1: 'Ohřej vodu na 70°C. ',
  2: 'Pomocí sítka prosej 1–2 g matcha prášku do misky.',
  3: 'Přidej trochu vody a rozmíchej bambusovou metličkou, dokud nevznikne jemná pěna.',
  4: 'Zahřej mléko (nevař!) a vyšlehej ho do pěny. Poté nalij napěněné mléko do šálku s matchou.',
  5: 'Hotovo! Vychutnej si matchu. Přidej med, agáve, vanilkový extrakt nebo skořici podle chuti.',
};

const stepImages = {
  1: '/img/step1.png',
  2: '/img/step2.png',
  3: '/img/step3.png',
  4: '/img/step4.png',
  5: '/img/step5.png',
};

export const StepByStep = () => {
  const { stepId } = useParams();
  const stepContent = preparationSteps[stepId];
  const stepNumber = parseInt(stepId);
  const totalSteps = Object.keys(preparationSteps).length;
  const currentImage = stepImages[stepNumber];

  return (
    <section
      className="stepbystep-section min-h-screen flex flex-col items-center bg-cover bg-center transition-all duration-500 ease-in-out"
      style={{ backgroundImage: "url('/img/matcha-icon1.png')" }}
    >
      <h1 className="text-[2.5rem] mb-2 text-[var(--text-dark-green)] font-semibold font-caveat tracking-wide leading-snug text-center">
        PŘÍPRAVA KROK ZA KROKEM
      </h1>

      <ul className="steps w-full my-5">
        {Object.keys(preparationSteps).map((id) => {
          const numericId = parseInt(id);

          const stepClass =
            numericId < stepNumber
              ? 'step step-completed'
              : numericId === stepNumber
              ? 'step step-custom-active'
              : 'step step-custom';

          return (
            <li key={id} className={stepClass}>
              <Link
                to={`/stepbystep/${numericId}`}
                className="step-link"
                aria-label={`Krok ${numericId}`}
              />
            </li>
          );
        })}
      </ul>
      {stepContent ? (
        <StepCard
          stepId={stepId}
          stepContent={stepContent}
          stepNumber={stepNumber}
          totalSteps={totalSteps}
          currentImage={currentImage}
        />
      ) : (
        <p className="text-gray-600">
          Neplatný krok. Zkuste např. <code>/stepbystep/1</code>
        </p>
      )}
    </section>
  );
};
