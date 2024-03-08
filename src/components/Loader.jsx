import React from "react";

export default function Loader() {
  return (
    <div className="loader w-screen h-screen bg-black z-[28]  flex items-center justify-center">
      <video autoPlay playsInline loop muted className="w-[40rem] h-[40rem]">
        <source src="/preloader.webm" type="video/webm" />
        <source src="/preloader.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
