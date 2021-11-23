import Head from "next/head";
import { useState } from "react";
import Captcha from "demos-react-captcha";
import Router from "next/router";

const Home = () => {
  const [captcha, setCaptcha] = useState(false);
  return (
    <div
      style={{ background: "url('/bg.png')", backgroundSize: "cover" }}
      className="flex flex-col items-center justify-center min-h-screen py-2 bg-green-600"
    >
      <Head>
        <title>PDP Membership Registration</title>
        <link rel="icon" href="/log.png" />
      </Head>

      <main className="container grid items-center justify-center flex-1 w-full grid-cols-1 px-3 md;px-10 lg:px-20 mx-auto text-center md:grid-cols-2">
        <div className="flex flex-col justify-center mt-5 md:hidden">
          <img src="/log.png" className="w-24 h-24 mx-auto" alt="" />
          <div className="uppercase">
            <h1 className="text-xl font-bold text-green-50">
              Peoples Democratic party
            </h1>
            <p className="text-sm font-bold text-green-50">
              membership management system
            </p>
            {/* <p className="mt-6 text-2xl font-bold leading-none text-green-50">
              join the largest <br /> political{" "}
              <span className="text-red-600">party</span> <br /> in nigeria
            </p> */}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="hidden text-3xl font-bold uppercase text-green-50 md:block">
            Login
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (captcha) {
                Router.push("/");
              }
            }}
            className="max-w-md p-5 py-10 mt-5 rounded-lg bg-green-50"
          >
            <h2 className="mb-6 text-xl font-bold text-green-800 uppercase md:hidden">
              Sign In
            </h2>
            <div className="flex">
              <span>
                <img src="/profile2.png" className="w-6 h-6 mt-2" alt="" />
              </span>
              <input
                type="text"
                className="ml-2 w-60 p-2 mb-4 rounded rounded-xl border-b border-gray-400 text-center uppercase text-sm outline-none focus:bg-green-200"
                placeholder="Username"
              />
            </div>
            <div className="flex">
              <span>
                <img src="/lock.png" className="w-6 h-6 mt-2" alt="" />
              </span>
              <input
                type="password"
                className="ml-3 w-60 p-2 mb-4 rounded rounded-xl border-b border-gray-400 text-center uppercase text-sm outline-none focus:bg-green-200"
                placeholder="Password"
              />
            </div>
            <div className="align-baseline text-sm text-green-700 uppercase hover:text-red-600 text-right">
              <a href="#">Forgot Password?</a>
            </div>
            <div className="flex justify-center mb-4">
              <Captcha
                onChange={(status) => setCaptcha(status)}
                onRefresh={(status) => console.log(status)}
                placeholder="Insert Captcha"
                length={6}
              />
            </div>
            <button className="px-2 py-1 text-green-700 uppercase border-2 border-green-700 rounded-md hover:bg-green-500 hover:text-green-100">
              Proceed
            </button>
          </form>
        </div>
        <div className="flex-col justify-center hidden md:flex">
          <div className="flex flex-col uppercase">
            {/* <p className="justify-around mt-6 mb-24 text-4xl font-bold leading-none text-green-50">
              join the largest <br /> political{" "}
              <span className="text-red-600">party</span> <br /> in nigeria
            </p> */}
            <div className="flex flex-wrap justify-center mt-96 pt-12">
              <img src="/logo.png" className="w-36" alt="" />
              <div className="flex flex-col justify-start uppercase pl-2 text-4xl font-bold text-green-700">
                <p className="md:text-left">Peoples</p>
                <p className="md:text-left">Democratic</p>
                <p className="md:text-left text-red-800">party</p>
                <p className="md:text-left text-xl">power to the people...</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="max-w-lg mt-5 text-xs text-green-800 text-left">
        <p>
          <h2 className="font-semibold uppercase text-red-800">Please Note:</h2>
          Please ensure the names entered above are spelt correctly because they
          cannot be changed once you proceed beyond this point.
        </p>
      </div>
    </div>
  );
};

export default Home;
