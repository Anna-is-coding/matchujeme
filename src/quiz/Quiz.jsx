import { useState } from 'react';
import './style.css';

export const Quiz = () => {
  // 1) Definice otázek, možností a výsledků
  const questions = [
    {
      id: 1,
      text: 'Jak obvykle začínáš svůj den?',
      options: [
        { label: 'a) Pomalu, s knihou nebo meditací.', value: 'zen' },
        { label: 'b) Na mobilu, rychlá snídaně a ven.', value: 'influencer' },
        { label: 'c) Cvičením nebo procházkou.', value: 'zdravy' },
        { label: 'd) Všechno na poslední chvíli!', value: 'kofein' },
      ],
    },
    {
      id: 2,
      text: 'Co tě na matche nejvíc láká?',
      options: [
        { label: 'a) Její klidná energie a tradice.', value: 'zen' },
        {
          label: 'b) Že je to trend a vypadá dobře na Instagramu.',
          value: 'influencer',
        },
        { label: 'c) Přírodní složení a zdravotní benefity.', value: 'zdravy' },
        { label: 'd) Potřebuji prostě něco, co mě probudí.', value: 'kofein' },
      ],
    },
    {
      id: 3,
      text: 'Kdy nejraději popíjíš matchu?',
      options: [
        {
          label: 'a) Při tiché rituální ceremonii hned po probuzení.',
          value: 'zen',
        },
        {
          label:
            'b) V odpoledních hodinách v kavárně, kde fotím pro své sledující.',
          value: 'influencer',
        },
        {
          label: 'c) Po ranním cvičení jako součást svého zdravého režimu.',
          value: 'zdravy',
        },
        {
          label:
            'd) Ráno těsně před odchodem do práce, když potřebuji rychlý boost.',
          value: 'kofein',
        },
      ],
    },
    {
      id: 4,
      text: 'Jak si nejčastěji připravuješ matchu?',
      options: [
        {
          label:
            'a) Tradičně, s bambusovou miskou (chawan) a metličkou (chasen).',
          value: 'zen',
        },
        {
          label:
            'b) Stylově v instagram-friendly šejku nebo s latte art, aby to vypadalo skvěle.',
          value: 'influencer',
        },
        {
          label:
            'c) Smíchám ji do zeleného smoothie, bowl nebo přidám proteinový prášek.',
          value: 'zdravy',
        },
        {
          label:
            'd) Kupuji si ji hotovou „to-go“ v kelímku, abych ji mohl/a pít cestou.',
          value: 'kofein',
        },
      ],
    },
    {
      id: 5,
      text: 'Co je podle tebe ideální místo na matcha chvíli?',
      options: [
        { label: 'a) Doma v tichu.', value: 'zen' },
        { label: 'b) V kavárně s designem.', value: 'influencer' },
        { label: 'c) Na výletě nebo v parku.', value: 'zdravy' },
        { label: 'd) Kdekoli, hlavně rychle.', value: 'kofein' },
      ],
    },
  ];

  const results = {
    zen: {
      title: 'Tradiční Zen Piják',
      description:
        'Máš rád/a klid, rituály a kvalitu. Matcha je pro tebe víc než nápoj - je to způsob, jak zpomalit a zrelaxovat.',
      tip: 'Tip: Vybírej ceremoniální matchu té nejvyšší třídy a zainvestuj do bambusové misky (chawanu) a metličky (chasenu).',
    },
    influencer: {
      title: 'Matcha Influencer',
      description:
        'Sleduješ trendy, víš, co frčí, a matcha u tebe nesmí chybět na feedu. Důležité je, aby to vypadalo skvěle na fotce.',
      tip: 'Tip: Experimentuj s barevnými variantami - třeba růžové matcha latte. Nezapomeň přidat #matchujeme a pár stylových snímků.',
    },
    zdravy: {
      title: 'Superfood Matcha Nadšenec',
      description:
        'Bereš matchu jako součást zdravého životního stylu. Přidáváš ji do smoothie, bowl či proteinového nápoje pro maximální výživu.',
      tip: 'Tip: Kombinuj matchu se špenátem, banánem nebo proteinovým práškem. Skvělá je zelená „power bowl“ nebo matcha-chia pudink pro energii bez výčitek.',
    },
    kofein: {
      title: 'Kofeinový Záchranář',
      description:
        'Jdeš primárně po efektu - potřebuješ energii teď hned. Matcha pro tebe supluje kávu a nikdy ti nesmí dojít zásoba kofeinu.',
      tip: 'Tip: Vyzkoušej silnější dávky (usucha / koicha) nebo si připrav cold brew matchu na cesty - vydrží ti čerstvá i pár hodin mimo domov.',
    },
  };

  // Stavy
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [answers, setAnswers] = useState({});
  const [resultKeys, setResultKeys] = useState([]);

  // Po kliknutí na Další
  const handleNext = () => {
    if (!selectedOption) {
      alert('Prosím, vyber odpověď.');
      return;
    }
    const questionId = questions[currentIndex].id;
    const newAnswers = { ...answers, [questionId]: selectedOption };
    setAnswers(newAnswers);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((idx) => idx + 1);
      setSelectedOption('');
    } else {
      // poslední otázka
      calculateResults(newAnswers);
    }
  };

  const calculateResults = (ans) => {
    const counts = { zen: 0, influencer: 0, zdravy: 0, kofein: 0 };
    Object.values(ans).forEach((val) => {
      if (counts[val] !== undefined) counts[val]++;
    });
    const maxCount = Math.max(...Object.values(counts));
    const winners = Object.entries(counts)
      .filter(([_, count]) => count === maxCount)
      .map(([key]) => key);
    setResultKeys(winners);
  };

  // Zobrazení výsledku
  if (resultKeys.length > 0) {
    if (resultKeys.length === 1) {
      const { title, description, tip } = results[resultKeys[0]];
      return (
        <div className="result-container">
          <h2>Výsledek: {title}</h2>
          <p>{description}</p>
          <p>
            <em>{tip}</em>
          </p>
          <button onClick={() => window.location.reload()}>Zkusit znovu</button>
        </div>
      );
    }
    const mixedTitles = resultKeys.map((k) => results[k].title).join(' & ');
    const mixedDescriptions = resultKeys
      .map((k) => `• ${results[k].description}`)
      .join('\n\n');
    const mixedTips = resultKeys.map((k) => `• ${results[k].tip}`).join('\n\n');
    return (
      <div className="result-container">
        <h2>Výsledek: Mix {mixedTitles}</h2>
        <div style={{ textAlign: 'left', whiteSpace: 'pre-wrap' }}>
          <p>{mixedDescriptions}</p>
          <p>
            <em>{mixedTips}</em>
          </p>
        </div>
        <button onClick={() => window.location.reload()}>Zkusit znovu</button>
      </div>
    );
  }

  // Zobrazení jedné otázky s tlačítkem
  const currentQuestion = questions[currentIndex];
  return (
    <div className="quiz-container">
      <h1>Jaký typ matcha pijáka jsi?</h1>
      <fieldset className="question-block">
        <legend>
          <strong>
            {currentQuestion.id}) {currentQuestion.text}
          </strong>
        </legend>
        {currentQuestion.options.map((opt) => (
          <label key={opt.value} className="option-label">
            <input
              type="radio"
              name={`question_${currentQuestion.id}`}
              value={opt.value}
              checked={selectedOption === opt.value}
              onChange={() => setSelectedOption(opt.value)}
            />
            {opt.label}
          </label>
        ))}
      </fieldset>
      <button onClick={handleNext} className="next-button">
        {currentIndex < questions.length - 1 ? 'Další' : 'Dokončit'}
      </button>
    </div>
  );
};
