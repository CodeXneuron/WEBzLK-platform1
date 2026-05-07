import {
  Building2,
  Leaf,
  Factory,
  School,
  HeartPulse,
  BrainCircuit,
  DatabaseZap,
  BotMessageSquare,
  Rocket,
  Lightbulb,
  ShieldCheck,
  Handshake,
  Users,
  Cpu,
  BarChart,
  Palette,
  Goal,
  Eye,
  MessageSquare,
  Cloud,
  Zap
} from "lucide-react";
import type { NavItem, Industry, HowItWorksStep, Value, Service, Project, WhyWEBzPoint, Testimonial, FAQ, Technology } from "./types";
import { PlaceHolderImages } from "./placeholder-images";

export const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Projects", href: "/projects" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

export const whyWEBzPoints: WhyWEBzPoint[] = [
  {
    icon: Cpu,
    title: "AI-Powered Engineering",
    description: "We merge cutting-edge AI with solid engineering principles to create solutions that are both intelligent and robust."
  },
  {
    icon: DatabaseZap,
    title: "Data-Driven Decisions",
    description: "Leveraging your data, we uncover insights that drive efficiency, predictability, and growth for your business."
  },
  {
    icon: Palette,
    title: "Custom Industry Solutions",
    description: "Our software is not one-size-fits-all. We build bespoke applications tailored to the unique needs of your industry."
  },
  {
    icon: Goal,
    title: "Global Reach",
    description: "We serve clients worldwide, understanding diverse market challenges and opportunities to drive innovation across industries."
  }
];

export const technologies: Technology[] = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence & Machine Learning",
    description: "Advanced AI models that learn, adapt, and evolve to solve complex business challenges.",
    features: ["Deep Learning", "Neural Networks", "Automated Decision Making", "Pattern Recognition"],
    accentColor: "from-violet-700 to-purple-800"
  },
  {
    icon: Eye,
    title: "Computer Vision & Image Processing",
    description: "Intelligent systems that see, understand, and analyze visual data with human-like precision.",
    features: ["Object Detection", "Quality Inspection", "Facial Recognition", "Real-time Analysis"],
    accentColor: "from-blue-700 to-cyan-800"
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description: "Understanding and generating human language to create intelligent conversational experiences.",
    features: ["Sentiment Analysis", "Text Classification", "Chatbots", "Language Translation"],
    accentColor: "from-emerald-700 to-teal-800"
  },
  {
    icon: BarChart,
    title: "Predictive Analytics & Data Science",
    description: "Transform historical data into actionable insights and accurate future predictions.",
    features: ["Forecasting Models", "Trend Analysis", "Risk Assessment", "Business Intelligence"],
    accentColor: "from-orange-700 to-red-800"
  },
  {
    icon: Zap,
    title: "IoT & Smart Systems",
    description: "Connected devices and sensors that collect, analyze, and act on real-time data.",
    features: ["Sensor Integration", "Real-time Monitoring", "Automation", "Edge Computing"],
    accentColor: "from-amber-700 to-orange-800"
  },
  {
    icon: Cloud,
    title: "Cloud & Scalable Architecture",
    description: "Robust, scalable infrastructure that grows with your business needs.",
    features: ["Microservices", "Auto-scaling", "High Availability", "Serverless Computing"],
    accentColor: "from-indigo-700 to-blue-800"
  }
];

export const industries: Industry[] = [
  {
    icon: Building2,
    title: "Construction",
    description: "AI-driven project cost estimation and predictive maintenance.",
  },
  {
    icon: Leaf,
    title: "Agriculture",
    description: "Smart farming solutions for crop monitoring and yield prediction.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Optimizing production lines and quality control with machine vision.",
  },
  {
    icon: School,
    title: "Education",
    description: "Personalized learning platforms and administrative automation.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "AI tools for diagnostics support and hospital management systems.",
  },
];

