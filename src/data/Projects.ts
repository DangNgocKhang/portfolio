import { IProject, IProjectThumbnail } from "../types/Project";

export const dataProjects: IProject[] = [
  {
    id: 1,
    title: "DAC",
    bg_color: "#000000",
    font_color: "#E5DA70",
    overview:
      "DAC is a communication system that focuses on user privacy, security, and control by using decentralized networks and strong anonymity features",
    technology:
      "NextJS, TypeScript, SocketIO, TailwindCSS, Redux, RESTful APIs",
    link: "https://play.google.com/store/apps/details?id=com.irics.dac&pcampaignid=web_share&pli=1",
  },
  {
    id: 2,
    title: "Currency Swap",
    bg_color: "#154E6B",
    font_color: "#fcfcfc",
    overview:
      "Users would use this form to exchange assets from one currency to another",
    technology: "NextJS, TailwindCSS, TypeScript",
    link: "https://currency-swap-ten.vercel.app/",
  },
  {
    id: 3,
    title: "Hotel Management",
    bg_color: "#3E878E",
    font_color: "#262630",
    overview:
      "This is an application that provides effective management functions for hotel businesses and supports complex actions with just a few simple clicks.",
    technology: "NextJS, TailwindCSS, TypeScript, Redux, Visx",
    link: "https://pa-infotel.vercel.app/",
  },
  {
    id: 4,
    title: "Nha Minh Shop",
    bg_color: "#FAE79D",
    font_color: "#469FBD",
    overview:
      "This catalog provides an overview of various phone case designs, giving customers a detailed look at the available options.",
    technology: "Html, Css, JavaScript, Adobe Illustrator",
    link: "https://holakaka.github.io/",
  },
  {
    id: 5,
    title: "Recommendation system for movies",
    bg_color: "#f6ebe8",
    font_color: "#441D49",
    overview:
      "This science research project develops a system to recommend movies based on user ratings, aiming to match user preferences and enhance their viewing experience.",
    technology: "Python, Tkinter, SQL Server",
    link: "https://drive.google.com/file/d/17TvFdANdviXPwiswQtXv8EVc4z_VMzEd/view?usp=sharing",
  },
];

export const dataThumbnail: IProjectThumbnail[] = [
  {
    id: 5,
    src: "Nckh",
  },
  {
    id: 4,
    src: "NhaMinh1",
  },
  {
    id: 3,
    src: "Hotel",
  },
  {
    id: 2,
    src: "FancyForm",
  },
  {
    id: 1,
    src: "Stech",
  },
];
