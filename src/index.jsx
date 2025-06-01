import { createRoot } from 'react-dom/client';
import './global.css';
import { Quiz } from './quiz/Quiz';

createRoot(
  document.querySelector('#app'),
).render(<Quiz />);
