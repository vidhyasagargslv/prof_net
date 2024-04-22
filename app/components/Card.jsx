"use client"


import Image from 'next/image';
import { useState, useEffect } from 'react';

function Card() {

  const [data, setData] = useState([]);
  

  useEffect(() => {
    fetch('https://vidhyasagargandi.pythonanywhere.com/Teachers/') // replace with your API endpoint
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  
  
  


  return (
    <div className='flex flex-wrap gap-7 my-10 justify-center items-center '>
    
      {data.map(item => (
      <div key={item.id} className="flex flex-wrap gap-3 w-[23rem] content-start px-2 py-3 rounded-3xl border border-solid shadow-md border-stone-200 border-opacity-40">
        <div className="flex flex-col ">
        <Image
          
          src={'/profile.PNG'}
          className="shrink-0 self-start rounded-full aspect-[1.01] w-auto h-auto"
          width={90}
          height={70}
          alt="profile"
          quality={50}
          priority={true}
        />
        <div className='ml-6'>{item.RegNo}</div>
        </div>
        <div className="name flex flex-col">
          <button className="pb-0.5 mt-1 text-md font-bold tracking-wide text-white uppercase">
            {item.Name}
          </button>
          <button className="department text-sm font-medium tracking-wide text-zinc-200">
            {item.Domian}
          </button>
          <div className="flex flex-col mt-2">
            <button
              className="phonenummber self-center text-sm tracking-wide text-white"
            >
              {item.Phone}
            </button>
            <button
              className="gmail text-md font-medium tracking-wide text-zinc-200"
            >
              {item.Email}
            </button>
          </div>
        </div>
      </div>
      ))}
      
    </div>
  );
}

export default Card;
