// Searching: My million dollar App
/*
  level 1 : Structure Data - create state for arrays and algos
  level 2 : Dominate Data
  level 3 : Create Algorithms
  level 4 : Visulaize Algorithm 
*/
import { useState } from "react"
import Header from "./components/Header"

function App() {
    //Array
    const [array, setArray] = useState({
        arr: [],
        serachFor: null,
    })
    // Algorithm
    const [algo, setAlgo] = useState("binary-search")
    // Steps
    const [steps, setSteps] = useState([])
    return (
        <div className="App">
            <Header />
        </div>
    )
}

export default App
