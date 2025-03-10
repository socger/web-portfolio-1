"use client";

import { useTheme } from "next-themes";
import Heading from "./Heading";
import SectionWrapper from "./SectionWrapper";
import data from "@/data/data_projects";
import Image from "next/image";
import { RxOpenInNewWindow } from "react-icons/rx";
import Modal from "./Modal";
import { useState } from "react";
import { ProjectType } from "@/interfaces/interface_project_type";

const Projects = () => {
  const { theme } = useTheme();
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
                  className={`
                    text-lg md:text-xl font-bold 
                    ${theme === "dark" ? "text-zinc-200" : "text-zinc-700"}
                    leading-[25px]
                  `}
                >
                  {project.title}
                </h2>

                <RxOpenInNewWindow 
                  className={`
                    text-[20px]
                    ${theme === "dark" ? "text-white" : "text-zinc-900"}
                    cursor-pointer
                  `}
                  onClick={() => {
                    toggleModal();
                    setDetails(project);
                  }}
                />
              </div>

              <p 
                className={`
                  text-base font-semibold
                  ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}
                  mt-2
                `}
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
