import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import NotLoggedIn from "./routes/NotLoggedIn";
import SendPasswordReset from "./pages/SendPasswordReset";
import PasswordReset from "./pages/PasswordReset";
import ProtectPasswordResets from "./routes/ProtectPasswordResets";
import Navbar from "./ui/Navbar";
import Team from "./pages/Team";
import LoggedIn from "./routes/LoggedIn";
import Task from "./pages/Task";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/Team"
            element={
              <LoggedIn>
                {" "}
                <Team />{" "}
              </LoggedIn>
            }
          ></Route>

          <Route
            path="/signin"
            element={
              <NotLoggedIn>
                <SignIn />
              </NotLoggedIn>
            }
          ></Route>
          <Route
            path="/register"
            element={
              <NotLoggedIn>
                <Register />
              </NotLoggedIn>
            }
          ></Route>
          <Route
            path="/password-reset"
            element={
              <ProtectPasswordResets>
                <PasswordReset />
              </ProtectPasswordResets>
            }
          ></Route>
          <Route
            path="/reset-password"
            element={
              <NotLoggedIn>
                <SendPasswordReset />
              </NotLoggedIn>
            }
          ></Route>
          <Route
            path="/mailconfirmation"
            element={<NotLoggedIn></NotLoggedIn>}
          ></Route>
          <Route
            path="/team/:teamId/task/:id"
            element={
              <LoggedIn>
                <Task />
              </LoggedIn>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
