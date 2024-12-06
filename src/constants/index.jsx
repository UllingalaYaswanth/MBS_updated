import { Signal, Heart, BarChart, FileText, Briefcase,Truck } from "lucide-react";
import { Building, Wrench, Smartphone, CheckCircle, MessageCircle, Eye } from "lucide-react"; // Updated Comments to MessageCircle



export const navItems = [
  { label: "HOME", href: "#home", dropdownItems: [] },
  { label: "ABOUT US", href: "/about", dropdownItems: [] },
  // { label: "SECTORS", href: "#features", dropdownItems: [] },
  { label: "SOLUTIONS", href: "#solutions",dropdownItems: [
    { label: 'Smart City Planing', href: '/Product1' },
    { label: 'Telecom Tower Reconstruction', href: '/Product2' },
    { label: 'Neural Farms', href: '/Product3' },
    { label: 'Intelligence Fod Tracker', href: '/Product4' },
    { label: 'AADHYA', href: '/Product5' },
  ] },
  { label: "TECHNOLOGIES", href: "#technologies",dropdownItems: [
    { label: 'Digital Twin', href: '/towers_page' },
    { label: 'Computer Vision', href: '/cv_page' },
    { label: 'Document Intelligence', href: '/aadhya_page' },
  ] },
  { label: "CONTACT US", href: "#footer", dropdownItems: [] },
];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "3D Visualization",
      
    ],
    video: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/videos/DT_3D_Visualization.mp4",
    videoDuration: 3,
  },
  {
    id: 2,
    textLists: ["Digital Dimensional Analysis", "and  maintenance"],
    video: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/videos/DT_TowerMeasurement.mp4",
    videoDuration: 3.5,
  },
  {
    id: 3,
    textLists: [
      "Annotations for telecom towers.",
    ],
    video: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/videos/CV_Annotations.mp4",
    videoDuration: 4,
  },
];



export const features = [
  {
    icon: <Signal />,
    text: "Telecommunications",
    description: [
      "Create virtual replicas of physical towers.",
      "Real-time monitoring and management.",
      "Enhancing operational efficiency."
    ],
  },
  {
    icon: <Heart />,
    text: "Healthcare",
    description: [
      "Enhanced Patient Care.",
      "Predictive Analytics.",
      "Telemedicine Solutions."
    ],
  },
  {
    icon: <Truck />,
    text: "Logistics",
    description: [
      "Enhance supply chain efficiency.",
      "Real-time tracking.",
      "Predictive analytics for better decision-making."
    ],
  },
  {
    icon: <FileText />,
    text: "Retail and E-Commerce",
    description: [
      "Utilize AI to extract and analyze data.",
      "Streamline workflows.",
      "Improve accuracy."
    ],
  },
  {
    icon: <BarChart />, 
    text: "Real Estate and Construction",
    description: [
      "SmartBuilding Solutions.",
      "MarketAnalysis Tools.",
      "EnhancedVisualization for Clients."
    ],
  },
  {
    icon: <Briefcase />, 
    text: " Manufacturing",
    description: [
      "Operational Efficiency.",
      "Predictive Maintenance.",
      "SupplyChain Optimization."
    ],
  },
];

export const solution = [
  {
    icon: <Smartphone />,
    text: "Digital Twins",
    description: [
      "Real-time data integration for monitoring.",
      "Supports proactive maintenance strategies.",
      "Optimizes resource management and decision-making.",
    ],
  },
  {
    icon: <Building />, // Using an icon for 3D Reconstruction
    text: "3D Reconstruction",
    description: [
      "Accurate models of structures created.",
      "Enhances architectural and urban planning.",
      "Improves stakeholder engagement through visualization.",
    ],
  },
  {
    icon: <Wrench />, // Using an icon for Predictive Maintenance
    text: "Predictive Maintenance",
    description: [
      "Forecasts maintenance needs effectively.",
      "Reduces unexpected asset breakdowns.",
      "Lowers overall maintenance costs significantly.",
    ],
  },
  {
    icon: <CheckCircle />,
    text: "Quality Control",
    description: [
      "Thorough inspections using digital models.",
      "Ensures adherence to quality standards.",
      "Identifies hazards to enhance safety.",
    ],
  },
  {
    icon: <MessageCircle />, // Updated icon for NLP
    text: "Natural Language Processing (NLP)",
    description: [
      "Simplifies data interaction with language.",
      "Promotes wider technology adoption.",
      "Enhances team collaboration and communication.",
    ],
  },
  {
    icon: <Eye />,
    text: "Computer Vision",
    description: [
      "Automates inspections for structural anomalies.",
      "Streamlines processes, reducing manual effort.",
      "Ensures compliance with safety regulations.",
    ],
  },
];

