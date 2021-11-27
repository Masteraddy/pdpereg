import React from "react";

const CallCenDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen py-2 bg-gray-50">
      <h2 className="pl-32 text-2xl font-bold text-center text-green-700 uppercase">
        People democratic <span className="text-red-700">party</span>{" "}
      </h2>
      <div className="flex mx-4">
        <div className="relative min-h-screen bg-white rounded-l-3xl w-36">
          <img src="/log.png" alt="" className="w-2/5 mx-auto my-6" />
          <img src="/pic.jpg" alt="" className="w-3/6 mx-auto" />
          <h2 className="mx-auto text-xs font-bold text-center text-green-700 uppercase">
            Ahmad Bello
          </h2>
          <h2 className="p-2 mx-auto my-5 mt-20 text-sm font-bold leading-4 text-green-700 uppercase">
            overall reg: <br />
            234
          </h2>
          <div className="flex flex-col my-auto">
            <img src="/settings.png" alt="" className="w-1/5 mx-auto" />
            <p className="text-sm font-bold text-center text-green-700">Settings</p>
          </div>
          <div className="absolute flex items-center justify-center bottom-4 left-5">
            <img src="/logout.png" alt="" className="w-1/5" />
            <p className="text-sm font-medium text-center">Log Out</p>
          </div>
        </div>
        <div className="w-full min-h-screen bg-green-100 rounded-r-3xl">
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
              <div className="relative h-full max-w-lg bg-white rounded-lg shadow-xl">
                <div className="flex p-2 mx-auto">
                  <img src="/task1.png" alt="" className="w-8 h-8" />
                  <p className="mx-6 text-sm italic">
                    Pending
                    <br /> Enrollment
                  </p>
                  <p className="p-2 border-l border-green-600">123</p>
                </div>
                <div className="flex mt-8">
                  <iframe
                    src="https://www.iampdp.com/Membership.aspx"
                    frameBorder="0"
                    className="w-full h-60"
                  ></iframe>
                </div>
                <a className="absolute right-2 bottom-2">
                  <img src="/arrow.png" alt="" className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full p-5 py-10 mb-10 mr-5 text-green-800 bg-white rounded-lg mt-28">
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col font-bold items-left">
                  <p className="p-4 text-xs italic font-semibold uppercase">Personal information</p>
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
                  <h2 className="my-2 text-sm">Date of Birth: 23 | 11 | 2021</h2>
                  <h2 className="my-2 text-sm">Phone Number: 09035919948</h2>
                  <h2 className="my-2 text-sm">Email: hbellohammed@gmail.com</h2>
                  <h2 className="mt-2 text-sm">Year of Joining PDP: 2020</h2>
                </div>
                <div className="relative p-4 font-bold text-green-800 border-l border-green-600">
                  <p className="text-xs italic font-semibold uppercase">
                    Local chapter information
                  </p>
                  <h2 className="my-2 text-sm">State: Lagos</h2>
                  <h2 className="my-2 text-sm">Local Government: Lagos Mainland</h2>
                  <h2 className="my-2 text-sm">Ward: Ward B</h2>

                  <p className="mt-8 text-xs italic font-semibold uppercase">voting information</p>
                  <h2 className="my-2 text-sm">State: Lagos</h2>
                  <h2 className="my-2 text-sm">Local Government: Lagos Mainland</h2>
                  <h2 className="my-2 text-sm">Ward: Ward B</h2>
                  <h2 className="my-2 text-sm">Polling Unit: Polling B</h2>
                  <h2 className="my-2 text-sm">
                    VIN{" "}
                    <span className="text-xs font-semibold">(Voters Identification Number)</span>:
                    2236589452
                  </h2>
                  <h2 className="my-2 text-sm">
                    Contact Address: Bode thomas, Isale General, Oluyole, Lagos Island, Oyo State
                  </h2>
                  <h2 className="my-2 text-sm">
                    Former Party Position{" "}
                    <span className="text-xs font-semibold uppercase">(If any)</span>: Chairman
                  </h2>
                  <h2 className="my-2 text-sm">
                    Former Elected Position{" "}
                    <span className="text-xs font-semibold uppercase">(if any)</span>: Treasurer
                  </h2>
                  <div className="absolute bottom-0 flex justify-end right-2">
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
