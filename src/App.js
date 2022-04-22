import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import CommentTest from "./pages/Test/CommentTest";
import Search from "./pages/Search/Search";
import CreatePoll from "./pages/Poll/CreatePoll";
import Message from "./pages/Test/MessageTest";
import AnswerPoll from "./pages/Poll/AnswerPoll";
import ViewPoll from "./pages/Poll/ViewPoll";
import Messenger from "./pages/Messenger/Messenger";
import Notification from "./pages/Notifications/Notifications";
import Trending from "./pages/Trending/Trending";
import Messages from "./components/ Messages/Messages";
import UserDetails from "./pages/UserDetails/UserDetails";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import Settings from "./pages/Settings/Settings";
import ProfilePicture from "./pages/Settings/ProfilePicture";
import Recommended from "./pages/Recommended/Recommended";

import {
  Authenticator,
  useTheme,
  useAuthenticator,
  Text,
  Heading,
  View,
  Button,
  Image,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import UserProfile from "./pages/User/UserProfile";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
Amplify.configure(awsconfig);

// export const myNotif = new Notification();

const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image
          alt="Amplify logo"
          width="210px"
          height="320px"
          position="relative"
          top="140px"
          src={process.env.PUBLIC_URL + "/transparentpolarbear.png"}
        />
      </View>
    );
  },

  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={`${tokens.colors.neutral["80"]}`}>
          &copy; Not intended for public distribution
        </Text>
      </View>
    );
  },

  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Pollar Sign In
        </Heading>
      );
    },
    Footer() {
      const { toResetPassword } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toResetPassword}
            size="small"
            variation="link"
          >
            Forgot your password? Reset
          </Button>
        </View>
      );
    },
  },

  SignUp: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Create a New Pollar Account
        </Heading>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toSignIn}
            size="small"
            variation="link"
          >
            Back to Sign In
          </Button>
        </View>
      );
    },
  },
  ConfirmSignUp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  SetupTOTP: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>aa</Text>;
    },
  },
  ConfirmSignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },

  ResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Please Provide Your Username
        </Heading>
      );
    },
    Footer() {
      return <Text>Your Reset Code will be sent via Email</Text>;
    },
  },

  ConfirmResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Create a New Password
        </Heading>
      );
    },
    Footer() {
      return <Text>Your new password cannot match your previous password</Text>;
    },
  },
};

const formFields = {
  signIn: {
    username: {
      labelHidden: false,
      placeholder: "Enter your email",
    },
  },
  signUp: {
    password: {
      labelHidden: false,
      label: "Password:",
      placeholder: "Enter your Password:",
      isRequired: false,
      order: 2,
    },
    confirm_password: {
      labelHidden: false,
      label: "Confirm Password:",
      order: 1,
    },
  },
  forceNewPassword: {
    password: {
      labelHidden: false,
      placeholder: "Enter your Password:",
    },
  },
  resetPassword: {
    username: {
      labelHidden: false,
      placeholder: "Enter your email:",
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      labelHidden: false,
      placeholder: "Enter your Confirmation Code:",
      label: "New Label",
      isRequired: false,
    },
    confirm_password: {
      labelHidden: false,
      placeholder: "Enter your Password Please:",
    },
  },
  setupTOTP: {
    QR: {
      totpIssuer: "test issuer",
      totpUsername: "amlify_qr_test_user",
    },
    confirmation_code: {
      labelHidden: false,
      label: "New Label",
      placeholder: "Enter your Confirmation Code:",
      isRequired: false,
    },
  },
  confirmSignIn: {
    confirmation_code: {
      labelHidden: false,
      label: "New Label",
      placeholder: "Enter your Confirmation Code:",
      isRequired: false,
    },
  },
};

export default function App() {
  return (
    <Authenticator formFields={formFields} components={components}>
      {({ signOut, user }) => (
        <div className="App">
          <div>
            {/* <button className='btn btn-info'
              onClick={myNotif.createNotification('Liked')}>Info
            </button> */}

            <NotificationContainer />
          </div>

          <Router>
            <nav>
              <NavBar user={user} signOut={signOut} />
            </nav>
            <Routes>
              <Route path="/" element={<Home user={user} />}></Route>
              <Route path="/message" element={<Message user={user} />}></Route>
              <Route path="home" element={<Home user={user} />}></Route>
              <Route
                path="poll/create"
                element={<CreatePoll user={user} />}
              ></Route>
              <Route
                path="poll/view"
                element={<ViewPoll user={user} />}
              ></Route>
              <Route
                path="messages"
                element={<Messenger user={user} />}
              ></Route>
              <Route path="trending" element={<Trending user={user} />}></Route>
              <Route path="test" element={<Messages />}></Route>
              <Route
                path="comment_test"
                element={<CommentTest user={user} />}
              ></Route>
              <Route
                path="poll/answer"
                element={<AnswerPoll user={user} />}
              ></Route>
              <Route path="results" element={<Search user={user} />}></Route>
              <Route
                path="profile/:username"
                element={<UserProfile user={user} />}
              ></Route>
              {/* <Route path="Settings" element={<Settings />}></Route>
              <Route
                path="/Settings/ProfilePicture"
                element={<ProfilePicture />}
              ></Route> */}
              <Route path="recommended" element={<Recommended />}></Route>
            </Routes>
          </Router>
        </div>
      )}
    </Authenticator>
  );
}