export const solution1 = [
  {
    icon: <Smartphone />,
    text: "Digital Twins",
    description: (
      <p>
        Real-time data integration enables effective monitoring of assets. This technology supports proactive maintenance strategies, ensuring optimal performance. It ultimately optimizes resource management and enhances decision-making processes.
      </p>
    ),
    headingWords: "Real-time Monitoring Strategy",
  },
  {
    icon: <Building />,
    text: "3D Reconstruction",
    description: (
      <p>
        Accurate models of structures are created through advanced techniques. This enhances architectural and urban planning by providing precise visualizations. Improved stakeholder engagement is achieved through effective visualization methods.
      </p>
    ),
    headingWords: "Precise Visual Planning",
  },
  {
    icon: <Wrench />,
    text: "Predictive Maintenance",
    description: (
      <p>
        This approach forecasts maintenance needs effectively, preventing unexpected breakdowns. By identifying potential issues early, it significantly reduces overall maintenance costs. Enhanced reliability leads to improved asset longevity.
      </p>
    ),
    headingWords: "Forecasting Asset Needs",
  },
  {
    icon: <CheckCircle />,
    text: "Quality Control",
    description: (
      <p>
        Thorough inspections using digital models ensure adherence to quality standards. This process identifies hazards, enhancing overall safety within operations. Continuous quality assurance fosters a culture of excellence.
      </p>
    ),
    headingWords: "Ensuring Safety Standards",
  },
  {
    icon: <MessageCircle />,
    text: "Natural Language Processing (NLP)",
    description: (
      <p>
        NLP simplifies data interaction by allowing users to engage with technology through natural language. This promotes wider technology adoption across various teams. Enhanced collaboration and communication result from this user-friendly approach.
      </p>
    ),
    headingWords: "Simplifying Data Interaction",
  },
  {
    icon: <Eye />,
    text: "Computer Vision",
    description: (
      <p>
        Computer vision automates inspections to detect structural anomalies efficiently. This streamlines processes and significantly reduces manual effort. Ensuring compliance with safety regulations is a key benefit of this technology.
      </p>
    ),
    headingWords: "Automating Structural Inspections",
  },
];


export const productsOptions = [
{
  title: "Digital Twin",
  features: [
    "Town Planing",
    "Asset Maintenance",
    "Predictive Analytics",
  ],
  link: '/towers_page#home',
},
{
  title: "Computer Vision",
  features: [
    "Disaster Management",
    "Neural Forms",
    "Real Time Surveillance",
  ],
  link: '/cv_page#home',
},
{
  title: "Document Intelligence",
  features: [
    "Efficiency",
    "Enhanced Data Accuracy",
    "Automated Workflows",
  ],
  link: '#',
},
];

export const footerLinks = [
  { text: "About", href: "#about" },
  { text: "Features", href: "#features" },
];


export const checklistItems = [
  {
    "title": "Family Office Network and Global Reach",
    "description": " MBS combines a unique heritage of trust, stability, and accountability with leading-edge AI expertise"
  },
  {
    "title": "Innovative and Customizable AI Solutions for the Evolving Market Landscape",
    "description": "Our AI solutions are built to be agile and highly adaptable, responding quickly to evolving market demands and client needs."
  },
  {
    "title": "Public-Private-Partnership ( PPP ) Development Initiatives",
    "description": "MBS is a reliable partner for high-level government and corporate leaders, known for delivering transparent, accountable solutions."
  },
  {
    "title": " Operational Cost Savings",
    "description": "Our AI solutions automate workflows, optimize resources, and identify inefficiencies, driving significant performance improvements."
  },
  {
    "title": "Commitment to Sustainability and Long-Term Impact",
    "description": " MBS develops AI solutions that not only address immediate operational needs but also support long-term environmental and objectives"
  },  {
    "title": " Scalable Solutions Adapted for Diverse Sectors",
    "description": " Our technology is built to be scalable, adaptable, and relevant across various industries, including urban planning, agriculture, infrastructure aviation."
  },
  {
    "title": "Data-Driven, Results-Oriented Solutions for Safety, Compliance, and Efficiency",
    "description": " MBS equips clients with tools for continuous real-time predictive monitoring, maintenance, automated compliance, and allowing proactive management of critical infrastructure."
  },

];

