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
  Goal
} from "lucide-react";
import type { NavItem, Industry, HowItWorksStep, Value, Service, Project, WhyWEBzPoint } from "./types";
import { PlaceHolderImages } from "./placeholder-images";

export const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Projects", href: "/projects" },
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
    description: "Leveraging your data, we uncover insights that drive efficiency, predictability, and growth for your Sri Lankan business."
  },
  {
    icon: Palette,
    title: "Custom Industry Solutions",
    description: "Our software is not one-size-fits-all. We build bespoke applications tailored to the unique needs of your industry."
  },
  {
    icon: Goal,
    title: "Focus on Sri Lanka",
    description: "We are committed to the local market, understanding its challenges and opportunities to foster national development."
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
    description: "We start by deeply understanding your challenge, holding workshops with your team to grasp the nuances of your operations in Sri Lanka.",
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
    description: "We partner with Sri Lankan businesses, growing together and strengthening our local industries."
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
    longDescription: "From natural language processing to computer vision, we develop bespoke AI and Machine Learning models that integrate seamlessly into your business. We help you automate complex processes, gain a competitive edge, and unlock new revenue streams by leveraging the power of intelligent systems tailored for the Sri Lankan market."
  },
{
    title: "Predictive Analytics for Engineering",
    slug: "predictive-analytics",
    description: "Forecast project outcomes, material needs, and maintenance schedules.",
    longDescription: "In engineering and construction, foresight is critical. Our predictive analytics services use historical and real-time data to forecast project timelines, budget overruns, resource requirements, and equipment maintenance needs. Make proactive, data-informed decisions to keep your Sri Lankan projects on time and on budget."
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
  }
];

export const projects: Project[] = [
  {
    name: "Smart Irrigation for Tea Plantations",
    industry: "Agriculture",
    problem: "Tea estates in the central highlands faced unpredictable rainfall, leading to inefficient water usage and inconsistent crop yields.",
    solution: "Developed an IoT and AI-powered system with soil moisture sensors and weather-predictive analytics to automate irrigation cycles.",
    impact: "Reduced water consumption by 30% and increased average yield by 15%, ensuring a more stable income for local growers.",
    image: {
      id: "project-smart-irrigation",
      url: PlaceHolderImages.find(p => p.id === "project-smart-irrigation")?.imageUrl || "",
      hint: PlaceHolderImages.find(p => p.id === "project-smart-irrigation")?.imageHint || ""
    }
  },
  {
    name: "AI-Powered Cost Analytics for Colombo Port City",
    industry: "Construction",
    problem: "A major contractor for the Port City project needed more accurate cost and timeline predictions for large-scale infrastructure.",
    solution: "We built a predictive analytics model using historical project data to forecast material costs and identify potential delays.",
    impact: "Improved budget accuracy by over 20% and enabled proactive risk management, saving millions of rupees.",
    image: {
      id: "project-construction-analytics",
      url: PlaceHolderImages.find(p => p.id === "project-construction-analytics")?.imageUrl || "",
      hint: PlaceHolderImages.find(p => p.id === "project-construction-analytics")?.imageHint || ""
    }
  },
  {
    name: "Quality Control Automation for Apparel Factories",
    industry: "Manufacturing",
    problem: "Sri Lanka's leading apparel exporters struggled with manual, time-consuming quality checks, leading to human error and defects.",
    solution: "Implemented a machine vision system on production lines to automatically detect fabric defects and stitching errors in real-time.",
    impact: "Increased defect detection rate by 95%, reduced return rates, and solidified Sri Lanka's reputation for high-quality garment manufacturing.",
    image: {
      id: "project-factory-automation",
      url: PlaceHolderImages.find(p => p.id === "project-factory-automation")?.imageUrl || "",
      hint: PlaceHolderImages.find(p => p.id === "project-factory-automation")?.imageHint || ""
    }
  },
  {
    name: "Personalized Tutoring Platform for A-Level Students",
    industry: "Education",
    problem: "Students across Sri Lanka needed more tailored support for competitive A-Level exams, as group tuition couldn't address individual weaknesses.",
    solution: "Created an adaptive e-learning platform that uses AI to identify a student's weak subjects and generates a personalized study plan with targeted resources.",
    impact: "Users reported a 25% average improvement in test scores, providing a more equitable and effective learning tool for students nationwide.",
    image: {
      id: "project-education-platform",
      url: PlaceHolderImages.find(p => p.id === "project-education-platform")?.imageUrl || "",
      hint: PlaceHolderImages.find(p => p.id === "project-education-platform")?.imageHint || ""
    }
  }
];
