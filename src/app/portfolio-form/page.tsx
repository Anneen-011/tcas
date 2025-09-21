"use client";

import PortfolioForm from "../components/PortfolioForm";

export default function PortfolioFormPage() {
  return (
    <div className="min-h-screen p-8 bg-white dark:bg-[#0a1a0a] text-gray-900 dark:text-[#f0f0f0]">
      <h1 className="text-3xl font-bold text-green-600 mb-6">เพิ่ม Portfolio นักเรียน</h1>
      <PortfolioForm />
    </div>
  );
}
