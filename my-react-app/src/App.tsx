import './App.css'
import {useEffect} from "react";
import axios from "axios";

function App() {

    useEffect(() => {
        axios.get("http://localhost:8000/api/categories")
            .then(res =>{
                console.log("Result async", res)
            } )
        console.log("User Effect");
    }, []);
    console.log("Render component");


  return (
      <>
          <h1 className="text-3xl font-bold underline text-center">
              Hello world!
          </h1>
      </>
  )
}

export default App
