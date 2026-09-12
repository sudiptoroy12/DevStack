import { useState, type Dispatch, type SetStateAction } from "react";
import type { ITechnology } from "../../types/techonologiesType";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

        <span className="rounded-full bg-blue-50 px-5 py-2 text-sm font-medium text-blue-500">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h2 className="mt-4 text-2xl font-semibold text-gray-900">
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
        className={`mt-4 w-full rounded-xl py-2 text-base font-medium transition cursor-pointer ${
          isSelected
            ? "bg-green-500 hover:bg-green-600 text-white"
            : "bg-slate-950 hover:bg-slate-800 text-white"
        }`}
        onClick={handleSelect}
      >
        {isSelected ? "Selected" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechonologyCard;
