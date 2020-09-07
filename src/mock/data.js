import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Abyan Dafa | Android Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'personal portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Abyan Dafa',
  subtitle: "Android Developer Enthusiasm",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne: 'Innovative tech mind with 3 years of experience working as a computer programmer especially in Android app development',
  paragraphTwo: 'Well-organised person, problem solver, communicative, both individual and team player and have approximately 1 year working at technology company in Indonesia',
  paragraphThree: 'fan of outdoor activities (Basketball, Badminton, Jogs), TV sitcom Series, Manga, and of course, game.',
  resume: 'https://drive.google.com/file/d/1Yg3QlZdeAL3pOVxqwByp3esIUZ9_Nykg/view', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [

  {
    id: nanoid(),
    img: 'newsaday.png',
    title: 'NewsaDay',
    info: "Simple app to browse news, user can browse headline news from available country and also can search news by keyword",
    info2: 'Build using newsapi.org API, MVVM Architecture with Coroutines and Livedata, applying offline first with Room',
    url: '',
    repo: 'https://github.com/abyand/newsportal', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'geosurvey.png',
    title: 'GeoSurvey Lombok',
    info: 'internal Android app to survey important places in Lombok. gather location, photo, along with additional data and using ofine rst architecture',
    info2: '',
    url: 'https://play.google.com/store/apps/details?id=id.ac.its.geosurvey',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bsb.jpeg',
    title: 'BSB E-money Banking Transaction',
    info: 'feature in BSB m-banking application developing e-money feature in mobile banking application, such as balance check, top-up, and show history transaction, using NFC technology',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'rescue.JPG',
    title: 'Rescue.id',
    info: "Android app to help people get ambulance when medical treat is needed in city of surabaya. Broadcast user location to hospital's ambulance and equipped with first aid guide step",
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'Abyand71@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/abyandafa/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/abyand',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/byandafa/',
    }
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
