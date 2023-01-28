const basePath = '/assets/project-images'

export const projectsData = [
  {
    title: 'Instagram Clone',
    description:
      "An instagram clone made all by myself, It has all the main functionalities, as Creating a Post, liking, commenting, following, following suggestions(based on who you follow). I've also created the functionality of updating your profile (not able to update profile Image, since it would need a image cloud base). The backend was made entirely inside Nextjs API Routes using TRPC's power.",
    techs: ['Nextjs', 'TypeScript', 'Trpc', 'Prisma', 'TailwindCSS'],
    imageUrl: `${basePath}/instagram-clone.jpeg`,
    githubRepo: 'https://github.com/nicholascostadev/instagram-clone',
    website: '',
  },
  {
    title: 'Ignite-shop',
    description:
      'A clothing store made with React and TypeScript. You can select your clothes on the homepage and save all to your cart, later on checkout. All integrated with Stripe for payment methods and fully functional',
    techs: ['Nextjs', 'TypeScript', 'Stitches', 'Stripe API'],
    imageUrl: `${basePath}/ignite-shop.png`,
    githubRepo: 'https://github.com/nicholascostadev/ignite-shop',
    website: 'http://ignite-shop-ebon.vercel.app/',
    right: true,
  },
  {
    title: 'Judge Me',
    description:
      "This website takes all the information needed from Github's public API and judges you depending on how many repositories you have, commits, languages and etc. Texts are not fully dynamic yet.",
    techs: ['Nextjs', 'TypeScript', 'CSS Modules', 'Github API'],
    imageUrl: `${basePath}/judgeme.png`,
    githubRepo: 'https://github.com/nicholascostadev/judgeme',
    website: 'https://judgeme.vercel.app/',
  },
  {
    title: 'Pomodoro timer',
    description:
      'A pomodoro timer that you can use for yourself and be more productive. Your history is also saved locally so you can check your own progress on all tasks.',
    techs: [
      'HTML',
      'Styled Components',
      'TypeScript',
      'React',
      'React-hook-form',
    ],
    imageUrl: `${basePath}/pomodoro-timer.jpeg`,
    githubRepo: 'https://github.com/nicholascostadev/pomodoro-timer',
    website: 'https://pomodoro-timer-delta-dusky.vercel.app/',
  },
  {
    title: 'Passwordee - Password Manager',
    description:
      'A Password Manager with a complete Front-end and Back-end, made with React TypeScript and Express with MongoDB.',
    techs: ['React', 'TypeScript', 'Express', 'MongoDB'],
    imageUrl: `${basePath}/passwordee.png`,
    githubRepo: 'https://github.com/nicholascostadev/Passwordee',
    website: '',
    right: false,
  },
  {
    title: 'Real-Time Chat App',
    description:
      "It's a fully functional website that you can use to talk with people by chat.",
    techs: ['React', 'TypeScript', 'Socket.io'],
    imageUrl: `${basePath}/real-time-chat-app.png`,
    githubRepo: 'https://github.com/nicholascostadev/realtime-chat-app',
    website: 'https://react-chat-app-dev.netlify.app/',
  },
  {
    title: 'Spotify Clone',
    description:
      'It’s a Spotify clone, that connects to the Spotify’s API and gets the Discover Weekly page.',
    techs: ['React', 'TypeScript', 'Spotify API'],
    imageUrl: `${basePath}/spotify-clone.png`,
    githubRepo: 'https://github.com/nicholascostadev/spotify-clone',
    website: '',
  },
]
