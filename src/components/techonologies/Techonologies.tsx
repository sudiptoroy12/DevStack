import  { use } from 'react';
import type { ITechnology } from '../../types/techonologiesType';

interface TechonologiesProps {
  techonologiesPromise: Promise<ITechnology[]>;
}

const Techonologies = ({ techonologiesPromise }: TechonologiesProps) => {

    const techonologies = use(techonologiesPromise)
    console.log(techonologies)
   
    return (
        <div>
            
        </div>
    );
};

export default Techonologies;