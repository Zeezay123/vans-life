import React from 'react'
import { useOutletContext } from "react-router-dom"
const HostVanPhoto = () => {

  const { currentVan } = useOutletContext();
  return (
    <img src={currentVan.imageUrl} className="host-van-detail-image" />
  )
}

export default HostVanPhoto