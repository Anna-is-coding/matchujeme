import './homepage.css';

export const HomePage = () => {
  return (
    <section className="font-manrope">
      <div
        className="h-screen flex items-center justify-center px-4 bg-cover bg-center text-center"
        style={{ backgroundImage: "url('/img/matcha-background.jpg')" }}
      >
        <div className="bg-[var(--background-page)]/90 border border-[var(--border-green)] rounded-2xl px-12 py-10 shadow-lg max-w-3xl w-full">
          <h1 className="text-[5rem] text-[var(--text-light-green)] font-display leading-none tracking-wide">
            MATCHUJEME
          </h1>
          <h2 className="text-lg font-semibold text-[var(--intro-green)] mt-2">
            Zamatchuj se do světa chutí!
          </h2>
        </div>
      </div>

      <section className="w-full pt-44 pb-36 px-8 flex flex-col items-center text-center gap-12 text-[var(--text-dark-green)] leading-relaxed text-[1.05rem] bg-[var(--background-page)] border-t-2 border-b-2 border-[var(--border-green)] shadow-md">
        <p className="font-manrope max-w-2xl">
          Vítej na našem zeleném hřišti – tady to všechno voní po{' '}
          <strong>matcha prášku</strong> a dobré energii.
        </p>
        <p className="font-manrope max-w-2xl">
          Matcha je víc než drink – je to <em>chill rituál</em>, vibe i způsob,
          jak si zpomalit svět kolem sebe.
        </p>
        <p className="font-manrope max-w-2xl">
          Mrkni na <strong>easy recepty</strong>, objev{' '}
          <strong>tipy a triky</strong>, nebo si dej <strong>kvíz</strong> a
          zjisti, jak moc matcha life žiješ.
        </p>
      </section>
    </section>
  );
};
