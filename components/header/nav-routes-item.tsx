import React from "react";

interface RoutesProps {
  label: string;
  id: string;
}

export default function NavRoutesItem({ label, id }: RoutesProps) {
  const onClick = () => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      onClick={onClick}
      className="flex items-center font-semibold cursor-pointer gap-x-2 p-4 py-2 rounded-lg transition duration-200 ease-in-out focus:outline-none  hover:text-primary"
    >
      <span>{label}</span>
    </div>
  );
}
