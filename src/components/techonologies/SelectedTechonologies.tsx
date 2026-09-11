import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../../types/techonologiesType";

interface SelectedTechonologiesProps {
   selectedTechnologies: ITechnology[];
    setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>;
}
const SelectedTechonologies = ({
  selectedTechnologies, setSelectedTechnologies}: SelectedTechonologiesProps) => {
    console.log(selectedTechnologies, "from SelectedTechonologies");
  return <div>selected technologies: {selectedTechnologies.length}</div>;
};

export default SelectedTechonologies;
