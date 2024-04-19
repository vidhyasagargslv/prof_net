"use client"
import * as React from "react";
import Image from "next/image";

function loginpage() {
    const [registrationNumber, setRegistrationNumber] = React.useState("");

  const handleRegistrationNumberChange = (event) => {
    setRegistrationNumber(event.target.value);
  };

  const handleVerifyClick = () => {
    // Perform verification logic here
    console.log(`Verifying registration number: ${registrationNumber}`);
  };
  return (
    <div className="flex overflow-hidden relative flex-col justify-center items-end px- font-medium text-center max-h-[100vh] max-md:pl-5">
    <Image src="/lpu.png" fill objectFit="objectFitb" className="absolute inset-0" alt="" />
    <div className="flex relative flex-col justify-center px-0 pr-0 py-20 max-w-full border border-solid backdrop-blur-[9.600000381469727px] bg-white bg-opacity-40 border-white border-opacity-0 w-[700px] max-md:px-5">
      <div className="flex flex-col items-center mt-56 mb-36 max-md:my-10 max-md:max-w-full">
        <div className="self-stretch text-4xl tracking-wider text-black leading-[56px] max-md:max-w-full">
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
        <button
          onClick={handleVerifyClick}
          className="justify-center px-8 py-1.5 mt-6 text-base tracking-wide leading-9 text-white whitespace-nowrap bg-green-900 rounded-[37px] max-md:px-5"
        >
          Verify
        </button>
      </div>
    </div>
  </div>
  )
}

export default loginpage