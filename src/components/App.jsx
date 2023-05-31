import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });
  // const [lName, setLName] = useState("");

  // function updateFName(event) {
  //   const firstName = event.target.value;
  //   setFName(firstName);
  // }

  // function updateLName(event) {
  //   const lastName = event.target.value;
  //   setLName(lastName);
  // }

  function handleChange(event) {
    // const newValue = event.target.value;
    // const inputName = event.target.name;

    //Object destructuring
    const { value, name } = event.target;

    // console.log(newValue);
    // console.log(inputName);

    //Note: Do not access Event or related inside a Stateful setup (ex: event.target.name)
    setFullName((previousValue) => {
      console.log(previousValue);

      if (name === "fName") {
        return {
          fName: value,
          lName: previousValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: previousValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
