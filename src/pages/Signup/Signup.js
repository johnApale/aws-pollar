import React, { useState } from "react";
import "./Signup.css";
import { DataStore } from "@aws-amplify/datastore";
import { UserInformation, Sex } from "../../models";

function Signup(props) {
  // states for the form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bday, setBday] = useState("");
  const [anon, setAnon] = useState(true);
  const [sex, setSex] = useState("");

  // function to store information on AWS
  const saveInfo = async () => {
    try {
      await DataStore.save(
        new UserInformation({
          username: props.user.username,
          firstName: "Colin",
          lastName: "Rayburn",
          email: props.user.attributes.email,
          bday: "2000-12-31",
          anon: false,
          sex: Sex.MALE,
          polls: [],
          comments: [],
        })
      );
      console.log("Post saved successfully!");
    } catch (error) {
      console.log("Error in saving ", error);
    }
  };
  return (
    <div className="Signup">
      {/* Add form to get information */}
      <button className="save__button" onClick={saveInfo}>
        Save
      </button>
    </div>
  );
}

export default Signup;
