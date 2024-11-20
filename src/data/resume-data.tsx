import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, HackerrankIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Vũ Ngọc Đức",
  initials: "BJ",
  location: "Xa La, Phúc La, Hà Đông, Hà Nội",
  locationLink: "https://www.google.com/maps/place/Wicreset/@20.9620611,105.792678,781m/data=!3m1!1e3!4m14!1m7!3m6!1s0x3134531ffd5e25f3:0x4baa44e913b1ca17!2sMasteri+West+Heights!8m2!3d20.9981814!4d105.7404085!16s%2Fg%2F11lslqq3gs!3m5!1s0x3135ad25e4e8d2ad:0x1af157c184711e85!8m2!3d20.9604855!4d105.7943843!16s%2Fg%2F11c0w3f9fl?entry=ttu&g_ep=EgoyMDI0MTExNy4wIKXMDSoASAFQAw%3D%3D",
  about:
    "Lập trình viên Frontend",
  summary:
    "Là một lập trình viên định hướng theo Frontend, mình mong muốn tạo nên các giao diện hoàn chỉnh, đáp ứng nhu cầu thẩm mỹ cũng như trải nghiệm người dùng.",
  avatarUrl: "https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/422959168_336372986053086_2561621154019638612_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=54KwOW1Hx24Q7kNvgGKdusy&_nc_zt=23&_nc_ht=scontent.fhan5-8.fna&_nc_gid=AFrXWvBSrapyYhm61MujFqC&oh=00_AYDU1r0J4CNSUJxPAaEmBfDm-b1wKFfZW3bCe05zD9HdaQ&oe=6743AAF7",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "ducwebdev@gmail.com",
    tel: "+84334281675",
    social: [
      // {
      //   name: "GitHub",
      //   url: "https://github.com/2023newbie",
      //   icon: GitHubIcon,
      // },
      // {
      //   name: "Hackerrank",
      //   url: "https://www.hackerrank.com/profile/ducwebdev",
      //   icon: HackerrankIcon,
      // },
    ],
  },
  education: [
    {
      school: "Funix - Trung tâm đào tạo lập trình",
      degree: "Chứng chỉ lập trình viên Fullstack",
      start: "12/2022",
      end: "10/2023",
    },
    {
      school: "Cao đẳng Kinh tế Công nghiệp Hà Nội",
      degree: "Quản trị kinh doanh",
      start: "9/2019",
      end: "7/2022",
    },
  ],
  work: [
    {
      company: 'Vaix Vietnam',
      link: 'https://vaixgroup.com/',
      title: 'Frontend',
      start: '10/2023',
      end: 'nay',
      description: 'Sử dụng ReactJS cùng các thư viện liên quan xây dựng và phát triển các dự án theo yêu cầu của công ty. Viết plug-in cho khách hàng trên nền tảng quản lý dữ liệu doanh nghiệp Kintone của Nhật Bản.'
    }
  ],
  skills: [
    "JavaScript (mạnh)",
    "CSS (mạnh)",
    "ReactJS (mạnh)",
    "NextJS",
    "VueJS",
  ],
  projects: [
    {
      title: "Fitness (click truy cập)",
      techStack: [
        "Side Project",
        "TypeScript - ReactJS",
        "Tailwind",
        "Responsive",
        "Animation"
      ],
      description: "Một trang landing page giới thiệu về phòng Gym.",
      link: {
        href: "https://fitness-p78w.onrender.com/",
      },
    },
    {
      title: "ProShop (click truy cập)",
      techStack: [
        "Following Code",
        "ReactJS",
        "React-router",
        "Redux/toolkit"
      ],
      description: "Một trang web mua sắm đồ công nghệ.",
      link: {
        href: "https://proshop-x6f6.onrender.com/",
      }
    },
    // {
    //   title: "BoutiqueShop",
    //   techStack: ["Side Project", "ReactJS", "React-router", "Redux", "pure CSS"],
    //   description:
    //     "Một trang web thương mại điện tử, mua sắm đồ Apple.",
    //   logo: JarockiMeLogo,
    //   link: {
    //     label: "github.com",
    //     href: "https://ecommerce-hnh0.onrender.com",
    //   },
    // },
    // {
    //   title: "Booking",
    //   techStack: ["Side Project", "ReactJS", "React-router", "pure CSS"],
    //   description:
    //     "Một trang web tìm kiếm khách sạn và đặt phòng.",
    //   logo: JarockiMeLogo,
    //   link: {
    //     href: "https://booking-fq7o.onrender.com/",
    //   },
    // },
    // {
    //   title: "Tailwind Landing Pages",
    //   techStack: ["Side Project", "TailwindCSS"],
    //   description:
    //     "Tổng hợp các landing page bằng Tailwind.",
    //   logo: JarockiMeLogo,
    //   link: {
    //     href: "https://roadtosgp2030.github.io/landing-page-tailwind/",
    //   },
    // },
  ],
} as const;

