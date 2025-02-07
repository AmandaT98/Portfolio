import ProjectList from "../components/projectList"; //Importerar porjekt listan med Github-API
import './Projects.css'; 

export function Projects() {
    return (
      <section className="container">
        <h1>PROJEKT</h1>
        <p>Här kan du se mina olika projekt som jag har jobbat med</p>
        <ProjectList /> 
      </section>
    );
  }
  