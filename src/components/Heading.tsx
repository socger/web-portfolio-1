const Heading = ({ 
  children, theme 
}: { 
  children: React.ReactNode, 
  theme: string | undefined 
}) => {
  return (
    <h3
      className={`
            capitalize text-base md:text-lg
            ${theme === "dark" ? "text-zinc-400" : "text-violet-700"}
            font-bold mb-3
            `}
    >
      {children}
    </h3>
  );
};

export default Heading;
