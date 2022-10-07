// Searching: My million dollar App
/*
  level 1 : Structure Data - create state for arrays and algos
  level 2 : Dominate Data
  level 3 : Create Algorithms
  level 4 : Visulaize Algorithm 
*/
import { useState } from "react"

function App() {
    //Array
    const [array, setArray] = useState({
        arr: [],
        serachFor: null,
    })
    // Algorithm
    const [algo, setAlgo] = useState("binary-search")
    return (
        <div className="App">
            <h1>hello from React</h1>
            we need to create the App, which tells user that I understand the
            Algorithm and Design principals
        </div>
    )
}

export default App
