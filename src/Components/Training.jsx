import React from "react";

function Training() {

    const checkList = [
        'Quick to ramp',
        'Easy to optimize',
        'Quick to scale up',
        'Works with all your existing tools'
    ]

  return (
    <div className="py-10 md:py-20 mx-8 md:mx-16 2xl:mx-auto max-w-[1700px] px-6 text-white rounded-3xl bg-[url(./assets/image.png)] bg-cover  grid grid-cols-1 place-items-center ">
      <div>
        <h2 className="text-[28px] sm:text-[40px] font-semibold">Train your aiDR on your...</h2>
        <span className="italic text-[28px] sm:text-[40px] text-cyan font-medium">prefered email st|</span>
        <p className="font-work_sans text-lg sm:text-[24px] font-light py-6">
          You’re in control. Train your aiDR on elements of your Marketing
          strategy.
        </p>

        <div className="pt-4 sm:pt-6 grid grid-cols-1 lg:grid-cols-2 space-y-2 md:space-y-4">
            {checkList.map((item,i)=>(
                <div key={i} className="flex gap-x-2 items-center">
                    <img src="/Vector2.png" alt="" className="size-[14px] sm:size-[19.5px]"/>
                    <p className="text-cyan text-base sm:text-xl font-medium hover:text-white hover:cursor-pointer transition-colors">{item}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Training;
