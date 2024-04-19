"use client"
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'


export default function heropage() {
    const heroSectionRef = useRef(null)

    useEffect(() => {
        //add gsap animation to class profnet , shouild come from top 
        gsap.fromTo('.ProfNet', 
            { opacity: 0, y: -100 },
            { opacity: 1, y: 0, duration: 2 }
        );

        //add gsap animation to class Tagline , shouild come from below
        gsap.fromTo('.Tagline', 
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 2 }
        );

        //add gsap animation to class Button , shouild appear on the screen after 2 seconds
        gsap.fromTo('.Button', 
            { opacity: 0 },
            { opacity: 1, delay: 2, duration: 2 }
        );

        //add gsap animation to class Ellipse1,Ellipse2,Ellipse3,Ellipse4 , shouild change their postions randomly
        gsap.to('.Ellipse1', { x: 100, y: 100, duration: 2, repeat: -1, yoyo: true });
        gsap.to('.Ellipse2', { x: -100, y: -100, duration: 2, repeat: -1, yoyo: true });
        gsap.to('.Ellipse3', { x: 100, y: -100, duration: 2, repeat: -1, yoyo: true });
        gsap.to('.Ellipse4', { x: -100, y: 100, duration: 2, repeat: -1, yoyo: true });


      }, [])

  return (
    <div>

       <div className="Desktop1 w-full h-full relative bg-stone-900">
          <div className="Rectangle1 w-full h-[100vh] left-0 top-0 absolute bg-zinc-300 bg-opacity-10 backdrop-blur-[107.33px]" />
          <div ref={heroSectionRef} className="HeroSection left-[273px] top-[150px] absolute flex-col justify-start items-center gap-[23px] inline-flex">
            <div className="Frame2 flex-col justify-start items-center gap-[32px] flex">
              <div className="Frame1 justify-center items-center gap-11 inline-flex">
                <div className="ProfNet text-purple-500 text-5xl font-extrabold font-['Archivo'] tracking-[2.88px] sm:text-8xl">PROF NET</div>
                <div className="logo">
                  {/* svg */}
                </div>
              </div>
              <div className="Tagline p-2.5 justify-center items-center gap-2.5 inline-flex">
                <div className="LovelyProfessionalUniversityOneStopPlatformForProfessorInsight text-center">
                  <span className="text-white text-sm font-bold font-['Archivo'] tracking-[2.60px] sm:text-[52px]">Lovely professional University one<br/>stop platform for </span>
                  <span className="gradient_name">professor<br/></span>
                  <span className="text-white text-[52px] font-bold font-['Archivo'] tracking-[2.60px]">insight</span>
                </div>
              </div>
            </div>
            <div className="Frame3 flex-col justify-start items-center gap-[30px] flex">
              <div className="Button px-10 py-3 bg-stone-900 rounded-[15px] border border-white justify-center items-center gap-2.5 inline-flex">
                <button className="Login text-zinc-100 text-xl font-normal font-['Roboto'] tracking-wide">Login</button>
              </div>
            </div>
          </div>
          <div className="Ellipse1 w-[200px] h-[250px] left-[70px] top-[84px] absolute bg-slate-500 rounded-full blur-[80px]" />
          <div className="Ellipse2 w-[200px] h-[200px] left-[1046px] top-[59px] absolute bg-blue-400 rounded-full blur-[80px]" />
          <div className="Ellipse4 w-[470px] h-[180px] left-[1043px] top-[572px] absolute bg-green-400 bg-opacity-50 rounded-full blur-[80px]" />
          <div className="Ellipse3 w-[470px] h-[180px] left-[158px] top-[484px] absolute bg-stone-400 bg-opacity-50 rounded-full blur-[100px]" />
        </div>
    </div>
  )
}
