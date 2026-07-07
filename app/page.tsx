"use client";

import { useEffect, useState } from "react";

export default function Home() {
  // Change this to your launch date
  const launchDate = new Date("2026-08-31T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
      );

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  return (
    <main className="container">
      {/* Desktop Video */}
        <video
          className="video desktop-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/comingsoon.mp4" type="video/mp4" />
        </video>

        {/* Mobile Video */}
        <video
          className="video mobile-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/mobilevideo.mp4" type="video/mp4" />
        </video>

        <div className="countdown">
          <div className="time">
            <span>{timeLeft.days}</span>
            <small>DAYS</small>
          </div>
          <div className="divider"></div>
          <div className="time">
            <span>{timeLeft.hours}</span>
            <small>HOURS</small>
          </div>
          <div className="divider"></div>
          <div className="time">
            <span>{timeLeft.minutes}</span>
            <small>MINUTES</small>
          </div>
          <div className="divider"></div>
          <div className="time">
            <span>{timeLeft.seconds}</span>
            <small>SECONDS</small>
          </div>
        </div>
        
    </main>
  );
}