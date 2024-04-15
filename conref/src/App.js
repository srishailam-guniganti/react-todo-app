import React, { useReducer, useEffect } from "react";
const reducer = (state, action) => {
   if (action.type == "UPDATEUSER") {
    return {
      ...state,
      usersData: action.payload,
    }
  };
   
   //if(action.type==="DELETEUSER"){
    // const newPerson =state.usersdata.filter((eachitem)=>
      // eachitem.id !== action.payload
    // );
      //return {
     // ...state,
     //usersData:newPerson
    // }
//};
     return state;
     
};

const Final = () => {
  const fetchuserData = async (URL) => {
    const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
 dispatch({ type: "UPDATEUSER", payload: data });
    } 
};

  
  useEffect(() => {
    fetchuserData("https://jsonplaceholder.typicode.com/users");
  }, []);


  const initialState = {
    usersData: [],
  }




  // const [state, dispatch] = useReducer(reducer, initialState);
  // const handleDelete = (id) =>{
  //   dispatch ({type:"DELETEUSER",
  // payload:id});
 return (
    <div>
      <h1>Users Information</h1>
      {state.usersData.map((eachitem) => {
        const { name, email, id } = eachitem;
        return (
          <div key={id} style={{ background: "blue" }}>
            <h1>{name}</h1>
            <p>{email}</p>
            <button >delete</button>
            <button >edit</button>
          </div>
        );
      })
    }
    </div>
  );
  

export default Final;
