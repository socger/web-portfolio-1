import Heading from "./Heading";
import SectionWrapper from "./SectionWrapper";
import data from "@/data/data_reviews";

const Reviews = (
  {
    theme
  }: {
    theme: string | undefined
  }
) => {
  return (
    <SectionWrapper theme={theme}>
      <Heading theme={theme}>testimonials</Heading>

      <h1 className="text-3xl md:text-5xl font-bold capitalize mt-5">
        What &nbsp;
        <strong
          className={`
            ${theme === "dark" ? "text-zinc-400" : "text-violet-600"}
          `}
        >
          people say
        </strong>
      </h1>

      <p className="text-lg font-medium w-full lg:w-6/12 mb-10 mt-5">
        I developed products that are more than pretty. I make them shippable and usable.
      </p>
    </SectionWrapper>
  );
};

export default Reviews;
