import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Redouan AFOULOUS",
  initials: "DV",
  url: "https://redouan1af.cloudflarepages.com",
  location: "Casablanca",
  locationLink: "#",
  description: "A web dev who loves football and exploring new things.",
  summary: `Junior Frontend Developer passionate about creating modern and responsive user interfaces, with a solid foundation in technologies such as HTML, CSS, and JavaScript. Skilled in optimizing performance and enhancing user experience. Motivated by continuous learning and developing innovative solutions. Eager to contribute to challenging projects and grow within a dynamic team.`,
  avatarUrl: "/me.png",
  skills: [
    "HTML",
    "CSS",
    "Javascript",
    "Vue",
    "React",
    "Typescript",
    "Node.js",
    "Express.js",
    "GraphQL",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "redouan1af@gmail.com",
    tel: "+212675632040",
    social: {
      /* GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,

        navbar: true,
      }, */
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/crNigtn",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:redouan1af@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Olena",
      href: "",
      badges: [],
      location: "Casablanca",
      title: "Frontend Dev",
      logoUrl: "/logoldm.png",
      start: "Nov 2023",
      end: "present",
      description: `Created a chrome extension that automates the comparison of an estimate with a price request in Odoo, also facilitating and speeding up the process of placing an order by anticipating anomalies.`,
    },
    {
      company: "Majorit",
      badges: ["Co-Founder"],
      href: "https://majorit.ma",
      location: "Remote",
      title: "Backend Dev",
      logoUrl: "/majorit-logo.jpg",
      start: "Nov 2020",
      end: "present",
      description:
        "Co-developed a platform designed to revolutionize the learning experience for medical students in Morocco. It offers a comprehensive question bank, customizable revision systems, and interactive tools powered by AI to aid exam preparation. Students can access thousands of up-to-date questions, course materials, and simulated medical exams, allowing them to practice in real-time conditions. Additionally, the platform supports collaborative correction and AI-driven assistance, providing a tailored learning experience and a rich library of resources for various medical faculties.",
    },
    {
      company: "Kaokeb",
      href: "#",
      badges: [],
      location: "Casablanca",
      title: "Frontend Dev",
      logoUrl: "/kaokeb.jpeg",
      start: "Nov 2019",
      end: "Feb 2020",
      description:
        "My first experience as a frontend developer, which gave me a good opportunity to explore the frontend world, by creating 'mygoodboss' with Vue 2, a platforms that helps team managers to manage their teams, also 'paresse' a wordpress blog destined for fashion trends and art fans.",
    },
  ],
  education: [
    {
      school: "FST",
      href: "#",
      degree: "Professional Bachelor's Degree in Information Technologies",
      logoUrl: "/fst.png",
      start: "2019",
      end: "2020",
    },
    {
      school: "ISTA",
      href: "#",
      degree: "Associate Degree in Information Technologies",
      logoUrl: "/ista.jpg",
      start: "2017",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Bloomyindoor",
      href: "https://bloomyindoor.com",
      dates: "",
      active: true,
      description:
        "A blog for indoor plant lovers, it offers expert tips and advice for maintaining housplants.",
      technologies: [
        "Nuxt.js",
        "Typescript",
        "Wordpress as headless CMS",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://bloomyindoor.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/bloomy.jpg",
    },
    {
      title: "Majorit",
      href: "https://majorit.ma",
      dates: "November 2020 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: ["Node.js", "Express.js", "GraphQL", "MongoDB", "Docker"],
      links: [
        {
          type: "Website",
          href: "https://majorit.ma",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "APP",
          href: "https://app.majorit.ma",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Majorit-landing.png",
    },
    {
      title: "myGoodboss",
      href: "https://mygoodboss.com",
      dates: "Dec 2019 - Feb 2020",
      active: true,
      description:
        "A team management application designed to help managers monitor and supervise their teams' performance.",
      technologies: ["HTML", "Vue.js", "SASS", "Typescript"],
      links: [
        {
          type: "Website",
          href: "https://mygoodboss.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/mygoodboss-landing.png",
    },
  ],
  hackathons: [],
} as const;
