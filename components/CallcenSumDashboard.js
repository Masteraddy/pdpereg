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
            <img src="/profile.png" alt="" className="w-12 h-12 rounded-full" />
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
          <div className="flex flex-col p-2 m-2 text-sm text-green-800 md:w-1/4 lg:text-base">
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

          <div className="p-2 m-2 md:w-3/4">
            <h2 className="text-center font-bold text-3xl uppercase my-36 text-green-800">
              summary indication
            </h2>
            <div className="p-5 mt-5 rounded-lg bg-white">
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                <div className="flex font-bold items-left">
                  <p className="p-4 text-sm font-bold uppercase">
                    Resident information
                  </p>
                  <div className="flex flex-col items-center justify-between text-green-800">
                    <h2 className="text-xs font-semibold py-2">State</h2>
                    <h2 className="text-3xl font-bold">Lagos</h2>
                    <h2 className="text-xs font-semibold py-2">Ward</h2>
                    <h2
                      className="text-3xl
 font-bold"
                    >
                      42
                    </h2>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h2>lga</h2>
                    <h2>ifako-ijaye</h2>
                    <div>
                      <button className="p-2 my-4 px-6 font-semibold text-white bg-green-800 rounded-lg">
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative mt-2 font-bold text-green-800 border-green-600 md:pl-2 md:border-l">
                  <p className="text-xs italic font-semibold uppercase">
                    Polling Units Counts
                  </p>
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