export const RESUME_DATA_ENG = {
  name: "Vu Ngoc Duc",
  initials: "BJ",
  location: "Hamlet 1, Vinh Quynh Village, Thanh Tri, Ha Noi",
  locationLink: "https://www.google.com/maps/@20.9396192,105.8369638,18.75z?entry=ttu",
  about:
    "Frontend Developer",
  summary:
    "As a Frontend-oriented programmer, I aspire to create comprehensive interfaces that meet both aesthetic needs and user experience.",
  avatarUrl: "https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/422959168_336372986053086_2561621154019638612_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8YJUakWACXAQ7kNvgE89go2&_nc_ht=scontent.fhan5-8.fna&oh=00_AYDjvt_HQmWifFXW8g2jMt9m6Gx4qfmTTiSKzehbnaswzA&oe=66526877",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "ducwebdev@gmail.com",
    tel: "+84334281675",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/2023newbie",
        icon: GitHubIcon,
      },
      // {
      //   name: "Hackerrank",
      //   url: "https://www.hackerrank.com/profile/ducwebdev",
      //   icon: HackerrankIcon,
      // },
    ],
  },
  education: [
    {
      school: "Funix - A center education of FPT",
      degree: "Javascript Fullstack Certificate",
      start: "3/2023",
      end: "10/2023",
    },
    {
      school: "Hanoi Industries and Economics College",
      degree: "Business Administration",
      start: "9/2019",
      end: "7/2022",
    },
  ],
  work: [
    {
      company: 'Vaix Vietnam',
      link: 'https://vaixgroup.com/',
      title: 'Frontend (probationary)',
      start: '5/2024',
      end: 'current',
      description: '-'
    },
    {
      company: 'Vaix Vietnam',
      link: 'https://vaixgroup.com/',
      title: 'Intern Frontend',
      start: '3/2024',
      end: '5/2024',
      description: 'Using plain JavaScript to add functionality to applications on the data management platform for businesses in Japan, Kintone. This includes customizing features with JavaScript, CSS, and working with the publisher\'s API.'
    }
  ],
  skills: [
    "JavaScript (Solid)",
    "CSS & TailwindCSS (Good)",
    "ReactJS (Good)",
    "TypeScript (Learning)",
  ],
  projects: [
    {
      title: "Fitness",
      techStack: [
        "Side Project",
        "TypeScript - ReactJS",
        "Tailwind",
        "Responsive",
        "Animation"
      ],
      description: "A landing page introducing a gym facility.",
      link: {
        href: "https://fitness-p78w.onrender.com/",
      },
    },
    {
      title: "ProShop",
      techStack: [
        "Following Code",
        "ReactJS",
        "React-router",
        "Redux/toolkit"
      ],
      description: "A website for purchasing technology gadgets.",
      link: {
        href: "https://proshop-x6f6.onrender.com/",
      }
    },
    {
      title: "BoutiqueShop",
      techStack: ["Side Project", "ReactJS", "React-router", "Redux", "pure CSS"],
      description:
        "An e-commerce website for purchasing Apple products.",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://ecommerce-hnh0.onrender.com",
      },
    },
    {
      title: "Booking",
      techStack: ["Side Project", "ReactJS", "React-router", "pure CSS"],
      description:
        "A hotel search and booking website.",
      logo: JarockiMeLogo,
      link: {
        href: "https://booking-fq7o.onrender.com/",
      },
    },
    {
      title: "Tailwind Landing Pages",
      techStack: ["Side Project", "TailwindCSS"],
      description:
        "Compilation of landing pages using Tailwind.",
      logo: JarockiMeLogo,
      link: {
        href: "https://2023newbie.github.io/landing-page-tailwind/",
      },
    },
  ],
} as const;