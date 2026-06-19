

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <>
      {/* <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain"
        />

        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </div> */}
      <div className="bg-white dark:bg-gray-900">
        <div className="px-8 py-10 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 lg:py-20 sm:py-16">
          <div className="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative">
              <a href="#_" className="block overflow-hidden group rounded-xl shadow-lg">
                <img src={src} className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="Adventure" />
              </a>
              <div className="relative mt-5">
                <a href="#" className="block mb-3 hover:underline">
                  <h2 className="text-2xl font-bold leading-5 text-black dark:text-white transition-colors duration-200 hover:text-purple-700 dark:hover:text-purple-400">
                    {title}
                  </h2>
                </a>
                <p className="mb-4 text-gray-700 dark:text-gray-300">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default ProjectCard;


