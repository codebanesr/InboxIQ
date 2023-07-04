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
    <header className="py-4">
      <div className="flex items-center justify-between">
        <p className="nojs-show text-gray-900">
          {!session && (
            <>
              <span className="text-sm">You are not signed in</span>
              <a
                href={`/api/auth/signin`}
                className="px-4 py-2 ml-4 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                Sign in
              </a>
            </>
          )}
          {session?.user && (
            <>
              <div className="flex items-center">
                {session.user.image && (
                  <img
                    src={session.user.image}
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                )}
                <div className="ml-4">
                  <small className="block text-sm">Signed in as</small>
                  <strong className="block text-lg">
                    {session.user.email ?? session.user.name}
                  </strong>
                </div>
              </div>
              <a
                href={`/api/auth/signout`}
                className="px-4 py-2 ml-4 font-medium text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300"
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign out
              </a>
            </>
          )}
        </p>
      </div>

      <nav className="mt-4">
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
      </nav>
    </header>
  );
}
