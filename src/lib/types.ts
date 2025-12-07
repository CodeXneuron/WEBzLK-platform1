import type { LucideIcon } from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export interface Industry {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface WhyWEBzPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface HowItWorksStep {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Service {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
}

export interface Project {
  name: string;
  industry: string;
  problem: string;
  solution: string;
  impact: string;
  image: {
    id: string;
    url: string;
    hint: string;
  };
}
