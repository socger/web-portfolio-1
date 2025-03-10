const data = [
  {
    id: 1,
    image: "/work/nordic.jpg",
    company: "nordic software solution",
    role: "MERN Stack Developer",
    type: "remote", // remote or phisical
    date: "11/2022 - present",
    skills: [
      { id: 1, name: "node JS", image: "/skills/node-js.png" },
      { id: 2, name: "express JS", image: "/skills/express.png" },
      { id: 3, name: "mongoDB", image: "/skills/mongodb.png" },
      { id: 4, name: "react JS", image: "/skills/react.png" },
      { id: 5, name: "next", image: "/skills/next-js.png" },
      { id: 6, name: "redux", image: "/skills/redux.png" },
      { id: 7, name: "tailwind CSS", image: "/skills/tailwind.png" },
      { id: 8, name: "material UI", image: "/skills/mui.png" },
      { id: 9, name: "github", image: "/skills/git.png" },
    ],
  },

  {
    id: 2,
    image: "/work/devsinc.jpeg",
    role: "backend developer",
    company: "Devsinc",
    type: "remote",
    date: "10/2022 - 11/2022",
    skills: [
      { id: 1, name: "node JS", image: "/skills/node-js.png" },
      { id: 2, name: "express JS", image: "/skills/express.png" },
      { id: 3, name: "Heroku", image: "/skills/heroku.png" },
      { id: 4, name: "github", image: "/skills/git.png" },
    ],
  },

  {
    id: 3,
    image: "/work/lookup.jpeg",
    role: "frontend developer",
    company: "lookup it solution",
    type: "remote",
    date: "10/2022 - 11/2022",
    skills: [
      { id: 1, name: "next", image: "/skills/next-js.png" },
      { id: 2, name: "react", image: "/skills/react.png" },
      { id: 3, name: "redux", image: "/skills/redux.png" },
      { id: 4, name: "tailwindcss", image: "/skills/tailwind.png" },
    ],
  },

  {
    id: 4,
    image: "/work/udemy.png",
    role: "instructor",
    company: "udemy",
    type: "online",
    date: "5/2017 - present",
    options: ["45000+ udemy students", "Courses are includes projects"],
  },

  {
    id: 5,
    image: "/work/youtube.jpg",
    role: "instructor",
    company: "youtube",
    type: "online",
    date: "2/2016 - present",
    options: [
      "1200+ youtube subsribers",
      "Created courses on React, Redux, Context API, Sass etc.",
      "Tutorial videos included projects such as social networks, Ecommerce, blogs, stripe integrations and more",
    ],
  },
];

export default data;
