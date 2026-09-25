"use client";
import { useState } from "react";
import Link from "next/link";
import { IoChevronDown } from "react-icons/io5";
import { motion } from "framer-motion";
import Button from "./Button";

const SubMenu = ({ item, handleClose }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  const smoothDropdown = {
    hidden: {
      height: 0,
      transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
    },
    visible: {
      height: "fit-content",
      transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
    },
  };

  return (
    <div>
      {item.content ? (
        <div
          onClick={item.content && showSubnav}
          className="transition-all duration-300 flex justify-between items-center text-base text-dark py-4 px-4 rounded-lg hover:bg-slate-100 cursor-pointer"
        >
          <span>{item.title}</span>
          <div
            className={`transition-transform duration-300 ${
              subnav ? "rotate-180" : ""
            }`}
          >
            {item.content && <IoChevronDown />}
          </div>
        </div>
      ) : (
        <Link
          onClick={handleClose}
          href={item.slug}
          passHref
          target={item.blank ? "_blank" : "_self"}
          rel={item.blank ? "noopener noreferrer" : ""}
          className="transition-all duration-300 flex justify-between items-center text-base text-dark py-4 px-4 rounded-lg hover:bg-slate-100 cursor-pointer"
        >
          <span>{item.title}</span>
        </Link>
      )}
      <motion.div
        initial="hidden"
        animate={subnav ? "visible" : "hidden"}
        variants={smoothDropdown}
        className="overflow-hidden flex flex-col"
      >
        {subnav &&
          item.content.map((subItem, index) => (
            <Link
              href={subItem.slug}
              passHref
              onClick={handleClose}
              key={index}
              className="flex pl-8 items-center gap-1 text-dark"
            >
              {"-"}
              <div className="transition-all duration-300 flex justify-between items-center text-base py-2 px-3 rounded-lg hover:bg-slate-100 cursor-pointer">
                <span className="">{subItem.title}</span>
              </div>
            </Link>
          ))}
        <div className="h-2"></div>
      </motion.div>
      
    </div>
  );
};

export default function SidebarComp({ data, handleClose }) {
  return (
    <motion.div className="flex flex-col divide-y divide-slate-200">
      {data.map((item, index) => (
        <SubMenu handleClose={handleClose} item={item} key={index} />
      ))}
        <Link onClick={handleClose} href={"/OnlineAdmission"} name="admission link" className="sm:hidden pt-4">
            <Button size="small">
              <span>Online Admission</span>
            </Button>
          </Link>
    </motion.div>
  );
}
