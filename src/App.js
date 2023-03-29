import { useState } from "react";

function App() {
  const [arr, setArr] = useState(['play cricket', 'play football', 'play badminton']);
  return (
    <>
      <h1>Todo List</h1>
      <div>
        {
          arr.map((item, index) =>(
           <div key={index} className="" style={{display:'flex'}}>
               <input type="checkbox" />
               <p >{item}</p>
           </div>
          ) )
        }
      </div>
    </>
  )
}

export default App;
