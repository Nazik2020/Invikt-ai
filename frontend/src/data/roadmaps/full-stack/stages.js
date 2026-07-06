export const fullStackStages = [
  {
    id: 1,
    title: "Core Frontend & Interactivity",
    level: "Beginner",
    duration: "40 hrs",
    skills: [
      {
        id: "fs-s1",
        name: "HTML",
        description: "The standard markup language for creating Web pages.",
        done: false,
        resources: [
          { name: "HTML Full Course", url: "https://www.youtube.com/results?search_query=HTML+full+course", type: "YouTube" },
          { name: "MDN HTML Docs", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", type: "Docs" }
        ]
      },
      {
        id: "fs-s2",
        name: "CSS",
        description: "Style sheet language used for describing the presentation of a document.",
        done: false,
        resources: [
          { name: "CSS Full Course", url: "https://www.youtube.com/results?search_query=CSS+full+course", type: "YouTube" },
          { name: "MDN CSS Docs", url: "https://developer.mozilla.org/en-US/docs/Web/CSS", type: "Docs" }
        ]
      },
      {
        id: "fs-s3",
        name: "JavaScript",
        description: "High-level, often just-in-time compiled language that conforms to the ECMAScript standard.",
        done: false,
        resources: [
          { name: "JavaScript Full Course", url: "https://www.youtube.com/results?search_query=JavaScript+full+course", type: "YouTube" },
          { name: "MDN JavaScript Docs", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", type: "Docs" }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Tooling & Version Control",
    level: "Beginner",
    duration: "20 hrs",
    skills: [
      {
        id: "fs-s4",
        name: "npm",
        description: "The default package manager for the Node.js JavaScript runtime environment.",
        done: false,
        resources: [
          { name: "npm Crash Course", url: "https://www.youtube.com/results?search_query=npm+crash+course", type: "YouTube" },
          { name: "npm Official Docs", url: "https://docs.npmjs.com/", type: "Docs" }
        ]
      },
      {
        id: "fs-s5",
        name: "Git",
        description: "Distributed version control system for tracking changes in source code.",
        done: false,
        resources: [
          { name: "Git Tutorial for Beginners", url: "https://www.youtube.com/results?search_query=Git+tutorial", type: "YouTube" },
          { name: "Git Official Docs", url: "https://git-scm.com/doc", type: "Docs" }
        ]
      },
      {
        id: "fs-s6",
        name: "GitHub",
        description: "Provider of Internet hosting for software development and version control using Git.",
        done: false,
        resources: [
          { name: "GitHub Crash Course", url: "https://www.youtube.com/results?search_query=GitHub+tutorial", type: "YouTube" },
          { name: "GitHub Guides", url: "https://docs.github.com/en", type: "Docs" }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Modern Frontend Frameworks",
    level: "Intermediate",
    duration: "50 hrs",
    skills: [
      {
        id: "fs-s7",
        name: "Tailwind CSS",
        description: "A utility-first CSS framework for rapidly building custom user interfaces.",
        done: false,
        resources: [
          { name: "Tailwind CSS Crash Course", url: "https://www.youtube.com/results?search_query=Tailwind+CSS+tutorial", type: "YouTube" },
          { name: "Tailwind Official Docs", url: "https://tailwindcss.com/docs", type: "Docs" }
        ]
      },
      {
        id: "fs-s8",
        name: "React",
        description: "A free and open-source front-end JavaScript library for building user interfaces based on UI components.",
        done: false,
        resources: [
          { name: "React Full Course", url: "https://www.youtube.com/results?search_query=React+JS+full+course", type: "YouTube" },
          { name: "React Official Docs", url: "https://react.dev/", type: "Docs" }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Backend Fundamentals",
    level: "Intermediate",
    duration: "50 hrs",
    skills: [
      {
        id: "fs-s9",
        name: "Node.js",
        description: "An open-source, cross-platform, back-end JavaScript runtime environment.",
        done: false,
        resources: [
          { name: "Node.js Full Course", url: "https://www.youtube.com/results?search_query=Node.js+full+course", type: "YouTube" },
          { name: "Node.js Official Docs", url: "https://nodejs.org/en/docs/", type: "Docs" }
        ]
      },
      {
        id: "fs-s10",
        name: "PostgreSQL",
        description: "A free and open-source relational database management system emphasizing extensibility and SQL compliance.",
        done: false,
        resources: [
          { name: "PostgreSQL Tutorial", url: "https://www.youtube.com/results?search_query=PostgreSQL+tutorial", type: "YouTube" },
          { name: "PostgreSQL Official Docs", url: "https://www.postgresql.org/docs/", type: "Docs" }
        ]
      },
      {
        id: "fs-s11",
        name: "RESTful APIs",
        description: "An architectural style for an application program interface (API) that uses HTTP requests to access and use data.",
        done: false,
        resources: [
          { name: "REST API Crash Course", url: "https://www.youtube.com/results?search_query=REST+API+crash+course", type: "YouTube" },
          { name: "REST API Design Best Practices", url: "https://swagger.io/resources/articles/best-practices-in-api-design/", type: "Article" }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Advanced Backend & Security",
    level: "Advanced",
    duration: "30 hrs",
    skills: [
      {
        id: "fs-s12",
        name: "JWT Auth",
        description: "JSON Web Token is a proposed Internet standard for creating data with optional signature and/or optional encryption.",
        done: false,
        resources: [
          { name: "JWT Authentication Tutorial", url: "https://www.youtube.com/results?search_query=JWT+Authentication+tutorial", type: "YouTube" },
          { name: "JWT.io Guide", url: "https://jwt.io/introduction", type: "Article" }
        ]
      },
      {
        id: "fs-s13",
        name: "Redis",
        description: "An open-source, in-memory storage, used as a distributed, in-memory key–value database, cache and message broker.",
        done: false,
        resources: [
          { name: "Redis Crash Course", url: "https://www.youtube.com/results?search_query=Redis+crash+course", type: "YouTube" },
          { name: "Redis Official Docs", url: "https://redis.io/docs/", type: "Docs" }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Cloud Computing Foundation",
    level: "Advanced",
    duration: "60 hrs",
    skills: [
      {
        id: "fs-s14",
        name: "Linux Basics",
        description: "Basic commands, file system hierarchy, permissions, and shell scripting.",
        done: false,
        resources: [
          { name: "Linux for Beginners", url: "https://www.youtube.com/results?search_query=Linux+for+beginners", type: "YouTube" },
          { name: "Linux Command Library", url: "https://linuxcommandlibrary.com/", type: "Docs" }
        ]
      },
      {
        id: "fs-s15",
        name: "Basic AWS Services",
        description: "Overview of Amazon Web Services ecosystem and cloud computing concepts.",
        done: false,
        resources: [
          { name: "AWS Cloud Practitioner Basics", url: "https://www.youtube.com/results?search_query=AWS+Basics", type: "YouTube" },
          { name: "AWS Documentation", url: "https://docs.aws.amazon.com/", type: "Docs" }
        ]
      },
      {
        id: "fs-s16",
        name: "EC2 (Elastic Compute Cloud)",
        description: "Scalable compute capacity in the AWS Cloud.",
        done: false,
        resources: [
          { name: "AWS EC2 Tutorial", url: "https://www.youtube.com/results?search_query=AWS+EC2+tutorial", type: "YouTube" },
          { name: "EC2 Official Docs", url: "https://docs.aws.amazon.com/ec2/", type: "Docs" }
        ]
      },
      {
        id: "fs-s17",
        name: "VPC (Virtual Private Cloud)",
        description: "Provision a logically isolated section of the AWS Cloud.",
        done: false,
        resources: [
          { name: "AWS VPC Explained", url: "https://www.youtube.com/results?search_query=AWS+VPC+explained", type: "YouTube" },
          { name: "VPC Official Docs", url: "https://docs.aws.amazon.com/vpc/", type: "Docs" }
        ]
      },
      {
        id: "fs-s18",
        name: "Route53",
        description: "A highly available and scalable cloud Domain Name System (DNS) web service.",
        done: false,
        resources: [
          { name: "AWS Route53 Tutorial", url: "https://www.youtube.com/results?search_query=AWS+Route53+tutorial", type: "YouTube" },
          { name: "Route53 Official Docs", url: "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html", type: "Docs" }
        ]
      },
      {
        id: "fs-s19",
        name: "SES (Simple Email Service)",
        description: "A cost-effective, flexible, and scalable email service that enables developers to send mail.",
        done: false,
        resources: [
          { name: "AWS SES Tutorial", url: "https://www.youtube.com/results?search_query=AWS+SES+tutorial", type: "YouTube" },
          { name: "SES Official Docs", url: "https://docs.aws.amazon.com/ses/", type: "Docs" }
        ]
      },
      {
        id: "fs-s20",
        name: "S3 (Simple Storage Service)",
        description: "Object storage built to store and retrieve any amount of data from anywhere.",
        done: false,
        resources: [
          { name: "AWS S3 Tutorial", url: "https://www.youtube.com/results?search_query=AWS+S3+tutorial", type: "YouTube" },
          { name: "S3 Official Docs", url: "https://docs.aws.amazon.com/s3/", type: "Docs" }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Automation & DevOps",
    level: "Advanced",
    duration: "50 hrs",
    skills: [
      {
        id: "fs-s21",
        name: "Monit",
        description: "A small Open Source utility for managing and monitoring Unix systems.",
        done: false,
        resources: [
          { name: "Monit Server Monitoring", url: "https://www.youtube.com/results?search_query=Monit+server+monitoring", type: "YouTube" },
          { name: "Monit Official Docs", url: "https://mmonit.com/monit/documentation/monit.html", type: "Docs" }
        ]
      },
      {
        id: "fs-s22",
        name: "GitHub Actions",
        description: "Automate, customize, and execute your software development workflows right in your repository.",
        done: false,
        resources: [
          { name: "GitHub Actions Tutorial", url: "https://www.youtube.com/results?search_query=GitHub+Actions+tutorial", type: "YouTube" },
          { name: "GitHub Actions Official Docs", url: "https://docs.github.com/en/actions", type: "Docs" }
        ]
      },
      {
        id: "fs-s23",
        name: "Ansible",
        description: "An open-source software provisioning, configuration management, and application-deployment tool.",
        done: false,
        resources: [
          { name: "Ansible Crash Course", url: "https://www.youtube.com/results?search_query=Ansible+crash+course", type: "YouTube" },
          { name: "Ansible Official Docs", url: "https://docs.ansible.com/", type: "Docs" }
        ]
      },
      {
        id: "fs-s24",
        name: "Terraform",
        description: "An open-source infrastructure as code software tool that provides a consistent CLI workflow.",
        done: false,
        resources: [
          { name: "Terraform Tutorial", url: "https://www.youtube.com/results?search_query=Terraform+tutorial", type: "YouTube" },
          { name: "Terraform Official Docs", url: "https://developer.hashicorp.com/terraform/docs", type: "Docs" }
        ]
      }
    ]
  }
];

export default fullStackStages;
