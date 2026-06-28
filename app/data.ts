type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Pet App Design',
    description: 'Mobile App built with React Native',
    link: 'https://github.com/prachirajpurohit/petAppDesign',
    video: '/petapp.png',
    id: 'project4',
  },
  {
    name: 'CloseLoop',
    description:
      'Built to ensure every person who reaches out gets a response. No exceptions.',
    link: 'https://loop-close.vercel.app/',
    video: '/closeloopss.png',
    id: 'project3',
  },
  {
    name: 'Cufe',
    description:
      'Backend for a customer feedback platform, built using the MERN stack and hosted on Railway.',
    link: 'https://cufe.up.railway.app/',
    video: 'cufe.png',
    id: 'project2',
  },
  // {
  //   name: 'Margin',
  //   description:
  //     'A distraction-free writing space with big, bold typography for daily thoughts',
  //   link: 'https://github.com/prachirajpurohit/margin',
  //   video: '/margin.png',
  //   id: 'project1',
  // },
  {
    name: 'Liminal',
    description:
      'A collaborative Figma-to-Webflow design project created at DFG.',
    link: 'https://liminalfutures.com/',
    video: 'liminal.png',
    id: 'project0',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Dev3Pack',
    title: 'Web3 Fellow',
    start: '2026',
    end: 'Present',
    id: 'work1',
  },
  {
    company: 'Machine Intelligence Program',
    title: 'Research Asst.',
    start: '2024',
    end: '2025',
    id: 'work2',
  },
  {
    company: 'Develop For Good',
    title: 'Designer',
    start: '2023',
    end: '2024',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Getting Started With React Native',
    description: 'Using the React Native CLI',
    link: '/blog/getting-started-with-react-native',
    uid: 'blog-1',
  },
  {
    title: 'Setting up environment for react native on Windows',
    description: 'configuring React Native CLI on Windows, without using Expo.',
    link: '/blog/setting-up-env-for-rn',
    uid: 'blog-2',
  },
  {
    title: 'ScrollView v/s FlatList',
    description:
      'Understanding rendering, virtualization, and when to use each component',
    link: '/blog/scrollview-vs-flatlist',
    uid: 'blog-3',
  },
  {
    title: 'Deploying ILShield: A Uniswap v4 Hook on Contract.dev Stagenet',
    description:
      'Overview on how to deploy a hook using HookMiner, CREATE2, and Uniswap v4 hook permissions',
    link: '/blog/deploying-v4hook',
    uid: 'blog-4',
  },
  {
    title: 'React Native : brain dump',
    description: 'Everything I Learned Building My First Real Screen',
    link: '/blog/react-native-part1',
    uid: 'blog-5',
  },
  // {
  //   title: 'How Does Satellite Communication Work?',
  //   description:
  //     'A quick, no-jargon overview of satellites and satellite communication.',
  //   link: '/blog/test-blog',
  //   uid: 'blog-3',
  // },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/prachirajpurohit',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/prachi-purohit-2a00243a2/',
  },
  // {
  //   label: 'Discord',
  //   link: 'https://www.discord.com/users/1426237124000350374',
  // },
  // {
  //   label: 'Schedule a call',
  //   link: 'https://cal.com/prachipurohit',
  // }
]

export const EMAIL = 'purohitprachi@proton.me'
