import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Bot } from "lucide-react";


export const DATA = {
  name: "Aditya Trivedi",
  initials: "AT",
  url: "https://adityatrivedi.in",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/bengaluru",
  description:
    "Software Engineer + Content Creator. I love creating content, building things and helping people. Open to talk anywhere 😁. Want to know more, try running 'npx hey-aditya` on your Terminal.",
  summary:
    "Hey there! If you are someone who likes to talk around Tech, I am the one you can talk to anytime. At the moment I am building [Coding Adda](https://www.youtube.com/@Coding_Adda) which started back in 2021. In the past, [I pursued a bachelor's degree in information technology](/#education), [interned at MNC's, startups and freelanced various projects.], and [made over 50+ projects for fun](https://github.com/Yuvadi29). Outside work, I find inspiration in dancing, podcasting, nature walks, and travelling.",
  avatarUrl: "/adi.png",
  skills: [
    "JavaScript",
    "Typescript",
    "React",
    "Next.js",
    "Vite.js",
    "TailwindCSS",
    "Material UI",
    "Node.js",
    "Nest.js",
    "Django",
    "SpringBoot",
    "Flask",
    "Python",
    "MongoDB",
    "MySQL",
    "Git & GitHub",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/ai", icon: Bot, label: "AI" },
  ],
  contact: {
    email: "letstalkaditya@gmail.com",
    tel: "+9197649353961",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Yuvadi29",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/adityat1702/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/AdiTrivedi17",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@Coding_Adda",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Synopsys",
      href: "https://www.synopsys.com/",
      badges: ["Current"],
      location: "Bengaluru",
      title: "Contractor",
      logoUrl: "./synopsys.png",
      start: "September 2021",
      end: "Current",
      description:
        "Working on the Internal Product Dashboard to display the Nightly Regressions, Coverity, Code Coverage and also an internal tool on Branch Automation",
    },
    {
      company: "Static.Int Educare",
      badges: [],
      href: "https://www.linkedin.com/company/static-int-educare/",
      location: "Mumbai",
      title: "MERN Faculty",
      logoUrl: "/static.png",
      start: "June 2024",
      end: "July 2024",
      description:
        " Developed and delivered curriculum for a comprehensive MERN Stack development course for Diploma Engineering students. Introduced students to the MERN Stack framework(MongoDB, Express.js, React.js, and Node.js) and its applications in modern web development. Provided hands - on guidance and mentorship, fostering a collaborative learning environment. Increased student project completion rates by 90 %, or prepared students for industry certifications.",
    },
    {
      company: "GolokaIT",
      href: "https://golokait.com/",
      badges: [],
      location: "Mumbai",
      title: "Web Development Intern",
      logoUrl: "/goloka.png",
      start: "November 2023",
      end: "April 2024",
      description:
        "Developed strategic plans for creating websites both user-friendly and seamless flow using MERN Stack.Migrated various projects from Nodejs as a backend to Java SpringBoot as a backend. Integrated AWS S3 and AWS EC2 for Storage and Hosting.",
    },
    {
      company: "Microsoft Learn Students Club VCET",
      href: "https://mlsccoherence.web.app/",
      badges: [],
      location: "Mumbai",
      title: "Corporate Lead",
      logoUrl: "/mlsc.png",
      start: "September 2023",
      end: "April 2024",
      description:
        "As a Corporate Lead, we conducted various activities such as seminars, competitions, and collaborative projects to learn from each other and showcase our work. We also have access to exclusive benefits such as free Microsoft certifications, learning resources, mentorship, and opportunities to participate in events organized by Microsoft and other partners.",
    },
    {
      company: "Larsen & Toubro",
      href: "https://www.larsentoubro.com/",
      badges: [],
      location: "Mumbai",
      title: "Student Intern",
      logoUrl: "/L&T.png",
      start: "April 2022",
      end: "July 2022",
      description:
        "End to End framework web software for the Skill trainers Academy. Automating the entire hostel allocation along with complaint registers using technologies like PHP, Bootstrap, HTML, CSS, AJAX."
    },
    {
      company: "Internshala",
      href: "https://internshala.com/",
      badges: [],
      location: "Remote",
      title: "Internshala Student Partner",
      logoUrl: "/internshala.png",
      start: "November 2021",
      end: "December 2021",
      description:
        "To promote Internshala's services and internship opportunities on their college campus by organizing workshops, spreading awareness about the platform, encouraging student registrations, and assisting peers in accessing available internships.",
    },
  ],
  education: [
    {
      school: "Vidyavardhini's College of Engineering and Technology",
      href: "https://vcet.edu.in/",
      degree: "Bachelor's Degree in Information Technology",
      logoUrl: "/vcet.png",
      start: "2021",
      end: "2024",
    },
    {
      school: "St.Stanislaus High School & Junior College",
      href: "https://skcjrcollege.in/",
      degree: "Higher Secondary Education",
      logoUrl: "/skc.png",
      start: "2018",
      end: "2020",
    },
    {
      school: "Muljibhai Mehta International School",
      href: "https://www.muljibhaimehtainternationalschool.in/",
      degree: "Senior Secondary Education",
      logoUrl: "./mmis.png",
      start: "2009",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "FindMyNotes",
      href: "https://findmynotes.pythonanywhere.com/",
      dates: "July 2023 - December 2023",
      active: true,
      description:
        "A network for learners to access the chamber of notes along with being the part of it ,with quality academic peers from the VCET community. It is made using DJango, MySQL, HTML, CSS, JavaScript.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Django",
        "MySQL",
        "Apache Server",
      ],
      links: [
        {
          type: "Website",
          href: "https://findmynotes.pythonanywhere.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dcxyc525d/video/upload/v1687786900/FindMyNotes_dodaf2.mp4",
    },
    {
      title: "Startup Funding App",
      href: "https://magicui.design",
      dates: "March 2023 - April 2023",
      active: true,
      description:
        "A [Copyrighted](https://drive.google.com/file/d/1NlUUlkYSOXIo4WbjfYje9nUwam7_xciY/view?usp=sharing) ML Based Startup Funding App which will help the investors gain the status of the startup based on the Startup Funding Dataset. It is made using Flutter, Python, Flask.",
      technologies: [
        "Flutter",
        "Python",
        "Flask",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://magicui.design",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/Yuvadi29/StartUpProject",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://res.cloudinary.com/dcxyc525d/video/upload/v1687786248/Venture_Mate_lc27df.mp4",
    },
    {
      title: "Amazon Clone",
      href: "https://github.com/Yuvadi29/FilmPire-AI-Powered-Movie-App",
      dates: "June 2023 - October 2023",
      active: true,
      description:
        "A Complete E-Commerce Amazon Clone with all the functionalities like Add to Cart, Pay and Checkout with Order Confirmation.",
      technologies: [
        "Next.js",
        "Next-Auth",
        "TailwindCSS",
        "Redux",
        "Firebase",
        "Express",
        "MongoDB",
        "TMDB API",
        "Stripe"
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://llm.report",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/Yuvadi29/AmazonClone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://res.cloudinary.com/dcxyc525d/video/upload/v1690439939/Amazon_Clone_cv9wsr.mp4",
    },
    {
      title: "Detoxify",
      href: "https://github.com/Yuvadi29/Detoxify",
      dates: "July 2024 - July 2024",
      active: true,
      description:
        "An App to Detoxify yourself from unwanted Youtube Content",
      technologies: [
        "React.js",
        "TailwindCSS",
        "MongoDB",
        "Youtube API",
        "Vercel",
        "Render",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Yuvadi29/Detoxify",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://detoxify-youtube.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dcxyc525d/video/upload/v1732187853/Detoxify_a3t0yr.mp4",
    },
  ],
  hackathons: [
    {
      title: "TechX Bangalore",
      dates: "November 16th 2024",
      location: "Bengaluru, India",
      description:
        "Event which focused on Scale Engineering where they talked about developers looking to enhance their knowledge on scaling systems and understanding about Server Driven UIs.",
      image:
        "https://secure-content.meetupstatic.com/images/classic-member/320394579/45x45.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "React India",
      dates: "October 18th - 19th, 2024",
      location: "Goa, India",
      description:
        "An international conference that provides a platform for developers to share and discuss their insights and experiences with React! It Provides developers from India an opportunity meet, listen, and network with React Developers and Open Source Contributors all around the world!",
      image:
        "https://yt3.googleusercontent.com/G-9t902cE_Uu0eAZ-I5nphIxi82qh16_tgIewvu6ZdezsX7i3GwRA4BllJxmTfCOE0qn5fGtPQ=s900-c-k-c0x00ffffff-no-rj",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Postman Developer Workshop",
      dates: "September 24th 2024",
      location: "Bengaluru, India",
      description:
        "Tested a simple API using Postman and how to collaborate on a single workspace with developers and understand the different functionalities of Postman as a Tool.",
      icon: "public",
      image:
        "https://cdn.iconscout.com/icon/free/png-256/free-postman-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945092.png?f=webp&w=256",
      links: [],
    },
    {
      title: "TechX Virar",
      dates: "August 10th 2024",
      location: "Mumbai, India",
      description:
        "Event which focused on Scale Engineering where they talked about developers looking to enhance their knowledge on scaling systems and understanding about Server Driven UIs.",
      image:
        "https://secure-content.meetupstatic.com/images/classic-member/320394579/45x45.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "RESILIENCE: A Serious Tech Discussion",
      dates: "March 19th 2024",
      location: "Mumbai, India",
      description:
        "Delivered a session on React & Next, The Dynamic Duo of Modern Web Development. Also had a open talk with the students on their queries and how it can be resolved",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxV1iuZVqeqbgzZzHsBQWFDVmstW2el6J4xg&s",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [],
    },
    // {
    //   title: "ETH Waterloo",
    //   dates: "October 13th - 15th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
    //   links: [
    //     {
    //       title: "Organization",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ethdocnet",
    //     },
    //   ],
    // },
    // {
    //   title: "Hack The North",
    //   dates: "September 15th - 17th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a virtual reality application allowing users to see themselves in third person.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Streamer Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/justinmichaud/htn2017",
    //     },
    //     {
    //       title: "Client Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/RTSPClient",
    //     },
    //   ],
    // },
    // {
    //   title: "Hack The 6ix",
    //   dates: "August 26th - 27th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ShareShip/ShareShip",
    //     },
    //     {
    //       title: "Site",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://share-ship.herokuapp.com/",
    //     },
    //   ],
    // },
  ],
} as const;
