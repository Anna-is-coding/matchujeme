import { useState, useRef } from 'react';
import { questions, results } from '../data/quizData';

export const useQuizLogic = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [answers, setAnswers] = useState({});
  const [resultKeys, setResultKeys] = useState([]);
  const nodeRef = useRef(null);

  const calculateResults = (ans) => {
    const counts = { zen: 0, influencer: 0, zdravy: 0, kofein: 0 };
    Object.values(ans).forEach((val) => {
      if (counts[val] !== undefined) counts[val]++;
    });
    const maxCount = Math.max(...Object.values(counts));
    const winners = Object.entries(counts)
      .filter(([, count]) => count === maxCount)
      .map(([key]) => key);
    const finalKey =
      winners.length === 1
        ? winners[0]
        : winners[Math.floor(Math.random() * winners.length)];
    setResultKeys([finalKey]);
  };

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
      calculateResults(newAnswers);
    }
  };

  return {
    currentIndex,
    selectedOption,
    answers,
    resultKeys,
    nodeRef,
    questions,
    results,
    setSelectedOption,
    handleNext,
  };
};
