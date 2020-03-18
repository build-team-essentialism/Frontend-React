// REACT
import React from "react";
import { Link, Route, withRouter } from "react-router-dom";

// COMPONENTS
import { getToken } from "../utils/api";
import AccountHome from "./AccountHome";
import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";
import ProtectedRoute from "./ProtectedRoute";
import Register from "./Register";
import InitialPrompt from "./InitialPrompt";
import TaskHome from "./Tasks/TaskHome";
import PromptEdits from "../components/PromptEdits";
import PillarEdits from "../components/PillarEdits";

// Styling
import styled from "styled-components";

const WrapperDiv = styled.div`
  width: 100%;
  max-width: 850px;
  margin: auto;
`;
const Nav = styled.nav`
  background-color: slategrey;
  padding: 2%;
  margin-bottom: 50px;
  border-radius: 5px;
  border: 1px solid white;
  font-weight: bold;
  a {
    text-decoration: none;
    color: white;
    margin-right: 4%;
    margin-left: 4%;
    &:hover {
      color: khaki;
    }
  }
`;

function NavBar() {
  const signedIn = getToken();

  return (
    <>
      <WrapperDiv>
        <Nav>
          <div>
            <Link to="/">Home</Link>
            {!signedIn && <Link to="/register">Register</Link>}
            {!signedIn && <Link to="/login">Login</Link>}
            {signedIn && <Link to="/accounthome">My Account</Link>}
            {/* {signedIn && <Link to='/initialprompt'>Prompt</Link>} */}
            {signedIn && <Link to="/tasks">Tasks</Link>}
            {signedIn && <Link to="/logout">Logout</Link>}
          </div>
        </Nav>

        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />

        {/* ProtectedRoute(s) below in final project */}
        <ProtectedRoute exact path="/initialprompt" component={InitialPrompt} />
        <ProtectedRoute exact path="/tasks" component={TaskHome} />
        <ProtectedRoute exact path="/accounthome" component={AccountHome} />
        <ProtectedRoute exact path="/logout" component={Logout} />

        {/* Update Route */}
        <ProtectedRoute exact path="/promptedit/:id" component={PromptEdits} />
        <ProtectedRoute exact path="/pillaredit/:id" component={PillarEdits} />
      </WrapperDiv>
    </>
  );
}

export default withRouter(NavBar);
