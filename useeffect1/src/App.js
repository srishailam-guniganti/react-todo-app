import React, { useState, useEffect } from "react";
const URL = "https://jsonplaceholder.typicode.com/users";
function App() {
  const [userdata, setuserdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [iserror, seterror] = useState({ status: false, msg: "" });
  const fetchuserdata = async (ios) => {
    setLoading(true);
    seterror({ status: false, msg: "" });
    try {
      const response = await fetch(ios);
      const data = await response.json();
      console.log(data);
      setuserdata(data);
      setLoading(false);
      seterror({ status: false, msg: "" });
    } catch (error) {
      setLoading(false);
      seterror({ status: true, msg: "something went wrong" });
    }
  };
  useEffect(() => {
    fetchuserdata(URL);
  }, []);
  if (loading) {
    return <div>...Loading</div>;
  }
  if (iserror && iserror.status) {
    return <div>{iserror.msg}</div>;
  }

  return (
    <div>
      <h1>Displaying users Data</h1>
      <ul>
        {userdata.map((eachuser) => {
          const { id, name, username } = eachuser;
          return (
            <li key={id}>
              <div>{name}</div>
              <div>{username}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default App;
