const ladies = [
  {
    name: 'Susan Sarandon',
    img: 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1546220914/susan-sarandon.jpg',
    bioBlurb: 'American actress and activist',
    trivia: ['Narrarates many great documentaries'],
  },
  {
    name: 'Maya Angelou',
    img: 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1546220905/maya-angula.jpg',
    bioBlurb: 'American poet, singer, memoirist, and civil rights activist',
    trivia: ['wrote Why does the caged bird sing'],
  },
  {
    name: 'Frida Kahlo',
    img: 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1538344728/frida_K.jpg',
    bioBlurb: 'Mexican painter and feminist icon',
    trivia: [
      'known for her uncompromising and brilliantly coloured self-portraits that deal with such themes as identity, the human body, and death',
    ],
  },
  {
    name: 'Betty Friedan',
    img: 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1546223655/BettyFriedan.jpg',
    bioBlurb: 'feminine mistique',
    trivia: ['Wrote the Feminine Min'],
  },
  {
    name: 'Gloria Steinem',
    img: 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1538347728/gloria_st.jpg',
    bioBlurb: 'writere',
    trivia: [],
  },
  {
    name: 'Alexandria Ocasio-Cortez',
    img: 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1546220902/AlexiandraOC.png',
    bioBlurb: 'congresswoman for BRONX / QUEENS',
    trivia: [],
  },
  {
    name: 'Ruth Bader Ginsberg',
    img: 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1546220913/RBG.png',
    bioBlurb: 'saving our bodies one supreme court descicion at a time',
    trivia: [],
  },
  {
    name: 'Simone de Beauvoir',
    img: 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1546223656/simon_de_beauvoir.jpg',
    bioBlurb: '333 sluts',
    trivia: [],
  },
  {
    name: 'Serena Williams',
    img: 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1546220916/SerenaW.png',
    bioBlurb: 'tennis powerhouse',
    trivia: [],
  },
  {
    name: 'Indra Nooyi',
    img: 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1546220903/Indra.png',
    bioBlurb: 'CEO of PEPSI',
    trivia: [],
  },
  {
    name: 'Anita Hill',
    img: 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1546220903/anita_hill.png',
    bioBlurb: 'Testified on work place harrassment',
    trivia: [],
  },
  {
    name: 'Dr Christine Blasey Ford',
    img: 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1546220900/DrFord.png',
    bioBlurb: 'testified ',
    trivia: [],
  },
  {
    name: 'Angela Merkel',
    img: 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1546220905/Merkle.png',
    bioBlurb: 'Handling the EU via Germany',
    trivia: [],
  },
  {
    name: 'Madonna',
    img: 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1546220905/Madonna.png',
    bioBlurb: 'music ',
    trivia: [],
  },
  {
    name: 'Julie Delpy',
    img: 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1546220901/JuleyD.png',
    bioBlurb: '',
    trivia: [],
  },
  {
    name: 'Malala Yousafzai',
    img: 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1546220907/Malala.png',
    bioBlurb: '',
    trivia: [],
  },
  {
    name: 'Michelle Obama',
    img: 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1546220906/Michelle_o.png',
    bioBlurb: 'First Lady of the United States.',
    trivia: ['campaign to get kids active, Lets move.', 'Planted White house vegetable garden'],
  },
  {
    name: 'Sandra Oh',
    img: 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1546220909/SandraO.png',
    bioBlurb: '',
    trivia: [],
  },
  {
    name: 'Agnès Varda',
    img: 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1546223657/agnes_varda.jpg',
    bioBlurb: 'French Film Director. New Wave',
    trivia: [],
  },
  {
    name: 'Sheryl Sandberg',
    img: 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1546220915/Sheryl_Sanberg.png',
    bioBlurb: 'Author of Lean In',
    trivia: [],
  },
  {
    name: 'Hillary Clinton',
    img: 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1546220900/Hillary_Clinton.png',
    bioBlurb: '',
    trivia: [],
  },
  {
    name: 'Oprah Winfrey',
    img: 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1546220913/oprah.png',
    bioBlurb: '',
    trivia: [],
  },
  // {
  //   name: 'Isabelle Allende',
  //   img: '',
  //   bioBlurb: '',
  //   trivia: [],
  // },
  // {
  //   name: 'Tarana Burke',
  //   img: '',
  //   bioBlurb: 'She started Me Too',
  //   trivia: [],
  // },
  // {
  //   name: 'Ada Lovelace',
  //   img: '',
  //   bioBlurb: 'First female engineer. ',
  //   trivia: [],
  // },
  // {
  //   name: 'Grace Hopper',
  //   img: '',
  //   bioBlurb: 'First female engineer. ',
  //   trivia: [],
  // },
  // {
  //   name: 'SHIRLEY CHISHOLM,',
  //   img: '',
  //   bioBlurb: 'First female engineer. ',
  //   trivia: [],
  // },
  // {
  //   name: 'Doloros Huerta',
  //   img: '',
  //   bioBlurb: 'Labor Rights. ',
  //   trivia: [],
  // },
  // {
  //   name: 'Eva Peron',
  //   img: '',
  //   bioBlurb: 'Champoin of the Poor in Argentina',
  //   trivia: [],
  // },

  // {
  //   name: 'Selma Hayak',
  //   img: '',
  //   bioBlurb: '',
  //   trivia: [],
  // },
];

export default ladies;
