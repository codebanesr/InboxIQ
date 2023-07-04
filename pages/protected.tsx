import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Layout from "../components/layout";
import AccessDenied from "../components/access-denied";
import Sidebar from "../components/sidebar";
import BotCreationComponent from "../components/create-bot";
import ConversationThread from "../components/conversation-thread";

export default function ProtectedPage() {
  const { data: session } = useSession();
  const [content, setContent] = useState();

  // Fetch content from protected route
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/examples/protected");
      const json = await res.json();
      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  // If no session exists, display access denied message
  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    );
  }

  // If session exists, display content
  return (
    <Layout>
      <div className="flex">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="w-3/4">
          <BotCreationComponent />
        </div>
        <div className="w-2/4">
          <ConversationThread />
        </div>
      </div>
    </Layout>
  );
}
