import { LucideIcon, Mail, QrCode } from "lucide-react";

export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4" | "2x6"; // First number is width, second is height
export type GridItemType =
  | "social12"
  | "social21"
  | "project"
  | "profile"
  | "skills";

export interface SkillCategory {
  subtitle: string;
  items: string[];
}

export interface Button {
  icon?: LucideIcon;
  color?: string;
  text?: string;
  url?: string;
}

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  description?: string;
  icon?: string;
  social?: {
    socialId?: string;
    following?: string;
    followers?: string;
    connections?: string;
  };
  button?: Button;
  demoButton?: Button;
  skills?: SkillCategory[];
}

export const profileConfig = {
  name: "Ying Sun",
  title: "Developer",
  bio: "Passionate full-stack coder who loves creating and enjoys learning new skills.",
  email: "sco.suen@gmail.com",
  location: "Montreal, Canada",
  locationLink:
    "https://www.google.com/maps/place/Montreal,+QC/data=!4m2!3m1!1s0x4cc91a541c64b70d:0x654e3138211fefef?sa=X&ved=2ahUKEwjxza2Lu6eDAxXovokEHRpND-YQ8gF6BAgdEAA",
};

export const bentoBoxes: GridItemInterface[] = [
  {
    layout: "2x2",
    type: "profile",
    title: "🚀 AI-passionate Full Stack Developer",
    description:
      `Hi there! I'm a dedicated Full Stack Developer with a strong interest in the fascinating
       world of Artificial Intelligence.
       Let's create something extraordinary together!`,
  },
  {
    layout: "1x2",
    type: "social12",
    title: "Email",
    icon: "/email.png",
    social: {
      socialId: "sco.suen@gmail.com",
    },
    button: {
      color: "bg-red-500",
      icon: Mail,
      url: "mailto:sco.suen@gmail.com",
    },
  },
  {
    layout: "1x2",
    type: "social12",
    title: "Wechat",
    icon: "/wechat.png",
    social: {
      socialId: "@scosuen",
    },
    button: {
      color: "bg-green-600",
      icon: QrCode,
    },
  },
  {
    layout: "2x1",
    type: "social21",
    title: "Github",
    icon: "/github.png",
    social: {
      socialId: "@yingsunnn",
      followers: "5",
      // following: "8",
    },
    button: {
      text: "Go to my Github",
      url: "https://github.com/yingsunnn",
    },
  },
  {
    layout: "2x1",
    type: "social21",
    title: "YouTube",
    icon: "/youtube.png",
    social: {
      socialId: "@yingsunnn",
      followers: "0",
    },
    button: {
      text: "Go to my YouTube",
      url: "/",
    },
  },
  {
    layout: "2x1",
    type: "social21",
    title: "Linkedin",
    icon: "/linkedin.png",
    social: {
      socialId: "@Ying",
      connections: "52",
    },
    button: {
      text: "Go to my Linkedin",
      url: "https://www.linkedin.com/in/ying-sun-85b217a9/",
    },
  },
  {
    layout: "2x4",
    type: "skills",
    title: "Skills",
    skills: [
      {
        subtitle: "Frontend",
        items: [
          "NextJS",
          "Ract",
          "Typescript",
          "Tailwind",
          "Shadcn UI",
          "Vercel AI",
          "Prisma",
          "Stripe",
          "Clerk",
          "Crisp",
        ],
      },
      {
        subtitle: "Backend",
        items: [
          "Java",
          "AWS",
          "Spring Boot",
          "Spring Cloud",
          "Spring Data JPA",
          "Dropwizard",
          "Swagger",
          "JaCoCo",
          "Lombok",
          "Jackson",
          "Liquibase",
          "MySQL",
          "PostgreSQL",
          "Oracle",
          "Redis",
          "MongoDB",
          "PlanetScale",
          "Pinecone",
        ],
      },
    ],
  },
  {
    layout: "2x4",
    type: "project",
    title: "SketchyBar Plugins",
    icon: "/sketchybar.jpg",
    description:
      `Enhance Mac with my SketchyBar plugins: 
      sleek visuals, real-time system stats, 
      current space, and active app at a glance.
      Elevate style and functionality in a minimalist menu bar.`,
    button: {
      text: "Github page",
      url: "https://github.com/yingsunnn/dotfiles",
    },
  },
  {
    layout: "2x6",
    type: "project",
    title: "AI Note",
    icon: "/ai-chatbot.jpg",
    description: `Smart note-taking made easy. 
      Organize, sync, and interact with AI-driven Q&A. Elevate productivity seamlessly.`,
    button: {
      text: "Github page",
      url: "https://github.com/yingsunnn/ai-chatbot",
    },
  },
  {
    layout: "2x6",
    type: "project",
    title: "AI SaaS",
    icon: "/ai-saas.jpg",
    description: `Explore the limitless potential of AI with my subscription-based SAAS platform. 
      Engage in real-time conversations, generate code, craft stunning images, 
      compose music, and produce captivating videos. 
      Elevate your creative journey with advanced features.`,
    button: {
      text: "Github page",
      url: "https://github.com/yingsunnn/ai-saas",
    },
    demoButton: {
      text: "Demo",
      url: "https://ai-saas-mu-indol.vercel.app/",
    }
  },
];
