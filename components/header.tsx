import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function handleWatcherClick(event: any) {
  event.preventDefault();

  // Send a request to your backend API
  fetch("/api/watch-email")
    .then((response) => {
      if (response.ok) {
        console.log("Email watch set up successfully");
      } else {
        console.error("Failed to set up email watch");
      }
    })
    .catch((error) => {
      console.error("Error setting up email watch:", error);
    });
}

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div>
          <a href="/" className="text-lg font-semibold">
            InboxIQ
          </a>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/protected">Protected</Link>
          </li>
          <li>
            <a href="#" onClick={handleWatcherClick}>
              Watcher
            </a>
          </li>
        </ul>
        <div>
          {session ? (
            <a
              href="/api/auth/signout"
              className="px-4 py-2 ml-4 font-medium text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              Sign out
            </a>
          ) : (
            <a
              href="/api/auth/signin"
              className="px-4 py-2 ml-4 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Login
            </a>
          )}
        </div>
      </nav>
    </header>
  );
}
