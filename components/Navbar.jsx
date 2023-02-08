import React, { useState } from "react";
import Link from 'next/link'
import NavLinks from "./NavLinks";


const Navbar = () => {


  const [open, setOpen] = useState(false);
  return (
    <nav className=" ">
      <div className=" font-medium ">
        <div className="z-50  md:w-auto   flex justify-between">
       
          <div className="text-3xl  w-full bg-white  sticky-top opacity-80 fixed flex " onClick={() => setOpen(!open)}>
          <img name={`${open ? "close" : 'menu'}`} className=" md:hidden m-2 h-10 z-50  " src="/menu-svgrepo-com.svg" alt="" />

          </div>
        </div>
        <ul className="md:flex hidden flex-col mt-10 uppercase items-start gap-8 ">
          
          <NavLinks />
        </ul>
        <div className="md:block hidden">
        </div>
         {/* Mobile nav */}
         <ul
          className={`
        md:hidden bg-white fixed-top w-full z-40 bottom-0 p-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
         
          <NavLinks />
          <div className="py-5">
          </div>
        </ul>
      </div>
      </nav>
  );
};
export default Navbar;
