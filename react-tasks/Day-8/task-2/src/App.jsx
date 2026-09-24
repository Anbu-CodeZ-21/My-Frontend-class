import { useState } from "react"


const App = () => {

  let [value,setValue]=useState("Hello I Am Anbu")

  let text=()=>{
    setValue("Welcome to My Page")
  }
  

  return (
   <>
   
   
   <div className="bg-black text-white text-center">
    <h2 className="font-bold p-2 m-2">{value}</h2>
    <button className="bg-white text-red-500 p-1 m-3" onClick={text}>Change Text</button>
   </div>
   
   
   </>
  )
}

export default App