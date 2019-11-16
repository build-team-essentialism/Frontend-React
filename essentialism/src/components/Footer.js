import React from 'react';
import styled from 'styled-components';
import { useDarkMode } from '../hooks/useDarkMode';

const FooterDiv = styled.footer`
    background-color: indianred;
    padding: 1%;
    border: 2px solid black;
    border-radius: 5px;
    position: fixed;
    bottom: 0;
    right: 0;
    width: 5%;
`;
const DarkToggleDiv = styled.div`
    background: papayawhip;
    border-radius: 50px;
    border: 1px solid black;
    height: 18px;
    position: relative;
    width: 38px;
    margin: 0 auto;
`;

function Footer() {
    const [darkMode, setDarkMode] = useDarkMode();
    const toggleMode = event => {
        event.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <FooterDiv>
            <DarkToggleDiv>
                <div
                    onClick={toggleMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                />
            </DarkToggleDiv>
        </FooterDiv>
    )
}

export default Footer;