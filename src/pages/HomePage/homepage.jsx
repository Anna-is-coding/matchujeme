import './homepage.css';
import MatchaIntro from './MatchaIntro';

export const HomePage = () => {
  return (
    <>
      <section className="Heading">
        <div
          className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center text-center"
          style={{ backgroundImage: "url('/img/matcha-background.jpg')" }}
        >
          <div className="bg-[var(--background-page)]/90 border border-[var(--border-green)] rounded-2xl px-6 sm:px-10 py-8 sm:py-12 shadow-lg max-w-4xl w-full mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-[var(--text-light-green)] font-display leading-none tracking-wide">
              MATCHUJEME
            </h1>
            <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-[var(--intro-green)] mt-4">
              Zamatchuj se do světa chutí!
            </h2>
          </div>
        </div>
      </section>

      <main>
        <MatchaIntro />
      </main>
    </>
  );
};

export default HomePage;
