import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function MainLayout({ children }) {
  return (
    <>
      <NavBar />
      <main className="min-h-[100vh]">{children}</main>
      <Footer />
    </>
  );
}
