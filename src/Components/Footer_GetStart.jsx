import React from "react";
import { Button } from "@heroui/react";
import { UpperArrowIcon } from "./Hero";

function Footer_GetStart() {
  return (
    <section className="w-full">
      <div className="text-white w-full mx-auto md:w-[700px] lg:w-[900px] xl:w-[1200px] 2xl:w-[1400px] py-20 sm:py-24 space-y-2 sm:space-y-4 px-6 sm:px-12 md:px-20 xl:px-28 2xl:px-52 text-center">
        <h6 className="text-cyan text-base sm:text-2xl">AI SDRs (aiDRs)</h6>
        <h2 className="text-[36px] font-medium italic leading-tight sm:leading-none">
          Embrace{" "}
          <span className=" not-italic  style font-bold">the new era of </span>
          outbound.
        </h2>
        <p className="font-work_sans font-light  text-lg sm:text-xl pt-3">
          Train an aiDR on your ICP and messaging matrix. Activate it on a
          patch. It will send personalized sequences to every target contact.
        </p>
        <Button
          variant="flat"
          radius="full"
          endContent={<UpperArrowIcon />}
          className="bg-cyan text-dark_bg font-work_sans font-medium w-full sm:w-fit"
        >
          Sign Up for the Beta
        </Button>
      </div>
    </section>
  );
}

export default Footer_GetStart;
