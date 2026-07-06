export const blockchainStages = [
  {
    id: "basic-knowledge",
    title: "1. Basic Blockchain Knowledge",
    description:
      "Understand what a blockchain is, how it works, and why decentralization matters.",
    level: "Beginner",
    duration: "2 weeks",
    skills: [
      {
        id: "fundamentals",
        name: "Blockchain Fundamentals",
        description:
          "Learn what Blockchain is, the concept of Decentralization, and why it is important.",
        done: false,
        resources: [
          {
            name: "What is Blockchain Technology?",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=what+is+blockchain",
          },
          {
            name: "IBM: What is Blockchain?",
            type: "Article",
            url: "https://www.ibm.com/topics/what-is-blockchain",
          },
        ],
      },
      {
        id: "mechanics",
        name: "Blockchain Mechanics",
        description:
          "Understand the Structure of a blockchain, Basic Operations, and real-world Applications.",
        done: false,
        resources: [
          {
            name: "How does a blockchain work",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=how+does+blockchain+work",
          },
          {
            name: "Blockchain Structure Explained",
            type: "Article",
            url: "https://www.investopedia.com/terms/b/blockchain.asp",
          },
        ],
      },
    ],
  },
  {
    id: "general-knowledge",
    title: "2. General Blockchain Knowledge",
    description:
      "Dive deeper into cryptography, consensus mechanisms, and the economics of cryptocurrencies.",
    level: "Beginner",
    duration: "3 weeks",
    skills: [
      {
        id: "crypto-consensus",
        name: "Cryptography & Consensus",
        description:
          "Study Cryptography (hashing, public-key), Consensus Protocols (PoW, PoS), and Blockchain Interoperability.",
        done: false,
        resources: [
          {
            name: "Cryptography for Blockchain",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=cryptography+blockchain",
          },
          {
            name: "Consensus Mechanisms Explained",
            type: "Docs",
            url: "https://ethereum.org/en/developers/docs/consensus-mechanisms/",
          },
        ],
      },
      {
        id: "economics",
        name: "Economics & Usage",
        description:
          "Learn about Mining/Incentive models, Forking, Cryptocurrencies, and Cryptowallets.",
        done: false,
        resources: [
          {
            name: "Blockchain Forks Explained",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=blockchain+forks+explained",
          },
          {
            name: "What is a Crypto Wallet?",
            type: "Article",
            url: "https://www.coinbase.com/learn/crypto-basics/what-is-a-crypto-wallet",
          },
        ],
      },
    ],
  },
  {
    id: "blockchains-contracts",
    title: "3. Blockchains & Contracts",
    description:
      "Write smart contracts and understand the platforms they run on.",
    level: "Intermediate",
    duration: "4 weeks",
    skills: [
      {
        id: "smart-contract-languages",
        name: "Smart Contract Languages",
        description:
          "Learn Solidity (EVM standard), Rust (Solana/Polkadot), or Vyper.",
        done: false,
        resources: [
          {
            name: "Solidity Tutorial",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=solidity+tutorial",
          },
          {
            name: "Solidity Official Documentation",
            type: "Docs",
            url: "https://docs.soliditylang.org/",
          },
        ],
      },
      {
        id: "platforms",
        name: "Blockchain Platforms",
        description:
          "Explore EVM-Based chains (Ethereum, Polygon, BNB), TVM-Based, and others like Solana.",
        done: false,
        resources: [
          {
            name: "Ethereum vs Solana",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=ethereum+vs+solana",
          },
          {
            name: "Ethereum Developer Docs",
            type: "Docs",
            url: "https://ethereum.org/en/developers/docs/",
          },
        ],
      },
      {
        id: "oracles",
        name: "Oracles",
        description:
          "Bring off-chain data on-chain using Oracle Networks like Chainlink.",
        done: false,
        resources: [
          {
            name: "What is a Blockchain Oracle?",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=blockchain+oracle+explained",
          },
          {
            name: "Chainlink Documentation",
            type: "Docs",
            url: "https://docs.chain.link/",
          },
        ],
      },
    ],
  },
  {
    id: "dev-frameworks",
    title: "4. Dev Frameworks & Tools",
    description: "Use modern development environments to build and deploy contracts.",
    level: "Intermediate",
    duration: "3 weeks",
    skills: [
      {
        id: "frameworks",
        name: "Smart Contract Frameworks",
        description:
          "Develop using Hardhat (JS/TS), Foundry (Rust/Solidity), or Truffle.",
        done: false,
        resources: [
          {
            name: "Hardhat Crash Course",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=hardhat+tutorial",
          },
          {
            name: "Hardhat Documentation",
            type: "Docs",
            url: "https://hardhat.org/getting-started/",
          },
        ],
      },
      {
        id: "repo-hosting",
        name: "Repo Hosting Services",
        description:
          "Use Git and platforms like GitHub/GitLab to manage your smart contract codebase.",
        done: false,
        resources: [
          {
            name: "Git & GitHub for Web3",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=git+github+tutorial",
          },
          {
            name: "Pro Git Book",
            type: "Docs",
            url: "https://git-scm.com/book/en/v2",
          },
        ],
      },
    ],
  },
  {
    id: "security-testing",
    title: "5. Security & Testing",
    description:
      "Ensure your smart contracts are secure against common vulnerabilities.",
    level: "Advanced",
    duration: "4 weeks",
    skills: [
      {
        id: "security-practices",
        name: "Security Practices",
        description:
          "Learn about Reentrancy, Source of Randomness Attacks, Fuzz Testing, and Audits.",
        done: false,
        resources: [
          {
            name: "Smart Contract Vulnerabilities",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=smart+contract+vulnerabilities",
          },
          {
            name: "Smart Contract Security Guide",
            type: "Docs",
            url: "https://ethereum.org/en/developers/docs/smart-contracts/security/",
          },
        ],
      },
      {
        id: "security-tools",
        name: "Security Tools",
        description:
          "Use tools like Slither, Manticore, MythX, or Echidna for static analysis and testing.",
        done: false,
        resources: [
          {
            name: "Using Slither for Smart Contracts",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=slither+smart+contract",
          },
          {
            name: "Slither GitHub Repository",
            type: "Docs",
            url: "https://github.com/crytic/slither",
          },
        ],
      },
      {
        id: "testing",
        name: "Testing",
        description:
          "Write rigorous Unit Tests, Integration Tests, and ensure high Code Coverage.",
        done: false,
        resources: [
          {
            name: "Testing Smart Contracts with Hardhat",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=hardhat+testing",
          },
          {
            name: "Testing Smart Contracts",
            type: "Docs",
            url: "https://ethereum.org/en/developers/docs/smart-contracts/testing/",
          },
        ],
      },
    ],
  },
  {
    id: "dapps",
    title: "6. dApps & Interfaces",
    description: "Build Decentralized Applications (dApps) to interact with the blockchain.",
    level: "Advanced",
    duration: "4 weeks",
    skills: [
      {
        id: "client-libraries",
        name: "Client Libraries",
        description:
          "Connect frontends to blockchains using ethers.js, web3.js, or viem.",
        done: false,
        resources: [
          {
            name: "ethers.js Tutorial",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=ethers.js+tutorial",
          },
          {
            name: "Ethers.js Documentation",
            type: "Docs",
            url: "https://docs.ethers.org/v6/",
          },
        ],
      },
      {
        id: "frontend",
        name: "Frontend Frameworks",
        description:
          "Build UIs using React, Next.js, or Vue, supported by JS/TS or Python.",
        done: false,
        resources: [
          {
            name: "React Web3 dApp Tutorial",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=react+web3+dapp",
          },
          {
            name: "Web3.js vs Ethers.js",
            type: "Article",
            url: "https://blog.logrocket.com/web3-js-vs-ethers-js/",
          },
        ],
      },
    ],
  },
  {
    id: "infrastructure",
    title: "7. Infrastructure & Scale",
    description: "Connect to the blockchain and explore Layer-2 scaling solutions.",
    level: "Expert",
    duration: "3 weeks",
    skills: [
      {
        id: "naas",
        name: "Node as a Service",
        description:
          "Connect to blockchains without running a full node using Alchemy, Infura, or Quicknode.",
        done: false,
        resources: [
          {
            name: "Alchemy Web3 Setup",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=alchemy+web3+tutorial",
          },
          {
            name: "Alchemy Documentation",
            type: "Docs",
            url: "https://docs.alchemy.com/",
          },
        ],
      },
      {
        id: "scaling",
        name: "Building for Scale",
        description:
          "Understand L2 solutions like Optimistic Rollups, ZK Rollups, Validium, and State Channels.",
        done: false,
        resources: [
          {
            name: "Layer 2 Scaling Solutions Explained",
            type: "YouTube",
            url: "https://youtube.com/results?search_query=layer+2+scaling+solutions",
          },
          {
            name: "Layer 2 Rollups",
            type: "Docs",
            url: "https://ethereum.org/en/layer-2/",
          },
        ],
      },
    ],
  },
];
