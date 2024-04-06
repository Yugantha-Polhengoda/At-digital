import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Typography } from "@/components/common/Typography";

const FooterItem = ({ title, links }) => {
  return (
    <Typography
      variant="body"
      displayAs="p"
      className="!text-base text-white underline-offset-4 hover:underline"
    >
      <Link href={links}>{title}</Link>
    </Typography>
  );
};

const Footer = () => {
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
      className="bg-[#6B3CC9] "
    >
      <div className="mx-auto max-w-[1440px]  px-4 py-12">
        <div className="mx-auto grid max-w-[1300px] grid-cols-1 place-items-center gap-8  px-2 md:grid-cols-4 md:place-items-start md:gap-0 ">
          <div className="flex flex-col items-center gap-1 md:items-start ">
            <Link href="/">
              <Image
                src="/assets/footerLogo.png"
                width={320}
                height={85}
                alt=""
                className="mb-4 h-[85px] w-[320px] object-contain"
              />
            </Link>

            <Typography
              variant="body"
              displayAs="p"
              className="text-center !text-base text-white md:text-start"
            >
            Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.

            </Typography>
          </div>
          <div></div>
          <div className="flex flex-col text-center md:text-start ">
            <Typography
              variant="subheading"
              displayAs="h3"
              className="h-[65px] text-white"
            >
              Our Technologies
            </Typography>
            <div className="flex flex-col gap-3 ">
              <FooterItem title="ReactJS" links="/" />
              <FooterItem title="Gatsby" links="/" />
              <FooterItem title="ReactJs" links="/" />
              <FooterItem title="NodeJs" links="/" />
            </div>
          </div>
          <div className="flex flex-col text-center md:text-start ">
            <Typography
              variant="subheading"
              displayAs="h3"
              className="h-[65px] text-white"
            >
              Our Services
            </Typography>
            <div className="flex flex-col gap-3">
              <FooterItem title="Social media Marketing" links="/" />
              <FooterItem title="Web & Mobile App Development" links="/" />
              <FooterItem title="Data & Analytics" links="/" />
            </div>
          </div>
        </div>

        <hr className=" w-81 mx-auto mb-8 mt-6" />
        <div className="flex flex-col justify-center gap-4 md:flex-row ">
          <Typography className="text-center !text-base text-white">
            Privacy Policy
          </Typography>
          <Typography className="text-center !text-base text-white">
            |
          </Typography>
          <Typography className="text-center !text-base text-white">
            Terms & Conditions
          </Typography>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
