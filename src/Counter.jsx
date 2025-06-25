import { useState } from "react";
import "./Counter.css";
export const Counter = () => {
    const [btn,setbtn] = useState(0)
    function Increase () {
        setbtn(btn+1)
    }
    function Decrease () {
        setbtn(btn-1)
    }
    function Reset () {
        setbtn(btn-btn)
    }
  return (
    <>
        <h1>Counter App</h1>
      <div className="parent">
        <p>{btn}</p>
        <div className="btns">
          <div className="increase-btn" onClick={Increase}>Increase</div>
          <div className="decrease-btn" onClick={Decrease}>Deccrease</div>
          <div className="reset-btn" onClick={Reset} >Resest</div>
        </div>
      </div>
    </>
  );
};
