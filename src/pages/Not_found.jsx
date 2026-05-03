import React from 'react'
import "../App.css"
import song from "../assets/Humster song.mp4"

const Not_found = () => {
  return (
    <div>
      <h1 className='Eror'>Eror 404</h1>
      <h2 className='eror'>You may listen this like entertaiment</h2>
      <iframe style={{marginLeft:"50px"}} width="860" height="615" src="https://www.youtube.com/embed/H9K8-3PHZOU?si=DN7m79bPzpRSBGFW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <video src={song}></video>
    </div>
  )
}

export default Not_found
