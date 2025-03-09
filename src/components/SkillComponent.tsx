import classNames from "classnames";
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
      className={`
        flex items-center space-x-2
        ${theme === "dark" ? "bg-zinc-600" : "bg-zinc-200"}
        px-3 py-2
      `}
    >
      <div 
        className={
          classNames(
            "relative w-[25px] h-[25px]", 
            { "bg-white rounded-full": skill.name === "next", },
            { "bg-white rounded-full": skill.name === "express", }
          )
        }
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
        className={`
          text-sm md:text-base capitalize
          ${theme === "dark" ? "text-white" : "text-zinc-700"}
          font-bold
        `}
      >
        {skill.name}
      </span>
    </div>
  );
};

export default SkillComponent;
