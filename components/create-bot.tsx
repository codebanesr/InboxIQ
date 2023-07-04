import React, { useState } from "react";

const BotCreationComponent = () => {
  const [botType, setBotType] = useState("");
  const [botCapabilities, setBotCapabilities] = useState("");

  const handleBotTypeChange = (event: any) => {
    const selectedType = event.target.value;
    setBotType(selectedType);

    let capabilities = "";
    switch (selectedType) {
      case "softwareEngineer":
        capabilities =
          "This bot can assist with code reviews, provide programming language documentation, and offer suggestions for resolving coding issues.";
        break;
      case "entrepreneur":
        capabilities =
          "This bot can help with market research, business planning, financial analysis, and provide insights on entrepreneurship strategies.";
        break;
      case "salesAgent":
        capabilities =
          "This bot can assist with lead generation, sales pitch creation, customer relationship management, and provide sales analytics.";
        break;
      // Add more cases for other bot types
      default:
        capabilities = "";
        break;
    }

    setBotCapabilities(capabilities);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Create a Bot</h1>
      <div className="mb-4">
        <label htmlFor="botName" className="block text-lg font-medium">
          Bot Name:
        </label>
        <input
          type="text"
          id="botName"
          name="botName"
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="botType" className="block text-lg font-medium">
          Bot Type:
        </label>
        <select
          id="botType"
          name="botType"
          onChange={handleBotTypeChange}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        >
          <option value="">Select Bot Type</option>
          <option value="softwareEngineer">Software Engineer</option>
          <option value="entrepreneur">Entrepreneur</option>
          <option value="salesAgent">Sales Agent</option>
          {/* Add more options for other bot types */}
        </select>
      </div>

      {botCapabilities && (
        <div className="mb-4">
          <label className="block text-lg font-medium">Bot Capabilities:</label>
          <textarea
            value={botCapabilities}
            rows={4}
            readOnly
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
      )}

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Create Bot
      </button>
    </div>
  );
};

export default BotCreationComponent;
