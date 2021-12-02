import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../libs/clientDb";

import AddMember from "./AgentComponents/AddMember";
import AgentHome from "./AgentComponents/AgentHome";
import DashboardSideBar from "./DashboardSideBar";

const AgentDashboard = ({ user }) => {
  const [addNew, setAddNew] = useState(false);
  const { data, status } = useSession();
  const regMembers = useLiveQuery(() => db.members.toArray()) || [];

  if (status == "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen text-3xl text-green-900">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex">
      <DashboardSideBar signOut={() => signOut()} user={user} />

      <div className="w-full min-h-screen bg-green-100">
        <div className="mt-5 text-center uppercase">
          <h1 className="text-2xl font-bold text-green-800">
            Peoples Democratic <span className="text-red-700"> party</span>
          </h1>
          <p className="font-semibold text-green-600">Membership management system dashboard</p>
        </div>
        <div className="block p-5 my-8 rounded bg-green-50 md:hidden">
          <div className="flex items-center justify-center mx-auto">
            <img src="/profile.png" alt="" className="w-12 h-12 rounded-full" />
            <h2 className="font-bold text-center text-green-700 uppercase">
              {data?.user?.firstname} {data?.user?.surname}
            </h2>
          </div>
          <h2 className="p-2 mx-auto my-2 font-bold leading-4 text-center text-green-700 uppercase">
            overall reg: 234
          </h2>
          <div className="flex items-center justify-around">
            <button onClick={() => signOut()} className="flex items-center justify-center">
              <img src="/logout.png" alt="" className="w-8 mr-2" />
              <span className="text-sm font-medium text-center">Log Out</span>
            </button>
            <div className="flex items-center justify-center">
              <img src="/settings.png" alt="" className="w-8 mr-2" />
              <p className="font-bold text-center text-green-700">Settings</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col p-2 m-2 text-sm text-green-800 md:w-1/4 lg:text-base">
            <p className="text-3xl font-bold text-green-800">On Going</p>
            <div className="flex items-center justify-center p-2">
              <img src="/task.png" alt="" className="w-8 h-8" />
              <p className="px-2 mx-auto">Completed Enrollment</p>
              <p className="p-2 border-l border-green-600">123</p>
            </div>
            <div className="relative p-2 rounded-lg shadow-xl bg-green-50">
              <div className="flex items-center justify-center">
                <img src="/task1.png" alt="" className="w-8 h-8" />
                <p className="px-2 mx-auto">Pending Enrollment</p>
                <p className="p-2 border-l border-green-600">{regMembers?.length}</p>
              </div>
              {/* <a className="absolute right-2 bottom-2">
                <img src="/arrow.png" alt="" className="w-4 h-4" />
              </a> */}
            </div>
          </div>

          {addNew ? (
            <AddMember onNewAdded={() => setAddNew(false)} />
          ) : (
            <AgentHome user={data?.user} onAddNew={() => setAddNew(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AgentDashboard;
