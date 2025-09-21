"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#0a1a0a] text-gray-900 dark:text-[#f0f0f0] p-8 gap-8">
      <h1 className="text-4xl font-bold text-green-600 dark:text-green-400">
        TCAS69 Portfolio
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-md">
        เพิ่ม Portfolio ของนักเรียนและดูข้อมูลสำหรับอาจารย์
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/portfolio-form"
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
        >
          เพิ่ม Portfolio
        </Link>

        <Link
          href="/portfolio-list"
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
        >
          ดูรายชื่อนักเรียน
        </Link>
      </div>
    </div>
  );
}
