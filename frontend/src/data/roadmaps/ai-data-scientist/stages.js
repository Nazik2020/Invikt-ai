/**
 * AI & Data Scientist Roadmap - Stages & Skills
 */

export const aiDataScientistStages = [
  {
    id: 1,
    title: "Mathematics",
    level: "Beginner",
    duration: "12 hrs",
    skills: [
      {
        id: "ds-s1",
        name: "Linear Algebra, Calculus, Mathematical Analysis",
        description: "Learn the core math that powers machine learning algorithms, focusing on matrix operations and derivatives.",
        done: false,
        resources: ["https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab"],
      },
      {
        id: "ds-s2",
        name: "Differential Calculus",
        description: "Understand gradients and how models use derivatives to optimize error rates during training.",
        done: false,
        resources: ["https://www.khanacademy.org/math/differential-calculus"],
      },
    ],
  },
  {
    id: 2,
    title: "Statistics",
    level: "Intermediate",
    duration: "18 hrs",
    skills: [
      {
        id: "ds-s3",
        name: "Statistics, CLT",
        description: "Understand data distributions, variance, and the Central Limit Theorem.",
        done: false,
        resources: ["https://www.youtube.com/@statquest"],
      },
      {
        id: "ds-s4",
        name: "Hypothesis Testing",
        description: "Learn how to statistically prove if an observation is significant or just random noise.",
        done: false,
        resources: ["https://www.youtube.com/watch?v=0oc49DyA3hU"],
      },
      {
        id: "ds-s5",
        name: "Probability and Sampling",
        description: "Master probability rules and sampling techniques to represent populations correctly.",
        done: false,
        resources: ["https://www.khanacademy.org/math/statistics-probability"],
      },
      {
        id: "ds-s6",
        name: "AB Testing",
        description: "Design controlled experiments to compare two versions of a product and measure impact.",
        done: false,
        resources: ["https://vkteam.medium.com/practitioners-guide-to-statistical-tests-ed2d580ef04f#1e3b"],
      },
      {
        id: "ds-s7",
        name: "Increasing Test Sensitivity",
        description: "Learn advanced techniques like CUPED to reduce variance and detect smaller effects in experiments.",
        done: false,
        resources: ["https://splitmetrics.com/resources/minimum-detectable-effect-mde/"],
      },
      {
        id: "ds-s8",
        name: "Ratio Metrics",
        description: "Properly analyze and calculate variance for metrics that are ratios (e.g., click-through rates).",
        done: false,
        resources: ["https://arxiv.org/pdf/1803.06336"],
      },
    ],
  },
  {
    id: 3,
    title: "Econometrics",
    level: "Advanced",
    duration: "14 hrs",
    skills: [
      {
        id: "ds-s9",
        name: "Pre-requisites of Econometrics",
        description: "Grasp the economic principles required to apply statistical methods to economic data.",
        done: false,
        resources: ["https://bookdown.org/ts_robinson1994/10EconometricTheorems/"],
      },
      {
        id: "ds-s10",
        name: "Regression, Timeseries, Fitting Distributions",
        description: "Forecast future values (sales, weather) using historical sequential data models like ARIMA.",
        done: false,
        resources: [
          "https://www.kaggle.com/learn/time-series",
          "https://machinelearningmastery.com/arima-for-time-series-forecasting-with-python",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Coding",
    level: "Beginner",
    duration: "25 hrs",
    skills: [
      {
        id: "ds-s11",
        name: "Learn Python Programming Language",
        description: "Master the primary language of data science: syntax, loops, and object-oriented concepts.",
        done: false,
        resources: ["https://www.kaggle.com/learn/python", "https://developers.google.com/edu/python"],
      },
      {
        id: "ds-s12",
        name: "Data Structures and Algorithms (Python)",
        description: "Write efficient code by understanding lists, dictionaries, trees, and time complexity.",
        done: false,
        resources: ["https://leetcode.com/studyplan/", "https://www.freecodecamp.org/news/learn-algorithms-and-data-structures-in-python/"],
      },
      {
        id: "ds-s13",
        name: "Learn SQL",
        description: "Query, join, and aggregate data directly from relational databases.",
        done: false,
        resources: ["https://sqltutorial.org/", "https://www.kaggle.com/learn/intro-to-sql"],
      },
    ],
  },
  {
    id: 5,
    title: "Exploratory Data Analysis",
    level: "Intermediate",
    duration: "16 hrs",
    skills: [
      {
        id: "ds-s14",
        name: "Data understanding, Data Analysis and Visualization",
        description: "Clean missing data and create charts to uncover trends using Pandas, Matplotlib, and Seaborn.",
        done: false,
        resources: ["https://www.kaggle.com/learn/pandas", "https://www.kaggle.com/learn/data-visualization"],
      },
    ],
  },
  {
    id: 6,
    title: "Machine Learning",
    level: "Advanced",
    duration: "25 hrs",
    skills: [
      {
        id: "ds-s15",
        name: "Classic ML (Sup., Unsup.), Advanced ML (Ensembles, NNs)",
        description: "Implement supervised/unsupervised algorithms, ensemble methods (Random Forests), and evaluate metrics.",
        done: false,
        resources: [
          "https://mlcourse.ai/book/topic01/topic01_intro.html",
          "https://microsoft.com/en-us/research/uploads/prod/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf",
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Deep Learning",
    level: "Advanced",
    duration: "30 hrs",
    skills: [
      {
        id: "ds-s16",
        name: "Fully Connected, CNN, RNN, LSTM, Transformers, TL",
        description: "Build and train CNNs for images, RNNs/LSTMs for sequences, and Transformers for text.",
        done: false,
        resources: [
          "https://www.deeplearningbook.org/",
          "https://jalammar.github.io/illustrated-transformer/",
          "https://www.youtube.com/@AndrejKarpathy",
        ],
      },
    ],
  },
  {
    id: 8,
    title: "MLOps",
    level: "Expert",
    duration: "10 hrs",
    skills: [
      {
        id: "ds-s17",
        name: "Deployment Models, CI/CD",
        description: "Package models into APIs using Docker, and automate training pipelines for production.",
        done: false,
        resources: ["https://huggingface.co/docs/hub/spaces", "https://www.youtube.com/@NetworkChuck"],
      },
    ],
  },
];

export default aiDataScientistStages;
