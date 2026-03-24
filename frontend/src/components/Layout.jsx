import AmpNavbar from "./AmpNavbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <AmpNavbar />

      <main className="page-content">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
