import UserpageSeeker from "./src/routes/seeker/userpage/userpageSeeker.jsx";
import UserpageMentor from "./src/routes/mentor/userpage/userpageMentor.jsx";
import UserpageCompany from "./src/routes/company/userpage/userpageCompany.jsx";
import { createBrowserRouter } from "react-router-dom";
import SearchUser from "./src/routes/onboard/searchUsers/searchUsers.jsx";
import Onboard from "./src/routes/onboard/Onboard.jsx";
import { AuthProvider } from "./src/Contexts/AuthContext.jsx";
import ForgotPassword from "./src/routes/seeker/auth/ForgotPassword.jsx";
import { SeekerAuthProvider } from "./src/Contexts/SeekerAuthContext.jsx";
import SeekerPrivateRoute from "./src/routes/seeker/auth/steps/SeekerPrivateRoute.jsx";
import SeekerLogin from "./src/routes/seeker/auth/SeekerLogin.jsx";
import SeekerSignup from "./src/routes/seeker/auth/SeekerSignup.jsx";
import SeekerUser from "./src/routes/seeker/auth/steps/SeekerUser.jsx";
import SeekerUpdateProfile from "./src/routes/seeker/auth/steps/SeekerUpdateProfile.jsx";
import ParentComponent from "./src/routes/seeker/auth/ProcessSignUp.jsx";
import MentorSignupProcess from "./src/routes/mentor/auth/ProcessSignUp.jsx";
import MentorSignup from "./src/routes/mentor/auth/MentorSignup.jsx";
import { MentorAuthProvider } from "./src/Contexts/MentorAuthContext.jsx";
import SuccessfulTesting from "./src/routes/SuccessfulTesting.jsx";
import JobList from "./src/routes/JobList/JobList.jsx";
import GroupPage from "./src/routes/group/GroupPage.jsx";
import PublicUserPage from "./src/routes/PublicUserPage/PublicUserPage";
import SearchBar from "./src/routes/userSearch/SearchBar.jsx";
import PrivateRoute from "./src/Contexts/PrivateRoute.jsx";
import Error404Page from "./src/404.jsx";
export const router = createBrowserRouter([
  {
    path: "/parent",
    element: (
      <SeekerAuthProvider>
        <ParentComponent />
      </SeekerAuthProvider>
    ),
  },
  {
    path: "/searchUser",
    element: (
      <SeekerAuthProvider>
        <SearchBar />
      </SeekerAuthProvider>
    ),
  },
  {
    path: "/",
    element: (
      <AuthProvider>
        <SeekerAuthProvider>
          <Onboard />
        </SeekerAuthProvider>
      </AuthProvider>
    ),
  },
  {
    path: "/ForgotPassword",
    element: (
      <AuthProvider>
        <ForgotPassword />
      </AuthProvider>
    ),
  },
  {
    path: "/SeekerLogin",
    element: (
      <AuthProvider>
        <SeekerAuthProvider>
          <SeekerLogin />
        </SeekerAuthProvider>
      </AuthProvider>
    ),
  },
  {
    path: "/SeekerSignup",
    element: (
      <SeekerAuthProvider>
        <SeekerSignup />
      </SeekerAuthProvider>
    ),
  },
  {
    path: "/MentorSignup",
    element: (
      <SeekerAuthProvider>
        <MentorSignup />
      </SeekerAuthProvider>
    ),
  },
  {
    path: "/mentorprocess",
    element: (
      <MentorAuthProvider>
        <MentorSignupProcess />
      </MentorAuthProvider>
    ),
  },
  {
    path: "/mentor/:mentorId",
    element: <UserpageMentor />,
  },
  {
    path: "/SeekerUser",
    element: (
      <SeekerAuthProvider>
        <SeekerPrivateRoute>
          <SeekerUser />
        </SeekerPrivateRoute>
      </SeekerAuthProvider>
    ),
  },
  {
    path: "/SeekerUpdateProfile",
    element: (
      <SeekerAuthProvider>
        <SeekerPrivateRoute>
          <SeekerUpdateProfile />
        </SeekerPrivateRoute>
      </SeekerAuthProvider>
    ),
  },
  {
    path: "Seeker/Joblist",
    element: <JobList />,
  },

  {
    path: "/Joblist",
    element: (
      <AuthProvider>
        <SeekerAuthProvider>
          {" "}
          <JobList />{" "}
        </SeekerAuthProvider>
      </AuthProvider>
    ),
  },

  {
    path: "/SeekerForgotPassword",
    element: (
      <SeekerAuthProvider>
        <SeekerUpdateProfile />
      </SeekerAuthProvider>
    ),
  },
  {
    path: "/searchUsers",
    element: (
      <AuthProvider>
        <SeekerAuthProvider>
          <SearchUser />
        </SeekerAuthProvider>
      </AuthProvider>
    ),
  },
  {
    path: "/public",
    element: <PublicUserPage />,
  },
  {
    path: "/groups",
    element: (
      <AuthProvider>
        <SeekerAuthProvider>
          <GroupPage />
        </SeekerAuthProvider>
      </AuthProvider>
    ),
  },

  {
    path: "/user",
    element: (
      <SeekerAuthProvider>
        <UserpageSeeker />
      </SeekerAuthProvider>
    ),
  },
  {
    path: "/mentor",
    element: (
      <AuthProvider>
        <SeekerAuthProvider>
          <UserpageMentor />{" "}
        </SeekerAuthProvider>
      </AuthProvider>
    ),
  },
  {
    path: "/company",
    element: (
      <AuthProvider>
        <SeekerAuthProvider>
          <UserpageCompany />{" "}
        </SeekerAuthProvider>
      </AuthProvider>
    ),
  },
  {
    path: "/testsuccess",
    element: (
      <AuthProvider>
        <SeekerAuthProvider>
          <SuccessfulTesting />
        </SeekerAuthProvider>
      </AuthProvider>
    ),
  },
  {
    path: "/*",
    element: (
      <AuthProvider>
        <SeekerAuthProvider>
          <Error404Page />
        </SeekerAuthProvider>
      </AuthProvider>
    ),
  },
]);
