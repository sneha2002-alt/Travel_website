"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./Button";
import { heroData } from "@/data/index";
import { motion, useAnimation } from "framer-motion";

const Hero = () => {
  const [reviewCount, setReviewCount] = useState(0);
  const [isLocationVisible, setIsLocationVisible] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    // Increment reviews count
    const incrementReviews = () => {
      const targetCount = parseInt(heroData.reviews.count.replace("k", "000"));
      if (reviewCount < targetCount) {
        setReviewCount((prev) => Math.min(prev + 10, targetCount));
      }
    };

    const interval = setInterval(incrementReviews, 10);

    if (reviewCount >= parseInt(heroData.reviews.count.replace("k", "000"))) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [reviewCount]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isLocationVisible) {
      timer = setTimeout(() => {
        setIsLocationVisible(true);
      }, 20000); // 20 seconds
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isLocationVisible]);

  useEffect(() => {
    // Animate elements when component mounts
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    });
  }, [controls]);

  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 lg:pb-24 pb-20 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map mt-24" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        className="relative z-20 flex flex-1 flex-col xl:w-1/2"
      >
        <Image
          src={heroData.images.camp}
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">{heroData.title}</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          {heroData.description}
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src={heroData.images.star}
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            {reviewCount.toLocaleString()}k
            <span className="regular-16 lg:regular-20 ml-1">
              {heroData.reviews.text}
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Download App" variant="btn_green" />
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </motion.div>

      {isLocationVisible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative flex flex-1 items-start lg:mr-4"
        >
          <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8 ">
            <div className="flex flex-col">
              <div className="flexBetween">
                <p className="regular-16 text-gray-20">Location</p>
                <button
                  onClick={() => setIsLocationVisible(false)}
                  aria-label="Close"
                  className="p-1"
                >
                  <Image
                    src={heroData.images.close}
                    alt="close"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
              <p className="bold-20 text-white">
                {heroData.locationInfo.location}
              </p>
            </div>

            <div className="flexBetween">
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">Distance</p>
                <p className="bold-20 text-white">
                  {heroData.locationInfo.distance}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">Elevation</p>
                <p className="bold-20 text-white">
                  {heroData.locationInfo.elevation}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
