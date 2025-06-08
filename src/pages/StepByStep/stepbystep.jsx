import React from "react"; 
import { useParams, Link } from "react-router-dom";
import "./stepbystep.css";

const preparationSteps = {
  1: "Ohřej vodu na 70°C.",
  2: "Nasyp 1-2 g matchi do chawan (misky).",
  3: "Přidej trochu vody a rozmělej bambusovou metličkou (chasen).",
  4: "Dolij vodu a šlehej do pěny.",
  5: "Hotovo! Vychutnej si matchu."
};

export const StepByStep = () => {
  const { stepId } = useParams();
  const stepContent = preparationSteps[stepId];
  const stepNumber = parseInt(stepId);
  const totalSteps = Object.keys(preparationSteps).length;

  return (
    <section
  className="p-6 min-h-screen flex flex-col items-center justify-center bg-cover bg-center transition-all duration-500 ease-in-out"
  style={{ backgroundImage: "url('/img/image-stepbystep.jpg')" }}
>
    <h2 className="text-4xl font-bold text-green-900 mb-10 text-center">Příprava krok za krokem</h2>

      {stepContent ? (
        <div className="card card-bordered border-green-800 bg-green-100 shadow-xl w-full max-w-3xl text-center transition-all duration-500 ease-in-out">
          <div className="card-body items-center">
            <h2 className="card-title text-3xl text-green-900 justify-center mb-4">Krok {stepId}</h2>
            <ul className="steps steps-horizontal mb-6 justify-center">
              {Object.keys(preparationSteps).map((id) => (
                <Link key={id} to={`/stepbystep/${id}`} className="no-underline">
                  <li
                    className={`step text-green-900 ${stepId === id ? "step-primary bg-green-300 text-white" : "bg-green-100"}`}
                  >
                    {id}
                  </li>
                </Link>
              ))}
            </ul>
            <p className="text-xl text-green-800 mb-6">{stepContent}</p>
            <div className="card-actions justify-center gap-6">
              {stepNumber > 1 && (
                <Link
                  to={`/stepbystep/${stepNumber - 1}`}
                  className="btn btn-active btn-secondary"
                >
                  Zpět
                </Link>
              )}
              {stepNumber < totalSteps && (
                <Link
                  to={`/stepbystep/${stepNumber + 1}`}
                  className="btn btn-active btn-secondary"
                >
                  Další krok
                </Link>
              )}
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-600">
          Neplatný krok. Zkuste např. <code>/stepbystep/1</code>
        </p>
      )}
    </section>
  );
};

// využít podmínky, když kliknu na 1,podmínka if, string step, pracování v URL () - přidávání parametrů do URL v routerování, 
