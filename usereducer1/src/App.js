import React, { useReducer } from "react";
import Hello from "./editForm.js";
const reducer = (state, action) => {
  if (action.type === "DELETEPERSON") {
    const newPerson = state.filter((eachperson) => {
      return eachperson.id !== action.payload;
    });
    console.log(newPerson);
    state = newPerson;
    return state;
  }
  if (action.type === "EDITPERSON") {
    const newPerson = state.map((eachperson) => {
      if (eachperson.id === action.payload) {
        eachperson.status = true;
      }
      return eachperson;
    });
    // newPerson.status = true;
    state = newPerson;
    // return {
    //   ...state,
    //   state: true,
    // };
    return state;
  }
  if (action.type === "updateuser") {
    const newPerson = state.map((eachperson) => {
      if (eachperson.id == action.payload.comingid)
       {
        return {
          comingid: action.payload.comingid,
          firstname: action.payload.
          name,
          email: action.payload.email,
        };
      }
      return eachperson;
    });
    state = newPerson;
    return state;
  }

  return state;
};
const Final = () => {
  const initialState = [
    { firstname: "Sree", email: "@sree", id: "123", status: false },
    { firstname: "Ash", email: "@Ash", id: "345", status: false },
    // { firstname: "", email: "", id: "", status: false },
    // { isEditing: { status: false, id: "", name: "", email: "" } },
  ];
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleDelete = (id) => {
    console.log(id);
    dispatch({
      type: "DELETEPERSON",
      payload: id,
    });
  };
  const handleEdit = (id) => {
    dispatch({
      type: "EDITPERSON",
      payload: id,
    });
  };
  const updateData = (comingid, name, email) => {
    dispatch({
      type: "updateuser",
      payload: { comingid, name, email },
    });
  };

  return state.map((eachitem) => {
    const { firstname, email, id } = eachitem;
    return (
      <div key={id}>
        {eachitem.status ? (
          <Hello
            comingname={firstname}
            comingemail={email}
            update={updateData}
            comingid={id}
          />
        ) : (
          <>
            <h1>{firstname}</h1>
            <p>{email}</p>
            <button onClick={() => handleDelete(id)}>delete</button>
            <button onClick={() => handleEdit(id)}>edit</button>
          </>
        )}
      </div>
    );
  });
};

export default Final;