import {
  chromecast,
  disc02,
  file02,
  homeSmile,
  plusSquare,
  recording01,
  recording03,
  searchMd,
  sliders04,
  yourlogo,
 
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Tailored Intelligence",
    text: "Custom Tailored Intelligent chatbot for efficiency. ",
    
  },
  {
    id: "1",
    title: "Usage Analytics",
    text: "Get intelligent insights from local documents.",
  },
  {
    id: "2",
    title: "Security",
    text: "Establish tiered security protocols for document levels.",
  },
  {
    id: "3",
    title: "Sources",
    text: "A completely redesigned experience to keep you in flow.",
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Document_Intelligence/collaboration/figma.png",
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Document_Intelligence/collaboration/notion.png",
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Document_Intelligence/collaboration/discord.png",
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Document_Intelligence/collaboration/slack.png",
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Document_Intelligence/collaboration/photoshop.png",
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Document_Intelligence/collaboration/protopie.png",
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Document_Intelligence/collaboration/framer.png",
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Document_Intelligence/collaboration/raindrop.png",
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Finance",
    Key_Solutions: "Regulatory Compliance Automation Tool, Document Intelligence System",
  },
  {
    id: "1",
    title: "Healthcare",
    Key_Solutions: "Client Onboarding Solution, Sentiment Insight",
  },
  {
    id: "2",
    title: "Manufacturing",
    Key_Solutions: "Vendor Risk Management Platform, Competitive Analysis Dashboard",

  },
  {
    id: "3",
    title: "Professional Services",
    Key_Solutions: "Content Creator Pro, QuickSummarize",

  },
  {
    id: "4",
    title: "Retail",
    Key_Solutions: "Sentiment Insight, Document Intelligence System",
  },
  {
    id: "5",
    title: "Logistics and Supply Chain",
    Key_Solutions: "Vendor Risk Management Platform, Document Intelligence System",
  },
];


export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",



  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",

    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
  },
]


export const solutions = [
  {
    icon: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Document_Intelligence/Usecases_SmartChat_ai.png",
    text: "SmartChat AI",
    description: [
      "Intelligent chatbots and virtual assistants designed for real-time customer engagement and internal support.These solutions streamline communication processes, reduce response times, and enhance stakeholder satisfaction, allowing executives to focus on strategic initiatives."
    ]
  },
  {
    icon: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Document_Intelligence/Usecases_QuickSummarize.png" ,
    text: "QuickSummarize",
    description: [
      "Automated summarization of lengthy reports, financial documents, and board meeting notes.This solution enables busy executives and company secretaries to quickly extract critical insights, facilitating informed decision-making and efficient meetings."
    ]
  },
  {
    icon: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Document_Intelligence/Usecases_Knowledge_Navigator.png" ,
    text: "Knowledge Navigator",
    description: [
      "A dynamic knowledge management platform that consolidates and synthesizes information from various business sources.This tool enhances organizational efficiency by ensuring that decision-makers have easy access to the information they need when they need it."
    ]
  },
  {
    icon: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Document_Intelligence/Usecases_Knowledge_Navigator.png",
    text: "Content Creator Pro",
    description: [
      "AI-driven content generation tools that produce high-quality, tailored communications for executive briefings, investor relations, and corporate marketing.This solution ensures consistent messaging that aligns with the company's strategic objectives."
    ]
  },
  {
    icon: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Document_Intelligence/Usecases_Knowledge_Navigator.png" ,
    text: "Document Intelligence Suite",
    description: [
      "An automated system for extracting and analyzing key data from legal and financial documents.Designed for company secretaries and compliance officers, this suite helps ensure regulatory compliance and improves data accuracy while saving valuable time."
    ]
  },
  {
    icon: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Document_Intelligence/Usecases_RS.png", // Reuse the icon for Vendor Risk Assessment Tool
    text: "Vendor Risk Assessment Tool",
    description: [
      "A comprehensive solution that evaluates supplier risks by analyzing contracts and compliance documents.This tool empowers CFOs and procurement teams to make informed sourcing decisions, ensuring the reliability and integrity of supply chains."
    ]
  }
];