const work = [
  {
    id: 1,
    name: "Newyork Restaurant App",
    description:
      "It is build on top of the React JS, with react-boostrap. A basic MERN stack app to search the ",
    tags: ["react", "react-boostrap"],

    demo: "https://new-york-restaurant.vercel.app/Restaurants",
    github: "https://github.com/mdnguyen6/New-York-Restaurant",
  },
  {
    id: 2,
    name: "E-commerce App",
    description:
      "A basic website was built in ReactJS. Using basic firebase for storing user infomation and user authentication, axios to call fakeApi, redux for managing state, contextAPI to handle cart logic.",
    tags: ["react", "typescript" ,"material-ui" ,"style-components", "redux", "firebase"],

    demo: "https://e-commerce-app-mu.vercel.app/home",
    github: "https://github.com/mdnguyen6/e-commerce-app",
  },
  {
    id: 3,
    name: "Spotify Clone App",
    description:
      "A spotify clone was built on MEAN stack. Using JWT and passport for user authentication and add to favourite list functionality",
    tags: ["angular", "typescript", "material", "nodeJS", "mongoDB"],

    demo: "https://admiring-feynman-14da09.netlify.app/login",
    github: "https://github.com/mdnguyen6/web422",
  },
];

export type Work = typeof work[0];

export default work;
