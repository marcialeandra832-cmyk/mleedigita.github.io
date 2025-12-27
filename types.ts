
// Fix: Added import for React to resolve namespace issue when using React.ReactNode
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  isMain?: boolean;
}

export interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  imageUrl: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}