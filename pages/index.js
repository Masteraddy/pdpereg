import Head from "next/head";
import { useEffect, useState } from "react";
import Captcha from "demos-react-captcha";
import Router from "next/router";
import { signIn, useSession } from "next-auth/react";

const Home = () => {
  const [captcha, setCaptcha] = useState(false);
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [password, setPassword] = useState("");

  const { data, status } = useSession();

  useEffect(() => {
    if (data?.user && status !== "loading") {
      Router.push("/dashboard");
      return;
    } else {
      setLoaded(true);
    }
  }, [status]);

  if (status == "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen text-3xl text-green-900">
        Loading...
      </div>
    );
  }

  if (!loaded) {
    return (
      <div className="flex items-center justify-center min-h-screen text-3xl text-green-900">
        Loading...
      </div>
    );
  }

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
        <div className="flex flex-col justify-center pt-5 md:hidden">
          <img src="/log.png" className="w-24 h-24 mx-auto" alt="" />
          <div className="uppercase">
            <h1 className="text-xl font-bold text-green-50">Peoples Democratic party</h1>
            <p className="text-sm font-bold text-green-50">membership management system</p>
            {/* <p className="mt-6 text-2xl font-bold leading-none text-green-50">
              join the largest <br /> political{" "}
              <span className="text-red-600">party</span> <br /> in nigeria
            </p> */}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="hidden text-3xl font-bold uppercase text-green-50 md:block">Login</h1>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              // console.log(captcha);
              if (!captcha) {
                setError("Incorrect Captcha");
                return;
              }
              if (password != "" && username != "") {
                // Router.push(`/dashboard?username=${username}`);
                let resp = await signIn("credentials", { username, password, redirect: false });
                // console.log(resp);
                if (resp.error) {
                  setError(resp.error);
                  return;
                }
                if (resp.ok) {
                  Router.push(`/dashboard`);
                }
                return;
              }
              setError("Please enter all required field");
            }}
            className="max-w-md p-5 py-10 mt-5 rounded-lg bg-green-50"
          >
            <h2 className="mb-6 text-xl font-bold text-green-800 uppercase md:hidden">Sign In</h2>
            {error && <p className="text-xs text-red-600">{error}</p>}
            <div className="flex">
              <span>
                {/* <img src="/Profile2.png" className="w-6 h-6 mt-2" alt="" /> */}

                <svg
                  className="w-8 h-8 text-green-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <input
                type="text"
                className="p-2 mb-4 ml-2 text-sm text-center border-b border-gray-400 outline-none w-60 rounded-xl focus:bg-green-200"
                placeholder="USERNAME"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex">
              <span>
                {/* <img src="/Lock.png" className="w-6 h-6 mt-2" alt="" /> */}

                <svg
                  className="w-8 h-8 text-green-700"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <rect x="5" y="11" width="14" height="10" rx="2" />{" "}
                  <circle cx="12" cy="16" r="1" /> <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                </svg>
              </span>
              <input
                type="password"
                className="p-2 mb-4 ml-3 text-sm text-center border-b border-gray-400 outline-none w-60 rounded-xl focus:bg-green-200"
                placeholder="PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-sm text-right text-green-700 uppercase align-baseline hover:text-red-600">
              <a href="#">Forgot Password?</a>
            </div>
            <div className="flex justify-center mb-4">
              <Captcha
                onChange={(status) => setCaptcha(status)}
                onRefresh={(status) => console.log(status)}
                placeholder="Insert Captcha"
                className="bg-gray-200"
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
            <div className="flex flex-wrap justify-center pt-12 md:mt-48 lg:mt-96">
              <img src="/logo.png" className="w-36" alt="" />
              <div className="flex flex-col justify-start pl-2 text-4xl font-bold text-green-700 uppercase">
                <p className="md:text-left">Peoples</p>
                <p className="md:text-left">Democratic</p>
                <p className="text-red-800 md:text-left">party</p>
                <p className="text-xl md:text-left">power to the people...</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="max-w-lg mt-5 text-xs text-center text-green-800">
        <div>
          <h2 className="font-semibold text-red-800 uppercase">Please Note:</h2>
          Please ensure the names entered above are spelt correctly because they cannot be changed
          once you proceed beyond this point.
        </div>
      </div>
    </div>
  );
};

export default Home;
