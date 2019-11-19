// REACT
import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';

// COMPONENTS
import { getToken } from '../utils/api';
import AccountHome from './AccountHome';
import Home from './Home';
import Login from './Login';
import Logout from './Logout';
import ProtectedRoute from './ProtectedRoute';
import Register from './Register';
import InitialPrompt from './InitialPrompt';
import TaskHome from './Tasks/TaskHome';

// Styling
import styled from 'styled-components';

const WrapperDiv =styled.div`
    width: 100%;
    max-width: 750px;
    margin: auto;
`;
const Nav = styled.nav`
    background-color: indianred;
    padding: 2%;
    margin-bottom: 50px;
    border-radius: 4px;
    border: 2px solid black;
    font-weight: bold;
    a {
        text-decoration: none;
        color: black;
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
                        <Link to='/'>Home</Link>
                        {!signedIn && <Link to='/register'>Register</Link>}
                        {!signedIn && <Link to='/login'>Login</Link>}
                        {!signedIn && <Link to='/accounthome'>My Account</Link>}
                        {!signedIn && <Link to='/initialprompt'>Prompt</Link>}
                        {!signedIn && <Link to='/tasks'>Tasks</Link>}
                        {!signedIn && <Link to='/logout'>Logout</Link>}
                    </div>
                </Nav>

                <Route exact path='/' component={Home} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />

                {/* ProtectedRoute(s) below in final project */}
                <Route exact path='/initialprompt' component={InitialPrompt} />
                <Route exact path='/tasks' component={TaskHome} />
                <Route exact path='/accounthome' component={AccountHome} />
                <ProtectedRoute exact path='/logout' component={Logout} />
            </WrapperDiv>
        </>
    );
};

export default withRouter(NavBar);