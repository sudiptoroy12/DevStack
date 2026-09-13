import { useState, type Dispatch, type SetStateAction } from "react";
import type { ITechnology } from "../../types/techonologiesType";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const badgeStyles: Record<string, string> = {
  Popular: "bg-blue-50 text-blue-600",
  "Top SQL": "bg-indigo-50 text-indigo-600",
  Trending: "bg-pink-50 text-pink-600",
  Essential: "bg-green-50 text-green-600",
  "Full Stack": "bg-purple-50 text-purple-600",
  Enterprise: "bg-slate-100 text-slate-700",
  Lightweight: "bg-cyan-50 text-cyan-600",
  NoSQL: "bg-orange-50 text-orange-600",
  "Popular SQL": "bg-teal-50 text-teal-600",
  Fast: "bg-yellow-50 text-yellow-600",
  Performance: "bg-red-50 text-red-600",
  DevOps: "bg-violet-50 text-violet-600",
  "Cloud Native": "bg-sky-50 text-sky-600",
  "Cloud Leader": "bg-blue-50 text-blue-700",
  "Developer Friendly": "bg-emerald-50 text-emerald-600",
  "Modern API": "bg-fuchsia-50 text-fuchsia-600",
  "State Management": "bg-rose-50 text-rose-600",
  "Fast Build": "bg-amber-50 text-amber-600",
  "CSS Tool": "bg-lime-50 text-lime-600",
  "UI Design": "bg-purple-50 text-purple-600",
  "API Testing": "bg-orange-50 text-orange-600",
};

interface CardProps {
  technology: ITechnology;
  selectedTechnologies: ITechnology[];
  setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>;
}

const TechonologyCard = ({
  technology,
  selectedTechnologies,
  setSelectedTechnologies,
}: CardProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    setIsSelected(true);

    setSelectedTechnologies([...selectedTechnologies, technology]);
    toast.success(`${technology.name} has been added to your stack!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  return (
    <div className="w-full max-w-sm rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      {/* Top */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-10 w-10 object-contain"
          />
        </div>

        <span
          className={`rounded-full px-5 py-2 text-sm font-medium ${
            badgeStyles[technology.badge] ?? "bg-gray-100 text-gray-600"
          }`}
        >
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h2 className="mt-4 text-2xl font-semibold brand-gradient">
        {technology.name}
      </h2>

      {/* Description */}
      <p className="mt-2 min-h-[75px] text-sm leading-5 text-gray-400">
        {technology.description}
      </p>

      {/* Divider */}
      <div className="my-2 border-t border-gray-200"></div>

      {/* Details */}
      <div className="flex items-center justify-between gap-1">
        <span className="rounded-lg bg-gray-100 px-2 py-1 text-sm font-medium text-gray-500">
          {technology.category}
        </span>

        <span className="text-sm font-medium text-gray-500">
          {technology.difficulty}
        </span>

        <div className="flex items-center gap-1">
          <span className="text-lg text-yellow-400">★</span>

          <span className="text-sm font-medium text-gray-600">
            {technology.rating}
          </span>
        </div>
      </div>

      {/* Button */}
      <button
        disabled={isSelected}
        className={`mt-4 w-full rounded-xl py-2 text-base font-medium transition  ${
          isSelected
            ? "bg-green-200  text-green-800 cursor-not-allowed"
            : "bg-slate-950 hover:bg-slate-800 text-white cursor-pointer"
        }`}
        onClick={handleSelect}
      >
        {isSelected ? "Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechonologyCard;
