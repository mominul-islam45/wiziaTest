import React, { useState } from "react";
import ReviewCarouselControls from './ReviewCarouselControls'

function ReviewCarousel() {
  const slides = [
    {
      review:
        "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      name: "John Doe",
      designation: "Chief Strategy Officer @ Company",
    },
    {
      review:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      name: "Jane Smith",
      designation: "Head of Marketing @ Organization",
    },
    {
      review:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
      name: "Emily Johnson",
      designation: "Product Manager @ TechCorp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    // Review Slider
    <div className="py-16 px-8 sm:px-16 lg:px-32 xl:px-52 max-w-[1600px] mx-auto relative">
      {/* Review Slides */}
      <div className="flex flex-col items-center text-center text-white font-work_sans">
        {/* quotation icon */}
        <div className="size-[56px] sm:size-[72px] bg-light_bg rounded-full flex items-center justify-center">
          <img
            src="./quotation.png"
            className="w-[27px] sm:w-[36px]"
            alt=""
          />
        </div>

        <h4 className="text-[20px] leading-8 sm:leading-10 sm:text-[32px] font-light py-8 h-[200px]">
          {slides[currentIndex].review}
        </h4>
        <h6 className="text-cyan text-lg sm:text-2xl font-semibold hover:cursor-pointer">{slides[currentIndex].name}</h6>
        <p className=" text-lg sm:text-2xl font-light">{slides[currentIndex].designation}</p>
      </div>

      {/* Slides Controls */}
      <ReviewCarouselControls slides={slides} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
    </div>
  );
}

export default ReviewCarousel;
