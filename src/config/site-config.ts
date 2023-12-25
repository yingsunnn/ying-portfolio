import { LucideIcon, Mail, QrCode } from "lucide-react";

export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4"; // First number is width, second is height
export type GridItemType = "social12" | "social21" | "project" | "profile";

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title?: string;
  description?: string;
  icon?: string;
  social?: {
    socialId?: string;
    socialLink?: string;
    following?: string;
    followers?: string;
    connections?: string;
  };
  button?: {
    buttonIcon?: LucideIcon;
    buttonColor?: string;
    buttonText?: string;
  };
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
      "Hi there! I'm a dedicated Full Stack Developer with a strong interest in the fascinating world of Artificial Intelligence. Thriving on complex challenges, I'm an innovator with a knack for crafting solutions. Let's create something extraordinary together!",
  },
  {
    layout: "1x2",
    type: "social12",
    title: "Email",
    icon: "/email.png",
    social: {
      socialId: "sco.suen@gmail.com",
      socialLink: "`mailto:${siteConfig.email}`",
    },
    button: {
      buttonColor: "bg-red-500",
      buttonIcon: Mail,
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
      buttonColor: "bg-green-600",
      buttonIcon: QrCode,
    },
  },
  {
    layout: "2x1",
    type: "social21",
    title: "Github",
    icon: "/github.png",
    social: {
      socialId: "@yingsunnn",
      socialLink: "https://github.com/yingsunnn",
      followers: "5",
      following: "8",
    },
    button: {
      buttonColor: "bg-zinc-800",
      buttonText: "Go To My Github",
    },
  },
  {
    layout: "2x4",
    type: "project",
  },
  {
    layout: "2x1",
    type: "social21",
    title: "Linkedin",
    icon: "/linkedin.png",
    social: {
      socialId: "@Ying",
      socialLink: "https://www.linkedin.com/in/ying-sun-85b217a9/",
      connections: "52",
    },
    button: {
      buttonColor: "bg-sky-600",
      buttonText: "Go To My Linkedin",
    },
  },
  {
    layout: "2x4",
    type: "project",
  },
  {
    layout: "2x4",
    type: "project",
  },
];
