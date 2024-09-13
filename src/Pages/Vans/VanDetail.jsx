import React from "react";
import "/server";
import { useParams, useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getVan } from "../Api";

const VanDetail = () => {
  const [van, setVandit] = useState(null);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)


  const {id }= useParams();
  const location = useLocation();

  useEffect(() => {

    async function VansDetails() {
      
      setLoading(true)
      try {
         const data = await getVan(id);
         setVandit(data)
      } catch (error) {
        setError(error)
      }
     finally{
        setLoading(false)
     }
    
     }

     VansDetails()
  }, [id]);

  const search = location.state?.search || '';
  const type = location.state?.type || 'all';


  if (loading) {
    return <h1>Loading...</h1>
}

if (error) {
    return <h1>There was an error: {error.message}</h1>
}


  return (
    <div className="van-detail-container">
      <Link to={`..${search}`}  relative="path"  className="back-button">
       <span>Back to {type}</span>
      </Link>

      
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default VanDetail;
