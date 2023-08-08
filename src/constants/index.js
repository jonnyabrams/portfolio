import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  rails,
  reactjs,
  redux,
  ruby,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  een,
  mediacorp,
  sinton,
  wondr,
  bookface,
  kangalivery,
  pizzacapaldi,
  scarebnb,
  toktik,
  yourtube,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "React Native",
  "Next.js",
  "Ruby on Rails",
  "CSS",
  "HTML",
  "GraphQL",
  "Tailwind",
  "Sass",
  "styled-components",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Node",
  "Express",
  "Docker",
  "Svelte",
  "SvelteKit",
  "Redux",
  "Redux Toolkit",
  "Context API",
  "Amazon Web Services",
  "Figma",
  "Elasticsearch",
  "Jest",
  "Cypress",
  "Minitest",
  "RSpec",
  "Firebase",
  "Supabase",
  "Sanity CMS",
  "Cloudinary",
];

// TODO: graphql, next.js, Jest, Cypress, minitest, RSpec, detox

const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "Ruby",
    icon: ruby,
  },
  {
    name: "Ruby on Rails",
    icon: rails,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React Native & Ruby on Rails Developer",
    company_name: "Wondr Medical",
    icon: wondr,
    iconBg: "#383E56",
    date: "December 2022 - July 2023",
    points: [
      "Implementing new designs and features for mobile and web using React Native with TypeScript, Ruby on Rails and Amazon Web Services",
      "Developing a secure and compliant communications app for clinical trials, meeting SOC 2 standards, while also maintaining the company's core networking website for healthcare professionals",
      "Prototyping and delivering new features requested by the client, such as scheduled room posts, SMS notifications, and a multipost messenger admin panel",
      "Implementing responsive design and ensuring cross-browser compatibility",
      "Deploying staging environments and facilitated over-the-air updates to application builds",
      "Conducting code reviews for colleagues' pull requests and ensured timely updates with main branch for seamless omnibuilds",
      "Creating comprehensive test cases using minitest framework",
      "Performing manual QA testing to ensure product quality and user satisfaction",
    ],
  },
  {
    title: "Editorial Director/Writer",
    company_name: "Sinton Media Ltd",
    icon: sinton,
    iconBg: "#FFF",
    date: "June 2011 - June 2021",
    points: [
      "Creating and running new websites for Sinton Media Ltd using contacts and expertise from previous experience",
      "Maintaining a presence on various social media platforms to promote content and monitor viral trends",
      "Using SEO to maximise incoming traffic and Google rankings",
      "Negotiating with prospective advertisers and affiliates",
      "Sourcing and editing high-resolution images to match the design of the websites",
      "Publishing articles with WordPress, HTML and CSS",
    ],
  },
  {
    title: "Staff Writer",
    company_name: "Sport.co.uk (Media Corp)",
    icon: mediacorp,
    iconBg: "#FFF",
    date: "April 2009 - March 2011",
    points: [
      "Publishing news articles and writing features on football, rugby, cricket, darts etc.",
      "Interviewing high-profile sporting figures, supported by in-depth research to establish rapport with interviewee and stimulate original conversation",
      "Identifying newsworthy angles from the interview transcript with a view to following them up with news stories and social media posts",
      "Sub-editing colleagues’ articles, ensuring high standards of English and compliance to style guides",
      "Establishing working relationships with PR companies and agents",
    ],
  },
  {
    title: "Features Writer",
    company_name: "Edinburgh Evening News",
    icon: een,
    iconBg: "#E6DEDD",
    date: "August 2007 - November 2007",
    points: [
      "Reviewed comedy gigs at the Fringe for the Edinburgh Evening News",
      "Wrote and maintained listings for live music and theatre",
      "Sourced/conducted/transcribed interviews for local interest pieces",
    ],
  },
];

