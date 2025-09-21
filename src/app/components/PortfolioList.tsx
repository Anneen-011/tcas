"use client";

import Link from "next/link";
import { usePortfolioStore } from "../store/portfolioStore";

export default function PortfolioList() {
  const portfolios = usePortfolioStore((state) => state.portfolios);

  if (!portfolios.length) return <p>ยังไม่มี Portfolio</p>;

  return (
    <table className="min-w-full border border-gray-300 dark:border-gray-600">
      <thead className="bg-green-100 dark:bg-green-900">
        <tr>
          <th className="border px-4 py-2">ชื่อ</th>
          <th className="border px-4 py-2">นามสกุล</th>
          <th className="border px-4 py-2">GPA</th>
          <th className="border px-4 py-2">รายละเอียด</th>
        </tr>
      </thead>
      <tbody>
        {portfolios.map((p) => (
          <tr key={p.id} className="text-center border-b border-gray-300 dark:border-gray-600">
            <td className="px-4 py-2">{p.firstName}</td>
            <td className="px-4 py-2">{p.lastName}</td>
            <td className="px-4 py-2">{p.gpa}</td>
            <td className="px-4 py-2">
              <Link
                href={`/portfolio-detail?id=${p.id}`}
                className="text-yellow-500 hover:text-yellow-600 underline"
              >
                ดูรายละเอียด
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
