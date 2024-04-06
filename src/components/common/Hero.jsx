import React from "react";
import { Typography } from "../common/Typography";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import Image from "next/image";

const Hero = ({ img, title, breadcrumbs, orientation }) => {
  const position =
    orientation === "top"
      ? "object-top"
      : orientation === "center"
      ? "object-center"
      : "object-bottom";

  return (
    <div className="relative min-h-[200px] md:min-h-[50vh]">
      <Image
        src={img}
        priority={true}
        className={`absolute bottom-0 left-0 right-0 top-0 h-full w-full object-cover ${position}`}
        layout="fill"
      />

      <div className="top-gap bottom-gap mx-auto h-full min-h-[200px] items-center backdrop-brightness-[0.4] md:min-h-[50vh]">
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-start px-4 md:px-8 2xl:px-0">
          <div className="grid h-full grid-cols-1 items-center lg:grid-cols-2">
            <div className="h-full max-w-[910px]">
              <Breadcrumbs>
                {breadcrumbs.map((item, index) => (
                  <BreadcrumbItem
                    key={index}
                    href={item?.link || "/"}
                    classNames={{
                      root: "text-white",
                      separator: "!text-white",
                      item: "text-white",
                    }}
                  >
                    <Typography
                      variant="body"
                      displayAs="p"
                      className="text-left text-white text-sm md:text-base"
                    >
                      {item?.title}
                    </Typography>
                  </BreadcrumbItem>
                ))}
              </Breadcrumbs>

              <Typography
                variant="title2"
                displayAs="h1"
                className="md:mt-8 mt-4 text-left text-white"
              >
                {title}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
