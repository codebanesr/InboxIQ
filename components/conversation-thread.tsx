interface Thread {
  user: string;
  avatar: string;
  timestamp: string;
  message: string;
}
import React, { ChangeEvent, FormEvent, useState } from "react";

const Thread = ({ threads }: { threads: Thread[] }) => {
  const [reply, setReply] = useState("");

  const handleReplyChange = (event: ChangeEvent<HTMLInputElement>) => {
    setReply(event.target.value);
  };

  const handleReplySubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle the reply submission logic here
    // For demonstration purposes, we'll just log the reply
    console.log("Reply:", reply);
    setReply("");
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
      <h2 className="text-2xl font-bold mb-4">Conversation Thread</h2>
      {threads.map((thread, index) => (
        <div key={index} className="mb-4">
          <div className="flex items-center mb-2">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8 rounded-full"
                src={thread.avatar}
                alt="User Avatar"
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{thread.user}</p>
              <p className="text-xs text-gray-500">{thread.timestamp}</p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-3">
            <p className="text-sm text-gray-800">{thread.message}</p>
          </div>
        </div>
      ))}
      <form onSubmit={handleReplySubmit} className="flex mt-4">
        <input
          type="text"
          value={reply}
          onChange={handleReplyChange}
          className="flex-1 appearance-none border border-gray-300 rounded-lg py-2 px-4 mr-2 focus:outline-none focus:border-blue-500"
          placeholder="Reply to the thread..."
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
        >
          Reply
        </button>
      </form>
    </div>
  );
};

// Sample conversation threads
const sampleThreads = [
  {
    user: "Shadowstrike",
    avatar: "/images/cuterobo.jpg",
    timestamp: "2023-07-03 10:30 AM",
    message: "Hello, how can I assist you today?",
  },
  {
    user: "Spectra",
    avatar: "/images/cuterobo.jpg",
    timestamp: "2023-07-03 11:05 AM",
    message: "I have a question about my recent order.",
  },
  {
    user: "Shadowstrike",
    avatar: "/images/cuterobo.jpg",
    timestamp: "2023-07-03 11:10 AM",
    message: "Sure, what is your order number?",
  },
  {
    user: "Spectra",
    avatar: "/images/cuterobo.jpg",
    timestamp: "2023-07-03 11:15 AM",
    message: "My order number is #12345.",
  },
];

const ConversationThread = () => {
  return <Thread threads={sampleThreads} />;
};

export default ConversationThread;
