import React, { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { getVan } from "../Api";

const HostVansDetails = () => {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = React.useState(null);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)


  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}

  React.useEffect(() => {
    // fetch(`/api/host/vans/${id}`)
    //   .then((res) => res.json())
    //   .then((data) => setCurrentVan(data.vans));

    async function hostVans(){
      setLoading(true)
      try{

        const data = await getVan(id)
        setCurrentVan(data)
      }
      catch (error){
        setError(error)

      }

      finally{
        setLoading(false)
      }
    }

    hostVans()
  }, []);


  if (loading) {
    return <h1>Loading...</h1>
}

if (error) {
    return <h1>There was an error: {error.message}</h1>
}

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>

        <nav className="host-van-detail-nav">
          <NavLink
            end
            to="."
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Price
          </NavLink>
          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Photo
          </NavLink>
        </nav>

        <Outlet context={{currentVan}} />
      </div>
    </section>
  );
};

export default HostVansDetails;
