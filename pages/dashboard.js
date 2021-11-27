import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import AgentDashboard from "../components/AgentDashboard";
import CallCenDashboard from "../components/CallCenDashboard";
import ProfilePage from "../components/ProfileDash";
import Router from "next/router";

const Dashboard = ({}) => {
  const [user, setUser] = useState({});
  const { data, status } = useSession({
    required: true,
    onUnauthenticated() {
      Router.push("/");
    },
  });

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

  if (data && typeof user?.ward == "undefined") {
    console.log(user?.ward);
    return <ProfilePage user={data?.user} onProFileUpdate={(val) => setUser(val)} />;
  }

  if (user?.usertype == "agent") {
    return <AgentDashboard />;
  }

  if (user?.usertype == "callcenter") {
    return (
      <div>
        <CallCenDashboard />
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center min-h-screen text-3xl text-green-900">
      You're not allowed dude!!
    </div>
  );
};

Dashboard.getInitialProps = async ({ query }) => {
  return { user: query.username };
};

export default Dashboard;
