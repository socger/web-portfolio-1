interface HeaderInfoProps {
  Icon: React.ReactNode;
  title: string;
  theme: string | undefined;
}

const HeaderInfo = ({Icon, title, theme}: HeaderInfoProps) => {
  return (
    <div className="flex items-center space-x-2">
      {Icon}
      <span
        className={`capitalize text-sm md:text-base font-semibold ${
          theme === "dark" ? "text-zinc-400" : "text-zinc-900"
        }`}
      >
        {title}
      </span>
    </div>
  );
};

export default HeaderInfo;
