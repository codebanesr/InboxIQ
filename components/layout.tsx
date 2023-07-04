import Header from "./header";
import Footer from "./footer";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-grow p-4">{children}</main>
      <Footer />
    </>
  );
}
