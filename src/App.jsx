import React, { useState } from "react";
import "./App.css";

function App() {
  // const [firstName,setFirstName]=useState("");
  // const [lastName,setLastName]=useState("");

  // console.log(firstName);
  // console.log(lastName);

  // function changeFirstHandler(event)
  // {
  //   // console.log("printing first name")
  //   // console.log(event.target.value)
  //   setFirstName(event.target.value);
  // }

  // function changeLastHandler(event)
  // {
  //   // console.log("printing last name")
  //   // console.log(event.target.value)
  //   setLastName(event.target.value);
  // }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  function changeHandler(event) {
    setFormData((prevFormData) => {
      return { ...prevFormData, [event.target.name]: event.target.value };
      //what it actully doing is below
      //for the first input field || event.target.name is firstName which become equal to event.target.value which we enter
    });
  }

  return (
    <div className="flex justify-center bg-zinc-400 h-screen w-full">
      <form action="">
        <input
          type="text"
          placeholder="first name"
          onChange={changeHandler}
          name="firstName"
          //the name here is the same as in the useState
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="last name"
          onChange={changeHandler}
          name="lastName"
          //the name here is the same as in the useState
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="enter your email..."
          onChange={changeHandler}
          name="email"
          //the name here is the same as in the useState
        />
      </form>
    </div>
  );
}

export default App;
