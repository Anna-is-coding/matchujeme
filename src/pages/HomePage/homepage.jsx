import './homepage.css';
import MatchaIntro from './MatchaIntro';

export const HomePage = () => {
  return (
    <>
      <section className="Heading">
        <div className="relative min-h-screen flex items-center justify-center px-4 text-center overflow-hidden">
          <img
            src="/img/matcha-background.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            width="1920"
            height="1080"
            loading="eager"
            decoding="async"
          />
          <div className="relative bg-[var(--background-page)]/90 border border-[var(--border-green)] rounded-2xl px-6 sm:px-10 py-8 sm:py-12 shadow-lg max-w-4xl w-full mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-[var(--text-light-green)] font-display leading-none tracking-wide">
              MATCHUJEME
            </h1>
            <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-[var(--intro-green)] mt-4">
              Zamatchuj se do světa chutí!
            </h2>
          </div>
        </div>
      </section>

      <section className="MatchaIntro">
        <MatchaIntro />
      </section>
    </>
  );
};

export default HomePage;
