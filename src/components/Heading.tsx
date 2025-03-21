import { cn } from "@/lib/utils";

const Heading = ({ 
  children, theme 
}: { 
  children: React.ReactNode, 
  theme: string | undefined 
}) => {
  return (
    <h3
      className={cn(
        "capitalize text-base md:text-lg",
        theme === 'dark' && "text-zinc-400",
        theme !== 'dark' && "text-zinc-700",
        "font-bold mb-3"
      )}
    >
      {children}
    </h3>
  );
};

export default Heading;
