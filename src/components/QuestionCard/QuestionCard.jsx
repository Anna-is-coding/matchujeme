import React from 'react';

export const QuestionCard = ({
  question,
  selectedOption,
  onSelect,
  index,
  total,
  progress,
  onPrev,
  onNext,
}) => (
  <>
    <div className="question-header">
      <div className="question-info">
        <span className="question-number">
          Otázka {index + 1} z {total}
        </span>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="nav-buttons-wrapper">
        <button
          className="nav-button prev-button"
          onClick={onPrev}
          disabled={index === 0}
        >
          Zpět
        </button>
        <button className="nav-button next-button" onClick={onNext}>
          {index === total - 1 ? 'Odeslat' : 'Další'}
        </button>
      </div>
    </div>

    <h2 className="question-title">{question.text}</h2>

    <div className="options-list">
      {question.options.map((opt) => (
        <label
          key={opt.value}
          className={`option-item ${
            selectedOption === opt.value ? 'selected' : ''
          }`}
        >
          <input
            type="radio"
            name={`question_${question.id}`}
            value={opt.value}
            checked={selectedOption === opt.value}
            onChange={() => onSelect(opt.value)}
          />
          <span>{opt.label}</span>
        </label>
      ))}
    </div>
  </>
);

