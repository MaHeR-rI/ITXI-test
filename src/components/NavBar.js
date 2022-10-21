import { useContext } from "react";
import AuthContext from "../store/AuthContext";

const NavBar = () => {
    const authCtx=useContext(AuthContext)

    return (<div className="navbar">
        <h2>Spotify Artist Search</h2>
       {authCtx.isLoggedIn && <span onClick={authCtx.logout}>logout</span>}
    </div>)
}
export default NavBar;