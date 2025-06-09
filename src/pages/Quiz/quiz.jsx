import React from 'react';
import './quiz.css';

import { QuizResults } from '../../components/QuizResults/QuizResults';
import { QuestionCard } from '../../components/QuestionCard/QuestionCard';
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
    handlePrev,
  } = useQuizLogic();

  const progressPercent = Math.round(
    ((currentIndex + 1) / questions.length) * 100,
  );

  if (resultKeys.length > 0) {
    return <QuizResults resultKeys={resultKeys} results={results} />;
  }

  const currentQuestion = questions[currentIndex];

  return (
    <section className="quiz-section">
      <div className="quiz-container">
        {/* nový wrapper, který drží titulek i kartu ve stejné šířce */}
        <div className="quiz-card">
          <h1 className="quiz-title">Jaký typ matcha pijáka jsi?</h1>
          <div className="card-wrapper">
            <TransitionWrapper nodeRef={nodeRef} transitionKey={currentIndex}>
              <QuestionCard
                question={currentQuestion}
                selectedOption={selectedOption}
                onSelect={setSelectedOption}
                index={currentIndex}
                total={questions.length}
                progress={progressPercent}
                onPrev={handlePrev}
                onNext={handleNext}
              />
            </TransitionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};
