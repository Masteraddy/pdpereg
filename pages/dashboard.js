import React from "react";
import AgentDashboard from "../components/AgentDashboard";
import CallCenDashboard from "../components/CallCenDashboard";

const Dashboard = ({ user }) => {
  if (user == "agent") {
    return <AgentDashboard />;
  }
  if (user == "callcenter") {
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