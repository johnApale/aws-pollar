import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { withAuthenticator } from "@aws-amplify/ui-react";

import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Test from "./pages/Test/Test";
import Search from "./pages/Search/Search";
import CreatePoll from "./pages/Poll/CreatePoll";

import "./Signup.css";

<Authenticator hideDefault={true}>
  <SignIn />
  <CustomSignUp override={'SignUp'}/>
</Authenticator>

class CustomSignUp extends Component {
  constructor() {
    super();
    this.gotoSignIn = this.gotoSignIn.bind(this);
  }

  gotoSignIn(){
    this.props.onStateChange('signIn', {});
  }

  render(){
    return(
      <div>
        { this.props.authState === 'signUp' &&
          <div className="Signup">
          <div className="signupbox">
            <img
              src={process.env.PUBLIC_URL + "/pollarMascot.png"}
              className="avatar"
            />
            <h1>Test Here</h1>
            <form>
              <p>First Name</p>
              <input
                type="Fname"
                name=""
                placeholder="Enter First Name"
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
              />
              <p>Last Name</p>
              <input
                type="Lname"
                name=""
                placeholder="Enter Last Name"
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
              />
              <p>Email</p>
              <input
                type="Email"
                name=""
                placeholder="Enter Email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <p>Username</p>
              <input
                type="Uname"
                name=""
                placeholder="Enter Username"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
              <p>Password</p>
              <input
                type="password"
                name=""
                placeholder="Enter Password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <p>Confirm Password</p>
              <input
                type="password"
                name=""
                placeholder="Enter Password"
                onChange={(event) => {
                  setConfirm(event.target.value);
                }}
              />
              <button onClick={createUser}>Create</button>
            </form>
          </div>
        </div>
        }
      </div>
    );
  }
}


const signOut = async() => {
  try {
      await Auth.signOut();
  }
  catch (error){
      console.log('error signing out ', error);
  }
};

const signUp = async(username, password, email) => {
  try {
      const { user } = await Auth.signUp({
          username,
          password,
          attributes: {
              email
          } 
      });
  }
  catch (error){
      console.log('error signing in', error);
  }
}
  
const signIn = async(username, password) => {
  try {
      const user = await Auth.signIn(username, password);
  } 
  
  catch (error) {
      console.log('error signing in', error);
  }
}

function App({ user, signOut }) {
  return (
    <div className="App">
      <Authenticator />
        <Router>
          <nav>
            <NavBar signOut={signOut} />
          </nav>
          <Routes>
            <Route path="/" element={<Home user={user} />}></Route>
            <Route path="poll/create" element={<CreatePoll />}></Route>
            <Route path="test" element={<Test user={user} />}></Route>
            <Route
              path="search_results/:query"
              element={<Search user={user} />}
            ></Route>
          </Routes>
        </Router>
      <Authenticator />
    </div>
  );
}

export default App;
