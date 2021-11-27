import React from "react";

const AddMember = ({ onNewAdded }) => {
  return (
    <div className="p-5 md:w-3/4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onNewAdded();
        }}
        className="p-5 py-10 mt-5 rounded-lg bg-green-50"
      >
        <div className="grid grid-cols-2 gap-2 text-xs md:grid-cols-3">
          <div className="text-left">
            <h2 className="mb-4 text-xs font-bold text-green-800 uppercase">
              Person information
            </h2>
            <label htmlFor="" className="w-full">
              Title <span className="font-bold text-green-600">*</span>
              <select
                name=""
                className="w-full p-2 mb-4 border rounded-md border-gray-600 outline-none focus:bg-green-50"
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
                className="w-full p-2 mb-4 border rounded-md border-gray-600 outline-none focus:bg-green-50"
                placeholder="Firstname"
              />
            </label>
            <label htmlFor="">
              Surname <span className="font-bold text-green-600">*</span>
              <input
                type="text"
                className="w-full p-2 mb-4 border rounded-md border-gray-600 outline-none focus:bg-green-50"
                placeholder="Surname"
              />
            </label>
            <label htmlFor="">
              Othernames <span className="font-bold text-green-600">*</span>
              <input
                type="text"
                className="w-full p-2 mb-4 border rounded-md border-gray-600 outline-none focus:bg-green-50"
                placeholder="Othername"
              />
            </label>
            <label htmlFor="" className="w-full">
              Gender <span className="font-bold text-green-600">*</span>
              <select
                name=""
                className="w-full p-2 mb-4 border rounded-md border-gray-600 outline-none focus:bg-green-50"
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
                className="w-full p-2 mb-4 border rounded-md border-gray-600 outline-none focus:bg-green-50"
                placeholder="Date of Birth"
              />
            </label>
            <label htmlFor="">
              Phone Number <span className="font-bold text-green-600">*</span>
              <input
                type="text"
                className="w-full p-2 mb-4 border rounded-md border-gray-600 outline-none focus:bg-green-50"
                placeholder="09012345678"
              />
            </label>
            <label htmlFor="">
              Phone Network <span className="font-bold text-green-600">*</span>
              <select
                name=""
                className="w-full p-2 mb-4 border rounded-md border-gray-600 outline-none focus:bg-green-50"
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
              className="w-full p-2 mb-4 border rounded-md border-gray-600 outline-none focus:bg-green-50"
              // placeholder="Upload"
            />
            <label htmlFor="">
              Year of Joining{" "}
              <span className="font-bold text-green-600">*</span>
              <select
                name=""
                className="w-full p-2 mb-4 border rounded-md border-gray-600 outline-none focus:bg-green-50"
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
                className="w-full p-2 mb-4 border rounded-md border-gray-600 outline-none focus:bg-green-50"
                placeholder="name@domain.com"
              />
            </label>
            <h2 className="uppercase font-bold text-center my-2 text-xs text-green-800">
              Local chapter information
            </h2>
            <label htmlFor="">
              State <span className="font-bold text-green-600">*</span>
              <select
                name=""
                className="w-full p-2 mb-4 border rounded-md border-gray-600 outline-none focus:bg-green-50"
                id=""
              >
                <option value="">Please Select</option>
                <option value="1">Abia</option>
                <option value="2">Adamawa</option>
                <option value="3">Akwa Ibom</option>
                <option value="4">Oyo</option>
                <option value="5">Lagos</option>
                <option value="6">Sokoto</option>
                <option value="7">Taraba</option>
              </select>
            </label>
            <label htmlFor="">
              Local Government{" "}
              <span className="font-bold text-green-600">*</span>
              <select
                name=""
                className="w-full p-2 mb-4 border rounded-md border-gray-600 outline-none focus:bg-green-50"
                id=""
              >
                <option value="">Please Select</option>
                <option value="1">BINJI</option>
                <option value="2">BODINGA</option>
                <option value="3">DANGE/SHUNI</option>
                <option value="4">GADA</option>
                <option value="5">GORONYO</option>
                <option value="6">2020</option>
                <option value="7">2021</option>
              </select>
            </label>
            <label htmlFor="">
              Ward <span className="font-bold text-green-600">*</span>
              <select
                name=""
                className="w-full p-2 mb-4 border rounded-md border-gray-600 outline-none focus:bg-green-50"
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
          <div className="text-left col-span-full md:col-auto">
            <h2 className="uppercase font-bold text-center my-2 text-xs text-green-800">
              Voting information
            </h2>
            <label htmlFor="" className="w-full">
              State <span className="font-bold text-green-600">*</span>
              <select
                name=""
                className="w-full p-2 mb-4 border rounded-md border-gray-600 outline-none focus:bg-green-50"
                id=""
              >
                <option value="">Please Select</option>
                <option value="mr">Mr</option>
                <option value="mr">Mrs</option>
                <option value="mr">Miss</option>
              </select>
            </label>
            <label htmlFor="">
              Local Government{" "}
              <span className="font-bold text-green-600">*</span>
              <select
                name=""
                className="w-full p-2 mb-4 border rounded-md border-gray-600 outline-none focus:bg-green-50"
                id=""
              >
                <option value="">Please Select</option>
                <option value="mr">Mr</option>
                <option value="mr">Mrs</option>
                <option value="mr">Miss</option>
              </select>
            </label>
            <label htmlFor="">
              Ward <span className="font-bold text-green-600">*</span>
              <select
                name=""
                className="w-full p-2 mb-4 border rounded-md border-gray-600 outline-none focus:bg-green-50"
                id=""
              >
                <option value="">Please Select</option>
                <option value="mr">Mr</option>
                <option value="mr">Mrs</option>
                <option value="mr">Miss</option>
              </select>
            </label>
            <label htmlFor="">
              Polling Unit <span className="font-bold text-green-600">*</span>
              <select
                name=""
                className="w-full p-2 mb-4 border rounded-md border-gray-600 outline-none focus:bg-green-50"
                id=""
              >
                <option value="">Please Select</option>
                <option value="mr">Mr</option>
                <option value="mr">Mrs</option>
                <option value="mr">Miss</option>
              </select>
            </label>
            <label htmlFor="" className="w-full">
              VIN (Voters Identification No)
              <span className="font-bold text-green-600">*</span>
              <input
                type="text"
                className="w-full p-2 mb-4 border rounded-md border-gray-600 outline-none focus:bg-green-50"
                placeholder="Voters ID Card Number"
              />
            </label>
            <label htmlFor="" className="w-full">
              Contact Address{" "}
              <span className="font-bold text-green-600">*</span>
              <input
                type="text"
                className="w-full p-2 mb-4 border rounded-md border-gray-600 outline-none focus:bg-green-50"
                placeholder=""
              />
            </label>
            <label htmlFor="">
              Former Party Position (IF ANY)
              <span className="font-bold text-green-600">*</span>
              <input
                type="text"
                className="w-full p-2 mb-4 border rounded-md border-gray-600 outline-none focus:bg-green-50"
                placeholder=""
              />
            </label>
            <label htmlFor="">
              Former Elected Position(IF ANY)
              <span className="font-bold text-green-600">*</span>
              <input
                type="text"
                className="w-full p-2 mb-4 border rounded-md border-gray-600 outline-none focus:bg-green-50"
                placeholder=""
              />
            </label>
          </div>
        </div>
        <button className="px-2 py-1 text-green-700 uppercase border-2 border-green-700 rounded-md hover:bg-green-500 hover:text-green-100">
          Proceed
        </button>
      </form>
    </div>
  );
};

export default AddMember;
