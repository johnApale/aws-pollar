import "./ProfilePicture.css"
import { useNavigate } from "react-router-dom";
import React, {useState} from "react";


function ProfilePicture() {
    const navigate = useNavigate();

    const editProfilePicture = () => {
        navigate('/Settings/ProfilePicture');
    };

    const goToSettings = () => {
        navigate('Settings');
    }

    
  
  return (

  <div className="settings_page">
      <div className="settings__navbar">
        <h className= "page_title"> &#9776; Settings</h><br></br>
        <ul>
            <a className="UserDetails" href = "/Settings" onClick = {goToSettings}> Personal Information</a><br></br>
            <a className="profile_pictures" href = "/Settings/ProfilePicture" onclick={editProfilePicture}> Profile Picture </a>
        </ul>
      </div>

      <div className="separation">
      </div>
     
        <div className="pg_title">
            <h className= "profile_pic"> Profile Picture</h>
        </div>

        <div className = "pic_form">
            <form className="user_profilepic">

             <img src="/profilepic1.png" alt = "profile pic 1" className="profilepic1"></img>   
             <p className="option1"> Option 1</p>
             <img src="/profilepic2.png" alt = "profile pic 2" className="profilepic2"></img> 
             <p className="option2"> Option 2</p> 
             <img src="/profilepic3.png" alt = "profile pic 3" className="profilepic3"></img>
             <p className="option3"> Option 3</p>  
             <img src="/profilepic4.png" alt = "profile pic 4" className="profilepic4"></img>  
             <p className="option4"> Option 4</p>
             <img src="/profilepic5.png" alt = "profile pic 5" className="profilepic5"></img>  
             <p className="option5"> Option 5</p>

             <p className="option_notice">Which profile picture would you like to select? </p>

             <select id ="user_picture" className= "userPPSelection">
                 <option value = "profilepic1.png"> Option 1</option>
                 <option value = "profilepic2.png"> Option 2</option>
                 <option value = "profilepic3.png"> Option 3</option>
                 <option value = "profilepic4.png"> Option 4</option>
                 <option value = "profilepic5.png"> Option 5</option>
             </select>
             <input type = "submit" value = "Select Profile Picture" id = "submit_pp" className="select_profilep"></input>

            </form>
        </div>
  </div>
    
  );
  
}

export default ProfilePicture;