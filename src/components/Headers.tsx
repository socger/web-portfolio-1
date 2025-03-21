import Image from "next/image";
import data from "../data/data_header";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsTerminalFill } from "react-icons/bs";
import { IoIosSchool } from "react-icons/io";
import HeaderInfo from "./HeaderInfo";
import { cn } from "@/lib/utils";

const Header = (
  {
    theme
  }: {
    theme: string | undefined
  }
) => {
  const { image, name, jobTitle, address, experience, education } = data;

  return (
    <header 
      className={cn(
        "flex flex-wrap md:flex-row flex-col items-center gap-y-9 gap-x-8 p-4 border-2 rounded-xl",
        theme === 'dark' && "border-white",
        theme !== 'dark' && "border-violet-700"
      )}
    >
      {/* *** Block Image *** */}
      <div className="w-[200px] md:w-[150px] h-[200px] md:h-[150px] relative rounded-full overflow-hidden">
        <Image
          src={image}
          fill
          alt="profile image"
          className="w-full h-full object-cover hover:scale-125 hover:rotate-12 transition-all duration-500"
        />
      </div>

      {/* *** Block Info *** */}
      <div className="flex-1">

        {/* ** Section Name ** */}
        <h1 
          className={cn(
            "text-4xl md:text-5xl font-black capitalize",
            theme === 'dark' && "text-white",
            theme !== 'dark' && "text-violet-700"
          )}
        >
          {name}
        </h1>

        {/* ** Section jobTitle ** */}
        <h3 
          className={cn(
            "mt-2 text-lg md:text-xl font-semibold md:font-bold capitalize",
            theme === 'dark' && "text-zinc-400",
            theme !== 'dark' && "text-zinc-700"
          )}
        >
          {jobTitle}
        </h3>

        {/* ** Section Info ** */}
        <div className="flex flex-wrap items-center gap-y-1 gap-x-4 mt-2">
          <HeaderInfo
            Icon={ 
              <FaMapMarkerAlt 
                className={cn(
                  theme === 'dark' && "text-zinc-400",
                  theme !== 'dark' && "text-zinc-700"
                )} 
                size={16}
              />
            } 
            title={address}
            theme={theme}
          />

          <HeaderInfo
            Icon={ 
              <BsTerminalFill 
                className={cn(
                  theme === 'dark' && "text-zinc-400",
                  theme !== 'dark' && "text-zinc-700"
                )} 
                size={16} 
              />
            } 
            title={experience}
            theme={theme}
          />

          <HeaderInfo
            Icon={ 
              <IoIosSchool 
                className={cn(
                  theme === 'dark' && "text-zinc-400",
                  theme !== 'dark' && "text-zinc-700"
                )} 
                size={16} 
              />
            } 
            title={education}
            theme={theme}
          />
        </div>

      </div>

    </header>
  );
};

export default Header;
