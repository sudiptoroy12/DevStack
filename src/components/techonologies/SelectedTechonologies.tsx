import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../../types/techonologiesType";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SelectedTechCard from "./SelectedTechCard";

interface SelectedTechonologiesProps {
  selectedTechnologies: ITechnology[];
  setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>;
}
const SelectedTechonologies = ({
  selectedTechnologies,
  setSelectedTechnologies,
}: SelectedTechonologiesProps) => {
  console.log(selectedTechnologies, "from SelectedTechonologies");

  const handleDelete = (tech: ITechnology) => {
    const remain = selectedTechnologies.filter((t) => t.id !== tech.id);
    setSelectedTechnologies(remain);
    toast.error(`${tech.name} has been removed from your stack!`, {
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

  const handleDeleteAll = () => {
    setSelectedTechnologies([]);
    toast.error("All technologies have been removed from your stack!", {
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
      <h1 className="text-xl font-bold">Your Stack</h1>
      <h3 className="text-sm text-gray-600">
        {selectedTechnologies.length} Technology Selected
      </h3>
      {selectedTechnologies.length === 0 && (
        <p className="text-sm text-gray-400 mt-4">
          No technologies selected yet. Please select a technology from the list.
        </p>
      )}

      <div className="flex flex-col gap-1 mt-4">
        {selectedTechnologies.map((tech) => ( <SelectedTechCard tech={tech} handleDelete={handleDelete}/>         
         
        ))}
        <button
          onClick={handleDeleteAll}
          className="mt-12 mb-6 py-1 px-4  text-red-500 rounded-md border border-red-500 hover:bg-red-600 hover:text-black transition cursor-pointer"
        >
          Remove All
        </button>
      </div>
    </div>
  );
};

export default SelectedTechonologies;
