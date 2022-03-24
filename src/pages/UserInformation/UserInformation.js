import React from "react";
import "./UserInformation.css"


function UserInformation() {
    return(
        <div className="userCreation">
            <form className="info">
                <p className="title"> User Information </p>
                <p className="fN"> First Name </p>
                <input type = "text" className="firstN"></input>
                <p className="lN"> Last Name </p>
                <input type = "text" className="lastN"></input>
                <p className="bday"> Birthday </p>
                <input type = "date" className="userBirthday"></input>
                <p className="sx"> Sex </p>
                <select name = "sex" id = "userSex" className="userSex">
                    <option value = "Female" id = "Female"> Female</option>
                    <option value = "Male" id = "Male"> Male</option>
                    <option value = "Other" id = "Other"> Other</option>
                </select>

                <br></br>
                <input type = "submit" className = "submitInfo" value = "Save Information"/>
                
            </form>
        </div>

    );

}

export default UserInformation;