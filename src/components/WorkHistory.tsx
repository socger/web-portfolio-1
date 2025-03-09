"use client";

import { useTheme } from "next-themes";
import Heading from "./Heading";
import SectionWrapper from "./SectionWrapper";
import data from "@/data/data_work";
import classNames from "classnames";
import Image from "next/image";
import SkillComponent from "./SkillComponent";

const WorkHistory = () => {
  const { theme } = useTheme();

  return (
    <SectionWrapper theme={theme}>
      <Heading theme={theme}>
        work history
      </Heading>

      {data.map((work) => (
        <div className="mt-6 flex gap-x-6" key={work.id}>
          <div 
            className={`
              relative w-[50px] h-[50px] rounded-full overflow-hidden border
              ${theme === "dark" ? "bg-zinc-600" : "bg-zinc-200"}
              px-3 py-2
            `}
          >
            <Image
              src={work.image}
              alt=""
              fill
              className="w-full h-full object-cover"
            />            
          </div>

          <div className="flex-1">
            <h2 
              className={`
                capitalize font-bold text-base
                ${theme === "dark" ? "text-white" : "text-black"}
              `}
            >
              {work.role}
            </h2>

            <span className="capitalize text-sm font-bold text-zinc-500">
              {work.company}
            </span>

            <div className="flex items-center gap-x-1">
              <span 
                className={`
                  capitalize text-sm font-bold mt-[2px]
                  ${theme === "dark" ? "text-white" : "text-black"}
                `}
              >
                {work.type}
              </span>

              <span 
                className={`
                  ${theme === "dark" ? "text-white" : "text-black"}
                `}
              >
                -
              </span>

              <span 
                className={`
                  capitalize text-sm font-bold mt-[2px]
                  ${theme === "dark" ? "text-white" : "text-black"}
                `}
              >
                {work.date}
              </span>
            </div>

            {work.skills && (
              <div className="flex gap-2 flex-wrap my-2">
                {work?.skills?.map((skill) => (
                  <SkillComponent
                    skill={skill}
                    theme={theme}
                    key={skill.id}
                  />
                ))}
              </div>
            )}

            {work.options && (
              <div className="mt-2">
                {work?.options?.map((option, key ) => (
                  <li 
                    key={key} 
                    // className="text-zinc-900 text-base font-semibold"
                    className={`
                      text-base font-semibold
                      ${theme === "dark" ? "text-zinc-400" : "text-zinc-900"}
                    `}
                  >
                    {option}
                  </li>
                ))}
              </div>
            )}

          </div>
        </div>
      ))}
    </SectionWrapper>
  );
};

export default WorkHistory;
