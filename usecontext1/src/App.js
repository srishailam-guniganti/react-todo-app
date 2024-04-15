import React, { useState } from "react";

const UserContext = React.createContext();
const ParentComponent = () => {
  const [userdetails, setuserDetails] = useState({
    firstName: "emma",
    lastname: "watson",
    email: "@mail",
  });
  return (
    <div>
      <UserContext.Provider value={userdetails}>
        <SubChildComponent />
      </UserContext.Provider>
      <h1>usecontent</h1>
    </div>
  );
};

const ChildComponent = () => {
  return (
    <div>
      <h1>Child Component</h1>
    </div>
  );
};
const SubChildComponent = () => {
  return (
    <div>
      <UserContext.Consumer>
        {(value) => <>{value.firstName}</>}
      </UserContext.Consumer>
    </div>
  );
};

export default ParentComponent;
