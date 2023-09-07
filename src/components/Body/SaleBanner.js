import React, { useEffect, useState } from "react";
import "./style.scss";

const SaleBanner = () => {
  const [days, setDays] = useState(0);
  const [hour, setHours] = useState(0);
  const [min, setMins] = useState(0);
  const [sec, setSec] = useState(0);
  const deadline = new Date("November 7, 2023 00:00:00").getTime();

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);
    return () => clearInterval(interval);
  });

  const getTime = () => {
    const currentTime = new Date().getTime();
    const time = deadline - currentTime;
    const newDays = Math.floor(time / (1000 * 60 * 60 * 24));
    const newHours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const newMinutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const newSeconds = Math.floor((time % (1000 * 60)) / 1000);

    setDays(newDays);
    setHours(newHours);
    setMins(newMinutes);
    setSec(newSeconds);
  };

  return (
    <div className="sale-banner">
      <h4>
        Sale Starts In <span>{days < 10 ? "0" + days : days}</span> D :{" "}
        <span>{hour < 10 ? "0" + hour : hour}</span> H : <span>{min < 10 ? "0" + min : min}</span> M :{" "}
        <span>{sec < 10 ? "0" + sec : sec}</span> S
      </h4>
    </div>
  );
};

export default SaleBanner;
