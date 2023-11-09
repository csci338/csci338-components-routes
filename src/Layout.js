import "./Layout.css";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <Nav />
            <main className="Layout">
                {/* Components are injected here via the router */}
                <Outlet />
            </main>
        </>
    );
}

export default Layout;
