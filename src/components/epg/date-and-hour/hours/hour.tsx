"use client";

export default function Hour({ hour }: { hour: number }) {
  return (
    <div className="flex items-center bg-gray-800 text-white h-8 w-[200px] min-w-[200px] justify-center border border-gray-700">
      <span className="text-sm">{hour.toString().padStart(2, "0")}:00</span>
    </div>
  );
}
