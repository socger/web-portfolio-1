"use client";

import { useTheme } from "next-themes";
import Heading from "./Heading";
import data from "@/data/about";
import SectionWrapper from "./SectionWrapper";

const About = () => {
  const { theme } = useTheme();
  const { heading, bio } = data;

  return (
    <SectionWrapper theme={theme}>
      <Heading 
        theme={theme}
      >
        about
      </Heading>
    </SectionWrapper>
  );
};

export default About;
