import React from "react";
import { Link, NavLink,Outlet } from "react-router-dom";

const HostLayout = () => {

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}
  return (
    <>
      <nav className="host-nav">
        <NavLink 
        end
        style={({isActive})=> isActive ? activeStyles : null}
        to=".">Dashboard</NavLink>
        <NavLink 
        end
        style={({isActive})=> isActive ? activeStyles : null}
        to="income"> Income</NavLink>
        <NavLink 
        end
        style={({isActive})=> isActive ? activeStyles : null}
        to="review"> Reviews</NavLink>

<NavLink 
        end
        style={({isActive})=> isActive ? activeStyles : null}
        to="/host/vans"> Vans</NavLink>
      </nav>

      <Outlet/>
    </>
  );
};

export default HostLayout;
