import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function Improvement_Percentage() {
  const percentages = [
    { percentage: 32, des: "Improvement in Open Rates" },
    { percentage: 75, des: "Improvement in Ramp Time" },
    { percentage: 35, des: "Improvement in Meetings Booked" },
  ];

  const [counterUp, setCounterUp] = useState(false);

  return (
    <div className="py-10 md:py-20 mx-8 md:mx-16 2xl:mx-auto max-w-[1700px] px-6 sm:px-12 lg:px-16 2xl:px-24 text-white rounded-3xl bg-[url(./assets/Frame18.png)] bg-cover bg-left sm:bg-right space-y-4 md:space-y-12">
      <div className="lg:w-2/3 xl:w-1/2">
        <h2 className="text-[28px] sm:text-[32px] font-semibold">
          Allocate effort where your reps make an inpact.
        </h2>
        <span className="italic text-[24px] sm:text-[32px] text-cyan font-medium">
          Let us handle the rest.
        </span>
        <p className="font-work_sans text-lg leading-6 sm:leading-7 sm:text-[20px] font-light py-6">
          Keep your reps “in the air” -- out in the field and on the phone where
          they can build relationships.
        </p>
      </div>

      <ScrollTrigger
        onEnter={() => setCounterUp(true)}
        onExit={() => setCounterUp(false)}
      >
        <div className="flex flex-col md:flex-row gap-6 sm:gap-16 xl:w-2/3">
          {percentages.map((item, i) => (
            <div key={i}>
              <h3 className="text-[32px] sm:text-[40px] font-bold text-cyan">
                {counterUp && <CountUp start={0} end={item.percentage} />}%
              </h3>
              <p className="text-[18px] sm:text-[20px] font-medium">{item.des}</p>
            </div>
          ))}
        </div>
      </ScrollTrigger>
    </div>
  );
}

export default Improvement_Percentage;
