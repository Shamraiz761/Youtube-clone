import React from "react";
import Navbar from "../../components/header/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import RecommendedVideo from "../../components/video/RecommendedVideo";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row">
      <Sidebar />
      <RecommendedVideo />
      </div>
    </div>
  );
}

export default Home;
