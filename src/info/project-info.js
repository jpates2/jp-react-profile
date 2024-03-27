import verbify1 from "../images/projects/verbify1.png";
import verbify2 from "../images/projects/verbify2.png";
import fanfind1 from "../images/projects/fanfind1.png";
import fanfind2 from "../images/projects/fanfind2.png";
import bros1 from "../images/projects/bros1.png";
import bros2 from "../images/projects/bros2.png";
import pit1 from "../images/projects/pit1.png";
import pit2 from "../images/projects/pit2.png";
import game1 from "../images/projects/game1.png";
import game2 from "../images/projects/game2.png";
import ron1 from "../images/projects/ron1.png";
import ron2 from "../images/projects/ron2.png";

export const ProjectInfo = [
  {
    id: "project-1",
    title: "Verbify",
    paramTitle: "verbify",
    text: ["Work-in-progress interactive site that allows users to enhance their Spanish skills through reviewing verbs and then practising with flashcards.", "Users will be able to create a profile where they can view past results and a personalised list of past errors to review.", "Built using React and all of its fundamental features."],
    languages: ["React", "HTML", "CSS"],
    link: "https://incredible-sfogliatella-364828.netlify.app",
    github: "https://github.com/jpates2/verbify",
    img: verbify1,
    images: [verbify2],
    orientation: "portrait"
  },
  {
    id: "project-2",
    title: "FanFind",
    paramTitle: "fanfind",
    text: ["Ruby on Rails mobile site using HTML, CSS and JavaScript to bring together football fans through events based on World Cup games. Created as a team as culmination of Le Wagon bootcamp. Led initiatives across full stack, personally responsible for features including event detail pages, map integration, live chat feature, social media feed, page routing, DB management."],
    languages: ["Ruby on Rails", "HTML", "CSS"],
    link: "https://fanfind-460dd89f6f77.herokuapp.com/",
    github: "https://github.com/jpates2/fan-find",
    img: fanfind1,
    images: [fanfind2],
    orientation: "portrait"
  },
  {
    id: "project-3",
    title: "Bros Pizza",
    paramTitle: "brospizza",
    text: ["Pizzeria homepage and ordering site, built with React and its fundamentals: hooks, state, context, router, portals."],
    languages: ["React", "HTML", "CSS"],
    link: "https://resonant-rabanadas-85a557.netlify.app/",
    github: "https://github.com/jpates2/bros-pizza",
    img: bros1,
    images: [bros2],
    orientation: "portrait"
  },
  {
    id: "project-4",
    title: "Pit Stop",
    paramTitle: "pitstop",
    text: ["Landing page for street food market, with focus on attractive CSS design through flexbox, grids, positioning, media queries."],
    languages: ["HTML", "CSS", "JavaScript"],
    link: "https://main--stirring-bunny-e3e887.netlify.app/",
    github: "https://github.com/jpates2/pitstop",
    img: pit1,
    images: [pit2],
    orientation: "portrait"
  },
  {
    id: "project-5",
    title: "GameOn",
    paramTitle: "gameon",
    text: ["JavaScript arcade style game site using primitive and reference types, functions, conditionals, loops, DOM manipulation."],
    languages: ["JavaScript", "HTML", "CSS"],
    link: "https://gameon-ur5o.onrender.com/",
    github: "https://github.com/jpates2/gameon",
    img: game1,
    images: [game2],
    orientation: "landscape"
  },
  {
    id: "project-6",
    title: "Ron Swanson PT",
    paramTitle: "ronswansonpt",
    text: ["Tailwind landing page with responsive design for personal trainer's business page."],
    languages: ["Tailwind", "HTML", "JavaScript"],
    link: "https://creative-dasik-19f68c.netlify.app/",
    github: "https://github.com/jpates2/ronswansonpt",
    img: ron1,
    images: [ron2],
    orientation: "portrait"
  }
]

// Expanded upon minesweeper game within GameOn by implementing responsive design, timer and score. Top scores are maintained and fetched using an external database.
