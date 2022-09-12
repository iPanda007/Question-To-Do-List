import React from 'react'
import { useEffect, useState } from "react";
import { MdDragIndicator, MdAddCircleOutline } from "react-icons/md";
import { HiOutlineMinusCircle } from "react-icons/hi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
const RemoveInputBox= ({
  el,
  remove,
  index,
  change
}) => {
  const [newValue, setNewValue] = useState("");
  useEffect(() => {
    setNewValue(el);
  }, [el]);
  return (
    <div key={el} className="inputBoxStyle">
      <MdDragIndicator />
      <input
        type="text"
        value={newValue}
        onChange={(e) => setNewValue(e.target.value)}
        className="inputStyle"
      />
      <div>
        <HiOutlineMinusCircle onClick={() => remove(index)} />
        &nbsp;
        <IoCheckmarkCircleOutline onClick={() => change(index, newValue)} />
      </div>
    </div>
  );
};

const App = () => {
  const [value, setValue] = useState("");
  const [choiceBox, setChoiceBox] = useState([]);


  // const add = () => {
  //   setChoiceBox((prev) => [...prev, value]);
  //   setValue("");
  // };
  const remove = (index) => {
    const filter = choiceBox.filter(
      (el) => choiceBox.indexOf(el) !== index
    );
    setChoiceBox(filter);
  };
  const change = (value, newValue) => {
    setChoiceBox((prev)=>{
         prev[value] = newValue;
         return [...prev]
    });
     console.log(choiceBox)
  };
const add = ()=>{
   if(value== ""){
       return
   }else{
    setChoiceBox([...choiceBox,value]);
   }
  setValue("")
}
  return (
    <div>
            <div className="App">
      <div className="box">
        <div className="btn-container">
          {choiceBox &&
              choiceBox.map((item,key)=><h1 key={key}>{item}</h1>)
            }
          {choiceBox.length > 0}
        </div>
      </div>
          {
            choiceBox.length > 0 &&
            choiceBox.map((el,index)=>{
               return <RemoveInputBox
                   el={el}
                   key={index}
                   index={index}
                   change={change}
                   remove={remove}
                />
            })
          }
      <div className="inputBoxStyle">
        <MdDragIndicator />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="inputStyle"
        />
        <div>
            <MdAddCircleOutline  onClick={add} />
        </div>
      </div>
    </div>
  
    </div>
  )
}

export default App
