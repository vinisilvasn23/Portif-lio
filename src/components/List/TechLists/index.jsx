import { technologies } from "../../../data/technologies";
import TechCard from "../../Card/TechCard";

function TechLists() {
  const [technologie1, technologie2, technologie3, technologie4] = technologies;
  return (
    <>
      <TechCard {...technologie1} />
      <TechCard {...technologie2} />
      <TechCard {...technologie3} />
      <TechCard {...technologie4} />
    </>
  );
}

export default TechLists;
