import { Outlet } from "react-router-dom";
import Nav from "../composants/nav";
import Footer from "../composants/footer";

export default function Layout() {
  return (
    <>
      {/* all the other elements */}

      <Nav />
      <main >
        <Outlet />

      </main>

      <Footer />
      
    </>
  );
}