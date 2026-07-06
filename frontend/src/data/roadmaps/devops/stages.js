export const devopsStages = [
  {
    id: "fundamentals",
    title: "1. Fundamentals",
    description: "Core concepts, operating systems, and scripting languages.",
    level: "Beginner",
    duration: "4 weeks",
    skills: [
      {
        id: "language",
        name: "Programming Language",
        description:
          "Learn a scripting language to automate tasks. Python and Go are highly recommended for DevOps.",
        done: false,
        resources: [
          {
            name: "Python for Beginners",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=python+for+beginners",
          },
          {
            name: "Go Programming Language",
            type: "Docs",
            url: "https://go.dev/doc/tutorial/getting-started",
          },
        ],
      },
      {
        id: "os",
        name: "Operating Systems (Linux)",
        description:
          "Understand Linux basics, file systems, user management, and processes (Ubuntu/Debian, RHEL).",
        done: false,
        resources: [
          {
            name: "Linux Operating System Crash Course",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=linux+crash+course",
          },
          {
            name: "Linux Journey",
            type: "Article",
            url: "https://linuxjourney.com/",
          },
        ],
      },
      {
        id: "terminal",
        name: "Terminal & Scripting",
        description:
          "Master the command line, Bash scripting, and terminal editors like Vim or Nano.",
        done: false,
        resources: [
          {
            name: "Bash Scripting Tutorial",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=bash+scripting+tutorial",
          },
          {
            name: "The Linux Command Line",
            type: "Docs",
            url: "https://linuxcommand.org/",
          },
        ],
      },
    ],
  },
  {
    id: "vcs-networking",
    title: "2. VCS & Networking Basics",
    description:
      "Version control workflows and foundational networking concepts.",
    level: "Beginner",
    duration: "3 weeks",
    skills: [
      {
        id: "vcs",
        name: "Git & Version Control",
        description:
          "Track code changes, manage branches, and collaborate using Git, GitHub, or GitLab.",
        done: false,
        resources: [
          {
            name: "Git and GitHub for Beginners",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=git+and+github+for+beginners",
          },
          {
            name: "Pro Git Book",
            type: "Docs",
            url: "https://git-scm.com/book/en/v2",
          },
        ],
      },
      {
        id: "networking",
        name: "Networking Concepts",
        description:
          "Understand the OSI Model, DNS, HTTP/HTTPS, SSL/TLS, and TCP/IP.",
        done: false,
        resources: [
          {
            name: "Networking Basics Explained",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=networking+basics",
          },
          {
            name: "MDN: How the Web works",
            type: "Docs",
            url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works",
          },
        ],
      },
      {
        id: "proxies",
        name: "Proxies & Load Balancing",
        description:
          "Learn about forward/reverse proxies, caching servers, firewalls, and load balancers.",
        done: false,
        resources: [
          {
            name: "Reverse Proxy vs Load Balancer",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=reverse+proxy+vs+load+balancer",
          },
          {
            name: "What is a Proxy Server?",
            type: "Article",
            url: "https://www.cloudflare.com/learning/cdn/glossary/reverse-proxy/",
          },
        ],
      },
    ],
  },
  {
    id: "infrastructure-foundation",
    title: "3. Servers & Containers",
    description: "Setting up web servers and containerizing applications.",
    level: "Intermediate",
    duration: "4 weeks",
    skills: [
      {
        id: "webservers",
        name: "Web Servers",
        description:
          "Configure and manage web servers like Nginx, Apache, or Caddy.",
        done: false,
        resources: [
          {
            name: "Nginx Crash Course",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=nginx+crash+course",
          },
          {
            name: "Nginx Documentation",
            type: "Docs",
            url: "https://nginx.org/en/docs/",
          },
        ],
      },
      {
        id: "containers",
        name: "Containers (Docker)",
        description:
          "Containerize applications to ensure consistency across environments using Docker.",
        done: false,
        resources: [
          {
            name: "Docker in 100 Seconds",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=docker+in+100+seconds",
          },
          {
            name: "Docker Official Docs",
            type: "Docs",
            url: "https://docs.docker.com/",
          },
        ],
      },
      {
        id: "serverless",
        name: "Serverless Concepts",
        description:
          "Understand serverless architectures, AWS Lambda, Cloudflare Workers, and Vercel.",
        done: false,
        resources: [
          {
            name: "What is Serverless?",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=what+is+serverless",
          },
          {
            name: "AWS Lambda Documentation",
            type: "Docs",
            url: "https://docs.aws.amazon.com/lambda/",
          },
        ],
      },
    ],
  },
  {
    id: "cloud-provisioning",
    title: "4. Cloud & Provisioning",
    description:
      "Managing cloud infrastructure and Infrastructure as Code (IaC).",
    level: "Intermediate",
    duration: "5 weeks",
    skills: [
      {
        id: "cloud",
        name: "Cloud Providers",
        description:
          "Master a major cloud provider: AWS, Microsoft Azure, or Google Cloud Platform (GCP).",
        done: false,
        resources: [
          {
            name: "AWS Certified Cloud Practitioner",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=aws+certified+cloud+practitioner",
          },
          {
            name: "AWS Getting Started",
            type: "Docs",
            url: "https://aws.amazon.com/getting-started/",
          },
        ],
      },
      {
        id: "iac",
        name: "Infrastructure as Code",
        description:
          "Provision infrastructure programmatically using Terraform, AWS CDK, or Pulumi.",
        done: false,
        resources: [
          {
            name: "Terraform Course for Beginners",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=terraform+course",
          },
          {
            name: "Terraform Documentation",
            type: "Docs",
            url: "https://developer.hashicorp.com/terraform/docs",
          },
        ],
      },
      {
        id: "config-mgmt",
        name: "Configuration Management",
        description:
          "Automate software configuration and deployment using Ansible, Chef, or Puppet.",
        done: false,
        resources: [
          {
            name: "Ansible for Beginners",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=ansible+for+beginners",
          },
          {
            name: "Ansible Documentation",
            type: "Docs",
            url: "https://docs.ansible.com/",
          },
        ],
      },
    ],
  },
  {
    id: "cicd",
    title: "5. CI/CD & Automation",
    description:
      "Building continuous integration and continuous deployment pipelines.",
    level: "Advanced",
    duration: "4 weeks",
    skills: [
      {
        id: "ci-concepts",
        name: "CI/CD Concepts",
        description:
          "Understand the principles of continuous integration, delivery, and deployment.",
        done: false,
        resources: [
          {
            name: "CI/CD Pipeline Explained",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=ci+cd+pipeline+explained",
          },
          {
            name: "What is CI/CD?",
            type: "Article",
            url: "https://www.redhat.com/en/topics/devops/what-is-ci-cd",
          },
        ],
      },
      {
        id: "github-actions",
        name: "GitHub Actions / GitLab CI",
        description:
          "Create automated workflows and pipelines directly within your code repository.",
        done: false,
        resources: [
          {
            name: "GitHub Actions Tutorial",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=github+actions+tutorial",
          },
          {
            name: "GitHub Actions Docs",
            type: "Docs",
            url: "https://docs.github.com/en/actions",
          },
        ],
      },
      {
        id: "jenkins",
        name: "Jenkins",
        description:
          "Set up and manage Jenkins pipelines for robust, self-hosted automation.",
        done: false,
        resources: [
          {
            name: "Jenkins Tutorial for Beginners",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=jenkins+tutorial",
          },
          {
            name: "Jenkins User Documentation",
            type: "Docs",
            url: "https://www.jenkins.io/doc/",
          },
        ],
      },
    ],
  },
  {
    id: "monitoring-observability",
    title: "6. Monitoring & Observability",
    description:
      "Tracking system health, logs, and performance metrics in production.",
    level: "Advanced",
    duration: "3 weeks",
    skills: [
      {
        id: "infra-monitoring",
        name: "Infrastructure Monitoring",
        description:
          "Collect and visualize metrics using Prometheus and Grafana.",
        done: false,
        resources: [
          {
            name: "Prometheus & Grafana Tutorial",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=prometheus+and+grafana",
          },
          {
            name: "Prometheus Docs",
            type: "Docs",
            url: "https://prometheus.io/docs/introduction/overview/",
          },
        ],
      },
      {
        id: "logs-management",
        name: "Logs Management",
        description:
          "Aggregate and analyze logs using the Elastic Stack (ELK), Splunk, or Loki.",
        done: false,
        resources: [
          {
            name: "ELK Stack Tutorial",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=elk+stack+tutorial",
          },
          {
            name: "Elasticsearch Documentation",
            type: "Docs",
            url: "https://www.elastic.co/guide/index.html",
          },
        ],
      },
      {
        id: "app-monitoring",
        name: "Application Monitoring",
        description:
          "Monitor application performance (APM) using Datadog, New Relic, or OpenTelemetry.",
        done: false,
        resources: [
          {
            name: "Datadog Crash Course",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=datadog+tutorial",
          },
          {
            name: "OpenTelemetry Docs",
            type: "Docs",
            url: "https://opentelemetry.io/docs/",
          },
        ],
      },
    ],
  },
  {
    id: "orchestration-gitops",
    title: "7. Orchestration & GitOps",
    description:
      "Scaling applications with Kubernetes and modern GitOps workflows.",
    level: "Expert",
    duration: "5 weeks",
    skills: [
      {
        id: "kubernetes",
        name: "Kubernetes (K8s)",
        description:
          "Master container orchestration, deployments, pods, and services with Kubernetes.",
        done: false,
        resources: [
          {
            name: "Kubernetes Crash Course",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=kubernetes+crash+course",
          },
          {
            name: "Kubernetes Documentation",
            type: "Docs",
            url: "https://kubernetes.io/docs/home/",
          },
        ],
      },
      {
        id: "gitops",
        name: "GitOps (ArgoCD / Flux)",
        description:
          "Implement GitOps principles to manage Kubernetes clusters using ArgoCD or FluxCD.",
        done: false,
        resources: [
          {
            name: "What is GitOps? ArgoCD Tutorial",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=argocd+gitops+tutorial",
          },
          {
            name: "ArgoCD Documentation",
            type: "Docs",
            url: "https://argo-cd.readthedocs.io/",
          },
        ],
      },
      {
        id: "secrets",
        name: "Secret Management",
        description:
          "Securely manage credentials, API keys, and certificates using HashiCorp Vault.",
        done: false,
        resources: [
          {
            name: "HashiCorp Vault Tutorial",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=hashicorp+vault+tutorial",
          },
          {
            name: "Vault Documentation",
            type: "Docs",
            url: "https://developer.hashicorp.com/vault/docs",
          },
        ],
      },
    ],
  },
];
