import { ProjectType } from "@/interfaces/interface_project_type";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import SkillComponent from "./SkillComponent";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";
import { cn } from "@/lib/utils";

const Modal = (
  { state,
    details,
    toggleModal,
    theme
  }:{
    state: boolean,
    details: ProjectType | null,
    toggleModal: () => void,
    theme: string | undefined
  }
) => {
  return state ? (
    <div 
      className="fixed inset-0 w-full h-screen bg-black/25 p-4 backdrop-blur z-[9999999] flex items-center justify-center"
    >
      <MdClose 
        className={cn(
          "cursor-pointer text-[25px] absolute top-6 right-6",
          theme === 'dark' && "text-white",
          theme !== 'dark' && "text-black0",
          "leading-[25px]"
        )}
        onClick={toggleModal}
      />

      <div 
        className={cn(
          "max-w-screen-xl w-full",
          "p-6 rounded-lg border",
          theme === 'dark' && "bg-zinc-900 border-zinc-700",
          theme !== 'dark' && "bg-white border-zinc-100",
          "max-h-[80vh] overflow-x-auto"
        )}
  
      >
        <div className="flex flex-wrap  lg:space-x-6">
            <div className="relative w-full lg:w-[400px] rounded-lg overflow-hidden">
              <div className="pt-[56.25%] ">
                <Image
                  src={details?.image || ''}
                  alt="project image"
                  fill
                  className="w-full h-full absolute inset-0"
                />
              </div>
            </div>

            <div className="flex-1 mt-5 lg:mt-0">
              <h2
                className={cn(
                  "text-xl md:text-2xl font-bold",
                  theme === 'dark' && "text-zinc-200",
                  theme !== 'dark' && "text-zinc-700",
                  "leading-[25px]"
                )}
              >
                {details?.title}
              </h2>

              <div className="flex flex-wrap items-center gap-3 mt-4">
                {details?.skills.map((skill) => (
                  <SkillComponent
                    skill={skill} 
                    theme={theme}
                    key={skill.id} 
                  />
                ))}
              </div>

              <div
                className="flex flex-wrap items-center gap-3 mt-3"
              >
                <Link 
                  href={details?.source_code || ''} 
                  target="_blank" 
                  className={cn(
                    "flex items-center space-x-2",
                    theme === 'dark' && "bg-zinc-600 text-white",
                    theme !== 'dark' && "bg-zinc-200 text-black",
                    "px-3 py-2"
                  )}
                >
                  <FaGithub
                    size={18} 
                    className={cn(
                      theme === 'dark' && "text-white",
                      theme !== 'dark' && "text-black"
                    )} 
                  />

                  <span 
                    className={cn(
                      "text-sm md:text-base capitalize",
                      theme === 'dark' && "text-white",
                      theme !== 'dark' && "text-zinc-700",
                      "font-bold"
                    )}
                  >
                    source code
                  </span>
                </Link>

                <Link 
                  href={details?.demo || ''} 
                  target="_blank" 
                  className={cn(
                    "flex items-center space-x-2",
                    theme === 'dark' && "bg-zinc-600 text-white",
                    theme !== 'dark' && "bg-zinc-200 text-black",
                    "px-3 py-2"
                  )}
                >
                  <TfiWorld
                    size={18} 
                    className={cn(
                      theme === 'dark' && "text-white",
                      theme !== 'dark' && "text-black"
                    )} 
                  />

                  <span 
                    className={cn(
                      "text-sm md:text-base capitalize",
                      theme === 'dark' && "text-white",
                      theme !== 'dark' && "text-zinc-700",
                      "font-bold"
                    )}
                  >
                    demo
                  </span>
                </Link>

                <p 
                  className={cn(
                    "text-base font-medium capitalize",
                      theme === 'dark' && "text-zinc-400",
                      theme !== 'dark' && "text-zinc-700",
                    "leading-[20px] mt-6"
                  )}
                >
                  {details?.description}
                </p>
              </div>
            </div>

        </div>
      </div>
    </div>
  ) : ("");
};

export default Modal;
