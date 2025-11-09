import ListOptions from "@/components/ListOptions";
import MessageFrame from "@/components/MessageFrame";
import MessageHistory from "@/components/MessageHistory";
import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full bg-black relative">
      {/* Midnight Mist */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 100%, rgba(70, 85, 110, 0.5) 0%, transparent 60%),
            radial-gradient(circle at 50% 100%, rgba(99, 102, 241, 0.4) 0%, transparent 70%),
            radial-gradient(circle at 50% 100%, rgba(181, 184, 208, 0.3) 0%, transparent 80%)
            `,
        }}
      />
      {/* Your Content/Components */}
      <div className="w-screen flex min-h-screen relative z-10">
        <div className=" flex-col hidden sm:flex sm:flex-row">
          <ListOptions />
          <MessageHistory />
        </div>

        <MessageFrame />
      </div>
    </div>
  );
};

export default HomePage;
