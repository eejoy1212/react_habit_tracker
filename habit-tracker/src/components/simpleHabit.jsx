import React, {  useCallback, useEffect, useRef, useState } from 'react';


const SimpleHabit = () => {
    const [cnt,setCnt]=useState(0);
    // const spanRef=React.createRef();
    const spanRef=useRef();
//   const  handleIncrement=useCallback(()=>{
//  setCnt(cnt+1);
//     });
const  handleIncrement=useCallback(()=>{
  setCnt(cnt+1);
     },[cnt]);
    useEffect(()=>{
      console.log(`mounted updated: ${cnt}`);
    },[cnt]);
    return (
        <li className="habit">
          <span ref={spanRef} className="habit-name">Reading</span>
          <span className="habit-cnt">{cnt}</span>
          <button className="habit-btn habit-increase" onClick={handleIncrement}>
              <i className="fas fa-plus-square"></i>
          </button>
        </li>
      );
};

export default SimpleHabit;