import React from "react";

const AgentDashboard = () => {
  return (
    <div className="flex">
      <div className="relative hidden min-h-screen md:block w-36">
        <img src="/log.png" alt="" className="w-3/5 mx-auto my-6" />
        <img src="/profile.png" alt="" className="w-4/6 mx-auto" />
        <h2 className="mx-auto font-bold text-center text-green-700 uppercase">Ahmad Bello</h2>
        <h2 className="p-2 mx-auto my-5 font-bold leading-4 text-green-700 uppercase">
          overall reg: <br />
          234
        </h2>
        <div className="flex flex-col my-6">
          <img src="/settings.png" alt="" className="w-1/5 mx-auto" />
          <p className="font-bold text-center text-green-700">Settings</p>
        </div>
        <div className="absolute flex items-center justify-center bottom-4 left-5">
          <img src="/logout.png" alt="" className="w-8" />
          <p className="text-sm font-medium text-center">Log Out</p>
        </div>
      </div>

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
            <h2 className="font-bold text-center text-green-700 uppercase">Ahmad Bello</h2>
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
            <div className="relative p-2 rounded-lg shadow-xl h-80 bg-green-50">
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

          <div className="p-5 md:w-3/4">
            <form action="" className="p-5 py-10 mt-5 rounded-lg bg-green-50">
              <h2 className="mb-6 text-xl font-bold text-green-800 uppercase md:hidden">
                Person information
              </h2>
              <div className="grid grid-cols-1 gap-2 text-xs md:grid-cols-3">
                <div className="text-left">
                  <label htmlFor="" className="w-full">
                    Title <span className="font-bold text-green-600">*</span>
                    <select
                      name=""
                      className="w-full p-2 mb-4 border-b border-gray-400 outline-none focus:bg-green-200"
                      id=""
                    >
                      <option value="">Please Select</option>
                      <option value="mr">Mr</option>
                      <option value="mr">Mrs</option>
                      <option value="mr">Miss</option>
                    </select>
                  </label>
                  <label htmlFor="">
                    Name <span className="font-bold text-green-600">*</span>
                    <input
                      type="text"
                      className="w-full p-2 mb-4 border-b border-gray-400 outline-none focus:bg-green-200"
                      placeholder="Firstname"
                    />
                  </label>
                  <label htmlFor="">
                    Surname <span className="font-bold text-green-600">*</span>
                    <input
                      type="text"
                      className="w-full p-2 mb-4 border-b border-gray-400 outline-none focus:bg-green-200"
                      placeholder="Surname"
                    />
                  </label>
                  <label htmlFor="">
                    Othernames <span className="font-bold text-green-600">*</span>
                    <input
                      type="text"
                      className="w-full p-2 mb-4 border-b border-gray-400 outline-none focus:bg-green-200"
                      placeholder="Othername"
                    />
                  </label>
                  <label htmlFor="" className="w-full">
                    Gender <span className="font-bold text-green-600">*</span>
                    <select
                      name=""
                      className="w-full p-2 mb-4 border-b border-gray-400 outline-none focus:bg-green-200"
                      id=""
                    >
                      <option value="">Please Select</option>
                      <option value="m">Male</option>
                      <option value="f">Female</option>
                    </select>
                  </label>
                  <label htmlFor="" className="w-full">
                    Date Of Birth <span className="font-bold text-green-600">*</span>
                    <input
                      type="date"
                      className="w-full p-2 mb-4 border-b border-gray-400 outline-none focus:bg-green-200"
                      placeholder="Date of Birth"
                    />
                  </label>
                  <label htmlFor="">
                    Phone Number <span className="font-bold text-green-600">*</span>
                    <input
                      type="text"
                      className="w-full p-2 mb-4 border-b border-gray-400 outline-none focus:bg-green-200"
                      placeholder="09012345678"
                    />
                  </label>
                  <label htmlFor="">
                    Phone Network <span className="font-bold text-green-600">*</span>
                    <select
                      name=""
                      className="w-full p-2 mb-4 border-b border-gray-400 outline-none focus:bg-green-200"
                      id=""
                    >
                      <option value="">Please Select</option>
                      <option value="m">MTN</option>
                      <option value="a">Airtel</option>
                      <option value="e">Etisalat (9ja)</option>
                      <option value="g">GLO</option>
                    </select>
                  </label>
                </div>
                <div className="text-left">
                  <img src="/profile.png" className="h-36 w-28" alt="" />
                  <input
                    type="file"
                    className="w-full p-2 mb-4 border-b border-gray-400 outline-none focus:bg-green-200"
                    // placeholder="Upload"
                  />
                  <label htmlFor="">
                    Year of Joining <span className="font-bold text-green-600">*</span>
                    <select
                      name=""
                      className="w-full p-2 mb-4 border-b border-gray-400 outline-none focus:bg-green-200"
                      id=""
                    >
                      <option value="">Please Select</option>
                      <option value="10">2015</option>
                      <option value="11">2016</option>
                      <option value="12">2017</option>
                      <option value="1">2018</option>
                      <option value="2">2019</option>
                      <option value="3">2020</option>
                      <option value="4">2021</option>
                    </select>
                  </label>
                  <label htmlFor="">
                    Email <span className="font-bold text-green-600">*</span>
                    <input
                      type="email"
                      className="w-full p-2 mb-4 border-b border-gray-400 outline-none focus:bg-green-200"
                      placeholder="name@domain.com"
                    />
                  </label>
                  <label htmlFor="">
                    State <span className="font-bold text-green-600">*</span>
                    <select
                      name=""
                      className="w-full p-2 mb-4 border-b border-gray-400 outline-none focus:bg-green-200"
                      id=""
                    >
                      <option value="">Please Select</option>
                      <option value="10">2015</option>
                      <option value="11">2016</option>
                      <option value="12">2017</option>
                      <option value="1">2018</option>
                      <option value="2">2019</option>
                      <option value="3">2020</option>
                      <option value="4">2021</option>
                    </select>
                  </label>
                  <label htmlFor="">
                    Local Government <span className="font-bold text-green-600">*</span>
                    <select
                      name=""
                      className="w-full p-2 mb-4 border-b border-gray-400 outline-none focus:bg-green-200"
                      id=""
                    >
                      <option value="">Please Select</option>
                      <option value="10">2015</option>
                      <option value="11">2016</option>
                      <option value="12">2017</option>
                      <option value="1">2018</option>
                      <option value="2">2019</option>
                      <option value="3">2020</option>
                      <option value="4">2021</option>
                    </select>
                  </label>
                  <label htmlFor="">
                    Ward <span className="font-bold text-green-600">*</span>
                    <select
                      name=""
                      className="w-full p-2 mb-4 border-b border-gray-400 outline-none focus:bg-green-200"
                      id=""
                    >
                      <option value="">Please Select</option>
                      <option value="10">2015</option>
                      <option value="11">2016</option>
                      <option value="12">2017</option>
                      <option value="1">2018</option>
                      <option value="2">2019</option>
                      <option value="3">2020</option>
                      <option value="4">2021</option>
                    </select>
                  </label>
                </div>
                <div className="text-left">
                  <label htmlFor="" className="w-full">
                    Title <span className="font-bold text-green-600">*</span>
                    <select
                      name=""
                      className="w-full p-2 mb-4 border-b border-gray-400 outline-none focus:bg-green-200"
                      id=""
                    >
                      <option value="">Please Select</option>
                      <option value="mr">Mr</option>
                      <option value="mr">Mrs</option>
                      <option value="mr">Miss</option>
                    </select>
                  </label>
                  <label htmlFor="">
                    Name <span className="font-bold text-green-600">*</span>
                    <input
                      type="text"
                      className="w-full p-2 mb-4 border-b border-gray-400 outline-none focus:bg-green-200"
                      placeholder="Firstname"
                    />
                  </label>
                  <label htmlFor="">
                    Surname <span className="font-bold text-green-600">*</span>
                    <input
                      type="text"
                      className="w-full p-2 mb-4 border-b border-gray-400 outline-none focus:bg-green-200"
                      placeholder="Surname"
                    />
                  </label>
                  <label htmlFor="">
                    Othernames <span className="font-bold text-green-600">*</span>
                    <input
                      type="text"
                      className="w-full p-2 mb-4 border-b border-gray-400 outline-none focus:bg-green-200"
                      placeholder="Othername"
                    />
                  </label>
                  <label htmlFor="" className="w-full">
                    Gender <span className="font-bold text-green-600">*</span>
                    <select
                      name=""
                      className="w-full p-2 mb-4 border-b border-gray-400 outline-none focus:bg-green-200"
                      id=""
                    >
                      <option value="">Please Select</option>
                      <option value="m">Male</option>
                      <option value="f">Female</option>
                    </select>
                  </label>
                  <label htmlFor="" className="w-full">
                    Date Of Birth <span className="font-bold text-green-600">*</span>
                    <input
                      type="date"
                      className="w-full p-2 mb-4 border-b border-gray-400 outline-none focus:bg-green-200"
                      placeholder="Date of Birth"
                    />
                  </label>
                  <label htmlFor="">
                    Phone Number <span className="font-bold text-green-600">*</span>
                    <input
                      type="text"
                      className="w-full p-2 mb-4 border-b border-gray-400 outline-none focus:bg-green-200"
                      placeholder="09012345678"
                    />
                  </label>
                  <label htmlFor="">
                    Phone Network <span className="font-bold text-green-600">*</span>
                    <select
                      name=""
                      className="w-full p-2 mb-4 border-b border-gray-400 outline-none focus:bg-green-200"
                      id=""
                    >
                      <option value="">Please Select</option>
                      <option value="m">MTN</option>
                      <option value="a">Airtel</option>
                      <option value="e">Etisalat (9ja)</option>
                      <option value="g">GLO</option>
                    </select>
                  </label>
                </div>
              </div>
              <button className="px-2 py-1 text-green-700 uppercase border-2 border-green-700 rounded-md hover:bg-green-500 hover:text-green-100">
                Proceed
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDashboard;
