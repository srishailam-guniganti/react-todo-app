import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'

const App = () => {
  const [input,setInput]=useState("");
  const [result,setResult]=useState("");
  const handler =e=>{
    setInput(e.target.value); 
  }
  return (
    <center>
      <input type="text" value ={input} name="input" onChange={handler}/>
      <br/>
      <button onClick={() =>setResult(eval(input))}>Result</button>
      <h4>Result is :{result}</h4>

      <button onClick={() =>setInput(input+'1')}>1</button>
      <button onClick={() =>setInput(input+'2')}>2</button>
      <button onClick={() =>setInput(input+'3')}>3</button>
      <button onClick={() =>setInput(input+'4')}>4</button>
      <br/>

      <button onClick={() =>setInput(input+'5')}>5</button>
      <button onClick={() =>setInput(input+'6')}>6</button>
      <button onClick={() =>setInput(input+'7')}>7</button>
      <button onClick={() =>(input+'8')}>8</button>
      <br/>

      <button onClick={() =>setInput(input+'+')}>=</button>
      <button onClick={() =>setInput(input+'-')}>-</button>
      <button onClick={() =>setInput(input+'*')}>*</button>
      <button onClick={() =>setInput(input+'%')}>%</button>
      <button onClick={() =>setInput('')}>clr</button>

  
      

      

      

    </center>
  )
}
   

    
      



export default App;
