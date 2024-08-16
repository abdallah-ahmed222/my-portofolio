import { FaFacebook } from "react-icons/fa6";
import { FaGithub, FaLinkedinIn, FaMailBulk } from "react-icons/fa";
import Javascript from "../assets/java-script.png";
import Html from "../assets/html.png";
import Css from "../assets/css-3.png";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/tailwind.png";
import sass from "../assets/sass.png";
import github from "../assets/github.png";
import firebase from "../assets/firebase.png";
import redux from "../assets/redux.png";
import react from "../assets/react.png";
import typescript from "../assets/typescript.png";
import angular from "../assets/angular.png";
// nav links
export const navLinksData = [
  {
    label: "Home",
    to: "/",
    target: "",
  },
  {
    label: "Works",
    to: "/project",
    target: "",
  },
];
// home linksData
export const homeLinksData = [
  {
    label: "Facebook",
    to: "https://www.facebook.com/profile.php?id=100074432431981&mibextid=ZbWKwL",
    element: <FaFacebook />,
  },
  {
    label: "Linked In",
    to: "https://www.linkedin.com/in/abdallah-ahmed-783512231/",
    element: <FaLinkedinIn />,
  },
  {
    label: "GitHub",
    to: "https://github.com/abdallah-ahmed222",
    element: <FaGithub />,
  },
  {
    label: "Mail Me",
    to: "mailto:abdallah.ahmed2022222@gmail.com",
    element: <FaMailBulk />,
  },
];

export const techStackData = [
  {
    label: "Javascript",
    disc: "JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive (e.g., having complex animations, clickable buttons, popup menus, etc.).",
    element: (
      <img src={Javascript} alt="Javascript-icon" className="img-fluid" />
    ),
  },
  {
    label: "HTML5",
    disc: "HTML is the standard markup language for Web pages With HTML you can create your own Website.",
    element: <img src={Html} alt="Html-icon" className="img-fluid" />,
  },
  {
    label: "CSS3",
    disc: "CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.",
    element: <img src={Css} alt="css-icon" className="img-fluid" />,
  },
  {
    label: "Bootstrap",
    disc: "Bootstrap is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites.",
    element: <img src={bootstrap} alt="bootstrap-icon" className="img-fluid" />,
  },
  {
    label: "Tailwind",
    disc: "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
    element: <img src={tailwind} alt="tailsind-icon" className="img-fluid" />,
  },
  {
    label: "Sass",
    disc: "Stylesheets are getting larger, more complex, and harder to maintain. This is where a CSS pre-processor can help. Sass lets you use features that do not exist in CSS, like variables, nested rules, mixins, imports, inheritance, built-in functions, and other stuff.",
    element: <img src={sass} alt="sass-icon" className="img-fluid" />,
  },
  {
    label: "Git",
    disc: "Git is a version control system , Git helps you keep track of code changes and it is used to collaborate on code.",
    element: <img src={github} alt="git-icon" className="img-fluid" />,
  },
  {
    label: "Firebase",
    disc: "Bootstrap is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites.The Firebase Realtime Database is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client. When you build cross-platform apps with our Apple platforms, Android, and JavaScript SDKs",
    element: <img src={firebase} alt="firebase-icon" className="img-fluid" />,
  },
  {
    label: "Redux",
    disc: "Redux is a JS library for predictable and maintainable global state management. It helps you write applications that behave consistently, run in different environments ",
    element: <img src={redux} alt="redux-icon" className="img-fluid" />,
  },
  {
    label: "React",
    disc: "React is a JavaScript library created by Facebook .React is a User Interface (UI) library React is a tool for building UI components",
    element: <img src={react} alt="react-icon" className="img-fluid" />,
  },
  {
    label: "Typescript",
    disc: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    element: (
      <img src={typescript} alt="typescript-icon" className="img-fluid" />
    ),
  },
  {
    label: "Angular",
    disc: "As a platform, Angular includes:  1-A component-based framework for building scalable web applications 2-A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more A suite of developer tools to help you develop, build, test, and update your code",
    element: <img src={angular} alt="angular-icon" className="img-fluid" />,
  },
];
