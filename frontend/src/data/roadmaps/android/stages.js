export const androidStages = [
  {
    id: "fundamentals",
    title: "1. Fundamentals & Language",
    description:
      "Start by learning the core languages and tools required for Android development.",
    level: "Beginner",
    duration: "4 weeks",
    skills: [
      {
        id: "programming-language",
        name: "Programming Language",
        description:
          "Learn Kotlin (the modern standard) or Java. Kotlin is highly recommended for new apps.",
        done: false,
        resources: [
          {
            name: "Kotlin Course - Tutorial for Beginners",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=kotlin+tutorial+for+beginners",
          },
          {
            name: "Kotlin Official Docs",
            type: "Docs",
            url: "https://kotlinlang.org/docs/home.html",
          },
        ],
      },
      {
        id: "core-fundamentals",
        name: "Core Fundamentals",
        description:
          "Master Basics of OOP, Data Structures, Algorithms, and create a basic Hello World App.",
        done: false,
        resources: [
          {
            name: "Object Oriented Programming in Kotlin",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=kotlin+oop+tutorial",
          },
          {
            name: "Build your first Android app",
            type: "Tutorial",
            url: "https://developer.android.com/training/basics/firstapp",
          },
        ],
      },
      {
        id: "dev-environment",
        name: "Development Environment",
        description:
          "Set up Android Studio (IDE) and understand how to use Gradle for build automation.",
        done: false,
        resources: [
          {
            name: "Android Studio Tutorial",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=android+studio+tutorial",
          },
          {
            name: "Configure your build with Gradle",
            type: "Docs",
            url: "https://developer.android.com/studio/build",
          },
        ],
      },
    ],
  },
  {
    id: "version-control",
    title: "2. Version Control",
    description:
      "Manage your codebase, track changes, and collaborate with teams.",
    level: "Beginner",
    duration: "2 weeks",
    skills: [
      {
        id: "git",
        name: "Git Version Control",
        description:
          "Learn basic Git commands, branching, merging, and handling conflicts.",
        done: false,
        resources: [
          {
            name: "Git Tutorial for Beginners",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=git+tutorial",
          },
          {
            name: "Pro Git Book",
            type: "Docs",
            url: "https://git-scm.com/book/en/v2",
          },
        ],
      },
      {
        id: "github",
        name: "GitHub Basics",
        description:
          "Host repositories, manage pull requests, and use GitHub features for collaboration.",
        done: false,
        resources: [
          {
            name: "GitHub Workflow Tutorial",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=github+workflow",
          },
          {
            name: "GitHub Documentation",
            type: "Docs",
            url: "https://docs.github.com/",
          },
        ],
      },
      {
        id: "other-vcs",
        name: "GitLab / Bitbucket",
        description:
          "Familiarize yourself with other popular VCS hosting platforms.",
        done: false,
        resources: [
          {
            name: "GitLab vs GitHub vs Bitbucket",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=gitlab+vs+github+vs+bitbucket",
          },
          {
            name: "GitLab CI/CD Tutorial",
            type: "Article",
            url: "https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/",
          },
        ],
      },
    ],
  },
  {
    id: "app-components",
    title: "3. App Components",
    description:
      "Understand the essential building blocks of any Android application.",
    level: "Intermediate",
    duration: "3 weeks",
    skills: [
      {
        id: "activity-lifecycle",
        name: "Activity & Lifecycles",
        description:
          "Learn about Activities, Activity Lifecycle, State Changes, and Tasks & Backstack.",
        done: false,
        resources: [
          {
            name: "Android Activity Lifecycle Explained",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=android+activity+lifecycle",
          },
          {
            name: "Understand the Activity Lifecycle",
            type: "Docs",
            url: "https://developer.android.com/guide/components/activities/activity-lifecycle",
          },
        ],
      },
      {
        id: "intents",
        name: "Intents",
        description:
          "Communicate between components using Implicit Intents, Explicit Intents, and Intent Filters.",
        done: false,
        resources: [
          {
            name: "Intents in Android Studio",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=android+intents",
          },
          {
            name: "Intents and Intent Filters",
            type: "Docs",
            url: "https://developer.android.com/guide/components/intents-filters",
          },
        ],
      },
      {
        id: "background-components",
        name: "Background Components",
        description:
          "Handle background processes using Services, Content Providers, and Broadcast Receivers.",
        done: false,
        resources: [
          {
            name: "Services in Android",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=android+services",
          },
          {
            name: "Content Providers Overview",
            type: "Docs",
            url: "https://developer.android.com/guide/topics/providers/content-providers",
          },
        ],
      },
    ],
  },
  {
    id: "interface-navigation",
    title: "4. Interface & Navigation",
    description: "Design user interfaces and handle screen navigation.",
    level: "Intermediate",
    duration: "4 weeks",
    skills: [
      {
        id: "layouts",
        name: "Layouts",
        description:
          "Build UIs using Constraint, Linear, Relative, Frame, and RecyclerView layouts.",
        done: false,
        resources: [
          {
            name: "Android Layouts Tutorial",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=android+layouts",
          },
          {
            name: "Build a UI with Layout Editor",
            type: "Docs",
            url: "https://developer.android.com/studio/write/layout-editor",
          },
        ],
      },
      {
        id: "ui-elements",
        name: "UI Elements & Fragments",
        description:
          "Work with TextView, Buttons, Dialogs, Bottom Sheets, Fragments, and Animations.",
        done: false,
        resources: [
          {
            name: "Android Fragments Tutorial",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=android+fragments",
          },
          {
            name: "Fragments Guide",
            type: "Docs",
            url: "https://developer.android.com/guide/fragments",
          },
        ],
      },
      {
        id: "compose-navigation",
        name: "Jetpack Compose & Navigation",
        description:
          "Build modern declarative UIs with Jetpack Compose and manage routing with Navigation Components.",
        done: false,
        resources: [
          {
            name: "Jetpack Compose Crash Course",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=jetpack+compose+tutorial",
          },
          {
            name: "Jetpack Compose Documentation",
            type: "Docs",
            url: "https://developer.android.com/jetpack/compose",
          },
        ],
      },
    ],
  },
  {
    id: "architecture",
    title: "5. Architecture & Patterns",
    description:
      "Structure your code for maintainability and testability using proven patterns.",
    level: "Advanced",
    duration: "4 weeks",
    skills: [
      {
        id: "architectural-patterns",
        name: "Architectural Patterns",
        description:
          "Learn to structure apps using MVVM, MVI, MVP, or MVC architectures.",
        done: false,
        resources: [
          {
            name: "MVVM Architecture in Android",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=android+mvvm",
          },
          {
            name: "Guide to App Architecture",
            type: "Docs",
            url: "https://developer.android.com/topic/architecture",
          },
        ],
      },
      {
        id: "design-patterns",
        name: "Design Patterns",
        description:
          "Implement the Repository Pattern, Builder Pattern, Factory Pattern, and Observer Pattern.",
        done: false,
        resources: [
          {
            name: "Design Patterns in Android",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=android+design+patterns",
          },
          {
            name: "Repository Pattern Explained",
            type: "Article",
            url: "https://developer.android.com/codelabs/basic-android-kotlin-training-repository-pattern",
          },
        ],
      },
      {
        id: "dependency-injection",
        name: "Dependency Injection",
        description:
          "Manage dependencies cleanly using Dagger, Hilt, Koin, or Kodein.",
        done: false,
        resources: [
          {
            name: "Dependency Injection with Hilt",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=android+hilt",
          },
          {
            name: "Dependency Injection in Android",
            type: "Docs",
            url: "https://developer.android.com/training/dependency-injection",
          },
        ],
      },
    ],
  },
  {
    id: "storage-network-async",
    title: "6. Storage, Network & Async",
    description:
      "Handle data persistence, API calls, and background asynchronous tasks.",
    level: "Advanced",
    duration: "5 weeks",
    skills: [
      {
        id: "local-storage",
        name: "Local Storage",
        description:
          "Persist data using Room Database, DataStore, Shared Preferences, and File System.",
        done: false,
        resources: [
          {
            name: "Room Database Tutorial",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=android+room+database",
          },
          {
            name: "Save data in a local database using Room",
            type: "Docs",
            url: "https://developer.android.com/training/data-storage/room",
          },
        ],
      },
      {
        id: "networking",
        name: "Networking",
        description:
          "Make HTTP requests and handle APIs using Retrofit, OkHttp, or Apollo-Android.",
        done: false,
        resources: [
          {
            name: "Retrofit Android Tutorial",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=android+retrofit",
          },
          {
            name: "Retrofit Official Documentation",
            type: "Docs",
            url: "https://square.github.io/retrofit/",
          },
        ],
      },
      {
        id: "asynchronism",
        name: "Asynchronism",
        description:
          "Manage threading and background work using Kotlin Coroutines, RxJava/RxKotlin, or WorkManager.",
        done: false,
        resources: [
          {
            name: "Kotlin Coroutines in Android",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=android+coroutines",
          },
          {
            name: "Kotlin Coroutines Guide",
            type: "Docs",
            url: "https://kotlinlang.org/docs/coroutines-guide.html",
          },
        ],
      },
    ],
  },
  {
    id: "services-testing-dist",
    title: "7. Services, Testing & Dist.",
    description: "Integrate APIs, test thoroughly, debug, and publish apps.",
    level: "Expert",
    duration: "4 weeks",
    skills: [
      {
        id: "common-services",
        name: "Common Services (Firebase & Google)",
        description:
          "Integrate Firebase (Auth, Firestore, Messaging) and Google Services (Maps, Admob).",
        done: false,
        resources: [
          {
            name: "Firebase for Android",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=firebase+android",
          },
          {
            name: "Firebase Android Documentation",
            type: "Docs",
            url: "https://firebase.google.com/docs/android/setup",
          },
        ],
      },
      {
        id: "testing-linting",
        name: "Testing & Linting",
        description:
          "Write unit and UI tests using JUnit and Espresso. Maintain code quality with Ktlint and Detekt.",
        done: false,
        resources: [
          {
            name: "Android Testing Tutorial",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=android+testing",
          },
          {
            name: "Test apps on Android",
            type: "Docs",
            url: "https://developer.android.com/training/testing",
          },
        ],
      },
      {
        id: "debugging-distribution",
        name: "Debugging & Distribution",
        description:
          "Debug with Timber/Leak Canary, sign APKs, and distribute via Google Playstore or Firebase.",
        done: false,
        resources: [
          {
            name: "Publishing Android App to Play Store",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=publish+android+app",
          },
          {
            name: "Publish your app",
            type: "Docs",
            url: "https://developer.android.com/studio/publish",
          },
        ],
      },
    ],
  },
];
