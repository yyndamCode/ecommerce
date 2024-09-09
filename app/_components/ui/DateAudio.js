"use client";
import React, { useState, useEffect } from "react";

function DateAudio() {
  const [time, setTime] = useState({
    days: "03",
    hours: "23",
    minutes: "19",
    seconds: "19",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime({
        days: String(now.getDate()).padStart(2, "0"),
        hours: String(now.getHours()).padStart(2, "0"),
        minutes: String(now.getMinutes()).padStart(2, "0"),
        seconds: String(now.getSeconds()).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-6">
      <div className="rounded-full w-[62px] h-[62px] bg-primary-7 text-primary-20 flex justify-center items-center flex-col">
        <h6 className="text-base font-bold">{time.hours}</h6>
        <p className="text-[11px] leading-4 "> Hours</p>
      </div>
      <div className="rounded-full w-[62px] h-[62px] bg-primary-7 text-primary-20 flex justify-center items-center flex-col">
        <h6 className="text-base font-bold">{time.days}</h6>
        <p className="text-[11px] leading-4 "> Days</p>
      </div>
      <div className="rounded-full w-[62px] h-[62px] bg-primary-7 text-primary-20 flex justify-center items-center flex-col">
        <h6 className="text-base font-bold">{time.minutes}</h6>
        <p className="text-[11px] leading-4 "> Minutes</p>
      </div>
      <div className="rounded-full w-[62px] h-[62px] bg-primary-7 text-primary-20 flex justify-center items-center flex-col">
        <h6 className="text-base font-bold">{time.seconds}</h6>
        <p className="text-[11px] leading-4 "> Seconds</p>
      </div>
    </div>
  );
}

export default DateAudio;
