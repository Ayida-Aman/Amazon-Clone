import React from 'react'
import {PacmanLoader} from 'react-spinners'
function Loader() {
  return (
    <div
    style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    ><PacmanLoader color= "#febd69" /></div>
  )
}

export default Loader