const SectionWrapper = ({ 
  children, theme 
}: { 
  children: React.ReactNode, 
  theme: string | undefined 
}) => {
    return (
      <section 
        className={`
          border-t py-7 mt-7
          ${theme === "dark" ? "border-zinc-500" : "border-zinc-300"}
          font-bold mb-3
        `}
      >
        {children}
      </section>
    );
  };
  
  export default SectionWrapper;
  