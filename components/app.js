import React from "react"
import CountButton from "./countButton"

 const App =() =>{
    return(
      <div>
          <CountButton incrementBy={1} buttonColor={"red"} />
          <CountButton incrementBy={5} buttonColor={"blue"}  />
          <CountButton incrementBy={6} buttonColor={"black"}/>
          <CountButton incrementBy={90}/>
      </div>
    )
  }

  export default App