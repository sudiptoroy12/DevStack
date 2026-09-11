import  { use, useState, type Dispatch, type SetStateAction } from 'react';
import type { ITechnology } from '../../types/techonologiesType';
import AvailableTechonologies from './AvailableTechonologies';
import type SelectedTechonologies from './SelectedTechonologies';

interface TechonologiesProps {
  techonologiesPromise: Promise<ITechnology[]>;


  
}
    
const Techonologies = ({ techonologiesPromise

 }: TechonologiesProps) => {

    const techonologies = use(techonologiesPromise)
    console.log(techonologies)
const [selectedTechnologies, setSelectedTechnologies] = useState<ITechnology[]>([]);
    return (
        <AvailableTechonologies techonologiesPromise={techonologiesPromise} selectedTechnologies={selectedTechnologies} setSelectedTechnologies={setSelectedTechnologies} />
    );
};


export default Techonologies;