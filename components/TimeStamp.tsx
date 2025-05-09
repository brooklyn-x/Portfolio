"use client";

import { useEffect, useState } from "react";

export const TimeStamp = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      timeZone: "Asia/Kolkata",
      hour12: false,
    });
    const now = new Date();
    const formattedTime = formatter.format(now);
    setCurrentTime(`${formattedTime} (GMT+5)`);
  }, []);

  return (
    <section className="pt-8 text-xs text-neutral-500 dark:text-neutral-400 text-center">
      {currentTime}
    </section>
  );
};
