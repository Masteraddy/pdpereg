import React from "react";

const CallCenDashboard = () => {
  return (
    <div className="bg-gray-50 flex flex-col min-h-screen py-2">
      <h2 className="text-green-700 text-2xl font-bold uppercase text-center pl-32">
        People democratic <span className="text-red-700">party</span>{" "}
      </h2>
      <div className="flex mx-4">
        <div className="relative rounded-l-3xl bg-white min-h-screen w-36">
          <img src="/log.png" alt="" className="w-2/5 mx-auto my-6" />
          <img src="/pic.jpg" alt="" className="w-3/6 mx-auto" />
          <h2 className="mx-auto font-bold text-xs text-center text-green-700 uppercase">
            Ahmad Bello
          </h2>
          <h2 className="p-2 mx-auto my-5 mt-20 font-bold text-sm leading-4 text-green-700 uppercase">
            overall reg: <br />
            234
          </h2>
          <div className="flex flex-col my-auto">
            <img src="/settings.png" alt="" className="w-1/5 mx-auto" />
            <p className="font-bold text-center text-sm text-green-700">
              Settings
            </p>
          </div>
          <div className="absolute flex items-center justify-center bottom-4 left-5">
            <img src="/logout.png" alt="" className="w-1/5" />
            <p className="text-sm font-medium text-center">Log Out</p>
          </div>
        </div>
        <div className="w-full rounded-r-3xl min-h-screen bg-green-100">
          <div className="uppercase">
            <p className="font-semibold text-center text-green-600">
              Membership management system dashboard
            </p>
          </div>
          <div className="flex">
            <div className="flex flex-col w-1/4 p-2 m-2 mx-10 text-green-800">
              <p className="text-5xl font-bold text-green-800">
                On <br /> Going
              </p>
              <p className="my-4 text-green-800">Ongoing Registration</p>
              <div className="flex py-2">
                <img src="/task.png" alt="" className="w-8 h-8" />
                <p className="mx-6 text-sm italic">
                  Completed
                  <br /> Enrollment
                </p>
                <p className="p-2 border-l border-green-600">240</p>
              </div>
              <div className="relative rounded-lg shadow-xl h-96 max-w-lg bg-white">
                <div className="flex mx-auto p-2">
                  <img src="/task1.png" alt="" className="w-8 h-8" />
                  <p className="mx-6 text-sm italic">
                    Pending
                    <br /> Enrollment
                  </p>
                  <p className="p-2 border-l border-green-600">123</p>
                </div>
                <div className="flex flex-col font-bold items-center justify-center">
                  <div className="border-l border-green-600 m-2 px-2">
                    <div className="border-b broder-green-600">
                      Hammed Bellow
                    </div>
                    <div className="border-b broder-green-600">
                      Hammed Bellow
                    </div>
                    <div className="border-b broder-green-600">
                      Hammed Bellow
                    </div>
                    <div className="border-b broder-green-600">
                      Hammed Bellow
                    </div>
                    <div className="border-b broder-green-600">
                      Hammed Bellow
                    </div>
                    <div className="border-b broder-green-600">
                      Hammed Bellow
                    </div>
                    <div className="border-b broder-green-600">
                      Hammed Bellow
                    </div>
                    <div className="border-b broder-green-600">
                      Hammed Bellow
                    </div>
                    <div className="border-b broder-green-600">
                      Hammed Bellow
                    </div>
                    <div className="border-b broder-green-600">
                      Hammed Bellow
                    </div>
                    <div className="border-b broder-green-600">
                      Hammed Bellow
                    </div>
                    <div className="border-b broder-green-600">
                      Hammed Bellow
                    </div>
                  </div>
                </div>
                <a className="absolute right-2 bottom-2">
                  <img src="/arrow.png" alt="" className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full p-5 py-10 mt-28 mb-10 mr-5 rounded-lg bg-white text-green-800">
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col items-left font-bold">
                  <p className="italic text-xs uppercase font-semibold p-4">
                    Personal information
                  </p>
                  <img src="/pic.jpg" alt="" className="w-2/6" />
                  <h2 className="text-sm my-2">
                    Title: <span className="uppercase">Mr</span>{" "}
                  </h2>
                  <h2 className="text-sm my-2">
                    Name: <span className="uppercase">Lekan</span>{" "}
                  </h2>
                  <h2 className="text-sm my-2">
                    Surname: <span className="uppercase">Bello</span>{" "}
                  </h2>
                  <h2 className="text-sm my-2">
                    Othernames: <span className="uppercase">odunade</span>{" "}
                  </h2>
                  <h2 className="text-sm my-2">Gender: Male</h2>
                  <h2 className="text-sm my-2">
                    Date of Birth: 23 | 11 | 2021
                  </h2>
                  <h2 className="text-sm my-2">Phone Number: 09035919948</h2>
                  <h2 className="text-sm my-2">
                    Email: hbellohammed@gmail.com
                  </h2>
                  <h2 className="text-sm mt-2">Year of Joining PDP: 2020</h2>
                </div>
                <div className="border-l border-green-600 font-bold text-green-800 p-4">
                  <p className="italic text-xs uppercase font-semibold">
                    Local chapter information
                  </p>
                  <h2 className="text-sm my-2">State: Lagos</h2>
                  <h2 className="text-sm my-2">
                    Local Government: Lagos Mainland
                  </h2>
                  <h2 className="text-sm my-2">Ward: Ward B</h2>

                  <p className="italic text-xs uppercase font-semibold mt-8">
                    voting information
                  </p>
                  <h2 className="text-sm my-2">State: Lagos</h2>
                  <h2 className="text-sm my-2">
                    Local Government: Lagos Mainland
                  </h2>
                  <h2 className="text-sm my-2">Ward: Ward B</h2>
                  <h2 className="text-sm my-2">Polling Unit: Polling B</h2>
                  <h2 className="text-sm my-2">
                    VIN{" "}
                    <span className="text-xs font-semibold">
                      (Voters Identification Number)
                    </span>
                    : 2236589452
                  </h2>
                  <h2 className="text-sm my-2">
                    Contact Address: Bode thomas, Isale General, Oluyole, Lagos
                    Island, Oyo State
                  </h2>
                  <h2 className="text-sm my-2">
                    Former Party Position{" "}
                    <span className="text-xs uppercase font-semibold">
                      (If any)
                    </span>
                    : Chairman
                  </h2>
                  <h2 className="text-sm my-2">
                    Former Elected Position{" "}
                    <span className="text-xs uppercase font-semibold">
                      (if any)
                    </span>
                    : Treasurer
                  </h2>
                  <div className="mt-16 ml-80">
                    <button className="bg-green-800 text-white font-bold rounded-xl p-2">
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
