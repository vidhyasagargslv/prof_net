"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
function Card() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://vidhyasagargandi.pythonanywhere.com/Teachers/"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, []);

  function copyToClipboard(item) {
    const textToCopy = `RegNo: ${item.RegNo}, Name: ${item.Name}, Phone: ${item.Phone}, Email: ${item.Email}`;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000); // hide the toast after 3 seconds
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  }

  return (
    <>
      {showToast && (
        <div role="alert" class="alert alert-success my-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="mr-48">Data copied to clipboard!</span>
        </div>
      )}
      <div className="flex flex-wrap justify-center items-center gap-10">
        <div
          className="all btn bg-neutral-content text-black active:bg-neutral-content"
          onClick={() => {
            setSearchTerm(""); // reset the search term
            setSelectedDomain(""); // reset the selected domain
            99;
          }}
        >
          All
        </div>
        <div className="dropdown ">
          <div
            tabIndex={0}
            role="button"
            className="btn  bg-neutral-content text-black btn-wide active:bg-neutral-content enabled:bg-neutral-content"
          >
            Department
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-60"
          >
            <li>
              <a onClick={() => setSelectedDomain("Software Engineering-I")}>
                Software Enginnering I
              </a>{" "}
            </li>
            <li>
              <a onClick={() => setSelectedDomain("Software Engineering-II")}>
                Software Enginnering II
              </a>{" "}
            </li>
            <li>
              <a onClick={() => setSelectedDomain("Programming-I")}>
                Programming I
              </a>{" "}
            </li>
            <li>
              <a onClick={() => setSelectedDomain("Programming-II")}>
                Programming II
              </a>{" "}
            </li>
            <li>
              <a onClick={() => setSelectedDomain("Database Systems-I")}>
                Database I
              </a>{" "}
            </li>
            <li>
              <a onClick={() => setSelectedDomain("Database System-II")}>
                Database II
              </a>{" "}
            </li>
            <li>
              <a onClick={() => setSelectedDomain("Networking and Security-I")}>
                Networking and Security I
              </a>{" "}
            </li>
            <li>
              <a
                onClick={() => setSelectedDomain("Networking and Security-II")}
              >
                Networking and Security II
              </a>{" "}
            </li>
            <li>
              <a onClick={() => setSelectedDomain("Intelligent Systems-I")}>
                Intelligent System I
              </a>{" "}
            </li>
            <li>
              <a onClick={() => setSelectedDomain("Intelligent Systems-II")}>
                Intelligent System II
              </a>{" "}
            </li>
            <li>
              <a
                onClick={() =>
                  setSelectedDomain("System Architecture and Design-I")
                }
              >
                System architecture -I
              </a>{" "}
            </li>
            <li>
              <a onClick={() => setSelectedDomain("System Programming-I")}>
                System programming -I
              </a>{" "}
            </li>
            <li>
              <a
                onClick={() =>
                  setSelectedDomain("Program Methodology and Design")
                }
              >
                Program Methodology and Design
              </a>{" "}
            </li>
          </ul>
        </div>
        <input
          type="search"
          placeholder="Search by name or UID"
          name="Search by name or UID"
          id="search"
          className="btn btn-wide bg-neutral-content text-black placeholder:text-slate-600 enabled:bg-neutral-content"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-7 my-10 justify-center items-center">
        {data
          .filter(
            (item) =>
              item.Name.toLowerCase().includes(
                searchTerm ? searchTerm.toLowerCase() : ""
              ) ||
              (item.RegNo && item.RegNo.toString().includes(searchTerm))
          )
          .filter(
            (item) => selectedDomain === "" || item.Domian === selectedDomain
          )
          .map((item) => (
            <div
              key={item.url}
              className="Cardbox flex flex-wrap gap-5 w-[24rem] content-start px-2 py-3 rounded-3xl border border-solid shadow-md border-stone-200 border-opacity-40"
              onClick={() => copyToClipboard(item)}
            >
              <div className="flex flex-col ">
                <Image
                  src={"/profile.PNG"}
                  className="shrink-0 self-start rounded-full aspect-[1.01] w-auto h-auto"
                  width={90}
                  height={70}
                  alt="profile"
                  quality={50}
                  priority={true}
                />
                <div className="ml-6">{item.RegNo}</div>
              </div>
              <div className="name flex flex-col">
                <button className="pb-0.5 mt-1 text-md font-bold tracking-wide text-white uppercase truncate w-60">
                  {item.Name.length > 20
                    ? item.Name.startsWith("Dr")
                      ? item.Name.substring(2)
                      : item.Name.split(" ").slice(0, -1).join(" ")
                    : item.Name}
                </button>
                <button className="department text-sm font-medium tracking-wide text-zinc-200">
                  {item.Domian}
                </button>
                <div className="flex flex-col mt-2">
                  <button className="phonenummber self-center text-sm tracking-wide text-white">
                    {item.Phone}
                  </button>
                  <button className="gmail text-md font-medium tracking-wide text-zinc-200">
                    {item.Email}
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Card;
