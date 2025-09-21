"use client";

import PortfolioList from "../components/PortfolioList";

export default function PortfolioListPage() {
  return (
    <div className="min-h-screen p-8 bg-white dark:bg-[#0a1a0a] text-gray-900 dark:text-[#f0f0f0]">
      <h1 className="text-3xl font-bold text-green-600 mb-6">รายชื่อนักเรียน</h1>
      <PortfolioList />
    </div>
  );
}
