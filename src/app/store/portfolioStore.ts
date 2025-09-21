// src/store/portfolioStore.ts
import { create } from "zustand";

export interface Portfolio {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  school: string;
  gpa: number;
  talent: string;
  reason: string;
  major: string;
  university: string;
  profileImage: string | null;
  images: string[];
}

interface PortfolioStore {
  portfolios: Portfolio[];
  addPortfolio: (portfolio: Portfolio) => void;
  getPortfolioById: (id: string) => Portfolio | undefined;
}

export const usePortfolioStore = create<PortfolioStore>((set, get) => ({
  portfolios: [],
  addPortfolio: (portfolio) =>
    set((state) => ({ portfolios: [...state.portfolios, portfolio] })),
  getPortfolioById: (id) =>
    get().portfolios.find((p) => p.id === id),
}));
