import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "2rem" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
