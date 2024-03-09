import { useRouter } from "next/router";
import Title from "./Head";

export default function InitialLoader() {
  const router = useRouter();

  return (
    <div className="loader w-screen h-screen bg-black z-[28]  flex items-center justify-center">
      <Title route={router.pathname} />
      <video autoPlay loop muted playsInline className="w-[40rem] h-[40rem]">
        <source src="/preloader.webm" type="video/webm" />
        <source src="/preloader.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
