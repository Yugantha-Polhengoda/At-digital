import React from "react";
import { motion } from "framer-motion";

import { Button } from "@nextui-org/react";
import Link from "next/link";
export default function Custom404() {
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
    >
      <div className="container flex h-screen max-w-[1440px] flex-col items-center justify-center ">
        <div className="flex flex-col gap-4 ">
          <p className="text-center text-4xl font-semibold  text-[#7f7f7f]">
            OOPS...
          </p>
          <h1 className="flex justify-center text-center text-9xl font-extrabold">
            404
          </h1>
          <p className="text-center text-4xl font-semibold  text-[#7f7f7f]">
            Page not found
          </p>
        </div>
        <Link href="/">
          <Button
            fullWidth={true}
            size="lg"
            radius="none"
            className=" mt-8 bg-[#000000]  py-6 font-semibold text-white"
          >
            Go to Home Page
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
