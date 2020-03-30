// Cousin

/* eslint-disable no-unused-vars */
const publish_answers = [true, true, false, false, false, false, false];

const blankRound = [
  {
    title: '',
    date: '',
    deadline: '',
    show_answers: false,
    form: true,
    published: false,
    publish_answers: publish_answers[1],
    questions: [
      { question: '', answer: '' },
      { question: '', answer: '' },
      { question: '', answer: '' },
      { question: '', answer: '' },
      { question: '', answer: '' },
      { question: '', answer: '' },
      { question: '', answer: '' },
      { question: '', answer: '' },
      { question: '', answer: '' },
      { question: '', answer: '' },
      { question: '', answer: '' },
      { question: '', answer: '' },
      { question: '', answer: '' },
      { question: '', answer: '' },
      { question: '', answer: '' },
      { question: '', answer: '' },
      { question: '', answer: '' },
      { question: '', answer: '' },
      { question: '', answer: '' },
      { question: '', answer: '' },
    ],
  },
];

const rounds2 = [
  {
    title: '6. Chocolates',
    date: '2020/03/28',
    deadline: '2020/03/29 20:00',
    show_answers: false,
    form: true,
    published: false,
    publish_answers: publish_answers[5],
    questions: [
      { question: 'Regent or Bond? (7,6)', answer: '' },
      { question: 'Not very practical (4,4)', answer: '' },
      { question: 'Birthdays, Anniversaries (12)', answer: '' },
      { question: 'Witchcraft (5,5)', answer: '' },
      { question: 'William Tell, V.Cs, Spiderman (6)', answer: '' },
      { question: 'Peace, Rambling Rector, Judi Dench (5)', answer: '' },
      { question: 'Big Bus (6,6)', answer: '' },
      { question: 'University Challenge panellists (8)', answer: '' },
      { question: 'It’s not Dad’s (4)', answer: '' },
      { question: 'An off-white pub (5,3)', answer: '' },
      { question: 'Sh! (5)', answer: '' },
      { question: 'A feline uniform (3,3)', answer: '' },
      { question: 'Outlaw (6)', answer: '' },
      { question: 'Travelling musicians (9)', answer: '' },
      { question: 'Reward for Capturing (6)', answer: '' },
      { question: 'Whisky taunters (9)', answer: '' },
      { question: 'Joy in Istanbul (7,7)', answer: '' },
      { question: 'Theme (5)', answer: '' },
      { question: 'A noisy stretch of water (5)', answer: '' },
      { question: '10 Cents (4) or (4,3)', answer: '' },
    ],
  },
  {
    title: `5. Who's line is it anyway?`,
    date: '2020/03/27',
    deadline: '2020/03/27 20:00',
    show_answers: false,
    form: true,
    published: false,
    publish_answers: publish_answers[4],
    questions: [
      { question: 'A hand bag', answer: '' },
      { question: 'Frankly my dear I don’t give a damn!', answer: '' },
      { question: 'I believe it is peace for our time', answer: '' },
      { question: 'To infinity and beyond', answer: '' },
      {
        question: 'Never has so much, been owed by so many, to so few.',
        answer: '',
      },
      {
        question:
          'I’m playing all ofthe notes but not necessarily in the right order',
        answer: '',
      },
      { question: 'Four Candles', answer: '' },
      { question: 'To be or not to be: that is the question?', answer: '' },
      { question: 'Stop throwing those bloody spears at me.', answer: '' },
      {
        question: 'That’s one small step for man, one giant leap for mankind',
        answer: '',
      },
      { question: 'The lady’s not for turning', answer: '' },
      { question: 'Kiss me harder or was it Kismet Hardy.', answer: '' },
      { question: 'I am your father', answer: '' },
      { question: 'Float like a butterfly, sting like a bee', answer: '' },
      { question: 'I have a dream', answer: '' },
      { question: 'Good moaning', answer: '' },
      { question: 'We’re going to be in the Hudson', answer: '' },
      { question: 'You stupid boy!', answer: '' },
      { question: 'Nice to see you, to see you nice', answer: '' },
      {
        question: 'Life is what happens when you are busy making other plans',
        answer: '',
      },
    ],
  },
  {
    title: '4. Towns and Cities',
    date: '2020/03/26',
    deadline: '2020/03/26 20:00',
    show_answers: false,
    form: true,
    published: false,
    publish_answers: publish_answers[3],

    questions: [
      { question: 'Tub full of water', answer: 'Bath' },
      { question: 'Professor of rollers', answer: 'Doncaster' },
      { question: 'Witches attempt to meet', answer: 'Coventry' },
      { question: 'A Person who is leaving', answer: 'Exeter' },
      { question: 'People Rock', answer: 'Folkstone' },
      { question: 'A complete bacon', answer: 'Fulham' },
      { question: 'Ship’s men', answer: 'Crewe' },
      { question: 'Tying Meat', answer: 'Nottingham' },
      { question: 'Latest Fortified Wine', answer: 'Newport' },
      { question: 'Religious Skull', answer: 'Holyhead' },
      { question: 'Detective clues', answer: 'Leeds' },
      { question: 'Sounds like Piggot’s town', answer: 'Leicester' },
      {
        question: 'Where cattle cross the river',
        answer: 'Oxbridge or Cowbridge',
      },
      { question: 'Almost speechless in front of chips', answer: 'Dumfries' },
      { question: 'Mothers entrance', answer: 'Margate' },
      { question: 'USA President', answer: 'Licoln or Washington' },
      { question: 'Chocolate bar without that is', answer: 'York' },
      { question: 'Fake First Lady', answer: 'Evesham' },
      { question: 'Rifle', answer: 'Winchester or Enfield' },
      { question: 'Cook al fresco', answer: 'Sheffield' },
    ],
  },
  {
    title: '3. Sleuth Creators',
    date: '2020/03/25',
    deadline: '2020/03/26 20:00',
    show_answers: false,
    form: true,
    published: true,
    publish_answers: publish_answers[2],
    questions: [
      {
        question: 'Morse',
        answer: (() => (publish_answers[2] ? 'Colin Dexter' : ''))(),
      },
      {
        question: 'Frost',
        answer: (() => (publish_answers[2] ? 'R D Wingfield' : ''))(),
      },
      {
        question: 'Wexford',
        answer: (() => (publish_answers[2] ? 'Ruth Rendell' : ''))(),
      },
      {
        question: 'Poirot',
        answer: (() => (publish_answers[2] ? 'Agatha Christie' : ''))(),
      },
      {
        question: 'Foyle',
        answer: (() => (publish_answers[2] ? 'Anthony Horowitz' : ''))(),
      },
      {
        question: 'Colombo',
        answer: (() =>
          publish_answers[2] ? 'William Link and Richard Levinson' : '')(),
      },
      {
        question: 'Inspector Rebus',
        answer: (() => (publish_answers[2] ? 'Ian Rankin' : ''))(),
      },
      {
        question: 'Maigret',
        answer: (() => (publish_answers[2] ? 'George Simenon' : ''))(),
      },
      {
        question: 'Harry Hole',
        answer: (() => (publish_answers[2] ? 'Jo Nesbo' : ''))(),
      },
      {
        question: 'Sherlock Holmes',
        answer: (() => (publish_answers[2] ? 'Sir Arthur Conan Doyle' : ''))(),
      },
      {
        question: 'Brother Cadfel',
        answer: (() => (publish_answers[2] ? 'Ellis Peters' : ''))(),
      },
      {
        question: 'Sam Spade',
        answer: (() => (publish_answers[2] ? 'Dashiell Hammett' : ''))(),
      },
      {
        question: 'Philip Marlowe',
        answer: (() => (publish_answers[2] ? 'Raymond Chandler' : ''))(),
      },
      {
        question: 'Lord Peter Wimsey',
        answer: (() => (publish_answers[2] ? 'Dorothy L Sayers' : ''))(),
      },
      {
        question: 'Jack Reacher',
        answer: (() => (publish_answers[2] ? 'Lee Child' : ''))(),
      },
      {
        question: 'Perry Mason',
        answer: (() => (publish_answers[2] ? 'Erle Stanley Gardner' : ''))(),
      },
      {
        question: 'Hieronymus “Harry” Bosch',
        answer: (() => (publish_answers[2] ? 'Michael Connely' : ''))(),
      },
      {
        question: 'Dick Tracy',
        answer: (() => (publish_answers[2] ? 'Chester Gould' : ''))(),
      },
      {
        question: 'Dirk Gently',
        answer: (() => (publish_answers[2] ? 'Douglas Adams' : ''))(),
      },
      {
        question: 'Adam Dalgleish',
        answer: (() => (publish_answers[2] ? 'P D James' : ''))(),
      },
    ],
  },
  {
    title: '2. Initial Numbers',
    date: '2020/03/29',
    deadline: '2020/03/30 20:00',
    show_answers: true,
    form: false,
    published: true,
    publish_answers: publish_answers[1],
    questions: [
      {
        question: '1 W on a U',
        answer: (() => (publish_answers[1] ? '1 Wheel on a Unicycle' : ''))(),
      },
      {
        question: '3 BM',
        answer: (() => (publish_answers[1] ? '3 Blind Mice' : ''))(),
      },
      {
        question: '4 S in a Y',
        answer: (() => (publish_answers[1] ? '4 Seasons in a Year' : ''))(),
      },
      {
        question: '6 S of a C',
        answer: (() => (publish_answers[1] ? '6 Sides of a Cube' : ''))(),
      },
      {
        question: '7 W of the W',
        answer: (() => (publish_answers[1] ? '7 Wonders of the World' : ''))(),
      },
      {
        question: '8 is TC',
        answer: (() => (publish_answers[1] ? '8 is two cubed' : ''))(),
      },
      {
        question: '11 P in a FT',
        answer: (() =>
          publish_answers[1] ? '11 Players in a Football Team' : '')(),
      },
      {
        question: '12 S of the Z',
        answer: (() => (publish_answers[1] ? '12 Signs of the Zodiac' : ''))(),
      },
      {
        question: '13 in a BD',
        answer: (() => (publish_answers[1] ? '13 in a Bakers Dozen' : ''))(),
      },
      {
        question: '16 O in a P',
        answer: (() => (publish_answers[1] ? '16 Ounces in a Pound ' : ''))(),
      },
      {
        question: '24 B B in a P',
        answer: (() =>
          publish_answers[1] ? '4 and 20 Blackbirds baked in a Pie' : '')(),
      },
      {
        question: '29 D in F in a LY',
        answer: (() =>
          publish_answers[1] ? '29 Days in February in a Leap Year' : '')(),
      },
      {
        question: '32 DF at which WF',
        answer: (() =>
          publish_answers[1]
            ? '32 Degrees Fahrenheit at which Water Freezes'
            : '')(),
      },
      {
        question: '57 HV',
        answer: (() => (publish_answers[1] ? '57 Heinz Varieties' : ''))(),
      },
      {
        question: '64 S on a CB',
        answer: (() =>
          publish_answers[1] ? '64 Squares on a Chess Board' : '')(),
      },
      {
        question: '76 T in the BP',
        answer: (() =>
          publish_answers[1] ? '76 Trombones in the Big Parade' : '')(),
      },
      {
        question: '99 RB',
        answer: (() => (publish_answers[1] ? '99 Red Balloons' : ''))(),
      },
      {
        question: '101 D',
        answer: (() => (publish_answers[1] ? '101 Dalmatians' : ''))(),
      },
      {
        question: '1760 Y in a M',
        answer: (() => (publish_answers[1] ? '1760 Yards in a Mile' : ''))(),
      },
      {
        question: '9,000,000 B in B',
        answer: (() =>
          publish_answers[1] ? '9 Million Bicycles in Beijing' : '')(),
      },
    ],
  },
  {
    title: '1. Musicals',
    date: '2020/03/28',
    deadline: '2020/03/29 18:00',
    show_answers: true,
    form: false,
    published: true,
    publish_answers: publish_answers[0],
    questions: [
      {
        question: 'The shrew tamed? (4, 2, 4)',
        answer: (() => (publish_answers[0] ? 'Kiss me Kate' : ''))(),
      },
      {
        question: 'Spectre in singing event? (3, 7, 2, 3, 5)',
        answer: (() => (publish_answers[0] ? 'Phantom of the opera' : ''))(),
      },
      {
        question: '_____ Lennox or _____ get your gun or _____ Oakley? (5)',
        answer: (() => (publish_answers[0] ? 'Annie' : ''))(),
      },
      {
        question:
          'Enough wives for everybody - well at least one each? (5, 6, 3, 5, 8)',
        answer: (() =>
          publish_answers[0] ? 'Seven Brides for Seven Brothers' : '')(),
      },
      {
        question: 'East enders Flying Squad? (7, 4)',
        answer: (() => (publish_answers[0] ? 'Sweeney Todd' : ''))(),
      },
      {
        question: 'Notoriety? (4)',
        answer: (() => (publish_answers[0] ? 'Fame' : ''))(),
      },
      {
        question: 'World champion racing car driver? (8)',
        answer: (() => (publish_answers[0] ? 'Hamilton' : ''))(),
      },
      {
        question: 'US State? (8)',
        answer: (() => (publish_answers[0] ? 'Oklahoma' : ''))(),
      },
      {
        question: 'Royal Siamese governess makes good? (3, 4, 3, 1)',
        answer: (() => (publish_answers[0] ? 'The King and I' : ''))(),
      },
      {
        question: 'Did Maria bring the hills to life? (3, 5, 2, 5)',
        answer: (() => (publish_answers[0] ? 'The Sound of Music' : ''))(),
      },
      {
        question: 'Greetings child’s toy? (5, 5)',
        answer: (() => (publish_answers[0] ? 'Hello Dolly' : ''))(),
      },
      {
        question: 'Threepence? (4, 1, 8)',
        answer: (() => (publish_answers[0] ? 'Half a Sixpence' : ''))(),
      },
      {
        question: 'Not a tale from the orient? (4, 4, 5)',
        answer: (() => (publish_answers[0] ? 'West Side Story' : ''))(),
      },
      {
        question: 'William Writer? (5, 6)',
        answer: (() => (publish_answers[0] ? 'Billy Elliot' : ''))(),
      },
      {
        question: 'The French poor ones? (3, 10)',
        answer: (() => (publish_answers[0] ? 'Les Miserables' : ''))(),
      },
      {
        question: 'Opposite of North Atlantic? (5, 7)',
        answer: (() => (publish_answers[0] ? 'South Pacific' : ''))(),
      },
      {
        question: 'Not your dark gentleman? (2, 4, 4)',
        answer: (() => (publish_answers[0] ? 'My Fair Lady' : ''))(),
      },
      {
        question: 'Mother Farrow? (5, 3)',
        answer: (() => (publish_answers[0] ? 'Mamma Mia' : ''))(),
      },
      {
        question: 'Not dogs? (4)',
        answer: (() => (publish_answers[0] ? 'Cats' : ''))(),
      },
      {
        question: 'Night-time features fast train? (9,7)',
        answer: (() => (publish_answers[0] ? 'Starlight Express' : ''))(),
      },
    ],
  },
];

export default rounds2;
