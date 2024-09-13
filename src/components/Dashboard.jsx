import React from "react";

export default function Dashboard() {
  return (
    <div className="p-6  ">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      {/* Subscriber Statistics */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          "Total Subscribers",
          "Active Subscribers",
          "Dead Tokens",
          "Active Domains",
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
          >
            <h3 className="text-lg font-semibold">{item}</h3>
            <p className="text-3xl font-bold">17</p>{" "}
            {/* Replace '17' with dynamic data if needed */}
          </div>
        ))}
      </div>

      {/* Overview Section */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-6">
        <h3 className="text-lg font-semibold mb-2">Overview</h3>
        {/* Add your overview chart component here */}
        <p>Overview chart will be displayed here.</p>
      </div>

      {/* Country Statistics Section */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Country</h3>
          {/* Add your country chart component here */}
          <p>Country chart will be displayed here.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Country</h3>
          {/* Add another country chart component here */}
          <p>Another country chart will be displayed here.</p>
        </div>
      </div>
    </div>
  );
}
