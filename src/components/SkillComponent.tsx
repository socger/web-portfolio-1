import { cn } from "@/lib/utils";
import Image from "next/image";

const SkillComponent = ({
  skill, 
  theme
}:{
  skill: { 
    id: number, 
    name: string, 
    image: string 
  }, 
  theme: string | undefined
}) => {

  return (
    <div
      className={cn(
        "flex items-center space-x-2",
        theme === 'dark' && "bg-zinc-600",
        theme !== 'dark' && "bg-zinc-200",
        "px-3 py-2"
      )}
    >
      <div 
        className={cn(
            "relative w-[25px] h-[25px]", 
            skill.name === 'next' && "bg-white rounded-full",
            skill.name === 'express' && "bg-white rounded-full",
          )}
      >
        <Image
          src={skill.image}
          // alt={`${skill.name || 'Skill'} icon`}
          alt=""
          fill
          className="w-full h-full object-cover"
        />
      </div>

      <span
        className={cn(
          "text-sm md:text-base capitalize",
          theme === 'dark' && "text-white",
          theme !== 'dark' && "text-zinc-700",
          "font-bold"
        )}
      >
        {skill.name}
      </span>
    </div>
  );
};

export default SkillComponent;
