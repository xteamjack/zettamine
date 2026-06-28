// ---------------------------------------------------------------------------
// Single source of truth for ZettaMine's six solution pillars.
// Authored from n_dh_docs/zetta/website/main.md and the site-revamp plan.
// Voice: SME first, no dash punctuation in any rendered string.
// ---------------------------------------------------------------------------

export interface Topic {
  slug: string
  title: string
  pitch: string
  highlights: string[]
  icon: string
}

export interface Offering {
  name: string
  type: 'Assessment' | 'Accelerator' | 'Managed Service' | 'SaaS Product' | 'Workshop'
  summary: string
  deliverables: string[]
  idealFor: string
  timeframe?: string
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
  offerings: Offering[]
}

export const solutions: Solution[] = [
  {
    slug: 'industrial-ai',
    menuTitle: 'Industrial AI',
    heading: 'Industry 4.0 for the Mid Sized Factory: AI on the Shop Floor',
    tagline: 'Autonomous, data-driven operations',
    pitch:
      'We help smaller manufacturers turn traditional operations into data-driven ones, one practical step at a time. Using AI, IoT and spatial computing, you unlock efficiency, safety and productivity on the factory floor without a transformation programme. Start with one machine, measure the saving in money, and let it fund the next step.',
    icon: 'lucide:factory',
    gradient: ['#ffae26', '#fb3b22'],
    accent: '#f8910a',
    outcomes: [
      'Up to 40 percent less unplanned downtime through predictive maintenance',
      'Real-time visibility across your OT and IT data streams',
      'Closed-loop optimisation on the factory edge, proven on one line first',
    ],
    topics: [
      {
        slug: 'cognitive-digital-twins',
        title: 'Cognitive Digital Twins',
        icon: 'lucide:boxes',
        pitch:
          'Create virtual replicas of physical assets and processes to simulate, monitor and optimise industrial operations in real time.',
        highlights: [
          'Real-time 3D spatial modelling of physical assets',
          'AI-driven simulation for process optimisation and bottleneck prediction',
          'Seamless integration with OT and IT data streams for live monitoring',
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
    offerings: [
      {
        name: 'Predictive Maintenance Accelerator',
        type: 'Accelerator',
        summary:
          'Stand up predictive maintenance on one critical machine and turn its unplanned downtime into a number you can see.',
        deliverables: [
          'Connected data feed from the chosen asset',
          'A working predictive model and live alerts',
          'A simple dashboard and a costed business case',
        ],
        idealFor: 'A plant owner who keeps losing hours to the same failures',
        timeframe: '6 to 8 weeks',
      },
      {
        name: 'Factory Vision for Quality and Safety',
        type: 'Managed Service',
        summary:
          'Automated visual checking on one line, run for you, so you catch defects and unsafe behaviour without adding headcount.',
        deliverables: [
          'Cameras and edge inference set up on one line',
          'Defect and hazard alerts in real time',
          'A short weekly quality report',
        ],
        idealFor: 'A smaller manufacturer who cannot staff a full quality function',
      },
      {
        name: 'Cognitive Twin Pilot',
        type: 'Accelerator',
        summary:
          'A working digital model of one line or process, so you can test a change before you spend on it.',
        deliverables: [
          'A digital twin of one line or process',
          'Simulation of a planned change',
          'A bottleneck and capacity readout',
        ],
        idealFor: 'An operations head planning a capacity or layout change',
      },
      {
        name: 'Operations Readiness Check',
        type: 'Assessment',
        summary:
          'A short assessment that maps the data you already have, the gaps, and the one first use case worth doing.',
        deliverables: [
          'A map of available data sources and gaps',
          'A ranked shortlist of first use cases',
          'A clear go or no go recommendation',
        ],
        idealFor: 'An SME deciding whether the bigger steps are worth taking',
        timeframe: '2 to 3 weeks',
      },
    ],
  },
  {
    slug: 'cognitive-erp-decoupling',
    menuTitle: 'Cognitive ERP',
    heading: 'Get More From SAP: Practical AI on the Core You Already Run',
    tagline: 'Augment first, decouple only where it pays',
    pitch:
      'Your SAP investment is an asset, not a liability. Most teams are not ready to rip out the core, and they should not have to. We help you get more from SAP by layering modern, AI assisted experiences on top of it, offloading the workflows that are expensive or slow inside the core, and decoupling a capability only where the numbers clearly justify it. Every step is practical, reversible, and proven with a working model before you commit. You gain agility and a lower cost of ownership while your system of record stays exactly where it is.',
    icon: 'lucide:layers-3',
    gradient: ['#ff6552', '#9e150e'],
    accent: '#e81e0b',
    outcomes: [
      'More value from the SAP you already run, with no forced migration',
      'Lower total cost of ownership as casual users move to lighter experiences',
      'Modern, AI assisted experiences on a system of record that stays in place',
    ],
    topics: [
      {
        slug: 'cognitive-ux-intelligent-ai-wrappers',
        title: 'Cognitive UX & Intelligent AI Assistants',
        icon: 'lucide:message-square-text',
        pitch:
          'Give every SAP user a modern, conversational experience. We build AI assistants and role-based mobile and web apps that sit on top of SAP and talk to it in the background, so people get their work done faster while the core stays untouched. This also lets casual users move to lighter, lower cost interfaces.',
        highlights: [
          'Voice and chat-driven natural language interfaces for complex SAP transactions',
          'Role-specific mobile and web apps that keep teams clear of legacy complexity',
          'Lighter external portals for casual users to optimise SAP licensing cost',
        ],
      },
      {
        slug: 'data-liberation-real-time-predictive-analytics',
        title: 'Real-Time Analytics Alongside SAP',
        icon: 'lucide:database',
        pitch:
          'Add modern analytics next to SAP without disturbing it. We securely stream a copy of the data you need into a scalable analytics layer, so leaders get real-time KPIs and predictive insight while SAP remains the system of record.',
        highlights: [
          'A streamed copy of core data in a cost-effective analytics layer',
          'Real-time predictive analytics and executive KPI dashboards',
          'Cross-platform data fusion with external IoT and market feeds',
        ],
      },
      {
        slug: 'autonomous-process-offloading-finance-supply-chain',
        title: 'Autonomous Process Offloading',
        icon: 'lucide:split',
        pitch:
          'For the workflows that are expensive or slow inside the core, we run them in an intelligent, standalone service that syncs seamlessly back to SAP. You stop paying premium core overhead for routine, high-volume work.',
        highlights: [
          'High-volume, AI-assisted invoice reconciliation that syncs back to SAP',
          'Intelligent supply-chain forecasting and inventory optimisation',
          'Automated master-data cleansing and governance acting as a secure firewall',
        ],
      },
      {
        slug: 'the-strangler-fig-erp-modernization-strategy',
        title: 'Optional Decoupling, Where It Pays',
        icon: 'lucide:sprout',
        pitch:
          'When a specific capability has a clear business case, we lift it out of the core and run it as an agile service behind an API, gradually and reversibly. This is a choice you make capability by capability, only when the value is proven, never a forced big bang.',
        highlights: [
          'Microservices-based extraction of high-value, bottlenecked processes',
          'Secure API gateways that isolate and protect the legacy ERP core',
          'Gradual, self-funding modernisation with no forced deadline',
        ],
      },
    ],
    offerings: [
      {
        name: 'SAP Value Check',
        type: 'Assessment',
        summary:
          'A short, honest look at where you can get more from the SAP you already run, without a migration.',
        deliverables: [
          'A ranked list of augmentation and offloading opportunities',
          'A rough cost of coexistence model',
          'A recommended first move',
        ],
        idealFor: 'An SME that feels SAP is expensive but does not want to replace it',
        timeframe: '3 to 4 weeks',
      },
      {
        name: 'SAP Assistant Accelerator',
        type: 'Accelerator',
        summary:
          'A modern, conversational experience on top of SAP for one high friction process, so your lean team spends less time fighting the screen.',
        deliverables: [
          'A conversational or guided assistant for one process',
          'Live connection to SAP in the background',
          'A measured cut in training time',
        ],
        idealFor: 'An IT head cutting training time and licence load',
        timeframe: '5 to 7 weeks',
      },
      {
        name: 'SAP Mobile Workforce Accelerator',
        type: 'Accelerator',
        summary:
          'Role-based mobile apps for the people who should not need a full SAP seat, so frontline and casual users do their bit from a phone while the core stays untouched.',
        deliverables: [
          'One or two mobile journeys live, connected to SAP',
          'Coverage for shop floor, warehouse, field or approvals',
          'A clear cut in seat and training cost',
        ],
        idealFor: 'An SME with many occasional users paying for heavy licences',
        timeframe: '5 to 7 weeks',
      },
      {
        name: 'Master Data Health Accelerator',
        type: 'Accelerator',
        summary:
          'Clean up and then keep clean the customer, vendor and material data that quietly breaks your reports and slows your processes.',
        deliverables: [
          'A one-off cleanse of one critical data domain',
          'A simple set of validation rules',
          'A lightweight governance pipeline that catches bad records before SAP',
        ],
        idealFor: 'A smaller firm whose reporting nobody quite trusts',
        timeframe: '4 to 6 weeks',
      },
      {
        name: 'Process Offloading Service',
        type: 'Managed Service',
        summary:
          'Take one expensive, high-volume workflow, such as invoice matching, and run it in a service that syncs back to SAP.',
        deliverables: [
          'One high-volume workflow run outside the core',
          'Two-way sync with SAP',
          'Lower core overhead for routine work',
        ],
        idealFor: 'Finance and supply chain teams in a smaller firm',
      },
      {
        name: 'Ninety Day Working Model',
        type: 'Accelerator',
        summary:
          'Prove a single, bounded ERP improvement in production shape in one quarter, before you commit real budget.',
        deliverables: [
          'A scoped, production-shaped working model',
          'Measured results against a clear goal',
          'A go or no go decision with the numbers behind it',
        ],
        idealFor: 'An SME that wants proof before commitment',
        timeframe: '90 days',
      },
    ],
  },
  {
    slug: 'frontier-tech-labs',
    menuTitle: 'Frontier Tech Labs',
    heading: 'The Future, Today: Frontier Technologies R&D',
    tagline: 'Our innovation incubator',
    pitch:
      "Pushing the boundaries of what's possible. Our Next Gen Labs act as an innovation incubator, experimenting with frontier technologies to build the foundational solutions of tomorrow and turning science fiction into tangible business value. Smaller firms cannot fund a research lab, but they can borrow one.",
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
          'Explore the next frontier of human and computer interaction through spatial interfaces and neurotech.',
        highlights: [
          'Enterprise AR and VR training and remote assistance environments',
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
    offerings: [
      {
        name: 'Agent Proof of Concept Sprint',
        type: 'Accelerator',
        summary:
          'A production-shaped prototype of an AI agent for one real problem in your business, so you find out if it is worth more before you spend more.',
        deliverables: [
          'A working agent prototype for one use case',
          'Guardrails suited to a lean team',
          'A clear read on whether to go further',
        ],
        idealFor: 'A founder curious about agents but wary of the hype',
        timeframe: '4 to 6 weeks',
      },
      {
        name: 'Frontier Discovery Workshop',
        type: 'Workshop',
        summary:
          'A focused session that sorts which emerging technologies are real for your business from which are noise.',
        deliverables: [
          'A shortlist of frontier bets worth funding',
          'A low-risk first step for each',
          'A simple prioritisation',
        ],
        idealFor: 'An SME leadership team that wants a clear, short list',
        timeframe: '1 to 2 days',
      },
      {
        name: 'Optimisation Pilot',
        type: 'Accelerator',
        summary:
          'Quantum-inspired optimisation applied to a real routing, scheduling or inventory problem you have today, using the data you already hold.',
        deliverables: [
          'An optimisation model on a real problem',
          'A quantified saving',
          'A path to put it into production',
        ],
        idealFor: 'A smaller operation feeling supply chain cost pressure',
      },
    ],
  },
  {
    slug: 'data-services',
    menuTitle: 'Data Services',
    heading: 'Precision Ground Truth: High-Fidelity AI Data Services',
    tagline: 'Pixel-perfect training data',
    pitch:
      'The foundation of every powerful AI model is high-quality data. We provide specialised, high-precision data annotation tailored for complex, niche use cases, so your machine learning models are trained on pixel-perfect ground truth. An SME cannot outspend a giant on compute, but it can win on data quality.',
    icon: 'lucide:scan-eye',
    gradient: ['#f8910a', '#c0140a'],
    accent: '#f8910a',
    outcomes: [
      'Pixel-perfect ground truth for safety-critical models',
      'Domain-verified labelling for medical, autonomy and industrial work',
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
          'Sensor-fusion annotation across Camera, LiDAR and Radar',
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
          'Radiology and pathology image labelling for X-Ray, MRI and CT',
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
          'Sentiment analysis and Named Entity Recognition for specialised domains',
        ],
      },
    ],
    offerings: [
      {
        name: 'Annotation Managed Service',
        type: 'Managed Service',
        summary:
          'Reliable, audited, domain-checked labelling run for you, so a small AI team gets dependable ground truth without building a labelling function.',
        deliverables: [
          'Audited annotation pipelines with QA built in',
          'Domain-verified labelling at agreed quality',
          'Throughput that scales with your need',
        ],
        idealFor: 'An SME product team that needs quality data at a sensible cost',
      },
      {
        name: 'Data Quality Audit',
        type: 'Assessment',
        summary:
          'A check on an existing training set that scores its quality and puts a number on what its errors are costing you.',
        deliverables: [
          'A quality score for the dataset',
          'The rework and risk cost of its errors',
          'A practical plan to fix the worst gaps',
        ],
        idealFor: 'A team about to spend more on models',
        timeframe: '2 weeks',
      },
      {
        name: 'Sensor Fusion Labelling Pack',
        type: 'Accelerator',
        summary:
          'Camera, LiDAR and radar labelling for an autonomy or robotics milestone, to a safety-grade standard.',
        deliverables: [
          'Sensor-fusion labelled data for one milestone',
          'Safety-grade QA and review',
          'A repeatable labelling spec',
        ],
        idealFor: 'A smaller team shipping a perception feature',
      },
    ],
  },
  {
    slug: 'enterprise-upskilling',
    menuTitle: 'Enterprise Upskilling',
    heading: 'Empowering the Innovators: Next-Gen Skill Development',
    tagline: 'Turn teams into AI-native innovators',
    pitch:
      'Technology is only as powerful as the people wielding it. We upskill and reskill enterprise teams, turning traditional workforces into AI-native innovators ready for the digital frontier. Smaller firms cannot outbid big tech for talent, so they grow and borrow it instead. Explore the full programme in our Academy.',
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
    offerings: [
      {
        name: 'AI Native Bootcamp',
        type: 'Accelerator',
        summary:
          'Hands-on training for a cohort of your people in GenAI, IoT and modern delivery, built around your own real projects so the learning sticks.',
        deliverables: [
          'A cohort trained on real internal projects',
          'Role-based tracks and mentorship',
          'Portfolio work the team keeps',
        ],
        idealFor: 'An SME growing its own talent rather than outbidding big tech',
      },
      {
        name: 'CXO Tech Briefing',
        type: 'Workshop',
        summary:
          'A focused executive session that connects the technologies of the future to your own strategy, so a busy SME leader stays relevant without a long course.',
        deliverables: [
          'A briefing aligned to your strategy',
          'A short list of what to act on this year',
          'Follow-up notes that turn into decisions',
        ],
        idealFor: 'CxOs and senior managers with little time to spare',
        timeframe: '1 day',
      },
      {
        name: 'Continuous Upskilling Subscription',
        type: 'Managed Service',
        summary:
          'Role-based learning and mentorship run on an ongoing basis through GuildTrek, so a lean team keeps its skills current as the field moves.',
        deliverables: [
          'Ongoing role-based tracks',
          'Mentorship and pair-programming',
          'Recognised certifications',
        ],
        idealFor: 'Working professionals and the lean teams they belong to',
      },
    ],
  },
  {
    slug: 'strategic-advisory',
    menuTitle: 'Strategic Advisory',
    heading: 'Navigating Complexity: Strategic Digital Advisory',
    tagline: 'From objectives to roadmaps',
    pitch:
      "We don't just build technology, we help you chart the course. Our strategic consulting aligns your high-level business objectives with actionable, innovative technology roadmaps, so every investment delivers maximum impact. For an SME, that means a costed, sequenced plan you can actually afford to follow.",
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
        title: 'Digital Transformation & Modernisation Strategy',
        icon: 'lucide:workflow',
        pitch:
          'Craft precise roadmaps to modernise legacy systems and identify the best automation opportunities.',
        highlights: [
          'Legacy modernisation roadmaps using the augment first ladder',
          'High-value process identification for AI automation',
          'Cloud-native versus Edge and on-premise cost-benefit analysis',
        ],
      },
      {
        slug: 'enterprise-architecture-innovation-workshops',
        title: 'Enterprise Architecture & Innovation Workshops',
        icon: 'lucide:layout-grid',
        pitch:
          'Align business goals with rapid prototyping and scalable, future-proof IT blueprints.',
        highlights: [
          'Rapid Proof of Concept ideation and prototyping',
          'Blueprinting scalable, future-proof IT landscapes',
          'Cross-functional alignment workshops for technology adoption',
        ],
      },
    ],
    offerings: [
      {
        name: 'AI Readiness Assessment',
        type: 'Assessment',
        summary:
          'A short diagnostic of your data, infrastructure, skills and risk, ending in a costed, sequenced roadmap an SME can actually afford to follow.',
        deliverables: [
          'A readiness score across data, skills, infrastructure and risk',
          'A costed, sequenced roadmap',
          'The cheap gaps to close first',
        ],
        idealFor: 'SME leadership weighing an AI investment',
        timeframe: '3 to 4 weeks',
      },
      {
        name: 'Modernisation Roadmap',
        type: 'Workshop',
        summary:
          'A phased, self-funding plan for legacy and ERP modernisation using the augment first ladder, so nothing is a big bang.',
        deliverables: [
          'A phased modernisation plan',
          'A self-funding sequence',
          'A risk view for each step',
        ],
        idealFor: 'An SME modernising at its own pace',
      },
      {
        name: 'Innovation Workshop',
        type: 'Workshop',
        summary:
          'A working session that turns a vague ambition into a prioritised, costed shortlist of things to try first.',
        deliverables: [
          'A prioritised opportunity backlog',
          'A costed shortlist of first moves',
          'A clear owner and next step for each',
        ],
        idealFor: 'An SME that knows it should do something but not what first',
        timeframe: '1 to 2 days',
      },
    ],
  },
]

export const solutionBySlug = (slug: string): Solution | undefined =>
  solutions.find((s) => s.slug === slug)

export const allTopicCount = solutions.reduce((n, s) => n + s.topics.length, 0)
