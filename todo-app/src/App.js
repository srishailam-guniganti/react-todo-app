import React, { useState } from "react";
// import useeffect from "useeffect.js"
const Index = () => {
 const [message, setMessage] = useState("");
  const [list, setList] = useState([]);
  const [edit, setedit] = useState({
    isedit: false,
    index: 0,
  });
  let editableitem;

  const changeMessage = (e) => {
   console.log(e.target.value);
   setMessage({
      ...message,
  text: e.target.value,
 });

   setMessage(e.target.value);
 };

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([message, ...list]);

    setMessage("");
   };
   const handleDelete = (indexvalue) => {
    let newTodos = list.filter((eachitem, index) => {
      console.log(index);
      return index !== indexvalue;
    });
     setList(newTodos);
   };
  const changeeditstate = (index) => {
    //const newMessage = list.find((item, i) => i === index);
    setedit({
      isedit: true,
      index: index,
    });
    editableitem = list.find((item, i) => index == i);
   console.log(editableitem);
   setMessage(editableitem);
    // newone=editableitem;
  };

  const handleedit = (e) => {
    e.preventDefault();
    const newitems = list.map((eachitem, i) => {
      if (i === edit.index) {
        return message;
      }
      return eachitem;
    });
    setList([...newitems]);
    setMessage("");
    setedit({
      isedit: false,
    });
  };

  return (
    <div>
      <h1> TODO APPLICATION</h1>
      <hr></hr>
      <h6>by Srishailam</h6>
      <form>
        <input
          type="text"
          name="message"
          id="message"
          placeholder="enter some text"
          value={message}
          onChange={changeMessage}
        />
        
        {edit.isedit ? (
          <button onClick={handleedit} type="submit">
           edit
          </button>
        ) : (
          <button onClick={handleSubmit} type="submit">
            add
          </button>
        )}
      </form>
      <hr />
      {list.length === 0 && <h3>No items in the list</h3>}

      <ul>
        {list.map((eachitem, index) => {
          return (
            <li key="index">
              <span>{eachitem}</span>
              <button onClick={() => changeeditstate(index)}>edit</button>
              <button onClick={() => handleDelete(index)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Index;
