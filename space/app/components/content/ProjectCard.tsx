import Image from "next/image";

interface Props {
  src: string;
  title: string;
  description: string;
  tags?: string[]; // Optionnel : pour ajouter des badges (ex: ["React", "Tailwind"])
}

const ProjectCard = ({ src, title, description, tags = [] }: Props) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-purple-500/50 transition-all duration-300 flex flex-col h-full shadow-xl hover:shadow-purple-500/10">
      
      {/* Conteneur de l'image avec zoom au survol */}
      <div className="relative h-48 w-full overflow-hidden sm:h-52">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {/* Voile sombre dégradé sur l'image */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
      </div>

      {/* Contenu textuel */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Badges de technologies */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span key={index} className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 bg-purple-500/10 text-purple-400 rounded-md border border-purple-500/20">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-200 group-hover:text-purple-400">
          {title}
        </h3>
        
        <p className="text-sm text-slate-400 leading-relaxed flex-grow">
          {description}
        </p>

        {/* Lien d'action optionnel */}
        {/* <div className="mt-4 pt-4 border-t border-slate-800/60 flex items-center text-xs font-semibold text-slate-400 group-hover:text-white transition-colors duration-200">
          Voir le projet 
          <svg className="w-3 h-3 ml-1.5 transform transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectCard;