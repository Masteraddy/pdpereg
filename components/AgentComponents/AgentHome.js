import React from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { getPollingUnit } from "../../libs/handlers";
import { db } from "../../libs/clientDb";

const AgentHome = ({ onAddNew, user }) => {
  const regMembers = useLiveQuery(() => db.members.toArray());
  let regNoInPU = (pu) => {
    let ans = regMembers?.filter((val) => val.votingpu == pu).length;
    console.log(ans);
    return ans;
  };
  return (
    <div className="flex flex-col p-2 m-2 text-green-800 md:w-3/4">
      <h2 className="text-3xl font-bold text-center uppercase">summary indication</h2>
      <div className="flex flex-col md:flex-row">
        <div className="w-full px-2 mt-5 mr-4 bg-white rounded-lg md:w-3/4">
          <div className="items-center text-center">
            <p className="pb-2 font-bold uppercase text-md">Resident information</p>
            <div className="grid grid-cols-2 gap-2 font-bold">
              <div className="text-green-800">
                <h2 className="text-xs font-semibold uppercase">State</h2>
                <h2 className="mb-4 text-2xl font-bold uppercase">{user?.state}</h2>
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase">lga</h2>
                <h2 className="text-2xl font-bold uppercase">{user?.localgovt}</h2>
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase">Ward</h2>
                <h2 className="text-2xl font-bold uppercase">{user?.ward}</h2>
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
            <p className="pb-2 text-sm font-bold text-center uppercase">polling units Counts</p>
            <div className="flex items-center justify-center text-xs font-bold uppercase">
              <p className="px-2 mx-auto">Area</p>
              <p className="p-2">Head Count</p>
            </div>
            <div className="h-20 px-2 overflow-y-scroll">
              {getPollingUnit(user?.state, user?.localgovt, user?.ward).map((val) => (
                <div key={val} className="flex items-center justify-center">
                  <p className="px-2 mx-auto">{val}</p>
                  <p className="p-2">{regNoInPU(val) || 0}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-5 bg-white rounded-lg md:w-48">
        <h2 className="flex items-center justify-center p-2 mx-auto my-2 font-semibold text-center text-green-800 bg-green-200 rounded-lg w-44">
          New Members
        </h2>
        <div className="items-center justify-center h-40 px-2 overflow-y-scroll">
          {regMembers?.map((value) => (
            <div className="flex py-1 border-b border-green-600">
              <span className="pr-1">
                <img src={value.image} alt="" className="w-6 h-6" />
              </span>
              <span className="pl-1">
                {value.surname} {value.firstname}
              </span>
            </div>
          ))}
        </div>
        <button className="flex items-center justify-center p-1 mx-auto my-2 text-sm font-semibold text-center text-green-800 uppercase bg-white border-2 border-green-400 rounded-lg w-36">
          Submit All
        </button>
      </div>
    </div>
  );
};

export default AgentHome;
