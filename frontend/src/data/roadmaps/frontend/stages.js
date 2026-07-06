export const frontendStages = [
  {
    id: 1,
    title: "The Internet & HTML",
    level: "Beginner",
    duration: "40 hrs",
    skills: [
      {
        id: "fe-s1",
        name: "Internet Fundamentals",
        description: "Learn how the internet works, HTTP, DNS, and hosting.",
        done: false,
        resources: [
          { name: "How the Internet Works in 5 Minutes", url: "https://www.youtube.com/watch?v=7_LPdttKXPc", type: "YouTube" },
          { name: "MDN: How the Web works", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works", type: "Article" }
        ]
      },
      {
        id: "fe-s2",
        name: "HTML Basics & Semantics",
        description: "Learn the standard markup language for creating web pages and writing accessible, semantic HTML.",
        done: false,
        resources: [
          { name: "HTML Full Course for Beginners", url: "https://www.youtube.com/watch?v=mJgBOIoGihA", type: "YouTube" },
          { name: "HTML elements reference", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element", type: "Docs" }
        ]
      },
      {
        id: "fe-s3",
        name: "Forms & Accessibility",
        description: "Create interactive web forms and ensure web pages are accessible to all users.",
        done: false,
        resources: [
          { name: "Web Accessibility and Forms", url: "https://www.youtube.com/watch?v=Wj81n7Ld7fU", type: "YouTube" },
          { name: "W3C Web Accessibility Initiative", url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/", type: "Docs" }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "CSS & Styling",
    level: "Beginner",
    duration: "45 hrs",
    skills: [
      {
        id: "fe-s4",
        name: "CSS Basics & Selectors",
        description: "Learn how to style HTML elements, use colors, fonts, and layout mechanisms.",
        done: false,
        resources: [
          { name: "CSS Crash Course For Absolute Beginners", url: "https://www.youtube.com/watch?v=yfoY53QXEnI", type: "YouTube" },
          { name: "MDN: Learn CSS", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS", type: "Docs" }
        ]
      },
      {
        id: "fe-s5",
        name: "Responsive Design (Flexbox/Grid)",
        description: "Build layouts that adapt to different screen sizes using modern CSS techniques.",
        done: false,
        resources: [
          { name: "Learn CSS Grid & Flexbox", url: "https://www.youtube.com/watch?v=tFcbK2O7jmA", type: "YouTube" },
          { name: "A Complete Guide to Flexbox", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/", type: "Article" }
        ]
      },
      {
        id: "fe-s6",
        name: "CSS Architecture & Preprocessors",
        description: "Organize your styles with methodologies like BEM and tools like Sass or Tailwind CSS.",
        done: false,
        resources: [
          { name: "Tailwind CSS Full Course", url: "https://www.youtube.com/watch?v=ft30zcMlFao", type: "YouTube" },
          { name: "Sass Official Documentation", url: "https://sass-lang.com/guide", type: "Docs" }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "JavaScript Core",
    level: "Intermediate",
    duration: "60 hrs",
    skills: [
      {
        id: "fe-s7",
        name: "JavaScript Syntax & Basics",
        description: "Understand variables, loops, arrays, functions, and objects.",
        done: false,
        resources: [
          { name: "JavaScript Tutorial for Beginners", url: "https://www.youtube.com/watch?v=W6NZfCO5SIk", type: "YouTube" },
          { name: "JavaScript.info - The Modern JS Tutorial", url: "https://javascript.info/", type: "Docs" }
        ]
      },
      {
        id: "fe-s8",
        name: "DOM Manipulation",
        description: "Learn how to select, create, and modify HTML elements dynamically with JS.",
        done: false,
        resources: [
          { name: "JavaScript DOM Crash Course", url: "https://www.youtube.com/watch?v=0ik6X4DJKCc", type: "YouTube" },
          { name: "MDN: Manipulating documents", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", type: "Docs" }
        ]
      },
      {
        id: "fe-s9",
        name: "Fetch API & Async/Await",
        description: "Make HTTP requests, fetch data from APIs, and handle asynchronous code.",
        done: false,
        resources: [
          { name: "Async JS Crash Course - Promises, Async/Await", url: "https://www.youtube.com/watch?v=PoRJizFvM7s", type: "YouTube" },
          { name: "Using the Fetch API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch", type: "Article" }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Development Environment",
    level: "Intermediate",
    duration: "30 hrs",
    skills: [
      {
        id: "fe-s10",
        name: "Version Control (Git & GitHub)",
        description: "Track code changes and collaborate with other developers effectively.",
        done: false,
        resources: [
          { name: "Git & GitHub Crash Course For Beginners", url: "https://www.youtube.com/watch?v=SWYqp7iY_Tc", type: "YouTube" },
          { name: "Pro Git Book", url: "https://git-scm.com/book/en/v2", type: "Docs" }
        ]
      },
      {
        id: "fe-s11",
        name: "Package Managers",
        description: "Manage project dependencies using tools like npm, yarn, or pnpm.",
        done: false,
        resources: [
          { name: "NPM Crash Course", url: "https://www.youtube.com/watch?v=jHDhaSSKmB0", type: "YouTube" },
          { name: "npm official documentation", url: "https://docs.npmjs.com/", type: "Docs" }
        ]
      },
      {
        id: "fe-s12",
        name: "Build Tools (Vite / Webpack)",
        description: "Bundle, optimize, and serve your application assets for production.",
        done: false,
        resources: [
          { name: "Vite 3.0 Crash Course", url: "https://www.youtube.com/watch?v=KCrXgy8qtjM", type: "YouTube" },
          { name: "Vite Official Guide", url: "https://vitejs.dev/guide/", type: "Docs" }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Frontend Frameworks",
    level: "Advanced",
    duration: "65 hrs",
    skills: [
      {
        id: "fe-s13",
        name: "React Fundamentals",
        description: "Master components, JSX, state, props, and hooks.",
        done: false,
        resources: [
          { name: "React JS Crash Course", url: "https://www.youtube.com/watch?v=w7ejDZ8SWv8", type: "YouTube" },
          { name: "React Official Documentation", url: "https://react.dev/learn", type: "Docs" }
        ]
      },
      {
        id: "fe-s14",
        name: "State Management",
        description: "Manage complex application state using tools like Redux, Zustand, or Context API.",
        done: false,
        resources: [
          { name: "Zustand State Management Crash Course", url: "https://www.youtube.com/watch?v=KCr-UNsM3vA", type: "YouTube" },
          { name: "Redux Official Guide", url: "https://redux.js.org/introduction/getting-started", type: "Docs" }
        ]
      },
      {
        id: "fe-s15",
        name: "Routing (React Router)",
        description: "Handle client-side navigation and multiple views within your application.",
        done: false,
        resources: [
          { name: "React Router V6 Tutorial", url: "https://www.youtube.com/watch?v=59IXY5IDrBA", type: "YouTube" },
          { name: "React Router Documentation", url: "https://reactrouter.com/en/main", type: "Docs" }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Testing & Quality",
    level: "Advanced",
    duration: "35 hrs",
    skills: [
      {
        id: "fe-s16",
        name: "Linters & Formatters",
        description: "Maintain a consistent code style and catch errors early using ESLint and Prettier.",
        done: false,
        resources: [
          { name: "How to setup ESLint & Prettier", url: "https://www.youtube.com/watch?v=SydnKbGc7W8", type: "YouTube" },
          { name: "Prettier Documentation", url: "https://prettier.io/docs/en/", type: "Docs" }
        ]
      },
      {
        id: "fe-s17",
        name: "Unit Testing (Vitest/Jest)",
        description: "Write automated tests for individual components and functions.",
        done: false,
        resources: [
          { name: "Vitest Crash Course", url: "https://www.youtube.com/watch?v=7f-71kYhK00", type: "YouTube" },
          { name: "Jest Official Guide", url: "https://jestjs.io/docs/getting-started", type: "Docs" }
        ]
      },
      {
        id: "fe-s18",
        name: "E2E Testing (Playwright)",
        description: "Test your entire application flow by simulating real user interactions in a browser.",
        done: false,
        resources: [
          { name: "Playwright Crash Course", url: "https://www.youtube.com/watch?v=yYn9N502k38", type: "YouTube" },
          { name: "Playwright Documentation", url: "https://playwright.dev/docs/intro", type: "Docs" }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Advanced Concepts",
    level: "Advanced",
    duration: "50 hrs",
    skills: [
      {
        id: "fe-s19",
        name: "Type Checkers (TypeScript)",
        description: "Add static typing to JavaScript to build safer and more maintainable applications.",
        done: false,
        resources: [
          { name: "TypeScript Crash Course", url: "https://www.youtube.com/watch?v=BCg4U1FzODs", type: "YouTube" },
          { name: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/handbook/intro.html", type: "Docs" }
        ]
      },
      {
        id: "fe-s20",
        name: "Server-Side Rendering (Next.js)",
        description: "Improve SEO and initial load performance using full-stack frameworks like Next.js.",
        done: false,
        resources: [
          { name: "Next.js App Router Crash Course", url: "https://www.youtube.com/watch?v=ZVnjOPwW4ZA", type: "YouTube" },
          { name: "Next.js Official Documentation", url: "https://nextjs.org/docs", type: "Docs" }
        ]
      },
      {
        id: "fe-s21",
        name: "Web Security Basics",
        description: "Understand CORS, CSP, and how to prevent common vulnerabilities like XSS and CSRF.",
        done: false,
        resources: [
          { name: "Web Security Explained (CORS, XSS, CSRF)", url: "https://www.youtube.com/watch?v=x1wcvG52QjI", type: "YouTube" },
          { name: "OWASP Top Ten", url: "https://owasp.org/www-project-top-ten/", type: "Docs" }
        ]
      }
    ]
  }
];

export default frontendStages;
