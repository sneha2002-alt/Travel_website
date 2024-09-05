import Image from "next/image";
import React from "react";

const Quote = () => {
  return (
    <div className="max-container padding-container w-full h-full min-w-[1000px] min-h-[400px] flex">
      <div className="bg-green-50 p-8 xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
        <h2 className="text-white text-2xl md:text-3xl 2xl:text-5xl capitalize">
          <strong>Feeling Lost</strong> And Not Knowing The Way?
        </h2>
        <p className="text-white text-sm xl:text-base mt-5">
          Starting from the anxiety of the climbers when visiting a new climbing
          location, the possibility of getting lost is very large. That's why we
          are here for those of you who want to start an adventure
        </p>
        <Image
          src="/quote.svg"
          alt="camp-2"
          width={186}
          height={219}
          className="absolute right-0 top-0"
        />
      </div>
    </div>
  );
};

export default Quote;
