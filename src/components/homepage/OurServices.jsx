import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { Typography } from "../common/Typography";

const OurServices = () => {
  return (
    <>
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
        className=" gird-cols-1  top-gap  bottom-gap  mx-auto grid max-w-[1064px] px-4 md:grid-cols-2 "
      >
        <div className="flex items-center justify-center ">
          <Image
            src="/assets/homepage/webi.png"
            alt="about-us"
            width={480}
            height={500}
            className=""
          />
        </div>
        <div className="flex flex-col justify-center gap-4 pl-0 md:pr-4">
          <Typography
            variant="title2"
            displayAs="h2"
            className="font-Poppins w-full
            text-center
            text-[#6B3CC9] md:text-start"
          >
            Web & Mobile App Development
          </Typography>
          <Typography
            variant="body"
            displayAs="p"
            className="text-center md:text-start"
          >
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </Typography>
          <div className="flex items-center justify-center md:justify-start ">
            <Link href="/">
              <Button
                color="primary"
                variant="contained"
                size="lg"
                radius="none"
                className=" bg-[#F28D35]  px-4 py-3 font-semibold uppercase text-white md:py-2"
              >
                learn more
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
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
        className=" gird-cols-1  bottom-gap  mx-auto grid max-w-[1064px] px-6  md:grid-cols-2 lg:px-4 "
      >
        <div className="flex flex-col justify-center gap-4 pl-0 md:pr-4">
          <Typography
            variant="title2"
            displayAs="h2"
            className="w-full text-center text-[#6B3CC9] md:text-start"
          >
            Digital Strategy Consulting
          </Typography>
          <Typography
            variant="body"
            displayAs="p"
            className="text-center md:text-start"
          >
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </Typography>
          <div className="flex items-center justify-center md:justify-start ">
            <Link href="/">
              <Button
                color="primary"
                variant="contained"
                size="lg"
                radius="none"
                className=" bg-[#F28D35]  px-4 py-3 font-semibold uppercase text-white md:py-2"
              >
                learn more
              </Button>
            </Link>
          </div>
        </div>
        <div className="order-first flex items-center justify-center md:order-last ">
          <Image
            src="/assets/homepage/DigitalI.png"
            alt="about-us"
            width={480}
            height={500}
            className=""
          />
        </div>
      </motion.div>
    </>
  );
};

export default OurServices;
