import ProjectCard from "../../Card/ProjectCard";
import { projects } from "../../../data/projects";

function ProjectsLists() {
  const [project1, project2, project3, project4] = projects;
  return (
    <>
      <ProjectCard {...project1} />
      <ProjectCard {...project2} />
      <ProjectCard {...project3} />
      <ProjectCard {...project4} />
    </>
  );
}

export default ProjectsLists;
