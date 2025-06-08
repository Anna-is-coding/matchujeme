import React from 'react';
import './quiz.css';

import { QuizResults } from '../../components/QuizResults/QuizResults';
import { QuestionCard } from '../../components/QuestionCard/QuestionCard';
import { NextButton } from '../../components/NextButton/NextButton';
import { TransitionWrapper } from '../../components/TransitionWrapper/TransitionWrapper';
import { useQuizLogic } from '../../hooks/useQuizLogic';

export const Quiz = () => {
  const {
    currentIndex,
    selectedOption,
    questions,
    results,
    resultKeys,
    nodeRef,
    setSelectedOption,
    handleNext,
  } = useQuizLogic();

  if (resultKeys.length > 0) {
    return <QuizResults resultKeys={resultKeys} results={results} />;
  }

  const currentQuestion = questions[currentIndex];

  return (
    <section className="quiz-section">
      <div className="quiz-container">
        <h1 className="quiz-title">Jaký typ matcha pijáka jsi?</h1>
        <div className="card-wrapper">
          <TransitionWrapper nodeRef={nodeRef} transitionKey={currentIndex}>
            <QuestionCard
              question={currentQuestion}
              selectedOption={selectedOption}
              onSelect={setSelectedOption}
            />
          </TransitionWrapper>
        </div>
        <NextButton
          isLast={currentIndex === questions.length - 1}
          onClick={handleNext}
        />
      </div>
    </section>
  );
};

// ----------------------------------------------------------------------
// Původní varianta 2
// import React, { useState, useRef } from 'react';
// import { CSSTransition, SwitchTransition } from 'react-transition-group';
// import './quiz.css';
// import { QuizResults } from '../../components/QuizResults/QuizResults';

// export const Quiz = () => {
//   // 1) Definice otázek, možností a výsledků
//   const questions = [
//     {
//       id: 1,
//       text: 'Jak obvykle začínáš svůj den?',
//       options: [
//         { label: ' Pomalu, s knihou nebo meditací.', value: 'zen' },
//         { label: ' Na mobilu, rychlá snídaně a ven.', value: 'influencer' },
//         { label: ' Cvičením nebo procházkou.', value: 'zdravy' },
//         { label: ' Všechno na poslední chvíli!', value: 'kofein' },
//       ],
//     },
//     {
//       id: 2,
//       text: 'Co tě na matche nejvíc láká?',
//       options: [
//         { label: ' Její klidná energie a tradice.', value: 'zen' },
//         {
//           label: ' Že je to trend a vypadá dobře na Instagramu.',
//           value: 'influencer',
//         },
//         { label: ' Přírodní složení a zdravotní benefity.', value: 'zdravy' },
//         { label: ' Potřebuji prostě něco, co mě probudí.', value: 'kofein' },
//       ],
//     },
//     {
//       id: 3,
//       text: 'Kdy nejraději popíjíš matchu?',
//       options: [
//         {
//           label: ' Při tiché rituální ceremonii hned po probuzení.',
//           value: 'zen',
//         },
//         {
//           label:
//             ' V odpoledních hodinách v kavárně, kde fotím pro své sledující.',
//           value: 'influencer',
//         },
//         {
//           label: ' Po ranním cvičení jako součást svého zdravého režimu.',
//           value: 'zdravy',
//         },
//         {
//           label:
//             ' Ráno těsně před odchodem do práce, když potřebuji rychlý boost.',
//           value: 'kofein',
//         },
//       ],
//     },
//     {
//       id: 4,
//       text: 'Jak si nejčastěji připravuješ matchu?',
//       options: [
//         {
//           label:
//             ' Tradičně, s bambusovou miskou (chawan) a metličkou (chasen).',
//           value: 'zen',
//         },
//         {
//           label:
//             ' Stylově v instagram-friendly šejku nebo s latte art, aby to vypadalo skvěle.',
//           value: 'influencer',
//         },
//         {
//           label:
//             ' Smíchám ji do zeleného smoothie, bowl nebo přidám proteinový prášek.',
//           value: 'zdravy',
//         },
//         {
//           label:
//             ' Kupuji si ji hotovou „to-go“ v kelímku, abych ji mohl/a pít cestou.',
//           value: 'kofein',
//         },
//       ],
//     },
//     {
//       id: 5,
//       text: 'Co je podle tebe ideální místo na matcha chvíli?',
//       options: [
//         { label: ' Doma v tichu.', value: 'zen' },
//         { label: ' V kavárně s designem.', value: 'influencer' },
//         { label: ' Na výletě nebo v parku.', value: 'zdravy' },
//         { label: ' Kdekoli, hlavně rychle.', value: 'kofein' },
//       ],
//     },
//   ];

