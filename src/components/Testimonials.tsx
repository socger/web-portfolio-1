import Image from "next/image";
import Heading from "./Heading";
import SectionWrapper from "./SectionWrapper";
import data from "@/data/data_testimonials";
import Masonry from "react-masonry-css";
import { useState } from "react";

const Testimonials = (
  {
    theme
  }: {
    theme: string | undefined
  }
) => {
  const [count, setCount] = useState(6);

  return (
    <SectionWrapper theme={theme}>
      <Heading theme={theme}>
        testimonials
      </Heading>

      <h1 className="text-3xl md:text-5xl font-black capitalize mt-5">
        What&nbsp;
        <strong
          className={`
            ${theme === "dark" ? "text-zinc-400" : "text-violet-600"}
          `}
        >
          people say
        </strong>
      </h1>

      <p className="text-lg font-medium w-full lg:w-6/12 mb-10 mt-5 leading-[22px]">
        I developed products that are more than pretty. I make them shippable and usable.
      </p>


      <div className="relative w-full">
        { data.length !== count
          ? (
          <div 
            className={`
              absolute bottom-0 w-full h-full bg-gradient-to-t
              ${theme === "dark" ? "from-black/100" : "from-white/80"}
              to-transparent flex justify-center items-end z-[9999] 
            `}
          >
            <button 
              className="h-[45px] bg-violet-600 text-white rounded-lg font-medium text-base capitalize px-4 mb-25"
              onClick={() => {setCount(count + 6);}}
            >
              show more
            </button>
          </div>
          )
          : (
            null
          )
        }

        <Masonry
          breakpointCols={
            {
              default: 3,
              1200: 3,
              1000: 2,
              700: 1
            }
          }
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          
          {data.slice(0, count).map((testimonial) => (
            <div 
              key={testimonial.id}
              // className="bg-zinc-50 dark:bg-zinc-900 p-7 rounded-lg border border-zinc-100 dark:border-zinc-800" 
              className={`
                ${theme === "dark" ? "bg-zinc-900" : "bg-zinc-50"}
                p-7 rounded-lg border 
                ${theme === "dark" ? "border-zinc-800" : "border-zinc-100"}
              `}
            >
              <div className="flex gap-5">
                <div className="relative w-[56px] h-[56px] rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    fill
                    alt="client image"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h1 
                    className={`
                      text-lg font-bold capitalize 
                      ${theme === "dark" ? "text-zinc-300" : "text-zinc-900"}
                    `}
                  >
                    {testimonial.name}
                  </h1>

                  <span 
                    className={`
                      block mt-[1px] text-base capitalize font-medium leading-[20px]
                      ${theme === "dark" ? "text-zinc-300" : "text-zinc-500"}
                    `}
                  >
                    {testimonial.company}
                  </span>
                </div>
              </div>

              <p 
                className={`
                  mt-4 text-base 
                  ${theme === "dark" ? "text-zinc-400" : "text-zinc-600"}
                  font-medium leading-[20px]
                `}
              >
                {testimonial.comment}
              </p>
            </div>
          ))}

        </Masonry>
      </div>

    </SectionWrapper>
  );
};

export default Testimonials;
