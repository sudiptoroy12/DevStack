import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../../types/techonologiesType";
import { RxCross1 } from "react-icons/rx";

interface SelectedTechonologiesProps {
  selectedTechnologies: ITechnology[];
  setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>;
}
const SelectedTechonologies = ({
  selectedTechnologies,
  setSelectedTechnologies,
}: SelectedTechonologiesProps) => {
  console.log(selectedTechnologies, "from SelectedTechonologies");

  const handleDelete = (techId: string) => {
    const remain = selectedTechnologies.filter(tech => tech.id !== techId)
    setSelectedTechnologies(remain)

  }
  return (
    <div className="w-full max-w-sm rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <h1 className="text-xl font-bold">Your Stack</h1>
      <h3 className="text-sm text-gray-600">
        {selectedTechnologies.length} Technology Selected
      </h3>

      <div className="flex flex-col gap-1 mt-4">
        {selectedTechnologies.map((tech) => (
          <div
            key={tech.id}
            className="flex items-center justify-between gap-1 py-2 w-full max-w-sm rounded-xl border border-gray-200 bg-white px-3 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center gap-2 ">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-6 h-6 rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-xs font-medium">{tech.name}</span>
                <span className="text-[10px] text-gray-500">{tech.category}</span>
              </div>
            </div>

            <div >
              <button onClick={()=> handleDelete(tech.id)} className="flex items-center justify-center">
                <RxCross1  className="w-4 h-6 cursor-pointer" />
              </button>
              
            </div>
            
          </div>
        ))}
        <button
          onClick={() => setSelectedTechnologies([])}
          className="mt-12 mb-6 py-1 px-4  text-red-500 rounded-md border border-red-500 hover:bg-red-600 hover:text-black transition cursor-pointer"
        >
          Remove All
        </button>
      </div>
    </div>
  );
};

export default SelectedTechonologies;
