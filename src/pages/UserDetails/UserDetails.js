import React, { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createUserInformation } from "../../graphql/mutations";
import "./UserDetails.css";

function UserDetails(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const options = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Other", value: "Other" },
  ];
  const [userSex, setUserSex] = useState("Male");

  const saveInformation = async () => {
    const userInfo = {
      usernameID: props.user.username,
      firstName: firstName,
      lastName: lastName,
      email: props.user.attributes.email,
      bday: birthday,
      anon: false,
      sex: userSex,
    };
    try {
      const newUser = await API.graphql(
        graphqlOperation(createUserInformation, { input: userInfo })
      );
      console.log("User saved.", newUser);
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };

  return props.trigger ? (
    <div className="pop__up">
      <div className="userCard">
        <form className="info">
          <p className="title"> User Information </p>
          <p className="fN"> First Name </p>
          <input
            type="text"
            className="firstN"
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          ></input>
          <p className="lN"> Last Name </p>
          <input
            type="text"
            className="lastN"
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          ></input>
          <p className="bday"> Birthday </p>
          <input
            type="date"
            className="userBirthday"
            onChange={(event) => {
              setBirthday(event.target.value);
            }}
          ></input>
          <p className="sx"> Sex </p>
          <select
            className="userSex"
            value={userSex}
            onChange={(event) => {
              setUserSex(event.target.value);
            }}
          >
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>

          <br></br>
          <button
            className="submitInfo"
            onClick={saveInformation}
            type="button"
            id="saveButton"
          >
            {" "}
            Save Information{" "}
          </button>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
}

export default UserDetails;
