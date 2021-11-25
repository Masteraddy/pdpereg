import Head from "next/head";

const Profilepage = () => {
  return (
    <div className="bg-white">
      <h2 className="uppercase text-center font-bold text-lg text-green-700 mt-2">
        Profile Confirmation{" "}
      </h2>
      <div className="flex flex-col md:flex md:flex-row p-4">
        <div className="p-5 py-10 mt-5">
          <img
            src="/pic.jpg"
            alt=""
            className="w-2/6 mx-auto rounded-lg shadow-lg"
          />
          <input
            type="file"
            className="w-full md:ml-40 my-5 focus:bg-green-200"
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          <form action="" className="max-w-lg p-5 py-10 mt-5">
            <div className="grid grid-cols-2 gap-6 text-sm text-center text-green-700">
              <label htmlFor="">
                Name <span className="font-bold text-green-600">*</span>
                <input
                  type="text"
                  className="p-2 mb-4 w-full border-solid border-2 border-green-400 text-sm text-center text-green-400"
                  placeholder="Firstname"
                />
              </label>
              <label htmlFor="">
                Surname <span className="font-bold text-green-600">*</span>
                <input
                  type="text"
                  className="p-2 mb-4 w-full border-solid border-2 border-green-400 text-sm text-center text-green-400"
                  placeholder="Surname"
                />
              </label>
              <label htmlFor="">
                MiddleName <span className="font-bold text-green-600">*</span>
                <input
                  type="text"
                  className="p-2 mb-4 w-full border-solid border-2 border-green-400 text-sm text-center text-green-400"
                  placeholder="MiddleName"
                />
              </label>
              <label htmlFor="" className="w-full">
                State <span className="font-bold text-green-600">*</span>
                <select
                  name=""
                  className="p-2 mb-4 w-full border-solid border-2 border-green-400 text-sm text-center text-green-400"
                  id=""
                >
                  <option value="">Please Select</option>
                  <option value="o">Oyo</option>
                  <option value="l">Lagos</option>
                </select>
              </label>
              <label htmlFor="" className="w-full">
                Local Government{" "}
                <span className="font-bold text-green-600">*</span>
                <select
                  name=""
                  className="p-2 mb-4 w-full border-solid border-2 border-green-400 text-sm text-center text-green-400"
                  id=""
                >
                  <option value="">Please Select</option>
                  <option value="a">Lagos Island</option>
                  <option value="i">Ifako-Jaiye</option>
                </select>
              </label>
              <label htmlFor="" className="w-full">
                Ward <span className="font-bold text-green-600">*</span>
                <select
                  name=""
                  className="p-2 mb-4 w-full border-solid border-2 border-green-400 text-sm text-center text-green-400"
                  id=""
                >
                  <option value="">Please Select</option>
                  <option value="a">Ward A</option>
                  <option value="b">Ward B</option>
                </select>
              </label>
            </div>
            <div className="flex justify-end mt-20">
              <button className="p-2 my-4 px-6 font-semibold text-white bg-green-800 rounded-lg">
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-5 text-sm text-center text-green-800">
        <p className="">
          Please Note: Please ensure the names entered above are spelt correctly
          because they cannot be changed once you proceed beyound this point
        </p>
      </div>
    </div>
  );
};

export default Profilepage;
