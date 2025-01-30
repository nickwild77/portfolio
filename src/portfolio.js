/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nikola Knezhevich",
  title: "Привет, это Никола.",
  subTitle: emoji(
    "Я — MLOps инженер, превращаю машинное обучение в масштабируемый и управляемый процесс. Автоматизирую развертывание моделей, обеспечиваю их стабильную работу и быструю адаптацию к изменениям. Сокращаю путь от эксперимента до бизнес-результата, делая ML-инфраструктуру надежной и эффективной. 🚀"
  ),
  //resumeLink:
  //"https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/nickwild77",
  linkedin: "https://www.linkedin.com/in/nickwild77/",
  gmail: "knezhevich77@gmail.com",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  telegram: "https://t.me/undisputed77",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Что могу",
  //subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ DevOps: контейнеризация (Docker, Kubernetes), оркестрация, автоматизация развертывания."
    ),
    emoji(
      "🤖 MLOps: автоматизация ML-процессов, CI/CD для моделей, мониторинг и управление жизненным циклом."
    ),
    emoji(
      "☁️💻 Cloud & Infrastructure: облачные сервисы (yandex, vk, aws), инфраструктура как код (Terraform, Ansible)."
    ),
    emoji("📈 Monitoring & Logging: мониторинг и управление жизненным циклом.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Yandex-Cloud",
      fontAwesomeClassname: "fab fa-yandex"
    },
    {
      skillName: "Prometheus/Grafana/ELK",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "CI/CD",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "Airflow",
      fontAwesomeClassname: "fas fa-fan"
    },
    {
      skillName: "Kafka",
      fontAwesomeClassname: "fas fa-network-wired"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Karpov Courses",
      logo: require("./assets/images/fetch.jpg"),
      subHeader: "ML engineer",
      duration: "2021",
      desc: "Participated in the research of XXX and published 3 papers."
      //descBullets: [
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      //]
    },
    {
      schoolName: "PyMagic",
      logo: require("./assets/images/pymagic.png"),
      subHeader: "Промышленный ML & MLops",
      duration: "2022"
      //desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "DevOps", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "MLops",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "MLops engineer",
      company: "VSK-Life",
      companylogo: require("./assets/images/vsk-lz.jpg"),
      date: "2018 - 2024",
      desc: "Разработка ML-платформы",
      descBullets: [
        "Внедрил MLOps-практики для автоматизации разработки, развертывания и мониторинга моделей. ",
        "Реализовал CI/CD пайплайны, что сократило время вывода моделей в прод, увеличило их точность за счет регулярных обновлений и повысило отказоустойчивость.",
        "Разрабатывал и внедрял модель машинного обучения для автоматизации андеррайтинга и риск-технологий(скоринг), модель для задач ценообразования",
        "Настройка масштабируемой и высокопроизводительной ML-инфраструктуры"
      ]
    },
    {
      role: "Backend developer",
      company: "VSK",
      companylogo: require("./assets/images/vsk.webp"),
      date: "2016 - 2018",
      desc: "Бэкенд разработка на Python",
      descBullets: [
        "Разрабатывал и внедрял систему электронного документооборота и аналитики.",
        "Система существенно сократила среднее время обработки запросов. Рост эффективности работы сотрудников, количество обработанных заявок на одного сотрудника в единицу времени.",
        "Обеспечена безопасность данных и сокращение ошибок.",
        "Введено разграничение прав доступа сотрудников для обеспечения конфиденциальности и безопасности данных."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Сертификаты 🏆 "),
  subtitle: "Полученные сертификаты",

  achievementsCards: [
    {
      title: "Yandex Cloud Certification",
      subtitle: "Планирование и подготовка production среды.",
      image: require("./assets/images/ycloud.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Сертификат",
          url: "https://drive.google.com/file/d/1LqkMSAOKiiDFm3JTM-5OBoYIM7MnPA1E/view?usp=sharing"
        }
      ]
    },
    {
      title: "Yandex Cloud Certification",
      subtitle: "Деплой инфраструктуры по модели GitOps",
      image: require("./assets/images/ycloud.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Сертификат",
          url: "https://drive.google.com/file/d/1oTzbNM3l2FPvlEJDpmu-CyfpVGCZhOrI/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Контакты"),
  subtitle: "Хочешь обсудить проект или просто сказать привет? Напиши!"
  //number: "+92-0000000000",
  //email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
