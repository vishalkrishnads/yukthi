import { useEffect, useRef } from 'react';
import Image from 'next/image'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const trigger = useRef(null);

  useEffect(() => {
    gsap.fromTo(trigger.current, {
      opacity: 0,
      y: -100,
    },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: trigger.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
          ease: "power4.eae-InOut"
        },
      });
  }, []);

  return (
    <div className='h-fit relative bg-primary pt-4 px-2 xl:px-8'>
      <div className='flex flex-wrap uppercase text-[3.1rem] sm:text-[4.5rem] md:text-[6.3rem] lg:text-[5.5rem] xl:text-[7rem]  leading-[4rem] md:leading-[5.5rem] font-clash font-bold'>
        <span>You might be</span>
        <span>thinking what is</span>
        <span className='text-[4rem] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[9.5rem] xl:text-[12.5rem] md:mt-4 lg:mt-8 '>
          <span ref={trigger} className='text-white overflow-hidden'>DARPAN</span>
          <span className=''>?</span>
        </span>
      </div>
      <div className='font-chakra text-base py-8 leading-[5px] xl:mt-4'>
        <span className='text-center font-bold text-white text-[2rem] xl:text-[4rem]'>⁕⁕⁕
          <span className='text-base font-medium text-soothing_black xl:text-2xl'> Mirror countable noun. A mirror is an object made of glass in which you can see your
            reflection. Borrowed from Sanskrit (darpaṇa), and some more description about the name.</span>
        </span>
      </div>
      <div className='relative font-clash font-bold text-white'>
        <span className='text-[3.5rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[5.5rem]'>ABOUT</span>
        <span className='absolute text-white/30 text-[4rem] sm:text-[4.5rem] md:text-[5rem] lg:text-[5.5rem] xl:text-[7rem] left-5 xl:left-11 xl:top-5 top-4'>ABOUT</span>
      </div>
      <div className='flex flex-col lg:flex-row items-center gap-8 py-8'>
        <p className='text-white  flex grow-[2] text-base xl:text-2xl font-chakra font-medium'>
          College of Engineering Aranmula presents DARPAN 2023, the annual techno-cultural fest.
          It is hosted every year to recognize fledging engineers who have a flair of technical expertise and artistry.
          It is one of the most eminent fests with more than 900 entrants from across the nation.
          This extravaganza unfolds a two-day mega event that transports you into a new realm.</p>
        <Image
          src='/VideoFrame.png'
          width={500}
          height={500}
          alt='Video Frame'
          className='grow-[1] w-[21.5rem] h-auto lg:w-[22rem] xl:w-[26rem]'
        />
      </div>
    </div>
  )
}

