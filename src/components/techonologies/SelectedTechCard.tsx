
import type { ITechnology } from '../../types/techonologiesType';
import { RxCross1 } from 'react-icons/rx';

interface SelectedTechCardProps {
  tech: ITechnology;
  handleDelete: (tech: ITechnology) => void;
}

const SelectedTechCard = ({ tech, handleDelete }: SelectedTechCardProps) => {
    return (
         <div
            key={tech.id}
            className="flex items-center justify-between gap-1 py-2 w-full max-w-sm rounded-xl border border-gray-200 bg-white px-3 shadow-sm transition hover:shadow-md "
          >
            <div className="flex items-center gap-2 ">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-6 h-6 rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-xs font-medium">{tech.name}</span>
                <span className="text-[10px] text-gray-500">
                  {tech.category}
                </span>
              </div>
            </div>

            <div>
              <button
                onClick={() => handleDelete(tech)}
                className="flex items-center justify-center"
              >
                <RxCross1 className="w-4 h-6 cursor-pointer" />
              </button>
            </div>
          </div>
    );
};

export default SelectedTechCard;