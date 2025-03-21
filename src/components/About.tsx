import Heading from "./Heading";
import data from "@/data/data_about";
import SectionWrapper from "./SectionWrapper";
import { cn } from "@/lib/utils";

const About = (
  {
    theme
  }: {
    theme: string | undefined
  }
) => {
  const { heading, bio } = data;

  return (
    <SectionWrapper theme={theme}>
      <Heading 
        theme={theme}
      >
        about
      </Heading>

      <h3 
        className={cn(
          "text-xl md:text-2xl font-semibold capitalize",
          theme === 'dark' && "text-white",
          theme !== 'dark' && "text-black",
          "font-bold mb-3"
        )}
      >
        {heading} 👋
      </h3>

      <p 
        className={cn(
          "mt-3 text-base md:text-lg font-semibold",
          theme === 'dark' && "text-zinc-400",
          theme !== 'dark' && "text-black",
          "font-semibold mb-3"
        )}
      >
        {bio}
      </p>
    </SectionWrapper>
  );
};

export default About;
