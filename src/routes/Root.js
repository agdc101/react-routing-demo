import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";
import classes from "./Root.module.css";

function Root() {
  return (
    <div>
        <MainNav/>
        <main className={classes.main}>
            <Outlet />
        </main>
    </div>
  );
}

export default Root;