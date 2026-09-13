import { type Dispatch, type SetStateAction } from "react";
import type { ITechnology } from "../../types/techonologiesType";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const badgeStyles: Record<string, string> = {
  Popular: "bg-blue-100 text-blue-700 border border-blue-200",
  Essential: "bg-green-100 text-green-700 border border-green-200",
  Trending: "bg-pink-100 text-pink-700 border border-pink-200",
  "Top SQL": "bg-indigo-100 text-indigo-700 border border-indigo-200",
  "Full Stack": "bg-purple-100 text-purple-700 border border-purple-200",
  Lightweight: "bg-cyan-100 text-cyan-700 border border-cyan-200",
  NoSQL: "bg-orange-100 text-orange-700 border border-orange-200",
  "Popular SQL": "bg-yellow-100 text-yellow-700 border border-yellow-200",
  DevOps: "bg-red-100 text-red-700 border border-red-200",
  "Cloud Leader": "bg-sky-100 text-sky-700 border border-sky-200",
  "State Management": "bg-violet-100 text-violet-700 border border-violet-200",
  "Fast Build": "bg-teal-100 text-teal-700 border border-teal-200",
  "API Testing": "bg-emerald-100 text-emerald-700 border border-emerald-200",
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
  const isSelected = selectedTechnologies.some(
    (tech) => tech.id === technology.id,
  );

  const handleSelect = () => {
    if (isSelected) {
      toast.warn(`${technology.name} is already in your stack!`, {
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
      return;
    }
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
        <span className="rounded-lg bg-gray-100 px-2 py-1 text-[13px] font-medium text-gray-500">
          {technology.category}
        </span>

        <span className="text-[13px] font-medium text-gray-500">
          {technology.difficulty}
        </span>

        <div className="flex items-center gap-1">
          <span className="text-lg text-yellow-400">★</span>

          <span className="text-[14px] font-medium text-gray-600">
            {technology.rating}
          </span>
        </div>
      </div>

      {/* Button */}
      <button
        
        className={`mt-4 w-full rounded-xl py-2 text-base font-medium transition  ${
          isSelected
            ? "bg-green-200  text-green-800 "
            : "bg-slate-950 hover:bg-slate-800 text-white cursor-pointer"
        }`}
        onClick={handleSelect}
      >
        {isSelected ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechonologyCard;
