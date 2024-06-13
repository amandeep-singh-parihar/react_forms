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
    comment: "",
    isVisible: true,
    mode: "",
    favCar:"",
  });

  // console.log(formData);

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
        //above only for the check box first we are checking the type if the type it is checkbox it means name:checked else the name:value
      };
      //what it actully doing is below
      //for the first input field || event.target.name is firstName which become equal to event.target.value which we enter
    });
  }

  function submitHandler(event)
  {
    event.preventDefault();
    //print
    console.log("finally printing the entrire fomr ka data....")
    console.log(formData)
  }

  return (
    <div className="p-3 bg-zinc-400 h-screen w-full">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="first name"
          onChange={changeHandler}
          name="firstName"
          //the name here is the same as in the useState
          value={formData.firstName}
          //here this value contain the firstName of the formData eg. for say value=amandeep (as i enter the amandeep)
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="last name"
          onChange={changeHandler}
          name="lastName"
          //the name here is the same as in the useState
          value={FormData.lastName}
          //here this value contain the lastName of the formData eg. for say value=parihar (as i enter the parihar)
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="enter your email..."
          onChange={changeHandler}
          name="email"
          //the name here is the same as in the useState
          value={formData.email}
          //here this value contain the email of the formData eg. for say value=amandeepsinghparihar24@gmail.com (as i enter the amandeepsinghparihar24@gmail.com)
        />

        <br />
        <br />

        <textarea
          placeholder="enter your comments here"
          onChange={changeHandler}
          name="comment"
          value={formData.comment}
        ></textarea>

        <br />

        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          //now what happen in the changeHandler function when we press the chechbox it first check if the type is checked which is true for checkbox now the name is set to be checked(which is false for now) so the name contain false now
          id="isVisible"
          checked={formData.isVisible}
          //for the checkboxes we don't use value attribute we use "checked" attribute
        />
        {/* below htmlFor="isVisible" is the id of that componenet which we are attaching to the label */}
        <label htmlFor="isVisible"> Am I visible</label>

        <br />
        <br />

        <fieldset>
          {/* fieldset is just for styling purpose nothing else */}
          <legend>Mode:</legend>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Online-Mode"
            id="Online-Mode"
            checked={formData.mode === "Online-Mode"}
          />
          {/* below htmlFor="Online-Mode" inside Online-Mode is the id */}
          <label htmlFor="Online-Mode">Online Mode</label>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            //if the name of the two radio buttons are same then we are not able to tick them both ast the same time
            value="Offline-Mode"
            id="Offline-Mode"
            checked={formData.mode === "Offline-Mode"}
          />
          <label htmlFor="Offline-Mode">Offline Mode</label>
        </fieldset>

        <label htmlFor="favCar">Tell me your Fav car</label>

        <select 
        name="favCar" 
        id="favCar"
        value={formData.favCar}
        onChange={changeHandler}
        >
          <option value="scorpio">Scorpio</option>
          <option value="fortuner">Fortuner</option>
          <option value="thar">Thar</option>
          <option value="legender">Legender</option>
        </select>

        {/* <input type="submit" value="submit" /> */}
        <br />
        <br />
        <button className="p-1 bg-blue-300 rounded-full">Submit</button>


      </form>
    </div>
  );
}

export default App;
