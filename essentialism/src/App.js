// REACT
import React from 'react';

// COMPONENTS
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { UserProvider } from './context/userContext'

// STYLING
import styled from 'styled-components';
import './App.css';

const AppDiv = styled.div`
  text-align: center;
`;

function App() {
  return (
    <AppDiv>
      <UserProvider>
        <NavBar />
        <Footer />
      </UserProvider>
    </AppDiv>
  );
}

export default App;
