import { useState } from "react";
import { useLoaderData } from 'react-router-dom';
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import ProjectContainer from "../project/ProjectContainer";
import { ProjectInfo } from "../info/project-info";

function ProjectPage() {
  const projectDetails = useLoaderData();
  const [project, setProject] = useState(projectDetails);

  return (
    <>
      <Nav />
      <ProjectContainer project={project} />
      <Footer />
    </>
  );
}

export default ProjectPage;

export async function loader({ params }) {
  try {
    const project = ProjectInfo.find(proj => proj.paramTitle === params.project);

    if (!project) {
      throw new Error(`Project with paramTitle "${params.project}" not found.`);
    }

    return project;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
