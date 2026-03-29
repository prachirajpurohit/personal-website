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
  {
    name: 'Margin',
    description:
      'A distraction-free writing space with big, bold typography for daily thoughts',
    link: 'https://github.com/prachirajpurohit/margin',
    video: '/margin.png',
    id: 'project1',
  },
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
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
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
  {
    label: 'Discord',
    link: 'https://www.discord.com/users/1426237124000350374',
  },
]

export const EMAIL = 'purohitprachi@proton.me'
