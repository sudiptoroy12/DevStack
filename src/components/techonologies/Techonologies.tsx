import  { use, useState} from 'react';
import type { ITechnology } from '../../types/techonologiesType';
import AvailableTechonologies from './AvailableTechonologies';
import SelectedTechonologies from './SelectedTechonologies';

interface TechonologiesProps {
  techonologiesPromise: Promise<ITechnology[]>;


  
}
    
const Techonologies = ({ techonologiesPromise

 }: TechonologiesProps) => {

    const techonologies = use(techonologiesPromise)
    console.log(techonologies)
const [selectedTechnologies, setSelectedTechnologies] = useState<ITechnology[]>([]);
    return (
        <div className="mx-auto max-w-7xl ">  
        <h1 className='text-4xl font-bold px-6 pb-3 text-center sm:text-left'>Explore the <span className='brand-gradient'>Technologies</span></h1>
        <h3 className='text-lg text-gray-600 px-6 text-center sm:text-left'>Pick one technology per category to build your ideal stack.</h3>
        <div className="grid grid-cols-1   gap-6 md:grid-cols-4  ">
            <div className="col-span-1 md:col-span-3  flex"> 
                <AvailableTechonologies  techonologiesPromise={techonologiesPromise} selectedTechnologies={selectedTechnologies} setSelectedTechnologies={setSelectedTechnologies} />
            </div>
            <div className="col-span-1 flex justify-center md:block md:mt-12 mb-12  md:mb-0"> 
            <SelectedTechonologies selectedTechnologies={selectedTechnologies} setSelectedTechnologies={setSelectedTechnologies} />
            </div>
        </div>
            
        </div>
        
    );
};


export default Techonologies;