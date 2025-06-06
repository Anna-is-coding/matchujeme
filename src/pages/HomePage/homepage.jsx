import React from 'react';
import './homepage.css';

export const HomePage = () => {
  return (
    <section id="main" className="relative top-16 mb-16 font-manrope">
      <div
        className="h-screen flex items-center justify-center px-4 bg-cover bg-center text-center"
        style={{ backgroundImage: "url('/img/matcha-background.jpg')" }}
      >
        <div className="bg-[#eff7e6]/90 border border-[#cde4b1] rounded-2xl px-12 py-10 shadow-lg max-w-3xl w-full">
          <h1 className="text-[5rem] text-[#5f7d3a] font-display leading-none tracking-wide">
            MATCHUJEME
          </h1>
          <h2 className="text-lg font-semibold text-[#3a4e2b] mt-2">
            Zamatchuj se do světa chutí! 
          </h2>
        </div>
      </div>

      <section className="w-full pt-44 pb-36 px-8 flex flex-col items-center text-center gap-12 text-[#2e4426] leading-relaxed text-[1.05rem] bg-[#f4faef] border-t-2 border-b-2 border-[#dbeed0] shadow-md">
      <p className="font-manrope max-w-2xl">
    👋 Vítej na našem zeleném hřišti – tady to všechno voní po <strong>matcha prášku</strong> a dobré energii.
      </p>
      <p className="font-manrope max-w-2xl">
    🍵 Matcha je víc než drink – je to <em>chill rituál</em>, vibe i způsob, jak si zpomalit svět kolem sebe.
      </p>
      <p className="font-manrope max-w-2xl">
    ✨ Mrkni na <strong>easy recepty</strong>, objev <strong>tipy a triky</strong>, nebo si dej <strong>kvíz</strong> a zjisti, jak moc matcha life žiješ.
      </p>
</section>


    </section>
  );
};

/*
export const HomePage = () => {
  return (
     <div className="hero min-h-screen"
      style={{
      backgroundImage: `url(${homepageImage})`,
      }}>
      <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md">
      <h1 className="text-5xl md:text-7xl font-semibold text-[#ede7d0] text-center font-poiret">Matchujeme</h1>
      <p className="mb-8 text - bg-green-600">
        Zamatchuj se do světa chutí! 
      </p>
    </div>
  </div>
</div>
  );
};
*/
