import React, { useState } from "react";
import { getState, getLGA, getWard, getPollingUnit } from "../../libs/handlers";
import { set, get, update } from "idb-keyval";

const AddMember = ({ onNewAdded }) => {
  const [formData, setFormData] = useState({
    title: "",
    firstname: "",
    surname: "",
    othername: "",
    gender: "",
    dateofbirth: "",
    phonenumber: "",
    phonenetwork: "",
    yearofjoining: "",
    email: "",
    state: "",
    localgovt: "",
    ward: "",
    votingstate: "",
    votinglocalgovt: "",
    votingward: "",
    votingpu: "",
    votersID: "",
    contactaddress: "",
    formerpartyposition: "",
    formerelectedposition: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="p-5 md:w-3/4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onNewAdded();
          // Save to Index DB
          let allDT = get("newReg");
          set(Date.now(), formData);
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
                name="title"
                required
                className="w-full p-2 mb-4 border border-gray-600 rounded-md outline-none focus:bg-green-50"
                onChange={(e) => handleChange(e)}
                value={formData.title}
              >
                <option value="">Please Select</option>
                <option value="mr">Mr</option>
                <option value="mrs">Mrs</option>
                <option value="miss">Miss</option>
                <option value="chief">Chief</option>
              </select>
            </label>
            <label htmlFor="">
              Firstname <span className="font-bold text-green-600">*</span>
              <input
                type="text"
                name="firstname"
                onChange={(e) => handleChange(e)}
                value={formData.firstname}
                className="w-full p-2 mb-4 border border-gray-600 rounded-md outline-none focus:bg-green-50"
                required
                placeholder="Firstname"
              />
            </label>
            <label htmlFor="">
              Surname <span className="font-bold text-green-600">*</span>
              <input
                type="text"
                name="surname"
                onChange={(e) => handleChange(e)}
                value={formData.surname}
                className="w-full p-2 mb-4 border border-gray-600 rounded-md outline-none focus:bg-green-50"
                required
                placeholder="Surname"
              />
            </label>
            <label htmlFor="">
              Othernames <span className="font-bold text-green-600">*</span>
              <input
                type="text"
                name="othername"
                onChange={(e) => handleChange(e)}
                value={formData.othername}
                className="w-full p-2 mb-4 border border-gray-600 rounded-md outline-none focus:bg-green-50"
                required
                placeholder="Othername"
              />
            </label>
            <label htmlFor="" className="w-full">
              Gender <span className="font-bold text-green-600">*</span>
              <select
                name="gender"
                onChange={(e) => handleChange(e)}
                required
                value={formData.gender}
                className="w-full p-2 mb-4 border border-gray-600 rounded-md outline-none focus:bg-green-50"
              >
                <option value="">Please Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>
            <label htmlFor="" className="w-full">
              Date Of Birth <span className="font-bold text-green-600">*</span>
              <input
                type="date"
                required
                name="dateofbirth"
                onChange={(e) => handleChange(e)}
                value={formData.dateofbirth}
                className="w-full p-2 mb-4 border border-gray-600 rounded-md outline-none focus:bg-green-50"
                placeholder="Date of Birth"
              />
            </label>
            <label htmlFor="">
              Phone Number <span className="font-bold text-green-600">*</span>
              <input
                type="tel"
                required
                name="phonenumber"
                onChange={(e) => handleChange(e)}
                value={formData.phonenumber}
                className="w-full p-2 mb-4 border border-gray-600 rounded-md outline-none focus:bg-green-50"
                placeholder="09012345678"
              />
            </label>
            <label htmlFor="">
              Phone Network <span className="font-bold text-green-600">*</span>
              <select
                name="phonenetwork"
                onChange={(e) => handleChange(e)}
                required
                value={formData.phonenetwork}
                className="w-full p-2 mb-4 border border-gray-600 rounded-md outline-none focus:bg-green-50"
                id=""
              >
                <option value="">Please Select</option>
                <option value="MTN">MTN</option>
                <option value="Airtel">Airtel</option>
                <option value="Etisalat">Etisalat (9ja)</option>
                <option value="GLO">GLO</option>
              </select>
            </label>
          </div>
          <div className="text-left">
            <img src="/profile.png" className="h-36 w-28" alt="" />
            <input
              type="file"
              className="w-full p-2 mb-4 border border-gray-600 rounded-md outline-none focus:bg-green-50"
              // required
              // placeholder="Upload"
            />
            <label htmlFor="">
              Year of Joining{" "}
              <span className="font-bold text-green-600">*</span>
              <input
                type="number"
                name="yearofjoining"
                onChange={(e) => handleChange(e)}
                value={formData.yearofjoining}
                className="w-full p-2 mb-4 border border-gray-600 rounded-md outline-none focus:bg-green-50"
                min="1960"
                required
                step="1"
                max={new Date().getFullYear()}
              />
            </label>
            <label htmlFor="">
              Email <span className="font-bold text-green-600">*</span>
              <input
                type="email"
                name="email"
                onChange={(e) => handleChange(e)}
                required
                value={formData.email}
                className="w-full p-2 mb-4 border border-gray-600 rounded-md outline-none focus:bg-green-50"
                placeholder="name@domain.com"
              />
            </label>
            <h2 className="my-2 text-xs font-bold text-center text-green-800 uppercase">
              Local chapter information
            </h2>
            <label htmlFor="">
              State <span className="font-bold text-green-600">*</span>
              <select
                name="state"
                className="w-full p-2 mb-4 border border-gray-600 rounded-md outline-none focus:bg-green-50"
                required
                onChange={(e) => handleChange(e)}
                value={formData.state}
              >
                <option value="">Please Select</option>
                {getState().map((val) => (
                  <option key={val} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="">
              Local Government{" "}
              <span className="font-bold text-green-600">*</span>
              <select
                name="localgovt"
                className="w-full p-2 mb-4 border border-gray-600 rounded-md outline-none focus:bg-green-50"
                onChange={(e) => handleChange(e)}
                required
                value={formData.localgovt}
              >
                <option value="">Please Select</option>
                {getLGA(formData.state).map((val) => (
                  <option value={val} key={val}>
                    {val}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="">
              Ward <span className="font-bold text-green-600">*</span>
              <select
                name="ward"
                className="w-full p-2 mb-4 border border-gray-600 rounded-md outline-none focus:bg-green-50"
                onChange={(e) => handleChange(e)}
                required
                value={formData.ward}
              >
                <option value="">Please Select</option>
                {getWard(formData.state, formData.localgovt).map((val) => (
                  <option value={val} key={val}>
                    {val}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="text-left col-span-full md:col-auto">
            <h2 className="my-2 text-xs font-bold text-center text-green-800 uppercase">
              Voting information
            </h2>
            <label htmlFor="" className="w-full">
              State <span className="font-bold text-green-600">*</span>
              <select
                name="votingstate"
                className="w-full p-2 mb-4 border border-gray-600 rounded-md outline-none focus:bg-green-50"
                onChange={(e) => handleChange(e)}
                required
                value={formData.votingstate}
              >
                <option value="">Please Select</option>
                {getState().map((val) => (
                  <option key={val} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="">
              Local Government{" "}
              <span className="font-bold text-green-600">*</span>
              <select
                name="votinglocalgovt"
                className="w-full p-2 mb-4 border border-gray-600 rounded-md outline-none focus:bg-green-50"
                onChange={(e) => handleChange(e)}
                required
                value={formData.votinglocalgovt}
              >
                <option value="">Please Select</option>
                {getLGA(formData.votingstate).map((val) => (
                  <option value={val} key={val}>
                    {val}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="">
              Ward <span className="font-bold text-green-600">*</span>
              <select
                name="votingward"
                className="w-full p-2 mb-4 border border-gray-600 rounded-md outline-none focus:bg-green-50"
                onChange={(e) => handleChange(e)}
                required
                value={formData.votingward}
              >
                <option value="">Please Select</option>
                {getWard(formData.votingstate, formData.votinglocalgovt).map(
                  (val) => (
                    <option value={val} key={val}>
                      {val}
                    </option>
                  )
                )}
              </select>
            </label>
            <label htmlFor="">
              Polling Unit <span className="font-bold text-green-600">*</span>
              <select
                name="votingpu"
                className="w-full p-2 mb-4 border border-gray-600 rounded-md outline-none focus:bg-green-50"
                onChange={(e) => handleChange(e)}
                required
                value={formData.votingpu}
              >
                <option value="">Please Select</option>
                {getPollingUnit(
                  formData.votingstate,
                  formData.votinglocalgovt,
                  formData.votingward
                ).map((val) => (
                  <option value={val} key={val}>
                    {val}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="" className="w-full">
              VIN (Voters Identification No)
              <span className="font-bold text-green-600">*</span>
              <input
                type="text"
                name="votersID"
                onChange={(e) => handleChange(e)}
                value={formData.votersID}
                className="w-full p-2 mb-4 border border-gray-600 rounded-md outline-none focus:bg-green-50"
                required
                placeholder="Voters ID Card Number"
              />
            </label>
            <label htmlFor="" className="w-full">
              Contact Address{" "}
              <span className="font-bold text-green-600">*</span>
              <input
                type="text"
                name="contactaddress"
                onChange={(e) => handleChange(e)}
                value={formData.contactaddress}
                className="w-full p-2 mb-4 border border-gray-600 rounded-md outline-none focus:bg-green-50"
                required
                placeholder="Contact Address"
              />
            </label>
            <label htmlFor="">
              Former Party Position (IF ANY)
              <input
                type="text"
                name="formerpartyposition"
                onChange={(e) => handleChange(e)}
                value={formData.formerpartyposition}
                className="w-full p-2 mb-4 border border-gray-600 rounded-md outline-none focus:bg-green-50"
                placeholder="Former Party Position"
              />
            </label>
            <label htmlFor="">
              Former Elected Position(IF ANY)
              <input
                type="text"
                name="formerelectedposition"
                onChange={(e) => handleChange(e)}
                value={formData.formerelectedposition}
                className="w-full p-2 mb-4 border border-gray-600 rounded-md outline-none focus:bg-green-50"
                placeholder="Former Elected Position"
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