//   const results = {
//     zen: {
//       title: 'Tradiční Zen Piják',
//       description:
//         'Máš rád/a klid, rituály a kvalitu. Matcha je pro tebe víc než nápoj - je to způsob, jak zpomalit a zrelaxovat.',
//       tip: 'Tip: Vybírej ceremoniální matchu té nejvyšší třídy a zainvestuj do bambusové misky (chawanu) a metličky (chasenu).',
//     },
//     influencer: {
//       title: 'Matcha Influencer',
//       description:
//         'Sleduješ trendy, víš, co frčí, a matcha u tebe nesmí chybět na feedu. Důležité je, aby to vypadalo skvěle na fotce.',
//       tip: 'Tip: Experimentuj s barevnými variantami - třeba růžové matcha latte. Nezapomeň přidat #matchujeme a pár stylových snímků.',
//     },
//     zdravy: {
//       title: 'Superfood Matcha Nadšenec',
//       description:
//         'Bereš matchu jako součást zdravého životního stylu. Přidáváš ji do smoothie, bowl či proteinového nápoje pro maximální výživu.',
//       tip: 'Tip: Kombinuj matchu se špenátem, banánem nebo proteinovým práškem. Skvělá je zelená „power bowl“ nebo matcha-chia pudink pro energii bez výčitek.',
//     },
//     kofein: {
//       title: 'Kofeinový Záchranář',
//       description:
//         'Jdeš primárně po efektu - potřebuješ energii teď hned. Matcha pro tebe supluje kávu a nikdy ti nesmí dojít zásoba kofeinu.',
//       tip: 'Tip: Vyzkoušej silnější dávky (usucha / koicha) nebo si připrav cold brew matchu na cesty - vydrží ti čerstvá i pár hodin mimo domov.',
//     },
//   };

//   // Stavy
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState('');
//   const [answers, setAnswers] = useState({});
//   const [resultKeys, setResultKeys] = useState([]);
//   const nodeRef = useRef(null);

//   // Funkce pro výpočet výsledků (přesunuto ze samostatné komponenty)
//   const calculateResults = (ans) => {
//     const counts = { zen: 0, influencer: 0, zdravy: 0, kofein: 0 };
//     Object.values(ans).forEach((val) => {
//       if (counts[val] !== undefined) counts[val]++;
//     });
//     const maxCount = Math.max(...Object.values(counts));
//     const winners = Object.entries(counts)
//       .filter(([_, count]) => count === maxCount)
//       .map(([key]) => key);
//     const finalKey =
//       winners.length === 1
//         ? winners[0]
//         : winners[Math.floor(Math.random() * winners.length)];
//     setResultKeys([finalKey]);
//   };

//   // Po kliknutí na Další
//   const handleNext = () => {
//     if (!selectedOption) {
//       alert('Prosím, vyber odpověď.');
//       return;
//     }
//     const questionId = questions[currentIndex].id;
//     const newAnswers = { ...answers, [questionId]: selectedOption };
//     setAnswers(newAnswers);

//     if (currentIndex < questions.length - 1) {
//       setCurrentIndex((idx) => idx + 1);
//       setSelectedOption('');
//     } else {
//       calculateResults(newAnswers);
//     }
//   };

//   // Pokud jsou výsledky vypočteny, zobrazíme komponentu výsledků
//   if (resultKeys.length > 0) {
//     return <QuizResults resultKeys={resultKeys} results={results} />;
//   }

