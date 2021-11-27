import React from "react";

const AgentHome = ({ onAddNew, user }) => {
  return (
    <div className="flex flex-col p-2 m-2 text-green-800 md:w-3/4">
      <h2 className="text-3xl font-bold text-center uppercase">
        summary indication
      </h2>
      <div className="flex flex-col md:flex-row">
        <div className="w-full px-2 mt-5 mr-4 bg-white rounded-lg md:w-3/4">
          <div className="items-center text-center">
            <p className="pb-2 font-bold uppercase text-md">
              Resident information
            </p>
            <div className="grid grid-cols-2 gap-2 font-bold">
              <div className="text-green-800">
                <h2 className="text-xs font-semibold uppercase">State</h2>
                <h2 className="mb-4 text-2xl uppercase font-bold">{user?.state}</h2>
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase">lga</h2>
                <h2 className="text-2xl uppercase font-bold">{user?.localgovt}</h2>
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase">Ward</h2>
                <h2 className="text-2xl uppercase font-bold">{user?.ward}</h2>
              </div>
              <div className="">
                <button
                  onClick={() => onAddNew()}
                  className="p-2 px-2 text-xs font-semibold text-white uppercase bg-green-800 rounded-sm"
                >
                  Add new member
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-1 mt-5 bg-white rounded-lg md:w-2/4">
          <div className="items-center">
            <p className="pb-2 text-sm font-bold text-center uppercase">
              polling units Counts
            </p>
            <div className="flex items-center justify-center text-xs font-bold uppercase">
              <p className="px-2 mx-auto">Area</p>
              <p className="p-2">Head Count</p>
            </div>
            <div className="h-20 px-2 overflow-y-scroll">
              {"12345678".split("").map((val) => (
                <div key={val} className="flex items-center justify-center">
                  <p className="px-2 mx-auto">Abule Egba {val}</p>
                  <p className="p-2">50</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full md:w-48 mt-5 rounded-lg">
        <h2 className="flex items-center justify-center mx-auto bg-green-200 rounded-lg p-2 w-44 my-2 text-center text-green-800 font-semibold">
          New Members
        </h2>
        <div className="px-2 h-40 overflow-y-scroll items-center justify-center">
          {"123456789".split("").map((value) => (
            <div className="flex py-1 border-b border-green-600">
              <span className="pr-1">
                <img src="pic.jpg" alt="" className="w-6 h-6" />
              </span>
              <span className="pl-1"> Hammed Bello</span>
            </div>
          ))}
        </div>
        <button className="flex items-center justify-center mx-auto uppercase w-36 bg-white rounded-lg border-2 border-green-400 p-1 text-sm text-center my-2 text-green-800 font-semibold">
          Submit All
        </button>
      </div>
    </div>
  );
};

export default AgentHome;
