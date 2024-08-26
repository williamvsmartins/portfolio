"use client";

import dynamic from "next/dynamic";

const AnimationLottieComponent = dynamic(() => import("lottie-react"), { ssr: false });

export default function AnimationLottie({ animationPath, width = "95%" }) {
  return (
    <AnimationLottieComponent
      animationData={animationPath}
      loop={true}
      autoplay={true}
      style={{ width }}
    />
  );
}
