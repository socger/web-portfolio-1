import { MdClose } from "react-icons/md";

const Modal = ({state, theme}:{theme: string | undefined}) => {
  return (
    <div 
      className="fixed inset-0 w-full h-screen bg-black/25 p-4 backdrop-blur z-[9999999] flex items-center justify-center"
    >
      <MdClose className="cursor-pointer text-[25px] absolute top-6 right-6 text-black dark:text-white" />

      <div 
        className={`
          max-w-screen-xl w-full 
          ${theme === "dark" ? "bg-zinc-900" : "bg-white"}
          p-6 rounded-lg border 
          ${theme === "dark" ? "border-zinc-700" : "border-zinc-100"}
          max-h-[80vh]
        `}
  
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae nulla laborum perspiciatis dolorem excepturi libero magni? Alias molestiae cum repellendus libero sunt? Maxime et architecto omnis, corrupti cumque non!
      </div>
    </div>
  );
};

export default Modal;
