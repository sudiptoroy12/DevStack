
import { use, type Dispatch, type SetStateAction } from 'react';
import type { ITechnology } from '../../types/techonologiesType';
import TechonologyCard from './TechonologyCard';
interface TechonologiesProps {
  techonologiesPromise: Promise<ITechnology[]>;
  selectedTechnologies: ITechnology[];
  setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>;
}

const AvailableTechonologies = ({techonologiesPromise, selectedTechnologies, setSelectedTechnologies    }: TechonologiesProps) => {

    const techonologies = use(techonologiesPromise)
    console.log(techonologies)
    
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
            {techonologies.map((tech) => (
                <TechonologyCard
                 key={tech.id} technology={tech} selectedTechnologies={selectedTechnologies} setSelectedTechnologies={setSelectedTechnologies} />
            ))}
        </div>
        </div>
    );
};

export default AvailableTechonologies;