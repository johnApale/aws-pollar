import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { withAuthenticator } from "@aws-amplify/ui-react";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Test from "./pages/Test/Test";
import Search from "./pages/Search/Search";
import CreatePoll from "./pages/Poll/CreatePoll";

function App({ user, signOut }) {
  return (
    <div className="App">
      <Router>
        <nav>
          <NavBar signOut={signOut} />
        </nav>
        <Routes>
          <Route path="/" element={<Home user={user} />}></Route>
          <Route path="poll/create" element={<CreatePoll user={user}/>}></Route>
          <Route path="test" element={<Test user={user} />}></Route>
          <Route
            path="search_results/:query"
            element={<Search user={user} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default withAuthenticator(App);
