"use client"
import * as React from "react";
import Image from "next/image";
import Head from "next/head";
import "../heropage/page.scss"
import Link from "next/link";

function loginpage() {
    const [registrationNumber, setRegistrationNumber] = React.useState("");

  const handleRegistrationNumberChange = (event) => {
    setRegistrationNumber(event.target.value);
  };

  

  const handleVerifyClick = () => {
    if (registrationNumber.length === 8 && registrationNumber.startsWith("12")) {
      console.log("clicked");
      
    } else {
      document.querySelector(".error").style.display = "block";
      console.log("enter correct number");
    }
    
  };
  return (
    <div className="flex overflow-hidden relative flex-col justify-center items-end px- font-medium text-center max-h-[100vh] max-md:pl-5">
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet" />
    </Head>
    <Image src="/lpu_second.jpg" layout="fill" objectFit="objectFitb" className="absolute inset-0" alt="" />
    <div className="flex relative flex-col justify-center px-0 pr-0 py-20 max-w-full border border-solid backdrop-blur-[9.600000381469727px] bg-white bg-opacity-40 border-white border-opacity-0 w-[700px] max-md:px-5">
      <div className="flex flex-col items-center mt-56 mb-36 max-md:my-10 max-md:max-w-full">
        <div className="heading ">
          Enter your Registration <br /> number
          <br />
          to get details
        </div>
        <input
          type="text"
          value={registrationNumber}
          onChange={handleRegistrationNumberChange}
          className="justify-center items-center px-6 py-2 mt-6 max-w-full text-2xl tracking-wider leading-9 whitespace-nowrap bg-white rounded-2xl text-stone-900 w-[264px] max-md:px-5"
        />
        <Link href={registrationNumber.length === 8 && registrationNumber.startsWith("12") ? "../homepage" : "#"}>
        
            <button
              onClick={handleVerifyClick}
              className="verify justify-center px-8 py-1.5 mt-6 text-base tracking-wide leading-9 text-white whitespace-nowrap bg-green-900 rounded-[37px] max-md:px-5"
              >
              Verify
            </button>
        
        </Link>
        <div className="error">*Enter the correct number</div>
      </div>
    </div>
  </div>
  )
}

export default loginpage