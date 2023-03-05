import { useEffect, useState } from "react";
import "./App.css";
import Button from "./Button";
import Display from "./Display";

function App() {
  const [val, setVal] = useState("");
  const [display, updateDisplay] = useState("");
  const [trial, change] = useState(false);
  function updateVal(valu) {
    setVal(val + valu);
    console.log("Value");
  }

  function evalInput() {
    updateDisplay(eval(val));
    setVal(eval(val));
  }

  function erase() {
    setVal("");
    updateDisplay("");
    console.log("erase");
  }

  useEffect(() => {
    updateDisplay(val);
  }, [val]);
  return (
    <div className="App">
      <div className="container">
        <Display display={display} />
        <Button updateVal={updateVal} evalInput={evalInput} erase={erase} />
      </div>
    </div>
  );
}

export default App;

// function Calc(e){
//   setInput(input+e);
// }
// function getResult(){
//   setdisplay(eval(input))
// }
// function resetsfunc(){
//   setdisplay("")
//   setInput("")
// }
// useEffect(()=>{
//   setdisplay(input)

// },[input])

// Calc={Calc} getResult={getResult} resetsfunc={resetsfunc}
