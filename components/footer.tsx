import Link from "next/link";
import packageJSON from "../package.json";

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <hr className="my-4" />
      <ul className="flex flex-wrap justify-center space-x-4">
        <li className="navItem">
          <a
            href="https://next-auth.js.org"
            className="text-gray-700 hover:text-gray-900"
          >
            Documentation
          </a>
        </li>
        <li className="navItem">
          <a
            href="https://www.npmjs.com/package/next-auth"
            className="text-gray-700 hover:text-gray-900"
          >
            NPM
          </a>
        </li>
        <li className="navItem">
          <a
            href="https://github.com/nextauthjs/next-auth-example"
            className="text-gray-700 hover:text-gray-900"
          >
            GitHub
          </a>
        </li>
        <li className="navItem">
          <Link href="/policy" className="text-gray-700 hover:text-gray-900">
            Policy
          </Link>
        </li>
        <li className="navItem">
          <em className="text-gray-700">
            next-auth@{packageJSON.dependencies["next-auth"]}
          </em>
        </li>
      </ul>
    </footer>
  );
}
