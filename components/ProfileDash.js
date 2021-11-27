import axios from "axios";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Router from "next/router";
import { useState } from "react";

const ProfilePage = ({ user, onProFileUpdate }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    middlename: "",
    surname: "",
    state: "",
    localgovt: "",
    ward: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // console.log(formData);
        axios
          .put(`/api/user/${user._id}`, formData)
          .then((dt) => {
            Router.push("/dashboard");
            signOut();
            // onProFileUpdate(userUpd);
          })
          .catch((error) => console.log(error));
      }}
      className="p-8 bg-gray-50"
    >
      <h2 className="mt-8 text-lg font-bold text-center text-green-700 uppercase">
        Profile Confirmation{" "}
      </h2>
      <div className="flex flex-col max-w-5xl p-4 m-8 mx-auto bg-white rounded shadow-xl md:flex-row">
        <label htmlFor="img" className="flex flex-col items-center justify-center md:w-2/5">
          <img src="/prof.png" alt="" className="w-1/2 m-10 rounded-lg shadow-lg md:w-1/3" />
          <input type="file" id="img" className="hidden focus:bg-green-200" />
        </label>
        <div className="flex flex-row items-center justify-center md:w-3/5">
          <div className="">
            <div className="grid grid-cols-2 gap-6 text-sm text-center text-green-700">
              <label htmlFor="">
                Name <span className="font-bold text-green-600">*</span>
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={(e) => handleChange(e)}
                  className="w-full p-2 mb-4 text-sm text-center text-green-400 border-2 border-green-400 border-solid"
                  placeholder="Firstname"
                />
              </label>
              <label htmlFor="">
                Surname <span className="font-bold text-green-600">*</span>
                <input
                  type="text"
                  className="w-full p-2 mb-4 text-sm text-center text-green-400 border-2 border-green-400 border-solid"
                  value={formData.surname}
                  onChange={(e) => handleChange(e)}
                  name="surname"
                  placeholder="Surname"
                />
              </label>
              <label htmlFor="">
                MiddleName <span className="font-bold text-green-600">*</span>
                <input
                  type="text"
                  className="w-full p-2 mb-4 text-sm text-center text-green-400 border-2 border-green-400 border-solid"
                  value={formData.middlename}
                  onChange={(e) => handleChange(e)}
                  name="middlename"
                  placeholder="MiddleName"
                />
              </label>
              <label htmlFor="" className="w-full">
                State <span className="font-bold text-green-600">*</span>
                <select
                  name="state"
                  className="w-full p-2 mb-4 text-sm text-center text-green-400 border-2 border-green-400 border-solid"
                  value={formData.state}
                  onChange={(e) => handleChange(e)}
                  id=""
                >
                  <option value="">Please Select</option>
                  <option value="oyo">Oyo</option>
                  <option value="lagos">Lagos</option>
                </select>
              </label>
              <label htmlFor="" className="w-full">
                Local Government <span className="font-bold text-green-600">*</span>
                <select
                  name="localgovt"
                  className="w-full p-2 mb-4 text-sm text-center text-green-400 border-2 border-green-400 border-solid"
                  value={formData.localgovt}
                  onChange={(e) => handleChange(e)}
                  id=""
                >
                  <option value="">Please Select</option>
                  <option value="lagos-island">Lagos Island</option>
                  <option value="ifakojaiye">Ifako-Jaiye</option>
                </select>
              </label>
              <label htmlFor="" className="w-full">
                Ward <span className="font-bold text-green-600">*</span>
                <select
                  name="ward"
                  className="w-full p-2 mb-4 text-sm text-center text-green-400 border-2 border-green-400 border-solid"
                  value={formData.ward}
                  onChange={(e) => handleChange(e)}
                  id=""
                >
                  <option value="">Please Select</option>
                  <option value="a">Ward A</option>
                  <option value="b">Ward B</option>
                </select>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end m-8 mx-auto mt-5 lg:max-w-5xl">
        <button className="p-2 px-6 my-4 font-semibold text-white bg-green-800 rounded-lg">
          Confirm
        </button>
      </div>
      <div className="mt-5 text-sm text-center text-green-800">
        <p className="max-w-lg mx-auto">
          Please Note: Please ensure the names entered above are spelt correctly because they cannot
          be changed once you proceed beyound this point
        </p>
      </div>
    </form>
  );
};

export default ProfilePage;
