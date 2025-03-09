"use client";

import { useTheme } from "next-themes";
import Heading from "./Heading";
import SectionWrapper from "./SectionWrapper";
import data from "@/data/data_skills";
import SkillComponent from "./SkillComponent";

const Skills = () => {
  const { theme } = useTheme();

  return (
    <SectionWrapper theme={theme} >
      <Heading theme={theme}>
        skills
      </Heading>

      <div className="flex flex-wrap items-center gap-5">
        {data.map((skill) => (
          <SkillComponent 
            skill={skill} 
            theme={theme}
            key={skill.id} 
          />
        ))}

      </div>
    </SectionWrapper>
  );
};

export default Skills;
