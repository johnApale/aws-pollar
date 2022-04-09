import "./Settings.css"
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Sex, UserInformation } from "../../models";
import { DataStore } from "aws-amplify";

function Settings(props) {
    const navigate = useNavigate();

    const editProfilePicture = () => {
        navigate('/Settings/ProfilePicture');
    };

    const goToSettings = () => {
        navigate('Settings');
    }

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthday, setBirthday] = useState("");
    const [userSex] = useState([
      { label: "Male", value: Sex.MALE },
      { label: "Female", value: Sex.FEMALE },
      { label: "Other", value: Sex.OTHER },
    ]);

    const saveInformation = async () => {
        try {
          await DataStore.save(
            new UserInformation({
              username: props.user.username,
              firstName: firstName,
              lastName: lastName,
              email: props.user.email,
              bday: birthday,
              anon: true,
              sex: userSex,
              polls: [],
              comments: [],
            })
          );
        } catch (error) {
          console.log("Error in saving user details, ", error);
        }
      };

  return (

  <div className="settings_pg">
      <div className="settings_navbar">
        <h className= "page_title"> &#9776; Settings</h><br></br>
        <ul>
            <a className="UserDetails" href = "/Settings" onClick = {goToSettings}> Personal Information</a><br></br>
            <a className="profile_pictures" href = "/Settings/ProfilePicture" onclick={editProfilePicture}> Profile Picture </a>
        </ul>
      </div>

      <div className="separation_bar">

      </div>

      <div className="Personal_Information">
      <form className="info">
          <p className="title"> Personal Information </p>
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
          <select name="sex" id="userSex" className="userSex">
            {userSex.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>

          <br></br>
          <input
            onClick={saveInformation}
            type="submit"
            className="submit_Info"
            value="Save Information"
          />
        </form>
      </div>
  </div>
    
   
  );
}

export default Settings;