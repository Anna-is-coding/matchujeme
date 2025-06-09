export const questions = [
  {
    id: 1,
    text: 'Jak obvykle začínáš svůj den?',
    options: [
      { label: ' Pomalu, s knihou nebo meditací.', value: 'zen' },
      { label: ' Na mobilu, rychlá snídaně a ven.', value: 'influencer' },
      { label: ' Cvičením nebo procházkou.', value: 'zdravy' },
      { label: ' Všechno na poslední chvíli!', value: 'kofein' },
    ],
  },
  {
    id: 2,
    text: 'Co tě na matche nejvíc láká?',
    options: [
      { label: ' Její klidná energie a tradice.', value: 'zen' },
      {
        label: ' Že je to trend a vypadá dobře na Instagramu.',
        value: 'influencer',
      },
      { label: ' Přírodní složení a zdravotní benefity.', value: 'zdravy' },
      { label: ' Potřebuji prostě něco, co mě probudí.', value: 'kofein' },
    ],
  },
  {
    id: 3,
    text: 'Kdy nejraději popíjíš matchu?',
    options: [
      {
        label: ' Při tiché rituální ceremonii hned po probuzení.',
        value: 'zen',
      },
      {
        label:
          ' V odpoledních hodinách v kavárně, kde fotím pro své sledující.',
        value: 'influencer',
      },
      {
        label: ' Po ranním cvičení jako součást svého zdravého režimu.',
        value: 'zdravy',
      },
      {
        label:
          ' Ráno těsně před odchodem do práce, když potřebuji rychlý boost.',
        value: 'kofein',
      },
    ],
  },
  {
    id: 4,
    text: 'Jak si nejčastěji připravuješ matchu?',
    options: [
      {
        label: ' Tradičně, s bambusovou miskou (chawan) a metličkou (chasen).',
        value: 'zen',
      },
      {
        label:
          ' Stylově v instagram-friendly šejku nebo s latte art, aby to vypadalo skvěle.',
        value: 'influencer',
      },
      {
        label:
          ' Smíchám ji do zeleného smoothie, bowl nebo přidám proteinový prášek.',
        value: 'zdravy',
      },
      {
        label:
          ' Kupuji si ji hotovou “to-go” v kelímku, abych ji mohl/a pít cestou.',
        value: 'kofein',
      },
    ],
  },
  {
    id: 5,
    text: 'Co je podle tebe ideální místo na matcha chvíli?',
    options: [
      { label: ' Doma v tichu.', value: 'zen' },
      { label: ' V kavárně s designem.', value: 'influencer' },
      { label: ' Na výletě nebo v parku.', value: 'zdravy' },
      { label: ' Kdekoli, hlavně rychle.', value: 'kofein' },
    ],
  },
];

export const results = {
  zen: {
    title: 'Tradiční Zen Piják',
    description:
      'Máš rád/a klid, rituály a kvalitu. Matcha je pro tebe víc než nápoj - je to způsob, jak zpomalit a zrelaxovat.',
    tip: 'Tip: Vybírej ceremoniální matchu té nejvyšší třídy a zainvestuj do bambusové misky (chawanu) a metličky (chasenu).',
  },
  influencer: {
    title: 'Matcha Influencer',
    description:
      'Sleduješ trendy, víš, co frčí, a matcha u tebe nesmí chybět na feedu. Důležité je, aby to vypadalo skvěle na fotce.',
    tip: 'Tip: Experimentuj s barevnými variantami - třeba růžové matcha latte. Nezapomeň přidat #matchujeme a pár stylových snímků.',
  },
  zdravy: {
    title: 'Superfood Matcha Nadšenec',
    description:
      'Bereš matchu jako součást zdravého životního stylu. Přidáváš ji do smoothie, bowl či proteinového nápoje pro maximální výživu.',
    tip: 'Tip: Kombinuj matchu se špenátem, banánem nebo proteinovým práškem. Skvělá je zelená “power bowl” nebo matcha-chia pudink pro energii bez výčitek.',
  },
  kofein: {
    title: 'Kofeinový Záchranář',
    description:
      'Jdeš primárně po efektu - potřebuješ energii teď hned. Matcha pro tebe supluje kávu a nikdy ti nesmí dojít zásoba kofeinu.',
    tip: 'Tip: Vyzkoušej silnější dávky (usucha / koicha) nebo si připrav cold brew matchu na cesty - vydrží ti čerstvá i pár hodin mimo domov.',
  },
};
