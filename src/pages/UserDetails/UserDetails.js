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
    <div className="details_pop__up">
      <div className="details_userCard">
        <p className="details_title">User Information</p>
        <form className="details_info">
          <div className="details_fN">
            First Name
            <input
              type="text"
              className="details_firstN"
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
            ></input>
          </div>

          <div className="details_lN">
            Last Name
            <input
              type="text"
              className="details_lastN"
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            ></input>
          </div>

          <div className="details_bday">
            Birthday
            <input
              type="date"
              className="details_userBirthday"
              onChange={(event) => {
                setBirthday(event.target.value);
              }}
            ></input>
          </div>

          <div className="details_sx">
            Sex{" "}
            <select
              className="details_userSex"
              value={userSex}
              onChange={(event) => {
                setUserSex(event.target.value);
              }}
            >
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </form>
        <button
          className="details_submitInfo"
          onClick={saveInformation}
          type="button"
          id="saveButton"
        >
          {" "}
          Save Information{" "}
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default UserDetails;
