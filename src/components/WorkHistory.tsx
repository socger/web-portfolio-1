import Heading from "./Heading";
import SectionWrapper from "./SectionWrapper";
import data from "@/data/data_work";
import Image from "next/image";
import SkillComponent from "./SkillComponent";
import { cn } from "@/lib/utils";

const WorkHistory = (
  {
    theme
  }: {
    theme: string | undefined
  }
) => {
  return (
    <SectionWrapper theme={theme}>
      <Heading theme={theme}>
        work history
      </Heading>

      {data.map((work) => (
        <div className="mt-6 flex gap-x-6" key={work.id}>
          <div 
            className={cn(
              "relative w-[50px] h-[50px] rounded-full overflow-hidden border",
              theme === 'dark' && "bg-zinc-600",
              theme !== 'dark' && "bg-zinc-200",
              "px-3 py-2"
            )}
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
              className={cn(
                "capitalize font-bold text-base",
                theme === 'dark' && "text-white",
                theme !== 'dark' && "text-black",
              )}
            >
              {work.role}
            </h2>

            <span className="capitalize text-sm font-bold text-zinc-500">
              {work.company}
            </span>

            <div className="flex items-center gap-x-1">
              <span 
                className={cn(
                  "capitalize text-sm font-bold mt-[2px]",
                  theme === 'dark' && "text-white",
                  theme !== 'dark' && "text-black"
                )}
              >
                {work.type}
              </span>

              <span 
                className={cn(
                  theme === 'dark' && "text-white",
                  theme !== 'dark' && "text-black"
                )}
              >
                -
              </span>

              <span 
                className={cn(
                  "capitalize text-sm font-bold mt-[2px]",
                  theme === 'dark' && "text-white",
                  theme !== 'dark' && "text-black"
                )}
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
                    className={cn(
                      "text-base font-semibold",
                      theme === 'dark' && "text-zinc-400",
                      theme !== 'dark' && "text-zinc-900"
                    )}
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
