import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";

function Root() {
  return (
    <div>
        <MainNav/>
        <main>
            <Outlet />
        </main>
    </div>
  );
}

export default Root;