//   // Zobrazení jedné otázky s tlačítkem
//   const currentQuestion = questions[currentIndex];
//   return (
//     <section className="quiz-section">
//       <div className="quiz-container">
//         <h1 className="quiz-title">Jaký typ matcha pijáka jsi?</h1>
//         <div className="card-wrapper">
//           <SwitchTransition mode="out-in">
//             <CSSTransition
//               key={currentIndex}
//               classNames="card"
//               timeout={500}
//               nodeRef={nodeRef}
//               mountOnEnter
//               unmountOnExit
//             >
//               <div ref={nodeRef} className="question-block">
//                 <h2 className="question-title">{currentQuestion.text}</h2>
//                 {currentQuestion.options.map((opt) => (
//                   <label key={opt.value} className="option-label">
//                     <input
//                       type="radio"
//                       name={`question_${currentQuestion.id}`}
//                       value={opt.value}
//                       checked={selectedOption === opt.value}
//                       onChange={() => setSelectedOption(opt.value)}
//                     />
//                     {opt.label}
//                   </label>
//                 ))}
//               </div>
//             </CSSTransition>
//           </SwitchTransition>
//         </div>

//         <button onClick={handleNext} className="next-button">
//           {currentIndex < questions.length - 1 ? 'Další' : 'Dokončit'}
//         </button>
//       </div>
//     </section>
//   );
// };

// ----------------------------------------------------------------------
// Původní varianta 1
// import { useState, useRef } from 'react';
// import { CSSTransition, SwitchTransition } from 'react-transition-group';
// import './quiz.css';
// import { QuizResults } from '../../components/QuizResults/QuizResults';

// export const Quiz = () => {
//   // 1) Definice otázek, možností a výsledků
//   const questions = [
//     {
//       id: 1,
//       text: 'Jak obvykle začínáš svůj den?',
//       options: [
//         { label: ' Pomalu, s knihou nebo meditací.', value: 'zen' },
//         { label: ' Na mobilu, rychlá snídaně a ven.', value: 'influencer' },
//         { label: ' Cvičením nebo procházkou.', value: 'zdravy' },
//         { label: ' Všechno na poslední chvíli!', value: 'kofein' },
//       ],
//     },
//     {
//       id: 2,
//       text: 'Co tě na matche nejvíc láká?',
//       options: [
//         { label: ' Její klidná energie a tradice.', value: 'zen' },
//         {
//           label: ' Že je to trend a vypadá dobře na Instagramu.',
//           value: 'influencer',
//         },
//         { label: ' Přírodní složení a zdravotní benefity.', value: 'zdravy' },
//         { label: ' Potřebuji prostě něco, co mě probudí.', value: 'kofein' },
//       ],
//     },
//     {
//       id: 3,
//       text: 'Kdy nejraději popíjíš matchu?',
//       options: [
//         {
//           label: ' Při tiché rituální ceremonii hned po probuzení.',
//           value: 'zen',
//         },
//         {
//           label:
//             ' V odpoledních hodinách v kavárně, kde fotím pro své sledující.',
//           value: 'influencer',
//         },
//         {
//           label: ' Po ranním cvičení jako součást svého zdravého režimu.',
//           value: 'zdravy',
//         },
//         {
//           label:
//             ' Ráno těsně před odchodem do práce, když potřebuji rychlý boost.',
//           value: 'kofein',
//         },
//       ],
//     },
//     {
//       id: 4,
//       text: 'Jak si nejčastěji připravuješ matchu?',
//       options: [
//         {
//           label:
//             ' Tradičně, s bambusovou miskou (chawan) a metličkou (chasen).',
//           value: 'zen',
//         },
//         {
//           label:
//             ' Stylově v instagram-friendly šejku nebo s latte art, aby to vypadalo skvěle.',
//           value: 'influencer',
//         },
//         {
//           label:
//             ' Smíchám ji do zeleného smoothie, bowl nebo přidám proteinový prášek.',
//           value: 'zdravy',
//         },
//         {
//           label:
//             ' Kupuji si ji hotovou „to-go“ v kelímku, abych ji mohl/a pít cestou.',
//           value: 'kofein',
//         },
//       ],
//     },
//     {
//       id: 5,
//       text: 'Co je podle tebe ideální místo na matcha chvíli?',
//       options: [
//         { label: ' Doma v tichu.', value: 'zen' },
//         { label: ' V kavárně s designem.', value: 'influencer' },
//         { label: ' Na výletě nebo v parku.', value: 'zdravy' },
//         { label: ' Kdekoli, hlavně rychle.', value: 'kofein' },
//       ],
//     },
//   ];

