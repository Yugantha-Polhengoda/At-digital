import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typography } from "../common/Typography";
import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const accordionData = [
  {
    title: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
    desc: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
  },

  {
    title: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
    desc: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
  },

  {
    title: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
    desc: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
  },
];

const AccordionItem = ({ open, toggle, title, desc }) => {
  return (
    <div className="pt-[10px]">
      <div
        className="flex cursor-pointer items-center justify-between bg-[#FAF8FF] px-[50px] py-[25px]"
        onClick={toggle}
      >
        <p className="text-[22px] font-archivo font-semibold text-[#6B3CC9]">{title}</p>
        <div className="text-[27px]">
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="bg-[#FAF8FF] font-archivo px-[50px] pb-[20px] text-[16px] text-[#6F6C90]">
          {desc}
        </div>
      </Collapse>
    </div>
  );
};

const FAQ = () => {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 2,
          type: "tween",
          ease: "backOut",
        },
        y: 0,
      }}
      viewport={{ once: true }}
      className=" top-gap bottom-gap mx-auto max-w-[1064px] px-4"
    >
      <Typography
        variant="title2"
        displayAs="h2"
        className="flex justify-center text-center text-[#6B3CC9] "
      >
        Frequently Asked Questions
      </Typography>

      <div className="mt-8 ">
        <section className="  grid  place-items-center">
          <div className="max-w-[800px] px-[40px]">
            {accordionData.map((data, index) => {
              return (
                <AccordionItem
                  key={index}
                  open={index === open}
                  title={data?.title}
                  desc={data?.desc}
                  toggle={() => toggle(index)}
                />
              );
            })}
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default FAQ;
