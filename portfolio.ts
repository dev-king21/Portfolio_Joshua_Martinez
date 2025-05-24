import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Joshua Martinez",
  title: "Hi, I'm Joshua Martinez Senior Full Stack Software Engineer",
  description:
    "10+ years crafting scalable web and mobile solutions with React, Node.js, and cloud technologies. Focused on performance, reliability, and user-first experiences.",
  resumeLink: "/Joshua_Martinez.pdf",
};

export const openSource = {
  githubUserName: "1hanzla100",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:joshuacm635@gmail.com",
  linkedin: "https://www.linkedin.com/in/",
  // github: "https://github.com/1hanzla100",
  // instagram: "https://www.instagram.com/__hanzla100",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Florida State University",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "Graduated 2014",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Senior Full Stack Developer",
    company: "Inoxoft",
    companyLogo: "/img/icons/common/inoxoft.png",
    date: "July 2023 - Present",
    desc: "I crafted backends for diverse web apps, APIs, and WebSockets in e-commerce, podcasts, and property management. Managed server upkeep, deployments on Linux, Heroku, and AWS S3. Implemented PyTest for automated unit and integration testing, slashing 4 hours of manual testing each sprint, fortifying a dependable and flawless code foundation.",
  },
  {
    role: "Senior Software Engineer ",
    company: "Access Global Group",
    companyLogo: "/img/icons/common/accessglobal.png",
    date: "September 2021 - May 2023",
    desc: "Crafted robust mobile application backends employing Django, Python, and REST APIs. Leveraged Django REST Framework, PostgreSQL, AWS, Firebase, Stripe, and WebSocket for efficient development. Collaborated across teams to surpass client expectations. Designed intuitive UIs, empowering clients to effortlessly manage their applications with a visually captivating interface.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Full Stack Web Developer ",
    company: "Shopify",
    companyLogo: "/img/icons/common/shopify.png",
    date: "July 2019 - August 2021",
    desc: "Crafting diverse web applications, I've elevated functionality and user engagement. Spearheaded Visual Portfolio, leveraging AI for captivating presentations from parsed text. Proficiently set up and optimized applications on Linux servers, guaranteeing smooth scalability and top-notch performance for seamless user experiences.",
  },
  {
    role: "Front End Developer ",
    company: "Produce Magic Software",
    companyLogo: "/img/icons/common/producemagicsoftware.png",
    date: "Sept 2021 - Oct 2021",
    desc: "As a frontend developer at Produce Magic Software, I designed and implemented web applications with React.js, Angular.js, and Tailwind CSS, driving a 25% improvement in user engagement metrics. I implemented code-splitting and lazy loading techniques, decreasing asset load times by 20% ",
  },
];

export const projects: ProjectType[] = [
  {
    name: "EditMentor – Interactive Video Editing Platform",
    desc: " EditMentor is a browser-based platform that teaches video editing through interactive challenges and gamified learning. It offers courses designed by industry professionals, making it ideal for both beginners and educators.",
    link: "https://editmentor.com/",
  },
  {
    name: "SmartMint by Pastel – No-Code NFT Minting Platform",
    desc: "SmartMint enables creators to mint NFTs across multiple blockchains without any coding. The platform offers custom smart contracts, permanent storage, and duplicate detection, streamlining the NFT creation process.",
    link: "https://smartmint.pastel.network/",
  },
  {
    name: "Cleanvest – ESG Investment Screening Tool",
    desc: "Cleanvest assists investors in aligning their portfolios with environmental, social, and governance (ESG) criteria. The platform evaluates funds based on sustainability metrics, aiding in responsible investment decisions.",
    link: "https://www.esgplus.com/cleanvest-org-cleanvest-pro/",
  },
  {
    name: "Allrites – B2B Marketplace for Film and TV Content",
    desc: "Allrites is a global marketplace facilitating the buying and selling of film and television content rights. It offers a vast catalog and innovative licensing solutions, connecting content creators with distributors worldwide.",
    link: "https://www.allrites.com/",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Joshua Martinez",
  description: greetings.description,
  author: "Joshua Martinez",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  // url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Joshua",
    "Joshua Martinez",
    "Portfolio",
    "Joshua Portfolio ",
    "Joshua Martinez Portfolio",
  ],
};