const testimonials = [
  {
    content:
      "Jonny's dedication and passion were evident in every task he undertook. His ability to effectively communicate complex ideas fostered seamless collaboration among team members and stakeholders. I also enjoyed his knack for spotting bugs!",
    name: "Alex Jones",
    role: "Head of Product",
    company: "Wondr Medical",
    image: "https://media.licdn.com/dms/image/C5603AQGvU5N2R6JGMg/profile-displayphoto-shrink_800_800/0/1516624822714?e=1697068800&v=beta&t=MwqfUNfQS3zpCltfjkICSWCRHL5gimnSbQ_WUcmtn_E",
  },
  {
    content:
      "Jonny has been fantastic to work with as a Product Designer - His quick understanding of proposed designs and consistent communication throughout the development process allowed us to release a polished and accurate version of features every time, enabling focus on rapid and iterative platform improvement.",
    name: "Zacharia Curtis",
    role: "Product Designer",
    company: "Wondr Medical",
    image: "https://media.licdn.com/dms/image/D4E03AQGPq7s0vB-s6w/profile-displayphoto-shrink_800_800/0/1689946544230?e=1697068800&v=beta&t=Nu3dafU6LAJ7Aq9hjsbIrjaJPBZHUJtXipoZjYSHJEA",
  },
  {
    content:
      "Jonny is incredibly skilled at delivering projects on time and maintaining high standards. He's a fantastic team player too, always quick to lend a hand when needed or jump in to help solve problems together. He's very passionate about what he does, and that enthusiasm shines through in his work.",
    name: "Irina Soldatenkova",
    role: "Full-Stack Developer",
    company: "Wondr Medical",
    image: "https://media.licdn.com/dms/image/D4E35AQHQLMz5DtblQw/profile-framedphoto-shrink_800_800/0/1690293663870?e=1692090000&v=beta&t=cBMqoYfqhwo-ThZfSGjFaMO-mV6V3VE5WTNJxI_-LRo",
  },
  // {
  //   content:
  //     "Jonny's very modest and often downplays his own skills. But I've seen him step up, take on tough tasks, and knock them out of the park! Honestly, I'm excited to see where he takes his career next. Jonny is a great team player who not only brings a positive vibe but also consistently delivers.",
  //   name: "Paris Monson",
  //   role: "Full-Stack Developer",
  //   company: "Wondr Medical",
  //   image: "https://media.licdn.com/dms/image/D4E35AQGGaM3-p2-UCw/profile-framedphoto-shrink_800_800/0/1690288362664?e=1692090000&v=beta&t=GZV147ui0DJVjm2z0DjcCOIwjU1Hq50HzJhGHe8qMYM",
  // },
];

const projects = [
  {
    name: "Bookface",
    description:
      "A Facebook clone using TypeScript and the PERN stack (PostgreSQL, Express, React, Node), with React Query/Context API for state management and Sass CSS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: bookface,
    source_code_link: "https://github.com/jonnyabrams/bookface-2.0",
  },
  {
    name: "Pizza Capaldi",
    description:
      "A Peter Capaldi-themed pizza delivery website, built using TypeScript, NextJS, MongoDB, Cloudinary and PayPal integration.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: pizzacapaldi,
    source_code_link: "https://github.com/jonnyabrams/pizza-capaldi",
  },
  {
    name: "TokTik",
    description:
      "A TikTok clone using TypeScript, Next.js, Sanity CMS, Tailwind and Google OAuth.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: toktik,
    source_code_link: "https://github.com/jonnyabrams/toktik",
  },

  {
    name: "Kangalivery",
    description:
      "Deliveroo clone using React Native, Redux Toolkit and Tailwind.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "reduxtoolkit",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: kangalivery,
    source_code_link: "https://github.com/jonnyabrams/kangalivery",
  },
  {
    name: "ScareBnb",
    description:
      "Haunted house Airbnb clone built with TypeScript, Next.js, Tailwind, Heroicons, Mapbox and react-date-range.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "mapbox",
        color: "pink-text-gradient",
      },
    ],
    image: scarebnb,
    source_code_link: "https://github.com/jonnyabrams/splotify",
  },
  {
    name: "YourTube",
    description:
      "A YouTube clone using the MERN stack with Firebase storage and styled-components.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: yourtube,
    source_code_link: "https://github.com/jonnyabrams/yourtube",
  },
];

export { services, skills, technologies, experiences, testimonials, projects };
