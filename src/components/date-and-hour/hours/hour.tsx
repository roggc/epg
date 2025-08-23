"use client";

export default function Hour({ hour }: { hour: string }) {
  return (
    <div className="flex items-center bg-gray-800 text-white h-8 w-12 justify-center border border-gray-700">
      <span className="text-sm">{hour}</span>
    </div>
  );
}
