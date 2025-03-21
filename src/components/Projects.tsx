import Heading from "./Heading";
import SectionWrapper from "./SectionWrapper";
import data from "@/data/data_projects";
import Image from "next/image";
import { RxOpenInNewWindow } from "react-icons/rx";
import Modal from "./Modal";
import { useState } from "react";
import { ProjectType } from "@/interfaces/interface_project_type";
import { cn } from "@/lib/utils";

const Projects = (
  {
    theme
  }: {
    theme: string | undefined
  }
) => {
  const [state, setState] = useState(false);
  const [details, setDetails] = useState<ProjectType | null>(null);

  const toggleModal = () => {
    setState(!state);
  };

  return (
    <>
      <Modal 
        state={state}
        details={details}
        toggleModal={toggleModal}
        theme={theme}
      />

      <SectionWrapper theme={theme}>
        <Heading theme={theme}>projects</Heading>

        {data.map((project) => (
          <div
            className="flex flex-wrap gap-5 w-full lg:w-8/12 mb-10"
            key={project.id}
          >
            <div className="relative w-full md:w-[120px] pt-[56.25%] md:pt-0 md:h-20 rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt="project image"
                fill
                className="w-full h-full absolute top-0 left-0 bottom-0 right-0"
              />
            </div>

            <div className="flex-1">
              <div className="flex space-x-3">
                <h2
                  className={cn(
                    "text-lg md:text-xl font-bold",
                    theme === 'dark' && "text-zinc-200",
                    theme !== 'dark' && "text-zinc-700",
                    "leading-[25px]"
                  )}
                >
                  {project.title}
                </h2>

                <RxOpenInNewWindow 
                  className={cn(
                    "text-[20px]",
                    theme === 'dark' && "text-white",
                    theme !== 'dark' && "text-zinc-900",
                    "cursor-pointer"
                  )}
                  onClick={() => {
                    toggleModal();
                    setDetails(project);
                  }}
                />
              </div>

              <p 
                className={cn(
                  "text-base font-semibold",
                  theme === 'dark' && "text-zinc-400",
                  theme !== 'dark' && "text-zinc-500",
                  "mt-2"
                )}
              >
                { 
                  project.description.length > 100 
                    ? <span>
                        {project.description.slice(0, 100)} ...
                      </span>
                    : project.description
                }
              </p>

            </div>
          </div>
        ))}
      </SectionWrapper>
    </>
  );
};

export default Projects;
