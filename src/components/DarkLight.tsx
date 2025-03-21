"use client";

import { FaCloudMoon } from "react-icons/fa";
import { useTheme } from "next-themes";
import { LuSunMoon } from "react-icons/lu";
import { cn } from "@/lib/utils";

const DarkLight = () => {
  const { theme, setTheme } = useTheme();
  // console.log(theme);

  return (
    <div
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed top-4 right-4 w-12 h-[18px] rounded-full bg-violet-300 flex items-center z-[999999]"
    >
      <span
        className={cn(
          "w-7 h-7 flex items-center justify-center bg-violet-700 rounded-full transition-all duration-500",
          theme === 'dark' && "ml-5",
        )}
      >
        {theme === "light" ? (
          <FaCloudMoon className="text-white" size={14} />
        ) : (
          <LuSunMoon className="text-white" size={14} />
        )}
      </span>
    </div>
  );
};

export default DarkLight;