//   const results = {
//     zen: {
//       title: 'Tradiční Zen Piják',
//       description:
//         'Máš rád/a klid, rituály a kvalitu. Matcha je pro tebe víc než nápoj - je to způsob, jak zpomalit a zrelaxovat.',
//       tip: 'Tip: Vybírej ceremoniální matchu té nejvyšší třídy a zainvestuj do bambusové misky (chawanu) a metličky (chasenu).',
//     },
//     influencer: {
//       title: 'Matcha Influencer',
//       description:
//         'Sleduješ trendy, víš, co frčí, a matcha u tebe nesmí chybět na feedu. Důležité je, aby to vypadalo skvěle na fotce.',
//       tip: 'Tip: Experimentuj s barevnými variantami - třeba růžové matcha latte. Nezapomeň přidat #matchujeme a pár stylových snímků.',
//     },
//     zdravy: {
//       title: 'Superfood Matcha Nadšenec',
//       description:
//         'Bereš matchu jako součást zdravého životního stylu. Přidáváš ji do smoothie, bowl či proteinového nápoje pro maximální výživu.',
//       tip: 'Tip: Kombinuj matchu se špenátem, banánem nebo proteinovým práškem. Skvělá je zelená „power bowl“ nebo matcha-chia pudink pro energii bez výčitek.',
//     },
//     kofein: {
//       title: 'Kofeinový Záchranář',
//       description:
//         'Jdeš primárně po efektu - potřebuješ energii teď hned. Matcha pro tebe supluje kávu a nikdy ti nesmí dojít zásoba kofeinu.',
//       tip: 'Tip: Vyzkoušej silnější dávky (usucha / koicha) nebo si připrav cold brew matchu na cesty - vydrží ti čerstvá i pár hodin mimo domov.',
//     },
//   };

//   // Stavy
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState('');
//   const [answers, setAnswers] = useState({});
//   const [resultKeys, setResultKeys] = useState([]);
//   const nodeRef = useRef(null);

//   // Po kliknutí na Další
//   const handleNext = () => {
//     if (!selectedOption) {
//       alert('Prosím, vyber odpověď.');
//       return;
//     }
//     const questionId = questions[currentIndex].id;
//     const newAnswers = { ...answers, [questionId]: selectedOption };
//     setAnswers(newAnswers);

//     // Kontrola, jestli nejsem na poslední otázce
//     if (currentIndex < questions.length - 1) {
//       setCurrentIndex((idx) => idx + 1);
//       setSelectedOption('');
//     } else {
//       // Pokud je to poslední otázka, zavolá se
//       calculateResults(newAnswers);
//     }
//   };
//   <QuizResults />;

//   // Zobrazení jedné otázky s tlačítkem
//   const currentQuestion = questions[currentIndex];
//   return (
//     <section className="quiz-section">
//       <div className="quiz-container">
//         <h1 className="quiz-title">Jaký typ matcha pijáka jsi?</h1>
//         <div className="card-wrapper">
//           <SwitchTransition mode="out-in">
//             <CSSTransition
//               key={currentIndex}
//               classNames="card"
//               timeout={500}
//               nodeRef={nodeRef}
//               mountOnEnter
//               unmountOnExit
//             >
//               {/* <fieldset ref={nodeRef} className="question-block"> */}
//               <div ref={nodeRef} className="question-block">
//                 {/* <legend> */}
//                 <h2 className="question-title">{currentQuestion.text}</h2>
//                 {/* <strong>{currentQuestion.text}</strong> */}
//                 {/* </legend> */}
//                 {currentQuestion.options.map((opt) => (
//                   <label key={opt.value} className="option-label">
//                     <input
//                       type="radio"
//                       name={`question_${currentQuestion.id}`}
//                       value={opt.value}
//                       checked={selectedOption === opt.value}
//                       onChange={() => setSelectedOption(opt.value)}
//                     />
//                     {opt.label}
//                   </label>
//                 ))}
//               </div>
//               {/* </fieldset> */}
//             </CSSTransition>
//           </SwitchTransition>
//         </div>

//         <button onClick={handleNext} className="next-button">
//           {currentIndex < questions.length - 1 ? 'Další' : 'Dokončit'}
//         </button>
//       </div>
//     </section>
//   );
// };
