export const qaEngineerStages = [
  {
    id: 1,
    title: "QA Fundamentals & Planning",
    level: "Beginner",
    duration: "40 hrs",
    skills: [
      {
        id: "qa-s1",
        name: "QA Fundamentals & Mindset",
        description: "Understanding software testing principles, white/black box testing, and the QA mindset.",
        done: false,
        resources: [
          { name: "Software Testing Tutorial for Beginners", url: "https://www.youtube.com/results?search_query=software+testing+tutorial+for+beginners", type: "YouTube" },
          { name: "ISTQB Foundation Level Concepts", url: "https://www.istqb.org/", type: "Docs" }
        ]
      },
      {
        id: "qa-s2",
        name: "SDLC Delivery Models",
        description: "Agile, Scrum, Kanban, V-Model, and Waterfall methodologies.",
        done: false,
        resources: [
          { name: "Agile vs Waterfall", url: "https://www.youtube.com/results?search_query=Agile+vs+Waterfall", type: "YouTube" },
          { name: "Atlassian Agile Coach", url: "https://www.atlassian.com/agile", type: "Article" }
        ]
      },
      {
        id: "qa-s3",
        name: "Project & Test Management",
        description: "Using Jira, TestRail, Zephyr, or Trello to manage issues and test cases.",
        done: false,
        resources: [
          { name: "Jira Crash Course", url: "https://www.youtube.com/results?search_query=Jira+tutorial", type: "YouTube" },
          { name: "TestRail Documentation", url: "https://support.testrail.com/hc/en-us", type: "Docs" }
        ]
      },
      {
        id: "qa-s4",
        name: "Manual Testing & Test Planning",
        description: "Writing effective test cases, test scenarios, test plans, and performing verification/validation.",
        done: false,
        resources: [
          { name: "How to Write Test Cases", url: "https://www.youtube.com/results?search_query=How+to+write+test+cases", type: "YouTube" },
          { name: "Software Testing Help: Test Plan", url: "https://www.softwaretestinghelp.com/test-plan-tutorial/", type: "Article" }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Core Testing Techniques",
    level: "Beginner",
    duration: "30 hrs",
    skills: [
      {
        id: "qa-s5",
        name: "Functional Testing",
        description: "Unit, Integration, Smoke, Sanity, Regression, Exploratory, and UAT.",
        done: false,
        resources: [
          { name: "Functional Testing Types Explained", url: "https://www.youtube.com/results?search_query=Functional+Testing+explained", type: "YouTube" },
          { name: "IBM: What is Functional Testing?", url: "https://www.ibm.com/topics/functional-testing", type: "Article" }
        ]
      },
      {
        id: "qa-s6",
        name: "Non-Functional Testing",
        description: "Understanding performance, load, stress, and security testing concepts.",
        done: false,
        resources: [
          { name: "Non-Functional Testing Tutorial", url: "https://www.youtube.com/results?search_query=Non-Functional+Testing", type: "YouTube" },
          { name: "Guru99 Non-Functional Testing", url: "https://www.guru99.com/non-functional-testing.html", type: "Article" }
        ]
      },
      {
        id: "qa-s7",
        name: "Test Driven Development (TDD)",
        description: "Software development process relying on software requirements being converted to test cases before code is written.",
        done: false,
        resources: [
          { name: "TDD Explained", url: "https://www.youtube.com/results?search_query=Test+Driven+Development", type: "YouTube" },
          { name: "Martin Fowler on TDD", url: "https://martinfowler.com/bliki/TestDrivenDevelopment.html", type: "Article" }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Frontend Automation",
    level: "Intermediate",
    duration: "60 hrs",
    skills: [
      {
        id: "qa-s8",
        name: "Web Basics for QA",
        description: "HTML, CSS, JavaScript, DOM, Ajax, CSR vs SSR, and Chrome DevTools.",
        done: false,
        resources: [
          { name: "Web Development Basics for Testers", url: "https://www.youtube.com/results?search_query=web+basics+for+software+testers", type: "YouTube" },
          { name: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/", type: "Docs" }
        ]
      },
      {
        id: "qa-s9",
        name: "Browser Addons & Record/Replay",
        description: "Using tools like Selenium IDE, Ghost Inspector, and Bug Magnet.",
        done: false,
        resources: [
          { name: "Selenium IDE Tutorial", url: "https://www.youtube.com/results?search_query=Selenium+IDE+tutorial", type: "YouTube" },
          { name: "Selenium IDE Official Docs", url: "https://www.selenium.dev/selenium-ide/", type: "Docs" }
        ]
      },
      {
        id: "qa-s10",
        name: "Frontend Automation Frameworks",
        description: "Playwright, Cypress, Selenium, Webdriver.io, and Puppeteer.",
        done: false,
        resources: [
          { name: "Playwright vs Cypress vs Selenium", url: "https://www.youtube.com/results?search_query=Playwright+vs+Cypress+vs+Selenium", type: "YouTube" },
          { name: "Playwright Official Docs", url: "https://playwright.dev/", type: "Docs" }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Backend & Mobile Automation",
    level: "Intermediate",
    duration: "50 hrs",
    skills: [
      {
        id: "qa-s11",
        name: "Backend API Testing",
        description: "Testing APIs using Postman, REST Assured, SoapUI, or Karate.",
        done: false,
        resources: [
          { name: "Postman API Testing Full Course", url: "https://www.youtube.com/results?search_query=Postman+API+Testing+full+course", type: "YouTube" },
          { name: "Postman Learning Center", url: "https://learning.postman.com/", type: "Docs" }
        ]
      },
      {
        id: "qa-s12",
        name: "Mobile Test Automation",
        description: "Appium, Espresso, XCUITest, and Detox for iOS and Android.",
        done: false,
        resources: [
          { name: "Appium Tutorial for Beginners", url: "https://www.youtube.com/results?search_query=Appium+Tutorial+for+Beginners", type: "YouTube" },
          { name: "Appium Official Docs", url: "https://appium.io/docs/en/latest/", type: "Docs" }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Specialized Testing",
    level: "Advanced",
    duration: "40 hrs",
    skills: [
      {
        id: "qa-s13",
        name: "Accessibility Testing",
        description: "Testing web accessibility using WAVE, Axe, and Lighthouse.",
        done: false,
        resources: [
          { name: "Web Accessibility Testing Tutorial", url: "https://www.youtube.com/results?search_query=Web+Accessibility+Testing+Tutorial", type: "YouTube" },
          { name: "W3C Web Accessibility Initiative (WAI)", url: "https://www.w3.org/WAI/", type: "Docs" }
        ]
      },
      {
        id: "qa-s14",
        name: "Load & Performance Testing",
        description: "JMeter, K6, Gatling, Locust, and Artillery.",
        done: false,
        resources: [
          { name: "JMeter Performance Testing Tutorial", url: "https://www.youtube.com/results?search_query=JMeter+Performance+Testing+Tutorial", type: "YouTube" },
          { name: "K6 Documentation", url: "https://k6.io/docs/", type: "Docs" }
        ]
      },
      {
        id: "qa-s15",
        name: "Security Testing",
        description: "OWASP Top 10, Authentication, Secrets Management, and Vulnerability Scanning.",
        done: false,
        resources: [
          { name: "OWASP Top 10 Explained", url: "https://www.youtube.com/results?search_query=OWASP+Top+10+Explained", type: "YouTube" },
          { name: "OWASP Foundation", url: "https://owasp.org/", type: "Docs" }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Reporting & Monitoring",
    level: "Advanced",
    duration: "30 hrs",
    skills: [
      {
        id: "qa-s16",
        name: "Test Reporting",
        description: "Generating visual test reports with Allure, jUnit, or TestRail.",
        done: false,
        resources: [
          { name: "Allure Report Tutorial", url: "https://www.youtube.com/results?search_query=Allure+Report+Tutorial", type: "YouTube" },
          { name: "Allure Documentation", url: "https://allurereport.org/docs/", type: "Docs" }
        ]
      },
      {
        id: "qa-s17",
        name: "Monitoring & Logging",
        description: "Grafana, Kibana, Datadog, New Relic, and Sentry for monitoring production.",
        done: false,
        resources: [
          { name: "Grafana and Kibana Explained", url: "https://www.youtube.com/results?search_query=Grafana+and+Kibana", type: "YouTube" },
          { name: "Datadog Documentation", url: "https://docs.datadoghq.com/", type: "Docs" }
        ]
      },
      {
        id: "qa-s18",
        name: "Email Testing",
        description: "Automated email testing using Mailinator or Gmail Tester.",
        done: false,
        resources: [
          { name: "Testing Emails Automatically", url: "https://www.youtube.com/results?search_query=Automated+Email+Testing", type: "YouTube" },
          { name: "Mailtrap Email Testing Guide", url: "https://mailtrap.io/blog/email-testing/", type: "Article" }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Version Control & CI/CD",
    level: "Advanced",
    duration: "50 hrs",
    skills: [
      {
        id: "qa-s19",
        name: "Version Control System",
        description: "Using Git and hosting services like GitHub, GitLab, and Bitbucket.",
        done: false,
        resources: [
          { name: "Git Tutorial for Testers", url: "https://www.youtube.com/results?search_query=Git+Tutorial+for+Testers", type: "YouTube" },
          { name: "Git Official Docs", url: "https://git-scm.com/doc", type: "Docs" }
        ]
      },
      {
        id: "qa-s20",
        name: "CI / CD Pipelines",
        description: "Integrating tests into CI/CD with Jenkins, GitHub Actions, GitLab CI, or Circle CI.",
        done: false,
        resources: [
          { name: "Jenkins CI/CD Tutorial", url: "https://www.youtube.com/results?search_query=Jenkins+CI+CD+Tutorial", type: "YouTube" },
          { name: "GitHub Actions Docs", url: "https://docs.github.com/en/actions", type: "Docs" }
        ]
      },
      {
        id: "qa-s21",
        name: "Headless Testing",
        description: "Running tests invisibly with Headless Chrome, Headless Firefox, and Puppeteer.",
        done: false,
        resources: [
          { name: "Puppeteer Crash Course", url: "https://www.youtube.com/results?search_query=Puppeteer+Crash+Course", type: "YouTube" },
          { name: "Chrome Headless Docs", url: "https://developer.chrome.com/docs/chromium/new-headless", type: "Docs" }
        ]
      }
    ]
  }
];

export default qaEngineerStages;
