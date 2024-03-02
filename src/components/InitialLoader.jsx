import { useRouter } from "next/router";
import Title from "./Head";

export default function InitialLoader() {
  const router = useRouter()

  return (
    <div className="loader w-screen h-screen bg-black z-[28]  flex items-center justify-center">
      <Title route={router.pathname} />
      <video
        src="/preloader.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-[40rem] h-[40rem]"
      ></video>
    </div>
  );
}
