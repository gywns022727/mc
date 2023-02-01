import React from "react";
import Lottie from "react-lottie-player";
import Loging from "./loding.json";

export default function Animation() {
  return (
    <Lottie
      loop={true}
      animationData={Loging}
      play
      style={{ width: `400px`, alphaTest: 0.5 }}
    />
  );
}
