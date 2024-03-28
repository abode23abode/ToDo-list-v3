import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={()=>{
        props.onChanged(event)
      }}  type="text" value={props.valuee} />
      <button onClick={()=>{
        props.onClickk(props.addItem)
      }}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
