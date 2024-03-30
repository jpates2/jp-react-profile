import verbify from "../images/projects/verbify.png";
import verbify1 from "../images/projects/verbify1.png";
import verbify2 from "../images/projects/verbify2.png";
import verbify3 from "../images/projects/verbify3.png";
import verbify4 from "../images/projects/verbify4.png";
import verbify5 from "../images/projects/verbify5.png";
import fanfind from "../images/projects/fanfind.png";
import fanfind1 from "../images/projects/fanfind1.png";
import fanfind2 from "../images/projects/fanfind2.png";
import fanfind3 from "../images/projects/fanfind3.png";
import fanfind4 from "../images/projects/fanfind4.png";
import fanfind5 from "../images/projects/fanfind5.png";
import bros from "../images/projects/bros.png";
import bros1 from "../images/projects/bros1.png";
import bros2 from "../images/projects/bros2.png";
import bros3 from "../images/projects/bros3.png";
import bros4 from "../images/projects/bros4.png";
import bros5 from "../images/projects/bros5.png";
import bros6 from "../images/projects/bros6.png";
import bros7 from "../images/projects/bros7.png";
import pit from "../images/projects/pit.png";
import pit1 from "../images/projects/pit1.png";
import pit2 from "../images/projects/pit2.png";
import pit3 from "../images/projects/pit3.png";
import pit4 from "../images/projects/pit4.png";
import pit5 from "../images/projects/pit5.png";
import pit6 from "../images/projects/pit6.png";
import game from "../images/projects/game.png";
import game1 from "../images/projects/game1.png";
import game2 from "../images/projects/game2.png";
import game3 from "../images/projects/game3.png";
import game4 from "../images/projects/game4.png";
import game5 from "../images/projects/game5.png";
import ron from "../images/projects/ron.png";
import ron1 from "../images/projects/ron1.png";
import ron2 from "../images/projects/ron2.png";
import ron3 from "../images/projects/ron3.png";
import ron4 from "../images/projects/ron4.png";
import ron5 from "../images/projects/ron5.png";
import ron6 from "../images/projects/ron6.png";
import ron7 from "../images/projects/ron7.png";

export const ProjectInfo = [
  {
    id: "project-1",
    title: "Verbify",
    paramTitle: "verbify",
    text: ["Interactive site that allows users to enhance their Spanish verb conjugation skills through word review and practising with flashcards.",
    "Users are able to create a profile where they can view past results and a personalised list of words to work on.",
    "Built using React basics as well as custom hooks, portals, loaders, and framer motion for animation. Links to external database to manage storage of user details."],
    languages: ["React", "HTML", "CSS"],
    link: "https://incredible-sfogliatella-364828.netlify.app",
    github: "https://github.com/jpates2/verbify",
    img: verbify,
    images: [verbify1, verbify2, verbify3, verbify4, verbify5],
    orientation: "portrait"
  },
  {
    id: "project-2",
    title: "FanFind",
    paramTitle: "fanfind",
    text: ["Ruby on Rails mobile site using HTML, CSS and JavaScript to bring together football fans through events based on World Cup games.",
    "Created as a team as culmination of Le Wagon bootcamp. I was involved across full stack, personally responsible for features including event detail pages, map integration, live chat feature, social media feed, page routing, and DB management."],
    languages: ["Ruby on Rails", "HTML", "CSS"],
    link: "https://fanfind-460dd89f6f77.herokuapp.com/",
    github: "https://github.com/jpates2/fan-find",
    img: fanfind,
    images: [fanfind1, fanfind2, fanfind3, fanfind4, fanfind5],
    orientation: "portrait"
  },
  {
    id: "project-3",
    title: "Bros Pizza",
    paramTitle: "brospizza",
    text: ["My first React project: a landing and ordering page for a pizza restaurant.",
    "Makes use of many of React's core features: state, props, context, hooks, side effects, routing, portals. Also includes connection to backend Database via HTTP fetch requests."],
    languages: ["React", "HTML", "CSS"],
    link: "https://resonant-rabanadas-85a557.netlify.app/",
    github: "https://github.com/jpates2/bros-pizza",
    img: bros,
    images: [bros1, bros2, bros3, bros4, bros5, bros6, bros7],
    orientation: "portrait"
  },
  {
    id: "project-4",
    title: "Pit Stop",
    paramTitle: "pitstop",
    text: ["Landing page design for fictional London street food market with multiple vendors. Goal is to design and build out individual landing page for each vendor.",
    "Mobile first with responsive design to ensure page maintains appearance and usability on larger screens."],
    languages: ["HTML", "CSS", "JavaScript"],
    link: "https://main--stirring-bunny-e3e887.netlify.app/",
    github: "https://github.com/jpates2/pitstop",
    img: pit,
    images: [pit1, pit2, pit3, pit4, pit5, pit6],
    orientation: "portrait"
  },
  {
    id: "project-5",
    title: "GameOn",
    paramTitle: "gameon",
    text: ["Arcade style site with a variety of JavaScript powered games.",
    "Focuses on JS essentials such as functions, variables, selectors, array methods, basic operators, logical operators, setting CSS styles, conditionals, loops and timers."],
    languages: ["JavaScript", "HTML", "CSS"],
    link: "https://gameon-ur5o.onrender.com/",
    github: "https://github.com/jpates2/gameon",
    img: game,
    images: [game1, game2, game3, game5, game4],
    orientation: "landscape"
  },
  {
    id: "project-6",
    title: "Ron Swanson PT",
    paramTitle: "ronswansonpt",
    text: ["Tailwind landing page design for personal trainer's business page.",
    "Leverages Tailwind's flexibility and efficiency to create a visually engaging and responsive user experience."],
    languages: ["Tailwind", "HTML", "JavaScript"],
    link: "https://creative-dasik-19f68c.netlify.app/",
    github: "https://github.com/jpates2/ronswansonpt",
    img: ron,
    images: [ron1, ron2, ron3, ron4, ron5, ron6, ron7],
    orientation: "portrait"
  }
]

// Expanded upon minesweeper game within GameOn by implementing responsive design, timer and score. Top scores are maintained and fetched using an external database.
