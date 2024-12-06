import right from "../assets/images/right.svg";
import replay from "../assets/images/replay.svg";
import play from "../assets/images/play.svg";
import pause from "../assets/images/pause.svg";

import explore5 from "../assets/9lvoom5iii.png";

import { Heart, ShoppingCart, Truck, Settings, BarChart2, Lock } from "lucide-react";


export const exploreVideo = "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/videos/video3+(1).mp4";

export const rightImg = right;
export const replayImg = replay;
export const playImg = play;
export const pauseImg = pause;

export const explore5Img = explore5;

export const navItems = [
{ label: "Feature", href: "#feature"},
];
export const feature = [
  {
    icon: <Heart />,
    text: "Healthcare",
    description: [
      "Automated Tumor Detection",
      "Real-time Vital Sign Monitoring",
      "Surgical Navigation Systems",
      "Pathology Image Analysis",
    ],
  },
  {
    icon: <ShoppingCart />,
    text: "E-commerce",
    description: [
      "Virtual Try-On Solutions",
      "Interactive Marketing Solutions",
      "Personalized Product Recommendations",
      "AR-Enhanced Product Demos",
    ],
  },
  {
    icon: <Truck />,
    text: "Automotive",
    description: [
      "Sensor Fusion Techniques",
      "Driver Monitoring Systems",
      "Obstacle Detection",
      "Traffic Sign Recognition",
    ],
  },
  {
    icon: <Settings />,  // Changed from Gear to Settings
    text: "Manufacturing",
    description: [
      "Advanced Quality Control",
      "Predictive Maintenance Algorithms",
      "Compliance Verification Systems",
      "Material Quality Assessments",
    ],
  },
  {
    icon: <BarChart2 />,
    text: "Agriculture",
    description: [
      "Hyperspectral Imaging",
      "Pest Detection",
      "Livestock Activity Tracking",
      "Soil Health Monitoring",
    ],
  },
  {
    icon: <Lock />,
    text: "Security",
    description: [
      "Real-time Anomaly Detection",
      "License Plate Recognition",
      "Crowd Management Solutions",
      "Facial Recognition Technology",
    ],
  },
];
      
export const feature1 = [
  {
    icon: <Heart />,
    text: "Healthcare",
    title: "Automated Patient Monitoring",
    description: (
      <p>
        Automated tumor detection enhances diagnostic accuracy and efficiency. Real-time vital sign monitoring ensures timely interventions. Advanced surgical navigation systems improve procedural outcomes significantly.
      </p>
    ),
  },
  {
    icon: <ShoppingCart />,
    text: "E-commerce",
    title: "Interactive Shopping Experience",
    description: (
      <p>
        Virtual try-on solutions allow customers to visualize products before purchase. Interactive marketing solutions engage users and boost conversion rates. Personalized product recommendations enhance user satisfaction and loyalty.
      </p>
    ),
  },
  {
    icon: <Truck />,
    text: "Automotive",
    title: "Advanced Driver Assistance",
    description: (
      <p>
        Sensor fusion techniques integrate data from multiple sources for accurate analysis. Driver monitoring systems enhance safety by detecting signs of fatigue. Obstacle detection and traffic sign recognition improve overall driving experience.
      </p>
    ),
  },
  {
    icon: <Settings />,
    text: "Manufacturing",
    title: "Quality Control Solutions",
    description: (
      <p>
        Advanced quality control ensures products meet industry standards consistently. Predictive maintenance algorithms minimize downtime by forecasting equipment failures. Compliance verification systems streamline regulatory adherence effectively.
      </p>
    ),
  },
  {
    icon: <BarChart2 />,
    text: "Agriculture",
    title: "Smart Farming Techniques",
    description: (
      <p>
        Hyperspectral imaging provides detailed insights into crop health and conditions. Pest detection systems enable timely interventions to protect yields. Livestock activity tracking ensures better management and productivity.
      </p>
    ),
  },
  {
    icon: <Lock />,
    text: "Security",
    title: "Enhanced Safety Solutions",
    description: (
      <p>
        Real-time anomaly detection helps identify potential security threats quickly. License plate recognition aids in monitoring and tracking vehicles effectively. Crowd management solutions enhance safety in large gatherings and events.
      </p>
    ),
  },
];
