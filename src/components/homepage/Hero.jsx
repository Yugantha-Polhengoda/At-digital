import React from "react";
import { Button, Link } from "@nextui-org/react";
import { Typography } from "../common/Typography";


function Hero() {
 

  return (
    <div className="relative h-screen ">
      <img
        src="/assets/homepage/heroimg.jpeg"
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full object-cover "
      ></img>

      <div className="mx-auto h-screen backdrop-brightness-[0.8]">
        <div className="relative z-[9999] mx-auto flex h-full max-w-[1440px]  lg:px-4  2xl:px-0">
          <div className="mt-[175px] grid  h-full grid-cols-1 items-center md:mt-[205px] lg:mt-[143px] lg:grid-cols-2">
            <div className="bg-gradient-to-r from-emerald-500 via-30% to-sky-500 to-90% p-8 md:w-full  lg:max-w-[660px]">
              <Typography
                variant="title"
                displayAs="h1"
                className="text-left text-white "
              >
                We Crush Your Competitors, Goals, And Sales Records - Without
                The B.S.
              </Typography>

              <div className="mt-6 flex gap-2 sm:mt-6 md:gap-4">
                <Link href="/contact-us">
                  <Button
                    color="primary"
                    variant="contained"
                    size="lg"
                    radius="none"
                    className="bg-[#F28D35] px-4 py-3 font-semibold uppercase text-white md:px-4 md:py-2"
                  >
                    get free consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
