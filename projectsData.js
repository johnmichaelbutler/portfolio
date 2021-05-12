export const projectData = [
  {
    title: "Coffee Service",
    images: [
      {
        original: '/original/coffee-service.webp',
        thumbnail: '/thumbnail/coffee-service-tn.jpg',
      }
    ],
    description: "An AWS Microservices project",
    id: "coffee-service",
    webLink: '#',
    githubLink: 'https://github.com/johnmichaelbutler/CoffeeService',
    summary: "Coffee Service is my current and in-progress project. It will be a coffee ordering app where customers can create an account, order and purchase their drinks. Coffee shop employees will be able to log into the website as an administrator and see orders as they come in and fulfill them. This project is an AWS project using NextJS and Redux for the client. AWS Amplify is used for authentication and deployment. AWS Lambda, Amazon API Gateway, and Amazon DynamoDB are used to create a serverless microservices backend. Each microservice communies with the others using Amazon EventBridge as an event bus. Payments are handled using Stripe.",
    active: false
  },
  {
    title: "GitTix",
    images: [
      {
        original: '/original/gittix.webp',
        thumbnail: '/thumbnail/gittix-tn.jpg',
      }
    ],
    description: "A Docker/Kubernetes project",
    id: "ticketing",
    webLink: '#',
    githubLink: 'https://github.com/johnmichaelbutler/ticketing',
    summary: "Note: App is currently not live to save costs. Please see GitHub code. GitTix is a ticket marketplace where users can buy and sell tickets. Capstone project from Stephen Grider’s Microservices with Node JS and React course. Built using NextJS for the client. NATS streaming service is used for an event bus to communicate between microservices. Each microservice is made using Typescript, Express, Mongoose, and MongoDB as a database. Services are deployed as a Docker container. Kubernetes is used to manage each service and serve as a load balancer.",
    active: false
  },
  {
    title: "Distinctive Design",
    images: [
      {
        original: '/original/distinctive-design.webp',
        thumbnail: '/original/distinctive-design.webp',
      },
      {
        original: '/original/distinctive-design2.webp',
        thumbnail: '/original/distinctive-design2.webp',
      }
    ],
    description: "A Next.JS project",
    id: "distinctive-designs",
    webLink: 'https://distinctive-designs-773mohv3m-jmbutler.vercel.app/',
    githubLink: 'https://github.com/johnmichaelbutler/distinctive-designs',
    summary: "Note: This website is still awaiting more informtion to be completed. Distinctive Drafting and Designs is a business website made to advertise a local business by the same name. This website is made using Next.JS and TailwindCSS. ",
    active: true
  },
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
    summary: "reactcolorpicker is a web app that allows a user to use or create custom palettes of colors. This app is based on the final project from Colt Steele's React course on Udemy. However, this version of the app has been completely overhauled to exclusively use React Hooks and Context API. A user is able to create a custom palette of colors and, by utilizing local state, can return at a later time to use the custom palette.",
    active: true
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
    summary: "Crwnclothing is an e-commerce progressive web app for a fictional clothing store. A user is able to browse through different categories of clothing and save them to a shopping cart. A user can create their own personal accont on the website using an email and password or through a third party authenticator, in this case, Google. A secure payment method is included through Stripe. A user can simulate a payment with a test credit card upon checkout. All security and authentification is managed on the backend through Google Firestore and Stripe. The complex state of the application is managed using Redux and Redux Thunk to handle async requests.",
    active: true
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
    webLink: 'http://ec2-3-19-213-77.us-east-2.compute.amazonaws.com:8000/index.html',
    githubLink: 'https://github.com/johnmichaelbutler/deno_final_project',
    summary: "NASA Mission Control is a simulation of a  NASA Mission Control panel. A user is able to schedule a NASA rocket launch.  The user also has the ability to see upcoming and historical launches. NASA Mission Control uses TypeScript on the frontend, Deno on the backend to manage security and API requests, and is deployed using Docker and AWS EC2. This project, taken from the Zero to Mastery Deno course, also includes custom API endpoints for data requests.",
    active: true
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
    summary: "Mario Plan is a Mario-themed project management tool with authentification and cloud functions. This ap is made using React, Redux and Google Firebase. The user can create their own projects and notifications. In order to create or edit a project, the user must first log in or create an account. Authentification is managed through Google Firebase. State management is handled through Redux and notifications are handled through Firebase cloud functions. This app is taken from the React, Redux and Firebase tutorial from Net Ninja on YouTube.",
    active: true
  },
  {
    title: "Portfolio Website",
    images: [
      {
        original: '/original/portfolio.webp',
        thumbnail: '/thumbnail/portfolio-tn.jpg',
      }
    ],
    description: "A Next.JS/TailwindCSS/AWS project",
    id: "portfolio",
    webLink: 'https://johnbutler.dev',
    githubLink: 'https://github.com/johnmichaelbutler/portfolio',
    summary: "This website is made using the React framework Next.JS. Next.JS was chosen for its ability to easily produce static websites and its file-system-based routing. TailwindCSS was chosen as the CSS framework. I like working with TailwindCSS because of its utility-first approach to CSS and small build size in production. To host the website, I utilize AWS S3 static website hosting. The website is distributed using an AWS CloudFront distribution and utilizes HTTPS through a certificate from AWS Certificate Manager. AWS Route 53 is used as the DNS for both this website and blog, blog.johnbutler.dev."
  },
  {
    title: "Custom Countdown",
    images: [
      {
        original: '/original/custom-countdown.webp',
        thumbnail: '/thumbnail/custom-countdown-tn.jpg',
      },
      {
        original: '/original/custom-countdown2.webp',
        thumbnail: '/thumbnail/custom-countdown2-tn.jpg',
      }
    ],
    description: "A JavaScript project",
    id: "custom-countdown",
    webLink: 'https://johnmichaelbutler.github.io/custom-countdown/',
    githubLink: 'https://github.com/johnmichaelbutler/custom-countdown',
    summary: "Custom Countdown is a date-based browser countdown. It uses the browser's local storage API to store the countdown data. The countdown is implemented using the setInterval function. Project taken from Zero to Mastery's 20 JavaScript Projects.",
    active: true
  },
  {
    title: "Music Player",
    images: [
      {
        original: '/original/music-player.webp',
        thumbnail: '/thumbnail/music-player-tn.jpg',
      }
    ],
    description: "A JavaScript project",
    id: "music-player",
    webLink: 'https://johnmichaelbutler.github.io/music-player/',
    githubLink: 'https://github.com/johnmichaelbutler/music-player',
    summary: "Music Player is a a browser-based audio player. It uses the browser's Web Audio API to play the songs. Project taken from Zero to Mastery's 20 JavaScript Projects.",
    active: true
  },
  {
    title: "Animated Navigation",
    images: [
      {
        original: '/original/animated-navigation.webp',
        thumbnail: '/thumbnail/animated-navigation-tn.jpg',
      },
      {
        original: '/original/animated-navigation2.webp',
        thumbnail: '/thumbnail/animated-navigation2-tn.jpg',
      }
    ],
    description: "A JavaScript project",
    id: "animated-navigation",
    webLink: 'https://johnmichaelbutler.github.io/animated-navigation/',
    githubLink: 'https://github.com/johnmichaelbutler/animated-navigation',
    summary: "Animated Navigation is a project that demonstrates controlling CSS animations using JavaScript. Project taken from Zero to Mastery's 20 JavaScript Projects.",
    active: true
  },
  {
    title: "Light Dark Mode",
    images: [
      {
        original: '/original/light-dark-mode.webp',
        thumbnail: '/thumbnail/light-dark-mode-tn.jpg',
      },
      {
        original: '/original/light-dark-mode2.webp',
        thumbnail: '/thumbnail/light-dark-mode2-tn.jpg',
      },
    ],
    description: "A JavaScript project",
    id: "light-dark-mode",
    webLink: 'https://johnmichaelbutler.github.io/light-dark-mode/',
    githubLink: 'https://github.com/johnmichaelbutler/light-dark-mode',
    summary: "Light Dark Mode is a JavaScript project that demonstates how to implement a light/dark mode toggle for a website. Project taken from Zero to Mastery's 20 JavaScript Projects.",
    active: true
  },
  {
    title: "Joke Teller",
    images: [
      {
        original: '/original/joke-teller.webp',
        thumbnail: '/thumbnail/joke-teller-tn.jpg',
      }
    ],
    description: "A JavaScript project",
    id: "joke-teller",
    webLink: 'https://johnmichaelbutler.github.io/joke-teller/',
    githubLink: 'https://github.com/johnmichaelbutler/joke-teller',
    summary: "Joke Teller is a JavaScript project that uses VoiceRSS text-to-speech API to read a joke to visitors. The joke is fetched from an external API. Project taken from Zero to Mastery's 20 JavaScript Projects.",
    active: true
  },
  {
    title: "Picture In Picture",
    images: [
      {
        original: '/original/picture-in-picture.webp',
        thumbnail: '/thumbnail/picture-in-picture-tn.jpg',
      }
    ],
    description: "A JavaScript project",
    id: "picture-in-picture",
    webLink: 'https://johnmichaelbutler.github.io/picture-in-picture/',
    githubLink: 'https://github.com/johnmichaelbutler/picture-in-picture',
    summary: "Picture In Picture enables users to choose another window and create a mini-player of that window. Project uses the browser's ScreenCapture API and its getDisplayMedia() method. Project taken from Zero to Mastery's 20 JavaScript Projects.",
    active: true
  },
  {
    title: "Infinite Scroll",
    images: [
      {
        original: '/original/infinite-scroll.webp',
        thumbnail: '/thumbnail/infinite-scroll-tn.jpg',
      }
    ],
    description: "A JavaScript project",
    id: "infinite-scroll",
    webLink: 'https://johnmichaelbutler.github.io/infinite-scroll/',
    githubLink: 'https://github.com/johnmichaelbutler/infinite-scroll',
    summary: "Infinite Scroll is photo gallery website with photos taken from the Unsplash API. As visitors reach near the bottom of the page, photos are asynchronously loaded and added to the webpage, creating the feeling of infinite scrolling. Project taken from Zero to Mastery's 20 JavaScript Projects. ",
    active: true
  },
  {
    title: "Quote Generator",
    images: [
      {
        original: '/original/quote-generator.webp',
        thumbnail: '/thumbnail/quote-generator-tn.jpg',
      }
    ],
    description: "A JavaScript project",
    id: "quote-generator",
    webLink: 'https://johnmichaelbutler.github.io/quote-generator/',
    githubLink: 'https://github.com/johnmichaelbutler/quote-generator',
    summary: "Quote generator displays a random quote on demand. This project utilizes a custom proxy to avoid CORS issues when fetching quotes from the Forismatic API. Visitors to the site can also Tweet any quote they like using the Twitter API. Project taken from Zero to Mastery's 20 JavaScript Projects.",
    active: true
  },
];

export const getProjectData = (id) => {
  return projectData.filter(project => project.id === id);
}

export const getAllProjectIds = () => {
  return [
    { params: { id: 'reactcolorpicker'}},
    { params: { id: 'crwnclothing'}},
    { params: { id: 'nasa-mission-control'}},
    { params: { id: 'mario-plan'}},
    { params: { id: 'portfolio'}},
    { params: { id: 'distinctive-designs'}},
    { params: { id: 'coffee-service'}},
    { params: { id: 'ticketing'}},
    { params: { id: 'custom-countdown'}},
    { params: { id: 'music-player'}},
    { params: { id: 'animated-navigation'}},
    { params: { id: 'light-dark-mode'}},
    { params: { id: 'joke-teller'}},
    { params: { id: 'picture-in-picture'}},
    { params: { id: 'infinite-scroll'}},
    { params: { id: 'quote-generator'}},
  ]
}