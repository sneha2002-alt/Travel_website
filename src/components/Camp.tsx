"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { PEOPLE_URL, CAMPSITE_DATA, CAMPSITE_HEADING } from "@/data/index";
import Image from "next/image";

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}) => {
  return (
    <div
      className={`h-full lg:min-h-[500px] w-full lg:min-w-[800px] md:min-w-[500px] md:min-h-[350px] min-w-[300px] min-h-[240px]  ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl rounded-3xl 2xl:rounded-5xl`}
    >
      <div className="relative flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-green-50 lg:p-4 p-3">
            <Image
              src="/folded-map.svg"
              alt="map"
              width={28}
              height={28}
              className="w-4 h-4 md:w-6 md:h-6"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-white font-bold md:text-lg text-md">{title}</h4>
            <p className="text-white md:text-sm text-xs">{subtitle}</p>
          </div>
        </div>
        <div className="absolute lg:-bottom-96 lg:right-0 left-0 md:-bottom-56 -bottom-32 flex items-center md:gap-6 gap-4 p-6 lg:px-20 lg:py-10">
          <span className="flex md:-space-x-4 -space-x-3  overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block md:h-10 md:w-10 h-7 w-7 rounded-full"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="text-white font-bold text-sm md:text-lg lg:text-xl">
            {peopleJoined}
          </p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  const controls = useAnimation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = () => {
      controls.start({
        x: -scrollContainerRef.current!.scrollWidth,
        transition: {
          duration: 50,
          ease: "linear",
          repeat: Infinity,
        },
      });
    };

    scroll();
  }, [controls]);

  return (
    <section className="relative flex flex-col lg:pb-20  xl:mb-20">
      <h2 className="max-container padding-container text-center bold-32 md:bold-52 mb-6">
        {CAMPSITE_HEADING}
      </h2>
      <div ref={scrollContainerRef} className="overflow-hidden">
        <motion.div className="flex gap-8 py-10" animate={controls}>
          {CAMPSITE_DATA.map((camp, index) => (
            <CampSite
              key={index}
              backgroundImage={camp.backgroundImage}
              title={camp.title}
              subtitle={camp.subtitle}
              peopleJoined={camp.peopleJoined}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Camp;
