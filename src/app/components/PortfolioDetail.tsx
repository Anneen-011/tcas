"use client";

import { useSearchParams } from "next/navigation";
import { usePortfolioStore } from "../store/portfolioStore";

export default function PortfolioDetail() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const portfolio = usePortfolioStore((state) =>
    state.portfolios.find((p) => p.id === id)
  );

  if (!portfolio) return <p>ไม่พบข้อมูลนักเรียน</p>;

  return (
    <div className="max-w-xl mx-auto p-4 bg-green-50 dark:bg-green-900 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-400">
        {portfolio.firstName} {portfolio.lastName}
      </h2>
      <p><strong>ที่อยู่:</strong> {portfolio.address}</p>
      <p><strong>เบอร์โทร:</strong> {portfolio.phone}</p>
      <p><strong>โรงเรียน:</strong> {portfolio.school}</p>
      <p><strong>GPA:</strong> {portfolio.gpa}</p>
      <p><strong>ความสามารถพิเศษ:</strong> {portfolio.talent}</p>
      <p><strong>เหตุผลในการสมัคร:</strong> {portfolio.reason}</p>
      <p><strong>สาขา:</strong> {portfolio.major}</p>
      <p><strong>มหาวิทยาลัย:</strong> {portfolio.university}</p>
      {portfolio.profileImage && (
        <img src={portfolio.profileImage} alt="Profile" className="mt-4 w-32 h-32 object-cover rounded-full" />
      )}
    </div>
  );
}
