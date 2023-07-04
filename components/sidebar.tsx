import React from "react";

const Sidebar = () => {
  const agents = [
    { id: 1, name: "Shadowstrike" },
    { id: 2, name: "Spectra" },
    { id: 3, name: "Vortex" },
    { id: 4, name: "Phoenix" },
    { id: 5, name: "Sentinel" },
    { id: 6, name: "Luminary" },
    { id: 7, name: "Cipher" },
    { id: 8, name: "Eclipse" },
    // Add more agents as needed
  ];

  return (
    <div className="flex">
      <div className="mt-auto">
        <div className="flex items-center px-4 py-2">
          <button className="px-2 py-1 mr-2 text-xs font-semibold text-white bg-blue-500 rounded hover:bg-blue-600">
            Agent +
          </button>
          <button className="px-2 py-1 mr-2 text-xs font-semibold text-white bg-green-500 rounded hover:bg-green-600">
            Analytics
          </button>
          <button className="px-2 py-1 mr-2 text-xs font-semibold text-white bg-red-500 rounded hover:bg-red-600">
            Dashboard
          </button>
        </div>
        <hr className="my-2 border-gray-200" />
        <p className="px-4 py-2 text-xs font-semibold text-gray-400">
          Available Agents
        </p>
        <ul className="space-y-1">
          {agents.map((agent) => (
            <li
              key={agent.id}
              className="flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-gray-700"
            >
              <svg
                className="w-4 h-4 mr-2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              {agent.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
