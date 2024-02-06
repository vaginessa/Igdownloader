"use client";

import React, { useState } from "react";
import { GoPaste } from "react-icons/go";
import Link from "next/link";
import { toast } from "sonner";

type Props = {};

function Searchbar({}: Props) {
  const [inputValue, setInputValue] = useState("");
  const [videodata, setvideodata] = useState<any>({});

  async function downloadReel(url: string) {
    try {
      const response = await fetch(
        `/api/download?url=${encodeURIComponent(url)}`
      );
      const data = await response.json();
      if (data.error) {
        toast("Check the Provided Link");
      }
      setvideodata(data);
      console.log(
        "data > graphql > shortcode_media > display_resources : ",
        data.graphql.shortcode_media.display_resources[0].src
      );
    } catch (error) {
      console.error(error);
    }
  }

  const handleDownload = () => {
    downloadReel(inputValue);
  };

  const pasteOrClear = () => {
    if (inputValue === "") {
      navigator.clipboard.readText().then((text) => setInputValue(text));
    } else {
      setInputValue("");
    }
  };

  const downloadOnClick = () => {
    if (videodata.graphql) {
      alert("dffghfj");
      const downloadLink = document.createElement("a");
      downloadLink.href =
        videodata.graphql.shortcode_media.display_resources[0].src;
      downloadLink.setAttribute("download", "image.jpg");
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return (
    <>
      <div className="flex flex-col overflow-hidden justify-center items-center m-auto">
        <div className="mt-10  input-group flex items-center">
          <button
            className="absolute sm:mb-[70px] ml-1 flex button--submit border-2 min-h-10 mr-2 rounded-r-[3px] px-4 py-2 bg-gray-500 text-white text-base  cursor-pointer transition-colors duration-500  border-black ease-in-out  focus:border-gray-700 "
            onClick={pasteOrClear}
          >
            <GoPaste className="mt-1 mr-3 sm:mr-0" />
            <h1 className="sm:hidden">
              {inputValue === "" ? " Paste" : "Clear"}
            </h1>
          </button>
          <div className="flex sm:flex-col sm:justify-center sm:items-center">
            <input
              className="input 2xl:pl-32 sm:pl-20 min-h-10 w-[48rem] sm:w-[24rem] py-3 placeholder:text-base sm:placeholder:text-sm placeholder:font-mono border-2 border-black"
              id="Email"
              name="Email"
              type="email"
              value={inputValue}
              placeholder="instagram.com/p/Cx8FpSlyXAC/"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <input
              onClick={handleDownload}
              className="button--submit border-2 sm:mt-5 sm:w-[10rem] min-h-10 rounded-r-[3px] sm:rounded-[18px] px-4 py-3 bg-black text-white text-base cursor-pointer    border-black ease-in-out   bg-gradient-to-r from-blue-700 via-purple-500 via-pink-500 to-red-500 hover:from-yellow-600 hover:via-yellow-500 hover:to-green-600"
              value="Download"
              type="submit"
            />
          </div>
        </div>
        <div className="downloadmediadata">
          <h1>Here is the Fucking links to download</h1>
          {videodata.graphql && (
            // Use a button instead of Link to trigger download
            <button onClick={downloadOnClick}>Preview Download</button>
          )}
        </div>
      </div>
    </>
  );
}

export default Searchbar;
