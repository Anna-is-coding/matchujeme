import React from 'react';
import { OptionItem } from '../OptionItem/OptionItem';

export const QuestionCard = ({ question, selectedOption, onSelect }) => (
  <>
    <h2 className="question-title">{question.text}</h2>
    {question.options.map((opt) => (
      <OptionItem
        key={opt.value}
        name={`question_${question.id}`}
        value={opt.value}
        label={opt.label}
        checked={selectedOption === opt.value}
        onChange={() => onSelect(opt.value)}
      />
    ))}
  </>
);
