import React from "react";
import "./UserInformation.css"

function UserInformation() {
    return(
        <div class="userCreation">
            <form class = "user_form">
                <p> First Name </p>
                <input type = "text" className="firstName" placeholder="First Name"> </input>

                <p>Last Name</p>
                <input type = "text" className="lastName" placeholder="Last Name" > </input>

                <p> Birthday </p>
                <input type = "date" className="userBirthday" placeholder="Birthday" > </input>

                <p> Sex </p>
                <select name = "sex" id = "userSex">
                    <option value = "Male"> Male </option>
                    <option value = "Female"> Female </option>
                    <option value = "Other"> Other </option>
                </select>

                <br></br>
                <input type="submit" className="userInformation" value="submit" />

            </form>
        </div>

    );

}

export default UserInformation;