export const howItWorksSteps: HowItWorksStep[] = [
  {
    step: 1,
    icon: Lightbulb,
    title: "Understand Problem",
    description: "We start by deeply understanding your challenge, holding workshops with your team to grasp the nuances of your operations.",
  },
  {
    step: 2,
    icon: DatabaseZap,
    title: "Data & Analysis",
    description: "Our experts collect and analyze relevant data, identifying patterns and opportunities that will form the foundation of the solution.",
  },
  {
    step: 3,
    icon: BrainCircuit,
    title: "AI/ML Model",
    description: "We design, train, and validate a custom AI/ML model tailored to your specific problem, ensuring accuracy and reliability.",
  },
  {
    step: 4,
    icon: Rocket,
    title: "Deploy & Support",
    description: "The solution is deployed into your workflow with full training and ongoing support to ensure it delivers continuous value.",
  },
];

export const companyValues: Value[] = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly explore new technologies to solve old problems in new, more efficient ways."
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    description: "Our engineering background means we build robust, dependable solutions you can count on."
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description: "We partner with businesses worldwide, growing together and strengthening industries through innovation."
  },
  {
    icon: Users,
    title: "User-Centered Design",
    description: "We prioritize the end-user, ensuring our solutions are intuitive, easy to use, and truly solve their problems."
  }
];

export const services: Service[] = [
  {
    title: "AI & Machine Learning Solutions",
    slug: "ai-ml-solutions",
    description: "Custom AI models to automate tasks, generate insights, and create new capabilities.",
    longDescription: "From natural language processing to computer vision, we develop bespoke AI and Machine Learning models that integrate seamlessly into your business. We help you automate complex processes, gain a competitive edge, and unlock new revenue streams by leveraging the power of intelligent systems tailored for your market."
  },
  {
    title: "Predictive Analytics for Engineering",
    slug: "predictive-analytics",
    description: "Forecast project outcomes, material needs, and maintenance schedules.",
    longDescription: "In engineering and construction, foresight is critical. Our predictive analytics services use historical and real-time data to forecast project timelines, budget overruns, resource requirements, and equipment maintenance needs. Make proactive, data-informed decisions to keep your projects on time and on budget."
  },
  {
    title: "Custom Web & Mobile Applications",
    slug: "custom-apps",
    description: "Bespoke software for your unique operational needs, accessible anywhere.",
    longDescription: "Off-the-shelf software doesn't always fit. We design and build high-performance, scalable web and mobile applications from the ground up. Whether it's a customer-facing portal, an internal management tool, or a field-service app, we create solutions that perfectly match your workflow."
  },
  {
    title: "Automation & Process Optimization",
    slug: "automation",
    description: "Streamline your workflows, reduce manual error, and increase efficiency.",
    longDescription: "We identify bottlenecks in your business processes and implement robotic process automation (RPA) and software-based solutions to eliminate them. Reduce tedious manual work, minimize human error, and free up your skilled workforce to focus on high-value tasks that drive your business forward."
  },
  {
    title: "Data Dashboards and Reporting",
    slug: "data-dashboards",
    description: "Visualize your key metrics in real-time with interactive dashboards.",
    longDescription: "Turn raw data into actionable intelligence. We build custom, real-time dashboards and reporting systems that give you a clear view of your operations. Track KPIs, monitor performance, and share insights across your organization with intuitive and powerful data visualization tools."
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description: "Crafting intuitive and visually stunning user experiences for web and mobile.",
    longDescription: "We believe that powerful technology should be easy to use. Our UI/UX design process focuses on understanding your users' needs and behaviors to create interfaces that are not only beautiful but also intuitive, accessible, and optimized for engagement and conversion."
  },
  {
    title: "Data Engineering & Pipeline Architecture",
    slug: "data-engineering",
    description: "Robust data handling solutions to collect, process, and store your valuable information.",
    longDescription: "Data is the lifeblood of modern business. We design and build scalable data pipelines, data warehouses, and ETL processes that ensure your data is clean, accessible, and ready for analysis. From real-time streaming to batch processing, we handle your data with the care it deserves."
  }
];

