import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Test from "./pages/Test/Test";
import CommentTest from "./pages/Test/CommentTest";
import Search from "./pages/Search/Search";
import CreatePoll from "./pages/Poll/CreatePoll";
import AnswerPoll from "./pages/Poll/Poll";
import ViewPoll from "./pages/Poll/ViewPoll";
import Notification from "./pages/Notifications/Notifications";
import {NotificationContainer, NotificationManager} from "react-notifications";
import awsExports from "./aws-exports";
import "@aws-amplify/ui-react/styles.css";
import SearchBar from "./components/SearchBar/SearchBar";
import UserProfile from "./pages/User/UserProfile";

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
import { Amplify } from "aws-amplify";

Amplify.configure(awsExports);

// const components = {
//   Header() {
//     const { tokens } = useTheme();

//     return (
//       <View textAlign="center" padding={tokens.space.large}>
//         <Image alt="Amplify logo"
//           width="210px"
//           height="320px"
//           position="relative"
//           top="140px"
//           src={process.env.PUBLIC_URL + "/transparentpolarbear.png"}
//         />
//       </View>
//     );
//   },

//   Footer() {
//     const { tokens } = useTheme();

//     return (
//       <View textAlign="center" padding={tokens.space.large}>
//         <Text color={`${tokens.colors.neutral["80"]}`}>
//           &copy; Not intended for public distribution
//         </Text>
//       </View>
//     );
//   },

//   SignIn: {
//     Header() {
//       const { tokens } = useTheme();

//       return (
//         <Heading
//           padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
//           level={3}
//         >
//           Pollar Sign In
//         </Heading>
//       );
//     },
//     Footer() {
//       const { toResetPassword } = useAuthenticator();

//       return (
//         <View textAlign="center">
//           <Button
//             fontWeight="normal"
//             onClick={toResetPassword}
//             size="small"
//             variation="link"
//           >
//             Forgot your password? Reset
//           </Button>
//         </View>
//       );
//     },
//   },

//   SignUp: {
//     Header() {
//       const { tokens } = useTheme();

//       return (
//         <Heading
//           padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
//           level={3}
//         >
//           Create a New Pollar Account
//         </Heading>
//       );
//     },
//     Footer() {
//       const { toSignIn } = useAuthenticator();

//       return (
//         <View textAlign="center">
//           <Button
//             fontWeight="normal"
//             onClick={toSignIn}
//             size="small"
//             variation="link"
//           >
//             Back to Sign In
//           </Button>
//         </View>
//       );
//     },
//   },
//   ConfirmSignUp: {
//     Header() {
//       const { tokens } = useTheme();
//       return (
//         <Heading
//           padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
//           level={3}
//         >
//           Enter Information:
//         </Heading>
//       );
//     },
//     Footer() {
//       return <Text>Footer Information</Text>;
//     },
//   },
//   SetupTOTP: {
//     Header() {
//       const { tokens } = useTheme();
//       return (
//         <Heading
//           padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
//           level={3}
//         >
//           Enter Information:
//         </Heading>
//       );
//     },
//     Footer() {
//       return <Text>aa</Text>;
//     },
//   },
//   ConfirmSignIn: {
//     Header() {
//       const { tokens } = useTheme();
//       return (
//         <Heading
//           padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
//           level={3}
//         >
//           Enter Information:
//         </Heading>
//       );
//     },
//     Footer() {
//       return <Text>Footer Information</Text>;
//     },
//   },

//   ResetPassword: {
//     Header() {
//       const { tokens } = useTheme();
//       return (
//         <Heading
//           padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
//           level={3}
//         >
//           Please Provide Your Username
//         </Heading>
//       );
//     },
//     Footer() {
//       return <Text>Your Reset Code will be sent via Email</Text>;
//     },
//   },

//   ConfirmResetPassword: {
//     Header() {
//       const { tokens } = useTheme();
//       return (
//         <Heading
//           padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
//           level={3}
//         >
//           Create a New Password
//         </Heading>
//       );
//     },
//     Footer() {
//       return <Text>Your new password cannot match your previous password</Text>;
//     },
//   },
// };

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

const myNotif = new Notification();

function receiveNotification(type){
  switch(type){
    case 'Liked':
      {myNotif.createNotification('Liked')};
      break;
    case 'Subscribed':
      {myNotif.createNotification('Subscribed')};
      break;
    case 'Posted':
      {myNotif.createNotification('Posted')};
      break;
  }
}

export default function App() {
  return (
    <Authenticator formFields={formFields} components={components}>
      {({ signOut, user }) => (
        <div className="App">
          <div>

            <link rel="stylesheet" type="text/css" href="./pages/Notifications/Notifications.css"></link>
            <button className='btn btn-info'
                onClick={myNotif.createNotification('Subscribed')}> Info
              </button>
              <hr/>
              <button className='btn btn-success'
                onClick={myNotif.createNotification('Liked')}> Success
              </button>
            
            <NotificationContainer/>
          </div>

          <Router>
            <nav>
              <NavBar user={user} signOut={signOut} />
            </nav>
            <Routes>
              <Route path="/" element={<Home user={user} />}></Route>
              <Route path="home" element={<Home user={user} />}></Route>
              <Route
                path="poll/create"
                element={<CreatePoll user={user} />}
              ></Route>
              <Route
                path="poll/view"
                element={<ViewPoll user={user} />}
              ></Route>
              <Route path="test" element={<Test user={user} />}></Route>
              <Route
                path="comment_test"
                element={<CommentTest user={user} />}
              ></Route>
              <Route
                path="poll/answer"
                element={<AnswerPoll user={user} />}
              ></Route>
              <Route path="results" element={<Search />}></Route>
              <Route path="profile/:username" element={<UserProfile />}></Route>
            </Routes>
          </Router>
        </div>
      )}
    </Authenticator>
  );
}
