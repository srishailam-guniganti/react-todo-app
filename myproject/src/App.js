import React,{useState,useEffect} from 'react';
const URL =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

const Final = ()=>{
  const [drinkData,setdrinkData]=useState([]);
  const fetchDrink =async (api)=>{
    const response =await fetch(api);
    const data =response.json();
    console.log(data);
  
  }
  useEffect(()=>{
  fetchDrink(URL)},[]);
  return(
    <div>
      <h1>drinkscount : {drinkData.length}</h1>
    </div>
  );


};
export default Final;