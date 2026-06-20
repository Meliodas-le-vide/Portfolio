import React from "react";
import ProjectCard from "../content/ProjectCard";

const Project = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6" id="projects">
      {/* Grille responsive automatique */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          src="/post-it.png"
          title="Post-it"
          description="Une application web frontend permettant de creer, modifier, supprimer et voir des post réalisé avec vuejs."
          
        />
        <ProjectCard
          src="/movies.png"
          title="Movie app"
          description="Une application web de film realisé avec nestjs pour le backend et nextjs pour le frontend."
          
        />
        <ProjectCard
          src="/trello.jpeg"
          title="Trello Clone"
           description="Une application mobile réalisé avec react Native , en utilisant l'api de Trello"        
        />
      </div>
    </div>
  );
};

export default Project;