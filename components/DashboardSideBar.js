import React from "react";

const DashboardSideBar = ({ user, signOut }) => {
  return (
    <div className="relative hidden min-h-screen md:block w-64">
      <img src="/log.png" alt="" className="w-3/5 mx-auto my-6" />
      <img
        src="/pic.jpg"
        alt=""
        className="w-4/6 mx-auto rounded-lg shadow-lg"
      />
      <h2 className="mx-auto font-bold text-center text-green-700 uppercase mt-5">
        {user?.firstname} {user?.surname}
      </h2>
      <h2 className="p-2 mx-auto my-5 text-center font-bold leading-4 text-green-700 uppercase">
        overall reg: 234
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
          <img src="/logout.png" alt="" className="w-8 p-1" />
          <span className="text-sm font-medium text-center">Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardSideBar;
