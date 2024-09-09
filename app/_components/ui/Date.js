"use client";
import React, { useState, useEffect } from "react";

function DateComponent() {
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
    <div className="flex items-end ml-[86px]">
      <div className="days">
        <p className="text-xs mb-1">Days</p>
        <h2 className="text-[32px] leading-7 font-semibold">{time.days}</h2>
      </div>
      <span className="mx-2 text-2xl text-[#E07575]">:</span>
      <div className="hour">
        <p className="text-xs mb-1">Hour</p>
        <h2 className="text-[32px] leading-7 font-semibold">{time.hours}</h2>
      </div>
      <span className="mx-2 text-2xl text-[#E07575]">:</span>
      <div className="minutes">
        <p className="text-xs mb-1">Minutes</p>
        <h2 className="text-[32px] leading-7 font-semibold">{time.minutes}</h2>
      </div>
      <span className="mx-2 text-2xl text-[#E07575]">:</span>
      <div className="seconds">
        <p className="text-xs mb-1">Seconds</p>
        <h2 className="text-[32px] leading-7 font-semibold">{time.seconds}</h2>
      </div>
    </div>
  );
}

export default DateComponent;
