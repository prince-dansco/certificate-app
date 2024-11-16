"use client";
import { useContext } from "react";
import { PiArrowFatLineUpBold } from "react-icons/pi";
import { GoHash } from "react-icons/go";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MyContextData } from "../contextCom/page";
import { RotatingLines } from "react-loader-spinner";

export default function InputDetail() {
  const {
    formData,
    handleChangeFile,
    handleIconClick,
    logoInputRef,
    ceoSignatureInputRef,
    certBarcodeInputRef,
    mgrSignatureInputRef,
    handleChangeText,
    handleDownloadToPrev,
    isLogoUploaded,
    loading,
    handlePreview,
    handleRetrievePreview,
  } = useContext(MyContextData);
  return (
    <div className="">
      <div className="px-2 my-5 mx-auto py-5 shadow-lg p-3 bg-white max-w-[1100px] w-full">
        <h1 className="mt-8 text-center text-orange-500 text-2xl md:text-4xl font-bold">
          CERTIFICATE APP DESIGN
        </h1>
        <div className=" px-4 md:px-10 py-10">
          <div className="">
            {/* Logo upload */}
            <div className="flex items-center justify-between mb-5 md:flex-row flex-col gap-4 md:gap-0  ">
              <div className="flex">
                <input
                  ref={logoInputRef}
                  type="file"
                  name="logo"
                  className="hidden"
                  onChange={handleChangeFile}
                />
                {!isLogoUploaded ? (
                  <label
                    htmlFor="logo"
                    className="px-4 py-3 text-lg border border-gray-300 bg-white cursor-pointer  max-w-[400px] w-full"
                    onClick={() => handleIconClick(logoInputRef)}
                  >
                    Upload Logo
                  </label>
                ) : (
                  <div className="flex justify-center max-w-[500px] w-full px-14 py-3  border border-gray-300">
                    <img
                      src={formData.logo}
                      alt="logo"
                      className=" w-[45.7px] h-[53.34px] text-center object-contain"
                    />
                  </div>
                )}
                <div
                  className="bg-orange-500 p-4 text-white inline-block cursor-pointer"
                  onClick={() => handleIconClick(logoInputRef)}
                >
                  <PiArrowFatLineUpBold size={35} />
                </div>
              </div>
              {/* Number input */}
              <div className="flex mx-5">
                <div
                  className="bg-orange-500 p-4 text-white inline-block cursor-pointer"
                  onClick={handleRetrievePreview}
                >
                  <GoHash size={35} />
                </div>
                <input
                  type="number"
                  name="identifier"
                  placeholder="1"
                  value={formData.identifier || ""}
                  onChange={handleChangeText}
                  className="px-4 py-3 text-xl border max-w-[200px] w-full border-3-gray outline-none"
                />
              </div>
            </div>

            {/* Institution name input */}
            <div>
              <input
                type="text"
                name="institutionName"
                placeholder="Enter your name of institution"
                value={formData.institutionName}
                disabled
                onChange={handleChangeText}
                className="w-full border border-gray-300 px-4 py-3 outline-none"
              />
            </div>

            {/* Certification statement input */}
            <div>
              <input
                type="text"
                name="certificationStatement"
                placeholder="Certification statement"
                value={formData.certificationStatement}
                onChange={handleChangeText} // Use this handler for text inputs
                className="w-full border border-gray-300 px-4 py-3 my-5 outline-none"
              />
            </div>

            {/* Student name input */}
            <div>
              <input
                type="text"
                name="studentName"
                placeholder="Name of student"
                value={formData.studentName}
                onChange={handleChangeText} // Use this handler for text inputs
                className="w-full border border-gray-300 px-4 py-3 my-2 outline-none"
              />
            </div>

            {/* Program statement input */}
            <div>
              <input
                type="text"
                name="programStatement"
                placeholder="Statement of the  programme/ Course of study"
                value={formData.programStatement}
                onChange={handleChangeText} // Use this handler for text inputs
                className="w-full border border-gray-300 px-4 py-3 my-2 outline-none"
              />
            </div>

            {/* Other form inputs */}
            <div>
              <input
                type="date"
                name="dateOfIssue"
                placeholder="Date of issue"
                value={formData.dateOfIssue}
                onChange={handleChangeText} // Use this handler for text inputs
                className="w-full border border-gray-300 px-4 py-3 my-5 outline-none"
              />
            </div>

            {/* File uploads (CEO signature, Cert Barcode, Mgr signature) */}
            <div
              // className="grid items-center justify-between  grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 md:gap-0"
              className="flex items-center justify-between md:flex-row flex-col gap-4 md:gap-0"
            >
              {/* CEO signature */}
              <div className="flex">
                <input
                  ref={ceoSignatureInputRef}
                  type="file"
                  name="ceoSignature"
                  className="hidden"
                  onChange={handleChangeFile}
                />
                {!isLogoUploaded ? (
                  <label
                    htmlFor="ceoSignature"
                    className="px-4 py-3 text-lg border border-gray-300 bg-white cursor-pointer  max-w-[400px] w-full"
                    onClick={() => handleIconClick(ceoSignatureInputRef)}
                  >
                    CEO Signature
                  </label>
                ) : (
                  <div className="flex justify-center max-w-[500px] w-full px-14 py-3  border border-gray-300">
                    <img
                      src={formData.ceoSignature}
                      alt="ceoSignature"
                      className=" w-[45.7px] h-[53.34px] text-center object-contain"
                    />
                  </div>
                )}
                <div
                  className="bg-orange-500 p-4 text-white inline-block cursor-pointer"
                  onClick={() => handleIconClick(ceoSignatureInputRef)}
                >
                  <PiArrowFatLineUpBold size={35} />
                </div>
              </div>
              {/* Cert Barcode */}
              <div className="flex">
                <div
                  className="bg-orange-500 p-4 text-white inline-block cursor-pointer"
                  onClick={() => handleIconClick(certBarcodeInputRef)}
                >
                  <PiArrowFatLineUpBold size={35} />
                </div>
                <input
                  ref={certBarcodeInputRef}
                  type="file"
                  name="certBarcode"
                  className="hidden"
                  onChange={handleChangeFile}
                />
                {!isLogoUploaded ? (
                  <label
                    htmlFor="certBarcode"
                    className="px-6 py-3 text-lg border border-gray-300 bg-white cursor-pointer"
                    onClick={() => handleIconClick(certBarcodeInputRef)}
                  >
                    Cert No./Barcode
                  </label>
                ) : (
                  <div className="flex justify-center max-w-[500px] w-full px-14 py-3  border border-gray-300">
                    <img
                      src={formData.certBarcode}
                      alt="mgrSignature"
                      className=" w-[45.7px] h-[53.34px] text-center object-contain"
                    />
                  </div>
                )}
              </div>

              {/* Mgr signature */}
              <div className="flex">
                <input
                  ref={mgrSignatureInputRef}
                  type="file"
                  name="mgrSignature"
                  className="hidden"
                  onChange={handleChangeFile}
                />
                {!isLogoUploaded ? (
                  <label
                    htmlFor="mgrSignature"
                    className="px-4 py-3 text-lg border border-gray-300 bg-white cursor-pointer  max-w-[400px] w-full"
                    onClick={() => handleIconClick(mgrSignatureInputRef)}
                  >
                    Mgr. Signature
                  </label>
                ) : (
                  <div className="flex justify-center max-w-[500px] w-full px-14 py-3  border border-gray-300">
                    <img
                      src={formData.mgrSignature}
                      alt="mgrSignature"
                      className=" w-[45.7px] h-[53.34px] text-center object-contain"
                    />
                  </div>
                )}
                <div
                  className="bg-orange-500 p-4 text-white inline-block cursor-pointer"
                  onClick={() => handleIconClick(mgrSignatureInputRef)}
                >
                  <PiArrowFatLineUpBold size={35} />
                </div>
              </div>

              {/*  */}
            </div>

            {/* Button for downloading PDF */}
            <div className="mt-5 flex items-center justify-between ">
              <button
                onClick={handlePreview}
                className="rounded-lg px-10 py-3 hover:text-white text-md border border-gray-500 hover:bg-orange-500 text-black"
                disabled={loading}
              >
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
                  "Preview"
                )}
              </button>
              <button
                className="bg-orange-500 rounded-lg px-6 py-2 border-2 text-white text-lg hover:bg-transparent hover:text-black"
                onClick={handleDownloadToPrev}
              >
                Download
              </button>
            </div>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </div>
    </div>
  );
}
