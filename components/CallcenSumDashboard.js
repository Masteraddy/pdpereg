import React from "react";

const CallcenSumDashboard = () => {
  return (
    <div className="flex">
      <div className="relative hidden min-h-screen md:block w-36">
        <img src="/log.png" alt="" className="w-3/5 mx-auto my-6" />
        <img
          src="/profile.png"
          alt=""
          className="w-4/6 mx-auto rounded-lg shadow-lg"
        />
        <h2 className="mx-auto font-bold text-center text-green-700 uppercase">
          Ahmad Bello
        </h2>
        <h2 className="p-2 mx-auto my-5 font-bold leading-4 text-green-700 uppercase">
          overall reg: <br />
          234
        </h2>
        <div className="flex flex-col my-6">
          <img src="/settings.png" alt="" className="w-1/5 mx-auto" />
          <p className="font-bold text-center text-green-700">Settings</p>
        </div>
        <div className="absolute flex items-center justify-center bottom-4 left-5">
          <img src="/logout.png" alt="" className="w-8 pr-2" />
          <p className="text-sm font-medium text-center">Log Out</p>
        </div>
      </div>

      <div className="w-full min-h-screen bg-green-100">
        <div className="mt-5 text-center uppercase">
          <h1 className="text-2xl font-bold text-green-800">
            Peoples Democratic <span className="text-red-700"> party</span>
          </h1>
          <p className="font-semibold text-green-600">
            Membership management system dashboard
          </p>
        </div>
        <div className="block p-5 my-8 rounded bg-green-50 md:hidden">
          <div className="flex items-center justify-center mx-auto">
            <img src="/pic.jpg" alt="" className="w-12 h-12 rounded-full" />
            <h2 className="font-bold text-center text-green-700 uppercase">
              Ahmad Bello
            </h2>
          </div>
          <h2 className="p-2 mx-auto my-2 font-bold leading-4 text-center text-green-700 uppercase">
            overall reg: 234
          </h2>
          <div className="flex items-center justify-around">
            <div className="flex items-center justify-center">
              <img src="/logout.png" alt="" className="w-8 mr-2" />
              <p className="text-sm font-medium text-center">Log Out</p>
            </div>
            <div className="flex items-center justify-center">
              <img src="/settings.png" alt="" className="w-8 mr-2" />
              <p className="font-bold text-center text-green-700">Settings</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col p-2 m-2 text-sm text-green-800 md:w-1/4 lg:text-base mx-2">
            <p className="text-5xl font-bold text-green-800">On Going</p>
            <p className="my-4 text-green-800">Ongoing Registration</p>
            <div className="flex items-center justify-center p-2">
              <img src="/task.png" alt="" className="w-8 h-8" />
              <p className="px-2 mx-auto">Completed Enrollment</p>
              <p className="p-2 border-l border-green-600">123</p>
            </div>
            <div className="relative p-2 rounded-lg shadow-xl h-80 bg-white">
              <div className="flex items-center justify-center">
                <img src="/task1.png" alt="" className="w-8 h-8" />
                <p className="px-2 mx-auto">Pending Enrollment</p>
                <p className="p-2 border-l border-green-600">123</p>
              </div>
              <a className="absolute right-2 bottom-2">
                <img src="/arrow.png" alt="" className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-col p-2 m-2 text-green-800 md:w-3/4">
            <h2 className="text-center font-bold text-3xl uppercase">
              summary indication
            </h2>
            <div className="flex flex-col md:flex-row">
              <div className="mt-5 mr-4 px-2 rounded-lg bg-white w-full md:w-3/4">
                <div className="text-center items-center">
                  <p className="pb-2 text-md font-bold uppercase">
                    Resident information
                  </p>
                  <div className="grid grid-cols-2 gap-2 font-bold">
                    <div className="text-green-800">
                      <h2 className="text-xs font-semibold">State</h2>
                      <h2 className="text-2xl font-bold mb-4">Lagos</h2>
                    </div>
                    <div>
                      <h2 className="uppercase text-xs font-semibold">lga</h2>
                      <h2 className="text-2xl font-bold">Ifako-Ijaye</h2>
                    </div>
                    <div>
                      <h2 className="text-xs font-semibold">Ward</h2>
                      <h2 className="text-2xl font-bold">42</h2>
                    </div>
                    <div className="">
                      <button className="p-2 my-4 px-6 font-semibold text-white text-xs uppercase bg-green-800 rounded-sm">
                        Add new members
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-1 mt-5 w-full md:w-2/4">
                <div className="items-center">
                  <p className="pb-2 text-center text-sm font-bold uppercase">
                    polling units Counts
                  </p>
                  <div className="flex items-center justify-center uppercase text-xs font-bold">
                    <p className="px-2 mx-auto">Area</p>
                    <p className="p-2">Head Count</p>
                  </div>
                  <div className="px-2 h-20 overflow-y-scroll">
                    {"12345678".split("").map((val) => (
                      <div
                        key={val}
                        className="flex items-center justify-center"
                      >
                        <p className="px-2 mx-auto">Abule Egba {val}</p>
                        <p className="p-2">50</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallcenSumDashboard;
