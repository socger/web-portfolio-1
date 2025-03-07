"use client";

import { useTheme } from "next-themes";
import Heading from "./Heading";
import data from "@/data/contacts";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";

const Contacts = () => {
  const { theme } = useTheme();

  return (
    <SectionWrapper theme={theme} >
      <Heading 
        theme={theme}
      >
        contacts
      </Heading>

      <div className="flex flex-wrap items-center gap-5">
        {data.map((contact) => (
          <Link 
            href={contact.link} 
            key={contact.id} 
            target="_blank" 
            className={`
              flex items-center space-x-2
              ${theme === "dark" ? "bg-zinc-600" : "bg-zinc-200"}
              px-3 py-2
            `}
          >
            {contact.name === "github"    && ( <FaGithub         size={18} className={ `${theme === "dark" ? "text-white" : "text-black"} `} /> )}
            {contact.name === "twitter"   && ( <FaSquareXTwitter size={18} className={ `${theme === "dark" ? "text-white" : "text-black"} `} /> )}
            {contact.name === "linkedin"  && ( <FaLinkedin       size={18} className={ `${theme === "dark" ? "text-white" : "text-[#0a66c2]"} `} /> )}
            {contact.name === "youtube"   && ( <FaYoutube        size={18} className={ `${theme === "dark" ? "text-white" : "text-[#ff0000]"} `} /> )}
            {contact.name === "instagram" && ( <FaInstagram      size={18} className={ `${theme === "dark" ? "text-white" : "text-[#c32aa3]"} `} /> )}
            {contact.name === "facebook"  && ( <FaFacebookSquare size={18} className={ `${theme === "dark" ? "text-white" : "text-[#1877f2]"} `} /> )}
            {contact.name === "behance"   && ( <FaBehanceSquare  size={18} className={ `${theme === "dark" ? "text-white" : "text-[#003ECB]"} `} /> )}
            {contact.name === "medium"    && ( <FaMedium         size={18} className={ `${theme === "dark" ? "text-white" : "text-black"} `} /> )}
            {contact.name === "email"     && ( <MdEmail          size={18} className={ `${theme === "dark" ? "text-white" : "text-black"} `} /> )}
            {contact.name === "cv"        && ( <FaRegUserCircle  size={18} className={ `${theme === "dark" ? "text-white" : "text-black"} `} /> )}

            <span 
              className={`
                text-sm md:text-base capitalize
                ${theme === "dark" ? "text-white" : "text-zinc-700"}
                font-bold
              `}
            >
              {contact.label}
            </span>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Contacts;
