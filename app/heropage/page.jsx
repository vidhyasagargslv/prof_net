"use client"
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Head from 'next/head'
import './page.scss'
import Link from 'next/link'
import loginpage from '../loginpage/page'




export default function heropage() {
    
   

   

    

    useEffect(() => {
        //add gsap animation to class profnet , shouild come from top 
        gsap.fromTo('.ProfNet', 
            { opacity: 0, y: -100 },
            { opacity: 1, y: 0, duration: 2 }
        );
        gsap.fromTo('.logo', 
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
        gsap.to('.Ellipse1', { x: 100, y: 100, duration: 2, repeat: -1, yoyo: true ,ease: 'power2.inOut'});
        gsap.to('.Ellipse2', { x: -100, y: -100, duration: 2, repeat: -1, yoyo: true, ease: 'linear'  });
        gsap.to('.Ellipse3', { x: 100, y: -100, duration: 2, repeat: -1, yoyo: true, ease: 'linear' });
        gsap.to('.Ellipse4', { x: -100, y: 100, duration: 2, repeat: -1, yoyo: true, ease: 'linear' });


      }, [])

  return (
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="Desktop1 w-full h-full relative">
        <div className="Rectangle1 w-full h-[100vh] left-0 top-0 absolute bg-zinc-300 bg-opacity-10 backdrop-blur-[107.33px]" />
        <div  className="HeroSection left-[273px] top-[150px] absolute flex-col justify-start items-center gap-[23px] inline-flex">
          <div className="Frame2 flex-col justify-start items-center gap-[32px] flex">
            <div className="Frame1 justify-center items-center gap-11 inline-flex">
              <div className="ProfNet text-purple-500 text-5xl font-extrabold font-['Archivo'] tracking-[2.88px] sm:text-8xl">PROF NET</div>
              <div className="logo">

                {/* //todo Logo */}
                 
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="78" viewBox="0 0 80 78" fill="none">
              <mask id="mask0_2_67" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="78">
                  <path d="M79.6675 0.422485H0.332489V77.5775H79.6675V0.422485Z" fill="white"/>
              </mask>
  <g mask="url(#mask0_2_67)">
    <path d="M54.077 26.0126V44.2826L53.3569 45.0026L50.057 48.3026C50.0489 48.3116 50.0421 48.3217 50.0369 48.3326L24.8269 73.5326C22.9687 75.3816 20.5893 76.6178 18.0081 77.0754C15.427 77.533 12.7676 77.1901 10.387 76.0926C10.3651 76.0869 10.3446 76.0766 10.3269 76.0626C10.3217 76.0569 10.3146 76.0533 10.3069 76.0526C8.97421 75.4305 7.76218 74.5773 6.72696 73.5326C6.33097 73.1391 5.96337 72.7181 5.62695 72.2726C5.61884 72.2636 5.61212 72.2535 5.60696 72.2426C5.58149 72.2179 5.55807 72.1911 5.53695 72.1626C3.69187 69.6964 2.79667 66.6482 3.0152 63.5759C3.23373 60.5036 4.55137 57.6128 6.72696 55.4326L29.2269 32.9426C29.2321 32.9317 29.2389 32.9216 29.247 32.9126L32.327 29.8326L36.147 26.0126H54.077Z" fill="url(#paint0_linear_2_67)"/>
    <path d="M79.6672 13.2925V64.7725C79.6679 66.506 79.3165 68.2217 78.6342 69.8153C77.9519 71.4089 76.953 72.8474 75.6981 74.0434C74.4432 75.2394 72.9584 76.168 71.3338 76.7729C69.7093 77.3778 67.9787 77.6465 66.2472 77.5625C63.2513 77.3649 60.4162 76.1365 58.2233 74.0857C56.0304 72.035 54.6149 69.2885 54.2172 66.3125L54.2203 66.3079L54.2214 66.3025L54.2203 66.2971L54.2172 66.2925H54.2072V66.2725C54.2027 66.2322 54.196 66.1921 54.1872 66.1525C54.1154 65.5719 54.0787 64.9875 54.0772 64.4025V26.0125H13.4972C10.5203 26.0102 7.62859 25.0182 5.27721 23.1925L5.2672 23.1825C5.2572 23.1825 5.2472 23.1725 5.2372 23.1625C5.2272 23.1525 5.20722 23.1325 5.18722 23.1125C5.16607 23.0901 5.1426 23.07 5.11721 23.0525C3.71167 21.946 2.55893 20.5518 1.73626 18.9633C0.91358 17.3749 0.43999 15.6289 0.347218 13.8425C0.264113 12.1112 0.533328 10.381 1.13857 8.75683C1.74381 7.13265 2.67248 5.64822 3.86831 4.3935C5.06413 3.13877 6.50221 2.13986 8.09545 1.45728C9.68869 0.774698 11.4039 0.422658 13.1372 0.422486H66.7972C68.4874 0.422092 70.1612 0.754729 71.7228 1.40137C73.2845 2.04801 74.7034 2.99598 75.8986 4.19115C77.0938 5.38632 78.0418 6.80525 78.6884 8.3669C79.335 9.92854 79.6676 11.6023 79.6672 13.2925Z" fill="url(#paint1_linear_2_67)"/>
    <g style={{mixBlendMode: 'screen'}} opacity="0.3">
      <g style={{mixBlendMode: 'screen'}} opacity="0.3">
        <path d="M76.6668 13.2925V13.7025H3.34779V13.5725C3.34779 13.5105 3.34779 13.4195 3.34779 13.3055C3.33282 12.0116 3.57503 10.7276 4.06038 9.52803C4.54573 8.32848 5.26454 7.23731 6.17506 6.31785C7.08559 5.39839 8.16971 4.66898 9.36445 4.17195C10.5592 3.67491 11.8408 3.42016 13.1348 3.4225H66.7948C69.4121 3.42408 71.922 4.46442 73.7729 6.315C75.6239 8.16558 76.6647 10.6751 76.6668 13.2925Z" fill="white"/>
      </g>
    </g>
    <g style={{mixBlendMode: 'screen'}} opacity="0.2">
      <path d="M45.3071 34.7826L8.76711 71.3226C8.76711 71.3226 8.73712 71.2926 8.67712 71.2226C8.63226 71.1878 8.59196 71.1475 8.55712 71.1026C6.85587 69.2391 5.937 66.7923 5.99099 64.2696C6.04498 61.7469 7.0677 59.3417 8.84713 57.5526L31.5272 34.8826C31.5872 34.8126 31.6171 34.7826 31.6171 34.7826H45.3071Z" fill="white"/>
    </g>
    <g style={{mixBlendMode: 'multiply'}} opacity="0.2">
      <path d="M54.0786 26.0126V44.2826L53.3586 45.0026L50.0586 48.3026V29.8326H32.3286L36.1486 26.0126H54.0786Z" fill="black"/>
    </g>
    <g style={{mixBlendMode: 'screen'}} opacity="0.6">
      <path d="M66.7977 3.4225C66.7977 3.4225 65.7077 3.4625 63.8077 3.5225C61.9077 3.5625 59.1877 3.66251 55.9277 3.70251C52.6677 3.74251 48.8677 3.8425 44.7977 3.8525C40.7277 3.8625 36.3778 3.9025 32.0278 3.9225C27.6778 3.9025 23.3377 3.8725 19.2577 3.8525C17.2177 3.8325 15.2477 3.8125 13.3877 3.7825C11.6792 3.71068 9.98297 4.10106 8.47774 4.9125C7.20566 5.61424 6.09772 6.579 5.22774 7.7425C4.55845 8.65439 4.05414 9.67652 3.73772 10.7625C3.5395 11.4677 3.4155 12.1916 3.36772 12.9225C3.35872 13.0725 3.35372 13.1995 3.35072 13.3055C3.33575 12.0116 3.57799 10.7276 4.06334 9.52803C4.54869 8.32848 5.26747 7.23731 6.17799 6.31785C7.08852 5.39839 8.17264 4.66898 9.36738 4.17195C10.5621 3.67491 11.8437 3.42016 13.1377 3.4225H66.7977Z" fill="white"/>
    </g>
    <g style={{mixBlendMode: 'screen'}} opacity="0.6">
      <path d="M31.5272 34.8825C31.3472 35.0825 30.8971 35.5725 30.2471 36.2925C29.3571 37.2425 28.1171 38.6225 26.5771 40.2225C25.0371 41.8225 23.2571 43.7325 21.3071 45.7025C19.3571 47.6925 17.2771 49.8025 15.1871 51.9125C14.1371 52.9525 13.0771 53.9925 12.0371 55.0225C10.9971 56.0525 9.95713 57.0525 8.99713 58.0325C8.10975 58.9557 7.41013 60.0425 6.93713 61.2325C6.51324 62.3165 6.28962 63.4685 6.27712 64.6325C6.26938 65.6207 6.40754 66.6046 6.68713 67.5525C6.90815 68.2901 7.20997 69.0011 7.58712 69.6725C7.84122 70.1019 8.12527 70.5129 8.43713 70.9025C8.52287 71.0047 8.60297 71.1115 8.67712 71.2225C8.63226 71.1876 8.59196 71.1473 8.55712 71.1025C6.85587 69.2389 5.937 66.7922 5.99099 64.2694C6.04498 61.7467 7.0677 59.3415 8.84713 57.5525L31.5272 34.8825Z" fill="white"/>
    </g>
    <g style={{mixBlendMode: 'screen'}} opacity="0.6">
      <path d="M29.2269 32.9425C28.9969 33.2225 27.067 35.5925 24.097 38.8725C22.527 40.6325 20.657 42.6525 18.627 44.7825C17.597 45.8425 16.567 46.9625 15.477 48.0525C14.387 49.1425 13.2869 50.2725 12.1769 51.3925C11.0669 52.4925 9.94694 53.5925 8.83694 54.6825C8.29694 55.2225 7.74695 55.7525 7.21695 56.2725C6.72344 56.764 6.27186 57.2958 5.86694 57.8625C5.09745 58.9468 4.50976 60.1492 4.12695 61.4225C3.78683 62.5799 3.59858 63.7766 3.56695 64.9825C3.56277 66.0144 3.67006 67.0437 3.88696 68.0525C4.07699 68.8407 4.32774 69.613 4.63696 70.3625C4.77696 70.6725 4.90694 70.9425 5.01694 71.1825C5.12694 71.4225 5.25695 71.6225 5.34695 71.7825C5.47695 72.0225 5.57696 72.1825 5.60696 72.2425C5.58149 72.2178 5.55807 72.1911 5.53695 72.1625C3.69187 69.6963 2.79667 66.6481 3.0152 63.5758C3.23373 60.5036 4.55137 57.6128 6.72696 55.4325L29.2269 32.9425Z" fill="white"/>
    </g>
    <g style={{mixBlendMode: 'multiply'}} opacity="0.3">
      <path d="M50.0571 48.3024C50.049 48.3114 50.0423 48.3215 50.0371 48.3324L24.8271 73.5324C22.9688 75.3814 20.5894 76.6176 18.0083 77.0752C15.4271 77.5328 12.7677 77.1899 10.3871 76.0924C10.3593 76.0816 10.3324 76.0682 10.3071 76.0524C10.9953 76.3053 11.7048 76.4961 12.4271 76.6224C14.2854 76.9748 16.1972 76.9305 18.0371 76.4924C19.2326 76.1937 20.3804 75.7292 21.4471 75.1124C22.0234 74.7818 22.5689 74.4003 23.0771 73.9724C23.3471 73.7524 23.5671 73.5324 23.8371 73.2924L24.2271 72.9024L24.5971 72.5124C25.6471 71.4324 26.7071 70.2924 27.8171 69.1724C28.9271 68.0524 30.0571 66.9024 31.1871 65.7624C32.3171 64.6224 33.4771 63.5024 34.5971 62.3924C35.7171 61.2824 36.8571 60.2224 37.9371 59.1724C40.1171 57.1024 42.1871 55.1824 43.9771 53.5724C47.5481 50.3324 50.0571 48.3024 50.0571 48.3024Z" fill="black"/>
    </g>
    <g style={{mixBlendMode: 'multiply'}} opacity="0.3">
      <path d="M54.2174 66.2926H54.2075V66.2726C54.2129 66.278 54.2164 66.285 54.2174 66.2926Z" fill="black"/>
    </g>
    <g style={{mixBlendMode: 'multiply'}} opacity="0.3">
      <path d="M79.6673 14.8324V64.7724C79.668 66.506 79.3165 68.2216 78.6343 69.8152C77.952 71.4089 76.9531 72.8473 75.6982 74.0433C74.4433 75.2393 72.9585 76.1679 71.3339 76.7728C69.7093 77.3778 67.9788 77.6464 66.2473 77.5624C63.2514 77.3648 60.4163 76.1364 58.2234 74.0856C56.0305 72.0349 54.6149 69.2884 54.2173 66.3124C54.2573 66.4624 54.3273 66.7324 54.4173 67.1224C54.658 68.0191 54.9862 68.89 55.3973 69.7224C56.0231 71.0103 56.8615 72.1834 57.8773 73.1924C59.1614 74.4925 60.7143 75.496 62.4273 76.1324C63.3855 76.4902 64.3881 76.7157 65.4073 76.8024L66.2473 76.8624C66.5073 76.8624 66.7673 76.8524 67.0373 76.8424C67.5907 76.8333 68.1425 76.7798 68.6873 76.6824C71.0016 76.2681 73.1472 75.1952 74.8673 73.5924C75.7658 72.7571 76.5314 71.7892 77.1373 70.7224C77.7351 69.6226 78.1761 68.4445 78.4473 67.2224C78.567 66.5987 78.6405 65.967 78.6673 65.3324L78.6873 64.8224C78.6973 64.7524 78.6873 64.5024 78.6873 64.3524V63.3224C78.6773 61.9424 78.6773 60.5524 78.6673 59.1724C78.6873 56.3924 78.6973 53.6224 78.7073 50.9024C78.7373 48.1724 78.7673 45.4824 78.7973 42.8924C78.8673 37.6924 78.9673 32.8424 79.0973 28.6824C79.2073 24.5324 79.3873 21.0624 79.4773 18.6424C79.5873 16.2124 79.6673 14.8324 79.6673 14.8324Z" fill="black"/>
    </g>
    <g style={{mixBlendMode: 'screen'}} opacity="0.6">
      <path d="M55.5072 0.422485C55.5072 0.422485 54.3472 0.512488 52.3272 0.612487C50.3072 0.712487 47.4072 0.882492 43.9372 0.992492C40.4772 1.12249 36.4272 1.23249 32.0872 1.30249C29.9172 1.32249 27.6772 1.38249 25.4072 1.38249C23.1272 1.40249 20.8172 1.41249 18.5072 1.42249C17.3472 1.41249 16.1872 1.4125 15.0372 1.4025L13.3172 1.39249C12.7572 1.41249 12.2472 1.4225 11.7172 1.4825C9.65598 1.71106 7.68894 2.46894 6.00722 3.6825C4.41641 4.82618 3.12348 6.33514 2.2372 8.08249C2.02277 8.4951 1.83895 8.92292 1.68722 9.36248C1.52528 9.77969 1.39165 10.2073 1.28722 10.6425C1.23722 10.8625 1.17722 11.0725 1.12722 11.2825L1.03722 11.9125C1.00722 12.1225 0.967224 12.3225 0.947224 12.5325C0.927224 12.7425 0.927205 12.9725 0.927205 13.1925C0.799703 15.9225 1.592 18.6163 3.17721 20.8425C3.63049 21.4737 4.13199 22.0688 4.67721 22.6225C4.86721 22.8125 5.01721 22.9525 5.11721 23.0525C3.71167 21.946 2.55893 20.5518 1.73626 18.9633C0.91358 17.3749 0.43999 15.6289 0.347218 13.8425C0.264113 12.1112 0.533328 10.381 1.13857 8.75683C1.74381 7.13265 2.67248 5.64822 3.86831 4.3935C5.06413 3.13877 6.50221 2.13986 8.09545 1.45728C9.68869 0.774697 11.4039 0.422658 13.1372 0.422485H55.5072Z" fill="white"/>
    </g>
    <g style={{mixBlendMode: 'multiply'}} opacity="0.3">
      <path d="M54.0774 26.0126V44.2826L53.3573 45.0026L53.3174 43.5026C53.2374 40.5926 53.1974 37.6726 53.1474 34.7626C53.0974 32.1726 53.1074 29.5926 53.0874 27.0026C50.2274 27.0126 47.3774 26.9826 44.5174 26.9726C41.4574 26.9326 38.3974 26.8926 35.3374 26.8226L36.1474 26.0126H54.0774Z" fill="black"/>
    </g>
    <g style={{mixBlendMode: 'screen'}} opacity="0.4">
      <path d="M55.0774 25.0325L55.0674 26.0125C55.0474 28.9325 55.0574 31.8425 54.9974 34.7625C54.9574 37.6725 54.9174 40.5925 54.8374 43.5025L54.7074 47.8825L54.5474 52.2525C54.3874 55.1625 54.2874 58.0825 54.0774 60.9925V26.0125H15.8374C19.0274 25.7825 22.2074 25.6725 25.3974 25.5125C28.5874 25.3825 31.7674 25.2825 34.9574 25.2125C38.1474 25.1425 41.3274 25.1025 44.5174 25.0525C47.7074 25.0425 50.8874 25.0025 54.0774 25.0225L55.0774 25.0325Z" fill="white"/>
    </g>
  </g>
  <defs>
    <linearGradient id="paint0_linear_2_67" x1="5.53758" y1="74.3509" x2="53.0015" y2="27.8581" gradientUnits="userSpaceOnUse">
      <stop stopColor="#F58033"/>
      <stop offset="1" stopColor="#A53826"/>
    </linearGradient>
    <linearGradient id="paint1_linear_2_67" x1="39.9999" y1="1.50266" x2="39.9999" y2="75.34" gradientUnits="userSpaceOnUse">
      <stop stopColor="#FCC400"/>
      <stop offset="1" stopColor="#F80300"/>
    </linearGradient>
  </defs>
              </svg>
              
              </div>
            </div>
            <div className="Tagline p-2.5 justify-center items-center gap-2.5 inline-flex">
            <div className="text-center ">
                <span className="text-white text-sm font-bold font-['Archivo'] tracking-[2.60px] sm:text-[52px] mb-4">Lovely professional University one<br/>stop platform for </span>
                <span className="gradient_name mb-4">professor<br/></span>
                <span className="text-white text-[52px] font-bold font-['Archivo'] tracking-[2.60px]">insight</span>
            </div>
            </div>
          </div>
          <div className="Frame3 flex-col justify-start items-center gap-[30px] flex">
            <Link href="../loginpage">
            <div className="Button px-10 py-3 bg-stone-900 rounded-[15px] border border-white justify-center items-center gap-2.5 inline-flex">
              <button className="Login text-zinc-100 text-xl font-normal font-['Roboto'] tracking-wide">Login</button> 
            </div>
            </Link>

          </div>
        </div>
        <div className="Ellipse1 w-[200px] h-[250px] left-[70px] top-[84px] absolute opacity-80 bg-orange-300 rounded-full blur-[100px]" />
        <div className="Ellipse2 w-[200px] h-[200px] left-[1046px] top-[59px] absolute bg-blue-400 rounded-full blur-[100px]" />
        <div className="Ellipse4 w-[200px] h-[200px] left-[1043px] top-[572px] absolute bg-green-400 bg-opacity-50 rounded-full blur-[80px]" />
        <div className="Ellipse3 w-[200px] h-[200px] left-[158px] top-[484px] absolute bg-fuchsia-400 bg-opacity-50 rounded-full blur-[80px]" />
      </div>
    </div>
  )
}
