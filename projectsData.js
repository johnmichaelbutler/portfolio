export const projectData = [
  {
    title: "reactcolorpicker",
    images: [
      {
      original: '/original/reactcolorpicker.webp',
      thumbnail: '/thumbnail/reactcolorpicker_tn.webp',
      original: '/original/reactcolorpicker.jpg',
      thumbnail: '/thumbnail/reactcolorpicker_tn.jpg'
      },
      {
      original: '/original/reactcolorpicker2.webp',
      thumbnail: '/thumbnail/reactcolorpicker2_tn.webp',
      original: '/original/reactcolorpicker2.jpg',
      thumbnail: '/thumbnail/reactcolorpicker2_tn.jpg'
      },
      {
      original: '/original/reactcolorpicker3.webp',
      thumbnail: '/thumbnail/reactcolorpicker3_tn.webp',
      original: '/original/reactcolorpicker3.jpg',
      thumbnail: '/thumbnail/reactcolorpicker3_tn.jpg'
      },
      {
      original: '/original/reactcolorpicker4.webp',
      thumbnail: '/thumbnail/reactcolorpicker4_tn.webp',
      original: '/original/reactcolorpicker4.jpg',
      thumbnail: '/thumbnail/reactcolorpicker4_tn.jpg'
      },
    ],
    description: "A React project",
    id: "reactcolorpicker",
    webLink: 'https://jb-reactcolorpicker.netlify.app/',
    githubLink: 'https://github.com/johnmichaelbutler/color-app',
    summary: "reactcolorpicker is a web app that allows a user to use or create custom palettes of colors. This app is based on the final project from Colt Steele's React course on Udemy. However, this version of the app has been completely overhauled to exclusively use React Hooks and Context API. A user is able to create a custom palette of colors and, by utilizing local state, can return at a later time to use the custom palette."
  },
  {
    title: "crwnclothing",
    images: [
      {
        original: '/original/crwnclothing.webp',
        thumbnail: '/thumbnail/crwnclothing_tn.webp',
        original: '/original/crwnclothing.jpg',
        thumbnail: '/thumbnail/crwnclothing_tn.jpg'
      },
      {
        original: '/original/crwnclothing2.webp',
        thumbnail: '/thumbnail/crwnclothing2_tn.webp',
        original: '/original/crwnclothing2.jpg',
        thumbnail: '/thumbnail/crwnclothing2_tn.jpg'
      },
      {
        original: '/original/crwnclothing3.webp',
        thumbnail: '/thumbnail/crwnclothing3_tn.webp',
        original: '/original/crwnclothing3.jpg',
        thumbnail: '/thumbnail/crwnclothing3_tn.jpg'
      },
      {
        original: '/original/crwnclothing4.webp',
        thumbnail: '/thumbnail/crwnclothing4_tn.webp',
        original: '/original/crwnclothing4.jpg',
        thumbnail: '/thumbnail/crwnclothing4_tn.jpg'
      },
    ],
    description: "A React/Redux/Firebase project",
    id: "crwnclothing",
    webLink: 'https://crwn-clothing-react-project.herokuapp.com/',
    githubLink: 'https://github.com/johnmichaelbutler/crwn-clothing',
    summary: "Crwnclothing is an e-commerce progressive web app for a fictional clothing store. A user is able to browse through different categories of clothing and save them to a shopping cart. A user can create their own personal accont on the website using an email and password or through a third party authenticator, in this case, Google. A secure payment method is included through Stripe. A user can simulate a payment with a test credit card upon checkout. All security and authentification is managed on the backend through Google Firestore and Stripe. The complex state of the application is managed using Redux and Redux Thunk to handle async requests."
  },
  {
    title: "NASA Mission Control",
    images: [
      {
        original: '/original/deno.webp',
        thumbnail: '/thumbnail/deno_tn.webp',
        original: '/original/deno.jpg',
        thumbnail: '/thumbnail/deno_tn.jpg'
      },
      {
        original: '/original/deno2.webp',
        thumbnail: '/thumbnail/deno2_tn.webp',
        original: '/original/deno2.jpg',
        thumbnail: '/thumbnail/deno2_tn.jpg'
      },
      {
        original: '/original/deno3.webp',
        thumbnail: '/thumbnail/deno3_tn.webp',
        original: '/original/deno3.jpg',
        thumbnail: '/thumbnail/deno3_tn.jpg'
      },
    ],
    description: "A TS/Deno/Docker/AWS project",
    id: "nasa-mission-control",
    webLink: 'http://ec2-52-14-201-38.us-east-2.compute.amazonaws.com:8000/index.html',
    githubLink: 'https://github.com/johnmichaelbutler/deno_final_project',
    summary: "NASA Mission Control is a simulation of a  NASA Mission Control panel. A user is able to schedule a NASA rocket launch.  The user also has the ability to see upcoming and historical launches. NASA Mission Control uses TypeScript on the frontend, Deno on the backend to manage security and API requests, and is deployed using Docker and AWS EC2. This project, taken from the Zero to Mastery Deno course, also includes custom API endpoints for data requests."
  },
  {
    title: "Mario Plan",
    images: [
      {
        original: '/original/mario-plan.webp',
        thumbnail: '/thumbnail/mario-plan_tn.webp',
        original: '/original/mario-plan.jpg',
        thumbnail: '/thumbnail/mario-plan_tn.jpg'
      },
      {
        original: '/original/mario-plan2.webp',
        thumbnail: '/thumbnail/mario-plan2_tn.webp',
        original: '/original/mario-plan2.jpg',
        thumbnail: '/thumbnail/mario-plan2_tn.jpg'
      },
      {
        original: '/original/mario-plan3.webp',
        thumbnail: '/thumbnail/mario-plan3_tn.webp',
        original: '/original/mario-plan3.jpg',
        thumbnail: '/thumbnail/mario-plan3_tn.jpg'
      },
      {
        original: '/original/mario-plan4.webp',
        thumbnail: '/thumbnail/mario-plan4_tn.webp',
        original: '/original/mario-plan4.jpg',
        thumbnail: '/thumbnail/mario-plan4_tn.jpg'
      },
    ],
    description: "A React/Firebase project",
    id: "mario-plan",
    webLink: 'https://marioplan-8b34e.web.app/signin',
    githubLink: 'https://github.com/johnmichaelbutler/marioPlan',
    summary: "Mario Plan is a Mario-themed project management tool with authentification and cloud functions. This ap is made using React, Redux and Google Firebase. The user can create their own projects and notifications. In order to create or edit a project, the user must first log in or create an account. Authentification is managed through Google Firebase. State management is handled through Redux and notifications are handled through Firebase cloud functions. This app is taken from the React, Redux and Firebase tutorial from Net Ninja on YouTube."
  }
];

export const getProjectData = (id) => {
  return projectData.filter(project => project.id === id);
}

export const getAllProjectIds = () => {
  return [
    { params: { id: 'reactcolorpicker'}},
    { params: { id: 'crwnclothing'}},
    { params: { id: 'nasa-mission-control'}},
    { params: { id: 'mario-plan'}}
  ]
}