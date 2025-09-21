import { Suspense } from "react";
import PortfolioDetail from "../components/PortfolioDetail"; // ปรับ path ตามโครงสร้างของคุณ

export default function PortfolioDetailPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PortfolioDetail />
    </Suspense>
  );
}