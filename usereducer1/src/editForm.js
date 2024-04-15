import React, { useState } from "react";
const Hello = ({ update, comingid, comingname, comingemail }) => {
  const [name, setname] = useState(comingname);
  const [mail, setmail] = useState(comingemail);
  const changeName = (e) => {
    setname(e.target.value);
  };
  const changeEmail = (e) => {
    setmail(e.target.value);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          id="title"
          value={name}
          onChange={changeName}
        />
        <input
          type="email"
          name="email"
          id="email"
          value={mail}
          onChange={changeEmail}
        />
        <button onClick={() => update(comingid, name, mail)}>update</button>
      </form>
    </div>
  );
};
export default Hello;
