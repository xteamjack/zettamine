// ---------------------------------------------------------------------------
// Single source of truth for ZettaMine's six solution pillars.
// Authored from n_dh_docs/zetta/website/main.md and expanded for the site.
// ---------------------------------------------------------------------------

export interface Topic {
  slug: string
  title: string
  pitch: string
  highlights: string[]
  icon: string
}

export interface Solution {
  slug: string
  menuTitle: string
  heading: string
  tagline: string
  pitch: string
  icon: string
  /** CSS gradient stops [from, to] for cards & hero accents */
  gradient: [string, string]
  /** single accent used for glows / icon tint */
  accent: string
  outcomes: string[]
  topics: Topic[]
}

export const solutions: Solution[] = [
  {
    slug: 'industrial-ai',
    menuTitle: 'Industrial AI',
    heading: 'Industry 4.0 & Beyond: AI-Powered Industrial Intelligence',
    tagline: 'Autonomous, data-driven operations',
    pitch:
      'Transforming traditional manufacturing and industrial operations into highly autonomous, data-driven ecosystems. We leverage cutting-edge AI, IoT and spatial computing to unlock unprecedented efficiency, safety and productivity on the factory floor and beyond.',
    icon: 'lucide:factory',
    gradient: ['#ffae26', '#fb3b22'],
    accent: '#f8910a',
    outcomes: [
      'Up to 40% less unplanned downtime via predictive maintenance',
      'Real-time visibility across OT/IT data streams',
      'Closed-loop optimisation on the factory edge',
    ],
    topics: [
      {
        slug: 'cognitive-digital-twins',
        title: 'Cognitive Digital Twins',
        icon: 'lucide:boxes',
        pitch:
          'Create virtual replicas of physical assets and processes to simulate, monitor and optimise industrial operations in real-time.',
        highlights: [
          'Real-time 3D spatial modelling of physical assets',
          'AI-driven simulation for process optimisation and bottleneck prediction',
          'Seamless integration with OT/IT data streams for live monitoring',
        ],
      },
      {
        slug: 'advanced-computer-vision-process-intelligence',
        title: 'Advanced Computer Vision & Process Intelligence',
        icon: 'lucide:eye',
        pitch:
          'Automate quality control, safety monitoring and operational tracking using cutting-edge computer vision capabilities.',
        highlights: [
          'Automated defect detection and quality assurance',
          'Worker safety compliance and hazard identification',
          'Video analytics for continuous workflow optimisation',
        ],
      },
      {
        slug: 'next-gen-industrial-iot-edge-computing',
        title: 'Next-Gen Industrial IoT & Edge Computing',
        icon: 'lucide:cpu',
        pitch:
          'Deploy ultra-low latency intelligence directly to your industrial edge to process high-frequency sensor data securely.',
        highlights: [
          'High-frequency sensor data ingestion at the edge',
          'Ultra-low latency predictive maintenance algorithms',
          'Secure, decentralised data processing for remote industrial sites',
        ],
      },
      {
        slug: 'autonomous-systems-smart-robotics',
        title: 'Autonomous Systems & Smart Robotics',
        icon: 'lucide:bot',
        pitch:
          'Orchestrate intelligent robotic fleets to streamline intralogistics and automate complex assembly tasks effortlessly.',
        highlights: [
          'Autonomous Mobile Robots (AMRs) fleet orchestration',
          'AI-assisted collaborative robotics (Cobots) for assembly',
          'Automated intralogistics and supply chain traceability',
        ],
      },
    ],
  },
  {
    slug: 'cognitive-erp-decoupling',
    menuTitle: 'Cognitive ERP Decoupling',
    heading: 'Smart Decoupling: Minimising SAP Footprint, Defying Cloud Migration Costs',
    tagline: 'Escape the 2028 deadline — on your terms',
    pitch:
      "Forced cloud migrations (like S/4HANA) and escalating licensing costs shouldn't dictate your IT roadmap. We offer a radical, cost-effective alternative for SMEs: Cognitive Decoupling. By deploying next-gen AI wrappers, edge microservices and standalone automation, we systematically extract high-value workflows out of your legacy SAP core — shrinking your footprint, mitigating end-of-life risk and delivering agility without a full overhaul.",
    icon: 'lucide:unplug',
    gradient: ['#ff6552', '#9e150e'],
    accent: '#e81e0b',
    outcomes: [
      'Dramatically lower SAP licensing & maintenance spend',
      'Mitigated 2028 end-of-life risk without a forced migration',
      'Modern UX layered over a protected legacy core',
    ],
    topics: [
      {
        slug: 'cognitive-ux-intelligent-ai-wrappers',
        title: 'Cognitive UX & Intelligent AI Wrappers',
        icon: 'lucide:message-square-text',
        pitch:
          'Bypass the clunky legacy SAP GUI. We build modern, conversational AI interfaces and role-based mobile apps that interact with SAP in the background — slashing training time and user license requirements.',
        highlights: [
          'Voice and chat-driven natural language interfaces for complex SAP transactions',
          'Role-specific mobile and web applications that shield users from legacy complexity',
          'Shift casual users to lightweight external portals to optimise SAP licensing costs',
        ],
      },
      {
        slug: 'autonomous-process-offloading-finance-supply-chain',
        title: 'Autonomous Process Offloading',
        icon: 'lucide:split',
        pitch:
          'Stop paying premium ERP overhead for standard operational tasks. We offload high-volume finance and supply-chain workflows into intelligent, standalone systems that sync seamlessly with your core.',
        highlights: [
          'High-volume, AI-assisted invoice reconciliation built outside the SAP core',
          'Intelligent supply-chain forecasting and inventory optimisation using external AI models',
          'Automated master-data cleansing and governance pipelines acting as a secure firewall',
        ],
      },
      {
        slug: 'data-liberation-real-time-predictive-analytics',
        title: 'Data Liberation & Real-Time Predictive Analytics',
        icon: 'lucide:database',
        pitch:
          'Break free from expensive, proprietary SAP BI/BW modules. We securely extract and stream your core data into modern, scalable cloud data lakes for advanced AI modelling.',
        highlights: [
          'Decoupling transactional data from legacy SAP into cost-effective data lakes',
          'Real-time predictive analytics and executive KPI dashboards independent of SAP',
          'Cross-platform data fusion integrating SAP with external IoT and market feeds',
        ],
      },
      {
        slug: 'the-strangler-fig-erp-modernization-strategy',
        title: 'The "Strangler Fig" ERP Modernization',
        icon: 'lucide:sprout',
        pitch:
          'A risk-free, phased approach to ERP optimisation. We incrementally replace heavy SAP custom code (ABAP) and legacy modules with agile, external microservices.',
        highlights: [
          'Microservices-based extraction of high-value, bottlenecked business processes',
          'Seamless API gateways that isolate and protect the legacy ERP core',
          'Gradual, self-funding modernisation that eliminates the pressure of 2028 deadlines',
        ],
      },
    ],
  },
  {
    slug: 'frontier-tech-labs',
    menuTitle: 'Frontier Tech Labs',
    heading: 'The Future, Today: Frontier Technologies R&D',
    tagline: 'Our innovation incubator',
    pitch:
      "Pushing the boundaries of what's possible. Our Next Gen Labs act as an innovation incubator, experimenting with frontier technologies to build the foundational solutions of tomorrow — turning science fiction into tangible business value.",
    icon: 'lucide:flask-conical',
    gradient: ['#ffc555', '#e81e0b'],
    accent: '#dc6e03',
    outcomes: [
      'De-risked exploration of emerging technology bets',
      'Production-grade prototypes, not just slideware',
      'A pipeline from research to deployed capability',
    ],
    topics: [
      {
        slug: 'autonomous-ai-agents-generative-ai',
        title: 'Autonomous AI Agents & Generative AI',
        icon: 'lucide:sparkles',
        pitch:
          'Deploy customised generative AI models and multi-agent orchestrations for advanced enterprise problem solving.',
        highlights: [
          'Multi-agent orchestration for complex problem solving',
          'Custom Large Language Models (LLMs) fine-tuned on enterprise data',
          'Retrieval-Augmented Generation (RAG) for intelligent knowledge bases',
        ],
      },
      {
        slug: 'immersive-realities-brain-computer-interfaces-bci',
        title: 'Immersive Realities & BCI',
        icon: 'lucide:brain',
        pitch:
          'Explore the next frontier of human–computer interaction through spatial interfaces and neurotech.',
        highlights: [
          'Enterprise AR/VR training and remote assistance environments',
          'Neurotech research for cognitive load monitoring and hands-free control',
          'Spatial computing interfaces for complex data visualisation',
        ],
      },
      {
        slug: 'quantum-computing-advanced-algorithms',
        title: 'Quantum Computing & Advanced Algorithms',
        icon: 'lucide:atom',
        pitch:
          'Leverage quantum-inspired algorithms to solve complex optimisation and simulation challenges at scale.',
        highlights: [
          'Quantum-inspired optimisation for logistics and supply chain',
          'Research into quantum cryptography and secure communications',
          'Complex material science and chemical simulation modelling',
        ],
      },
      {
        slug: 'industrial-drone-autonomous-uav-applications',
        title: 'Industrial Drone & Autonomous UAV',
        icon: 'lucide:radar',
        pitch:
          'Enhance inspections and inventory management with AI-powered, autonomous aerial operations.',
        highlights: [
          'AI-powered aerial surveying and infrastructure inspection',
          'Autonomous warehouse inventory scanning via drones',
          'Beyond Visual Line of Sight (BVLOS) operations and fleet management',
        ],
      },
    ],
  },
  {
    slug: 'data-services',
    menuTitle: 'Data Services',
    heading: 'Precision Ground Truth: High-Fidelity AI Data Services',
    tagline: 'Pixel-perfect training data',
    pitch:
      'The foundation of every powerful AI model is high-quality data. We provide specialised, high-precision data annotation services tailored for complex, niche use cases — ensuring your machine learning models are trained on pixel-perfect ground truth.',
    icon: 'lucide:scan-eye',
    gradient: ['#f8910a', '#c0140a'],
    accent: '#f8910a',
    outcomes: [
      'Pixel-perfect ground truth for safety-critical models',
      'Domain-verified labelling (medical, autonomy, industrial)',
      'Scalable, audited annotation pipelines with QA baked in',
    ],
    topics: [
      {
        slug: '3d-spatial-lidar-annotation',
        title: '3D Spatial & LiDAR Annotation',
        icon: 'lucide:scan-line',
        pitch:
          'Deliver pixel-perfect spatial annotations and sensor-fusion labelling for autonomous navigation and robotics.',
        highlights: [
          '3D bounding boxes and point-cloud segmentation for autonomous vehicles',
          'Sensor-fusion annotation (Camera + LiDAR + Radar)',
          'Semantic segmentation for robotics navigation',
        ],
      },
      {
        slug: 'precision-medical-image-annotation',
        title: 'Precision Medical Image Annotation',
        icon: 'lucide:stethoscope',
        pitch:
          'Provide verified, medically compliant data labelling for radiology, pathology and advanced healthcare AI.',
        highlights: [
          'Radiology and pathology image labelling (X-Ray, MRI, CT)',
          'Cell counting and microscopic image segmentation',
          'HIPAA-compliant, medically verified annotation workflows',
        ],
      },
      {
        slug: 'advanced-computer-vision-labeling',
        title: 'Advanced Computer Vision Labeling',
        icon: 'lucide:frame',
        pitch:
          'Annotate complex industrial imagery with high-fidelity instance segmentation and object tracking.',
        highlights: [
          'Video object tracking and action recognition',
          'Pixel-perfect polygon masking for defect detection',
          'Multi-class instance segmentation for complex industrial scenes',
        ],
      },
      {
        slug: 'custom-llm-nlp-data-pipelines',
        title: 'Custom LLM & NLP Data Pipelines',
        icon: 'lucide:languages',
        pitch:
          'Curate high-quality instruction datasets to refine domain-specific language models and audio processing.',
        highlights: [
          'High-quality instruction-tuning datasets for Generative AI',
          'Audio transcription and speaker diarisation',
          'Sentiment analysis and Named Entity Recognition (NER) for specialised domains',
        ],
      },
    ],
  },
  {
    slug: 'enterprise-upskilling',
    menuTitle: 'Enterprise Upskilling',
    heading: 'Empowering the Innovators: Next-Gen Skill Development',
    tagline: 'Turn teams into AI-native innovators',
    pitch:
      'Technology is only as powerful as the people wielding it. We upskill and reskill enterprise teams, transforming traditional workforces into AI-native innovators ready to tackle the challenges of the digital frontier.',
    icon: 'lucide:graduation-cap',
    gradient: ['#ffae26', '#e81e0b'],
    accent: '#dc6e03',
    outcomes: [
      'Teams fluent in GenAI, IoT and modern delivery',
      'Role-based learning tracks tied to real outcomes',
      'A self-sustaining internal innovation culture',
    ],
    topics: [
      {
        slug: 'emerging-tech-immersive-bootcamps',
        title: 'Emerging Tech Immersive Bootcamps',
        icon: 'lucide:code',
        pitch:
          'Equip developers and tech teams with hands-on expertise in generative AI, IoT and decentralised systems.',
        highlights: [
          'Hands-on training in Generative AI and prompt engineering',
          'Practical courses in IoT, Edge Computing and Digital Twins',
          'Developer-focused Web3 and decentralised systems architecture',
        ],
      },
      {
        slug: 'leadership-in-tech-innovation',
        title: 'Leadership in Tech Innovation',
        icon: 'lucide:trending-up',
        pitch:
          'Guide enterprise leaders in identifying high-ROI use cases and managing AI-driven organisational transformation.',
        highlights: [
          'Executive workshops on AI strategy and risk management',
          'Identifying high-ROI use cases for frontier technologies',
          'Change management for AI-driven enterprise transformation',
        ],
      },
      {
        slug: 'continuous-upskilling-pathways',
        title: 'Continuous Upskilling Pathways',
        icon: 'lucide:route',
        pitch:
          'Provide structured mentorship, role-based learning tracks and certifications for specialised domains.',
        highlights: [
          'Customised, role-based learning tracks for enterprise IT teams',
          'Mentorship and pair-programming with Next Gen Labs experts',
          'Certification programs for niche, high-value technical domains',
        ],
      },
    ],
  },
  {
    slug: 'strategic-advisory',
    menuTitle: 'Strategic Advisory',
    heading: 'Navigating Complexity: Strategic Digital Advisory',
    tagline: 'From objectives to roadmaps',
    pitch:
      "We don't just build technology; we help you chart the course. Our strategic consulting aligns your high-level business objectives with actionable, innovative technology roadmaps — ensuring every investment delivers maximum impact.",
    icon: 'lucide:compass',
    gradient: ['#fb3b22', '#f8910a'],
    accent: '#fb3b22',
    outcomes: [
      'Clear, costed roadmaps tied to business value',
      'Risk and compliance assessed before you build',
      'Cross-functional alignment on what to do next',
    ],
    topics: [
      {
        slug: 'ai-machine-learning-readiness-assessment',
        title: 'AI & ML Readiness Assessment',
        icon: 'lucide:gauge',
        pitch:
          'Evaluate data maturity, infrastructure and compliance to ensure successful, risk-free AI deployments.',
        highlights: [
          'Data maturity evaluation and gap analysis',
          'Infrastructure and architectural readiness for AI deployments',
          'Ethical AI and compliance risk assessments',
        ],
      },
      {
        slug: 'digital-transformation-decoupling-strategy',
        title: 'Digital Transformation & Decoupling Strategy',
        icon: 'lucide:workflow',
        pitch:
          'Craft precise roadmaps to modernise legacy systems and identify optimal automation opportunities.',
        highlights: [
          'Legacy system modernisation and Strangler Fig architecture roadmaps',
          'High-value process identification for AI automation',
          'Cloud-native vs. Edge/On-Premise cost-benefit analysis',
        ],
      },
      {
        slug: 'enterprise-architecture-innovation-workshops',
        title: 'Enterprise Architecture & Innovation Workshops',
        icon: 'lucide:layout-grid',
        pitch:
          'Align business goals with rapid prototyping and scalable, future-proof IT blueprints.',
        highlights: [
          'Rapid Proof of Concept (PoC) ideation and prototyping',
          'Blueprinting scalable, future-proof IT landscapes',
          'Cross-functional alignment workshops for technology adoption',
        ],
      },
    ],
  },
]

export const solutionBySlug = (slug: string): Solution | undefined =>
  solutions.find((s) => s.slug === slug)

export const allTopicCount = solutions.reduce((n, s) => n + s.topics.length, 0)
