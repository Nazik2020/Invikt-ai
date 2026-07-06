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
        resources: [
          { name: "Essence of Linear Algebra", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab", type: "YouTube" },
          { name: "Mathematics for Machine Learning", url: "https://mml-book.github.io/", type: "Book" }
        ],
      },
      {
        id: "ds-s2",
        name: "Differential Calculus",
        description: "Understand gradients and how models use derivatives to optimize error rates during training.",
        done: false,
        resources: [
          { name: "Essence of Calculus", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr", type: "YouTube" },
          { name: "Khan Academy: Differential Calculus", url: "https://www.khanacademy.org/math/differential-calculus", type: "Course" }
        ],
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
        resources: [
          { name: "StatQuest: Statistics Fundamentals", url: "https://www.youtube.com/playlist?list=PLblh5JKOoLUK0FLuzwntyYI10UQFUhsY9", type: "YouTube" }
        ],
      },
      {
        id: "ds-s4",
        name: "Hypothesis Testing",
        description: "Learn how to statistically prove if an observation is significant or just random noise.",
        done: false,
        resources: [
          { name: "StatQuest: Hypothesis Testing", url: "https://www.youtube.com/watch?v=0oc49DyA3hU", type: "YouTube" }
        ],
      },
      {
        id: "ds-s5",
        name: "Probability and Sampling",
        description: "Master probability rules and sampling techniques to represent populations correctly.",
        done: false,
        resources: [
          { name: "Khan Academy: Statistics & Probability", url: "https://www.khanacademy.org/math/statistics-probability", type: "Course" }
        ],
      },
      {
        id: "ds-s6",
        name: "AB Testing",
        description: "Design controlled experiments to compare two versions of a product and measure impact.",
        done: false,
        resources: [
          { name: "Practitioner's Guide to Statistical Tests", url: "https://vkteam.medium.com/practitioners-guide-to-statistical-tests-ed2d580ef04f#1e3b", type: "Article" },
          { name: "A/B Testing Course by Google", url: "https://www.udacity.com/course/ab-testing--ud257", type: "Course" }
        ],
      },
      {
        id: "ds-s7",
        name: "Increasing Test Sensitivity",
        description: "Learn advanced techniques like CUPED to reduce variance and detect smaller effects in experiments.",
        done: false,
        resources: [
          { name: "Minimum Detectable Effect", url: "https://splitmetrics.com/resources/minimum-detectable-effect-mde/", type: "Article" },
          { name: "Improving Sensitivity (CUPED)", url: "https://exp-platform.com/Documents/2013-02-CUPED-ImprovingSensitivityOfControlledExperiments.pdf", type: "Paper" },
          { name: "CUPED at Booking.com", url: "https://booking.ai/how-booking-com-increases-the-power-of-online-experiments-with-cuped-995d186fff1d", type: "Article" }
        ],
      },
      {
        id: "ds-s8",
        name: "Ratio Metrics",
        description: "Properly analyze and calculate variance for metrics that are ratios (e.g., click-through rates).",
        done: false,
        resources: [
          { name: "Delta Method in Metric Analytics", url: "https://arxiv.org/pdf/1803.06336", type: "Paper" }
        ],
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
        resources: [
          { name: "Fundamentals of Econometrics", url: "https://bookdown.org/ts_robinson1994/10EconometricTheorems/", type: "Book" }
        ],
      },
      {
        id: "ds-s10",
        name: "Regression, Timeseries, Fitting Distributions",
        description: "Forecast future values (sales, weather) using historical sequential data models like ARIMA.",
        done: false,
        resources: [
          { name: "Kaggle: Learn Time Series", url: "https://www.kaggle.com/learn/time-series", type: "Course" },
          { name: "Time Series Forecasting with Python", url: "https://machinelearningmastery.com/time-series-forecasting-methods-in-python-cheat-sheet/", type: "Tutorial" },
          { name: "StatQuest: Linear Regression", url: "https://www.youtube.com/watch?v=7ArmBVF2dCs", type: "YouTube" }
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
        resources: [
          { name: "Learn Python: Kaggle", url: "https://www.kaggle.com/learn/python", type: "Course" },
          { name: "Python for Beginners (freeCodeCamp)", url: "https://www.youtube.com/watch?v=rfscVS0vtbw", type: "YouTube" }
        ],
      },
      {
        id: "ds-s12",
        name: "Data Structures and Algorithms (Python)",
        description: "Write efficient code by understanding lists, dictionaries, trees, and time complexity.",
        done: false,
        resources: [
          { name: "Algorithmic Exercises (LeetCode)", url: "https://leetcode.com/explore/learn/", type: "Challenges" },
          { name: "DSA in Python", url: "https://www.youtube.com/watch?v=8hly31xKli0", type: "YouTube" }
        ],
      },
      {
        id: "ds-s13",
        name: "Learn SQL",
        description: "Query, join, and aggregate data directly from relational databases.",
        done: false,
        resources: [
          { name: "SQL Tutorial (Kaggle)", url: "https://www.kaggle.com/learn/intro-to-sql", type: "Course" },
          { name: "SQL for Data Science", url: "https://www.youtube.com/watch?v=HXV3zeJZ1EQ", type: "YouTube" }
        ],
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
        resources: [
          { name: "Pandas Tutorial (Kaggle)", url: "https://www.kaggle.com/learn/pandas", type: "Course" },
          { name: "Data Visualization (Kaggle)", url: "https://www.kaggle.com/learn/data-visualization", type: "Course" },
          { name: "EDA with Python", url: "https://www.youtube.com/watch?v=a9UrKTVEeZA", type: "YouTube" }
        ],
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
          { name: "StatQuest: Machine Learning", url: "https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF", type: "YouTube" },
          { name: "Scikit-Learn Official Tutorials", url: "https://scikit-learn.org/stable/tutorial/index.html", type: "Tutorial" },
          { name: "Pattern Recognition & ML by Bishop", url: "https://microsoft.com/en-us/research/uploads/prod/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf", type: "eBook" }
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
          { name: "Andrej Karpathy: Neural Networks", url: "https://www.youtube.com/@AndrejKarpathy", type: "YouTube" },
          { name: "Deep Learning Book", url: "https://www.deeplearningbook.org/", type: "eBook" },
          { name: "Attention Is All You Need", url: "https://arxiv.org/abs/1706.03762", type: "Paper" },
          { name: "The Illustrated Transformer", url: "https://jalammar.github.io/illustrated-transformer/", type: "Article" }
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
        resources: [
          { name: "MLOps for Beginners", url: "https://www.youtube.com/watch?v=F3H11HqSopc", type: "YouTube" },
          { name: "Hugging Face Spaces Deployment", url: "https://huggingface.co/docs/hub/spaces", type: "Docs" }
        ],
      },
    ],
  },
];

export default aiDataScientistStages;