export const projects: Project[] = [
  {
    name: "IoT-Based Smart Irrigation Systems",
    industry: "Agriculture",
    problem: "Unpredictable rainfall and inefficient water usage often lead to inconsistent crop yields and resource wastage.",
    solution: "We can build IoT/AI-powered systems with soil sensors and weather analytics to automate irrigation cycles efficiently.",
    impact: "Potential to reduce water consumption by up to 30% and significantly increase crop yield stability.",
    image: {
      id: "project-smart-irrigation",
      url: PlaceHolderImages.find(p => p.id === "project-smart-irrigation")?.imageUrl || "",
      hint: PlaceHolderImages.find(p => p.id === "project-smart-irrigation")?.imageHint || ""
    }
  },
  {
    name: "Predictive Cost Analytics",
    industry: "Construction",
    problem: "Large-scale infrastructure projects often face budget overruns due to inaccurate cost forecasting and unforeseen delays.",
    solution: "We develop predictive models using historical data to forecast material costs and identify potential timeline risks.",
    impact: "Can improve budget accuracy significantly and enable proactive risk management for better financial control.",
    image: {
      id: "project-construction-analytics",
      url: PlaceHolderImages.find(p => p.id === "project-construction-analytics")?.imageUrl || "",
      hint: PlaceHolderImages.find(p => p.id === "project-construction-analytics")?.imageHint || ""
    }
  },
  {
    name: "Automated Quality Control Systems",
    industry: "Manufacturing",
    problem: "Manual quality checks are time-consuming and prone to human error, affecting final product consistency.",
    solution: "We implement machine vision systems that automatically detect defects and stitching errors in real-time.",
    impact: "Capable of increasing defect detection rates to over 95%, ensuring high-quality output and reducing returns.",
    image: {
      id: "project-factory-automation",
      url: PlaceHolderImages.find(p => p.id === "project-factory-automation")?.imageUrl || "",
      hint: PlaceHolderImages.find(p => p.id === "project-factory-automation")?.imageHint || ""
    }
  },
  {
    name: "Adaptive Learning Platforms",
    industry: "Education",
    problem: "Standardized teaching often fails to address individual student weaknesses, particularly in competitive exams.",
    solution: "We create adaptive e-learning platforms that use AI to identify weak subjects and generate personalized study plans.",
    impact: "Provides a more effective, personalized learning experience that adapts to each student's pace.",
    image: {
      id: "project-education-platform",
      url: PlaceHolderImages.find(p => p.id === "project-education-platform")?.imageUrl || "",
      hint: PlaceHolderImages.find(p => p.id === "project-education-platform")?.imageHint || ""
    }
  }
];

// Testimonials removed as company is new.
export const testimonials: Testimonial[] = [];

export const faqs: FAQ[] = [
  {
    question: "What industries do you specialize in?",
    answer: "We primarily focus on Construction, Agriculture, Manufacturing, Education, and Healthcare, but our engineering-first approach allows us to tackle complex problems in any sector."
  },
  {
    question: "Do you offer ongoing support after the project is finished?",
    answer: "Yes, absolutely. We believe in long-term partnerships. We offer various support and maintenance packages to ensure your solution continues to operate at peak performance."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity. A simple web app might take 4-8 weeks, while a complex AI implementation could take 3-6 months. We provide detailed timelines during the initial consultation."
  },
  {
    question: "Can you work with our existing data?",
    answer: "Yes! One of our core strengths is analyzing and leveraging your existing data to uncover insights and build predictive models."
  },
  {
    question: "Where is your team located?",
    answer: "We are proudly based in Sri Lanka, with our main engineering center in Monaragala. We understand the local market context better than anyone."
  }
];
