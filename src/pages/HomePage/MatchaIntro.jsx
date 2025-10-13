const MatchaIntro = () => {
  return (
    <section className="py-6 px-4 bg-[var(--background-page2)] border-t-2 border-b-2 border-[var(--text-light-green)] shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-around items-start gap-8 text-[var(--text-dark-green)] text-[1.35rem]">
        <div className="flex flex-col items-center text-center">
          <img
            src="/img/matcha-icon1.svg"
            alt="Vítejte"
            className="w-32 h-32 rounded-full mb-4 object-cover"
            loading="lazy" decoding="async"
          />
          <p className="matchacircle1">
            🌿Vítej v našem zeleném světě – tady se vše točí kolem vůně matchy a
            dobré nálady.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src="/img/matcha-icon1.svg"
            alt="Chill rituál"
            className="w-32 h-32 rounded-full mb-4 object-cover"
            loading="lazy" decoding="async"
          />
          <p className="matchacircle2">
            🌿Matcha je víc než jen čaj – je to pohoda, styl a způsob, jak na
            chvíli vypnout.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src="/img/matcha-icon1.svg"
            alt="Matcha zábava"
            className="w-32 h-32 rounded-full mb-4 object-cover"
            loading="lazy" decoding="async"
          />
          <p className="matchacircle3">
            🌿Objev jednoduché recepty, inspiruj se tipy a triky nebo si dej
            kvíz a zjisti, jak moc jsi matcha naladěný/á.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MatchaIntro;
