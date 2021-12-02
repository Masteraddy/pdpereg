import React, { useState, useEffect } from "react";
import { getSession, signOut, useSession } from "next-auth/react";

import AgentDashboard from "../components/AgentDashboard";
import CallCenDashboard from "../components/CallCenDashboard";
import ProfilePage from "../components/ProfileDash";
import Router from "next/router";

const Dashboard = ({ sess }) => {
  const [user, setUser] = useState({});
  const { data, status } = useSession({
    required: true,
    onUnauthenticated() {
      Router.push("/");
    },
  });

  // console.log(sess);

  useEffect(() => {
    setUser(data?.user);
  }, [user]);

  if (status == "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen text-3xl text-green-900">
        Loading...
      </div>
    );
  }

  if (data && typeof sess?.user?.ward == "undefined") {
    return <ProfilePage user={sess?.user} onProFileUpdate={(val) => setUser(val)} />;
  }

  if (sess?.user?.usertype == "agent") {
    return <AgentDashboard user={sess?.user} />;
  }

  if (sess?.user?.usertype == "callcenter") {
    return (
      <div>
        <CallCenDashboard user={sess?.user} />
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center min-h-screen text-3xl text-green-900">
      You're not allowed dude!!
      <button onClick={() => signOut()} className="flex items-center justify-center">
        <img src="/logout.png" alt="" className="w-8 p-1" />
        <span className="text-sm font-medium text-center">Log Out</span>
      </button>
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  return {
    props: { sess: session },
  };
}

export default Dashboard;
