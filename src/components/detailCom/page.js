"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { MyContextData } from "../contextCom/page";

export default function PreviewUiForDownload() {
  const { formData, currentRef, handleDownload, loading } =
    useContext(MyContextData);
  const route = useRouter();
  const [bgColor, setBgColor] = useState("");

  const handlePreview2 = () => {
    route.back("/");
  };

  const changeBackgroundColor = (color) => {
    setBgColor(color);
  };
  return (
    <div className="relative">
      <div className="space-x-2 my-4 max-w-[140px] w-full max-h-[100px] h-full grid grid-cols-3 gap-2 px-5 absolute top-0 left-0">
        <div className="">
          <button
            onClick={() => changeBackgroundColor("red")}
            className="p-3 bg-red-500 text-white"
          ></button>
        </div>
        <div className="">
          <button
            onClick={() => changeBackgroundColor("blue")}
            className="p-3 bg-blue-500 text-white"
          ></button>
        </div>
        <div className="">
          <button
            onClick={() => changeBackgroundColor("green")}
            className="p-3 bg-green-500 text-white"
          ></button>
        </div>
        <div className="">
          <button
            onClick={() => changeBackgroundColor("black")}
            className="p-3 bg-black text-white"
          ></button>
        </div>
        <div className="">
          <button
            onClick={() => changeBackgroundColor("orange")}
            className="p-3 bg-orange-700 text-white"
          ></button>
        </div>
        <div className="">
          <button
            onClick={() => changeBackgroundColor("brown")}
            className="p-3 bg-yellow-700 text-white"
          ></button>
        </div>
        <div className="">
          <button
            onClick={() => changeBackgroundColor("white")}
            className="p-3 text-black border-2"
          ></button>
        </div>
        <div className="">
          <button
            onClick={() => changeBackgroundColor("purple")}
            className="p-3 bg-purple-500 text-white"
          ></button>
        </div>
        <div className="">
          <button
            onClick={() => changeBackgroundColor("pink")}
            className="p-3 bg-pink-500 text-white"
          ></button>
        </div>
        <div className="">
          <button
            onClick={() => changeBackgroundColor("yellow")}
            className="p-3 bg-yellow-500 text-black"
          ></button>
        </div>
        <div className="">
          <button
            onClick={() => changeBackgroundColor("teal")}
            className="p-3 bg-teal-500 text-white"
          ></button>
        </div>
        <div className="">
          <button
            onClick={() => changeBackgroundColor("indigo")}
            className="p-3 bg-indigo-500 text-white"
          ></button>
        </div>
        <div className="">
          <button
            onClick={() => changeBackgroundColor("gray")}
            className="p-3 bg-gray-500 text-white"
          ></button>
        </div>
        <div className="">
          <button
            onClick={() => changeBackgroundColor("cyan")}
            className="p-3 bg-cyan-500 text-white"
          ></button>
        </div>
        <div className="">
          <button
            onClick={() => changeBackgroundColor("lime")}
            className="p-3 bg-lime-500 text-black"
          ></button>
        </div>

        <div className="">
          <button
            onClick={() => changeBackgroundColor("fuchsia")}
            className="p-3 bg-fuchsia-500 text-white"
          ></button>
        </div>
        <div className="">
          <button
            onClick={() => changeBackgroundColor("violet")}
            className="p-3 bg-violet-500 text-white"
          ></button>
        </div>
      </div>
      {/* for the certificate  */}
      <div
        className="my-16 mx-3 md:mx-[128px] bg-gray-700 border-2 px-6 shadow-inner text-black py-6"
        ref={currentRef}
        style={{
          backgroundColor: bgColor,
          color: bgColor === "white" ? "black" : "white",
        }}

        // className="my-16 mx-3 md:mx-[128px] px-6 bg-gray-700 shadow-inner text-black py-6"
        // style={{
        //   backgroundColor: bgColor,
        //   color: bgColor === "white" ? "black" : "white",
        //   // borderWidth: "6px",
        //   // borderStyle: "solid",
        //   // borderImageSource:
        //   //   "linear-gradient(to right, red, orange, purple, yellow, green, blue)", // Correct gradient
        //   // borderImageSlice: 1,
        // }}
      >
        <div className="">
          {formData.logo && (
            <div className="flex justify-center">
              <img
                src={formData.logo}
                alt="logo"
                className="mb-4 w-[58.7.7px] h-[79.3px]"
              />
            </div>
          )}
          <h1
            className="text-center text-[50px]  text-orange-500 uppercase"
            // data-html2canvas-ignore
          >
            <span className="font-bold">
              {formData.institutionName.slice(0, 6)}
            </span>
            {formData.institutionName.slice(6)}
          </h1>
          <h3
            className={`text-[20px]  font-normal  ${
              bgColor === "white" ? "text-[#343533]" : "text-white"
            } mt-6 text-center`}
          >
            This is to certify that
          </h3>

          <div className="text-center my-4">
            <h1 className="font-bold text-[51px]   border-b-4 border-[#64696A] inline-block">
              {formData.studentName}
            </h1>
          </div>

          <p
            className={`${
              bgColor === "white" ? "text-[#343533]" : "text-white"
            } text-center text-[14px]  font-normal`}
          >
            {/* Has completed a six months program in frontend development with
            emphasis on React */}
            {formData.certificationStatement}
          </p>
          <h4
            className={`text-center text-[14px]  ${
              bgColor === "white" ? "text-[#343533]" : "text-white"
            }  font-normal py-5`}
          >
            {formData.dateOfIssue}
          </h4>

          <p
            className={`font-normal text-center text-[14px]  ${
              bgColor === "white" ? "text-[#343533]" : "text-white"
            }  `}
          >
            {/* {formData.programStatement} */}
          </p>
          {/* signatures */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[72px] mt-6 items-center justify-items-center px-[40px]">
            {formData.ceoSignature && (
              <div className="text-center">
                <img
                  src={formData.ceoSignature}
                  alt="CEO Signature"
                  className="w-[105px] h-full object-cover border-b-4 border-[#64696A] p-1"
                />
                <p
                  className={`font-medium text-[14px] ${
                    bgColor === "white" ? "text-[#343533]" : "text-white"
                  }`}
                >
                  Udim Manasseh
                </p>
                <p
                  className={`text-[10px] font-light ${
                    bgColor === "white" ? "text-black" : "text-white"
                  }`}
                >
                  Founder
                </p>
              </div>
            )}
            {formData.certBarcode && (
              <div className="flex items-center text-center md:flex-row flex-col">
                <img
                  src={formData.certBarcode}
                  alt="Certificate Barcode"
                  className="w-[105px] h-full object-cover"
                />
                <p
                  className={`text-start text-[12px] font-medium ${
                    bgColor === "white" ? "text-[#343533]" : "text-white"
                  } pl-[2px] w-full`}
                >
                  Certificate ID: FL24BO
                  <span className={ `${bgColor === 'white'? 'text-black':'text-white' }`} >{formData.identifier} </span>
                </p>
              </div>
            )}
            {formData.mgrSignature && (
              <div className="text-center">
                <img
                  src={formData.mgrSignature}
                  alt="Manager Signature"
                  className="w-[105px] h-full object-cover border-b-4 border-[#64696A] p-1"
                />
                <h1
                  className={`font-medium text-[14px] ${
                    bgColor === "white" ? "text-[#343533]" : "text-white"
                  }`}
                >
                  Justin Mark
                </h1>
                <p
                  className={`text-[10px] font-light ${
                    bgColor === "white" ? "text-[#343533]" : "text-white"
                  }`}
                >
                  Training Manager
                </p>
              </div>
            )}
          </div>

          {/*  */}
        </div>
      </div>
      <div className="mt-5  md:mx-[135px] mb-2 md:mb-8 flex items-center justify-between ">
        <button
          onClick={handlePreview2}
          className="rounded-lg px-10 py-3 hover:text-white text-md border border-gray-500 hover:bg-orange-500 text-black"
        >
          checkout
        </button>
        <button
          className="bg-orange-500 rounded-lg px-6 py-2 border-2 text-white text-lg hover:bg-transparent hover:text-black"
          onClick={handleDownload}
          disabled={loading}
        >
          {/* {loading ? <ClipLoader color="black" size={24} /> : "Download"} */}
          {loading ? (
            <RotatingLines
              visible={true}
              height="36"
              width="36"
              color="grey"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              className="px-20 py-3 bg-white"
            />
          ) : (
            "Download"
          )}
        </button>
      </div>
    </div>
  );
}
