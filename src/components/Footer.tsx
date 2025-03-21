import { cn } from "@/lib/utils";

const Footer = ({ theme }: { theme: string | undefined }) => {
  return (
    <footer className="border-t border-t-zinc-100 dark:border-t-zinc-800 mt-10">
      <div className="max-w-screen-xl mx-auto px-4 py-5">
        <p 
          className={cn(
            "text-sm font-semibold text-center",
            theme === 'dark' && "text-zinc-400",
            theme !== 'dark' && "text-zinc-800"
          )}
        >
          developed by{" "}
          <strong
            className={cn(
              "uppercase",
              theme === 'dark' && "text-zinc-200",
              theme !== 'dark' && "text-zinc-800"
            )}
          >
            socger
          </strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
