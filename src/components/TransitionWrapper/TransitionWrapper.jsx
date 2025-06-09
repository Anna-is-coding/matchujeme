import React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

export const TransitionWrapper = ({ children, nodeRef, transitionKey }) => (
  <SwitchTransition mode="out-in">
    <CSSTransition
      key={transitionKey}
      classNames="card"
      timeout={500}
      nodeRef={nodeRef}
      mountOnEnter
      unmountOnExit
    >
      <div ref={nodeRef} className="question-block">
        {children}
      </div>
    </CSSTransition>
  </SwitchTransition>
);
