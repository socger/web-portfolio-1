import { cn } from "@/lib/utils";

const SectionWrapper = ({ 
  children, theme 
}: { 
  children: React.ReactNode, 
  theme: string | undefined 
}) => {
    return (
      <section 
        className={cn(
          "border-t py-7 mt-7",
          theme === 'dark' && "border-zinc-500",
          theme !== 'dark' && "border-zinc-300",
          "font-bold mb-3"
        )}
      >
        {children}
      </section>
    );
  };
  
  export default SectionWrapper;
  