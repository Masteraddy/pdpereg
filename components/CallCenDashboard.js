import { signOut } from "next-auth/react";
import React from "react";

const CallCenDashboard = () => {
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
        <div className="absolute bottom-4 left-5">
          <button
            onClick={() => signOut()}
            className="flex items-center justify-center"
          >
            <img src="/logout.png" alt="" className="w-8" />
            <span className="text-sm font-medium text-center">Log Out</span>
          </button>
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
            <div className="relative p-2 rounded-lg shadow-xl bg-green-50">
              <div className="flex items-center justify-center">
                <img src="/task1.png" alt="" className="w-8 h-8" />
                <p className="px-2 mx-auto">Pending Enrollment</p>
                <p className="p-2 border-l border-green-600">123</p>
              </div>
              <a className="absolute right-2 bottom-2">
                <img src="/arrow.png" alt="" className="w-4 h-4" />
              </a>
              <div className="flex flex-col items-center justify-center font-bold">
                <div className="h-64 px-2 overflow-y-scroll">
                  {"123456789".split("").map((value) => (
                    <div className="flex py-2 border-b border-green-600">
                      <span className="pr-1"> {value}</span>
                      <span className="pl-1 border-l border-green-600">
                        {" "}
                        Hammed Bellow
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 md:w-3/4">
            <div className="flex flex-col justify-center w-full p-5 py-5 mr-5 text-green-800 bg-white rounded-lg">
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                <div className="flex flex-col font-bold items-left">
                  <p className="p-4 text-xs italic font-semibold uppercase">
                    Personal information
                  </p>
                  <img src="/pic.jpg" alt="" className="w-2/6" />
                  <h2 className="my-2 text-sm">
                    Title: <span className="uppercase">Mr</span>{" "}
                  </h2>
                  <h2 className="my-2 text-sm">
                    Name: <span className="uppercase">Lekan</span>{" "}
                  </h2>
                  <h2 className="my-2 text-sm">
                    Surname: <span className="uppercase">Bello</span>{" "}
                  </h2>
                  <h2 className="my-2 text-sm">
                    Othernames: <span className="uppercase">odunade</span>{" "}
                  </h2>
                  <h2 className="my-2 text-sm">Gender: Male</h2>
                  <h2 className="my-2 text-sm">
                    Date of Birth: 23 | 11 | 2021
                  </h2>
                  <h2 className="my-2 text-sm">Phone Number: 09035919948</h2>
                  <h2 className="my-2 text-sm">
                    Email: hbellohammed@gmail.com
                  </h2>
                  <h2 className="mt-2 text-sm">Year of Joining PDP: 2020</h2>
                </div>
                <div className="relative mt-2 font-bold text-green-800 border-green-600 md:pl-2 md:border-l">
                  <p className="text-xs italic font-semibold uppercase">
                    Local chapter information
                  </p>
                  <h2 className="my-2 text-sm">State: Lagos</h2>
                  <h2 className="my-2 text-sm">
                    Local Government: Lagos Mainland
                  </h2>
                  <h2 className="my-2 text-sm">Ward: Ward B</h2>

                  <p className="mt-8 text-xs italic font-semibold uppercase">
                    voting information
                  </p>
                  <h2 className="my-2 text-sm">State: Lagos</h2>
                  <h2 className="my-2 text-sm">
                    Local Government: Lagos Mainland
                  </h2>
                  <h2 className="my-2 text-sm">Ward: Ward B</h2>
                  <h2 className="my-2 text-sm">Polling Unit: Polling B</h2>
                  <h2 className="my-2 text-sm">
                    VIN{" "}
                    <span className="text-xs font-semibold">
                      (Voters Identification Number)
                    </span>
                    : 2236589452
                  </h2>
                  <h2 className="my-2 text-sm">
                    Contact Address: Bode thomas, Isale General, Oluyole, Lagos
                    Island, Oyo State
                  </h2>
                  <h2 className="my-2 text-sm">
                    Former Party Position{" "}
                    <span className="text-xs font-semibold uppercase">
                      (If any)
                    </span>
                    : Chairman
                  </h2>
                  <h2 className="my-2 text-sm">
                    Former Elected Position{" "}
                    <span className="text-xs font-semibold uppercase">
                      (if any)
                    </span>
                    : Treasurer
                  </h2>
                  <div className="bottom-0 flex justify-end md:absolute right-2">
                    <button className="p-2 font-bold text-white bg-green-800 rounded-xl">
                      Done
                    </button>
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

export default CallCenDashboard;
