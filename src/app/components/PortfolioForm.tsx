"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { usePortfolioStore, Portfolio } from "../store/portfolioStore";

const schema = yup.object({
  firstName: yup.string().required("กรุณากรอกชื่อ"),
  lastName: yup.string().required("กรุณากรอกนามสกุล"),
  address: yup.string().required("กรุณากรอกที่อยู่"),
  phone: yup.string().required("กรุณากรอกเบอร์โทรศัพท์"),
  school: yup.string().required("กรุณากรอกโรงเรียน"),
  gpa: yup.number().required("กรุณากรอก GPA").min(0).max(4),
  talent: yup.string().required("กรุณากรอกความสามารถพิเศษ"),
  reason: yup.string().required("กรุณากรอกเหตุผล"),
  major: yup.string().required("กรุณากรอกสาขาที่เลือก"),
  university: yup.string().required("กรุณากรอกมหาวิทยาลัย"),
}).required();

type FormData = yup.InferType<typeof schema>;

export default function PortfolioForm() {
  const addPortfolio = usePortfolioStore((state) => state.addPortfolio);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [profileImage, setProfileImage] = useState<string | null>(null);

  const onSubmit = (data: FormData) => {
    const id = crypto.randomUUID?.() ?? Date.now().toString();
    addPortfolio({ id, ...data, gpa: Number(data.gpa), profileImage, images: [] });
    alert("บันทึกข้อมูลเรียบร้อย");
    reset();
    setProfileImage(null);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-xl">
      {Object.keys(schema.fields).map((key) => (
        <div key={key} className="flex flex-col">
          <label className="font-semibold">{key}</label>
          <input
            {...register(key as keyof FormData)}
            className="border p-2 rounded"
          />
          <span className="text-red-500 text-sm">{errors[key as keyof FormData]?.message}</span>
        </div>
      ))}

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
      >
        บันทึก Portfolio
      </button>
    </form>
  );
}
