import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    text-align: left;
    padding: 2% 5% 2% 5%;
    border: 2px solid black;
    border-radius: 5px;
`;
const P = styled.p`
    text-align: center;
`;
const Span = styled.span`
    margin-left: 5%;
`;
const H1 = styled.h1`
    text-align: center;
`;
const ThemeDiv = styled.div`
    display: flex;
    justify-content: space-around;
`;
const Primary = styled.p`
    padding: 2%;
    border-radius: 5px;
    background-color: indianred;
`;
const Secondary = styled.p`
    padding: 2%;
    border-radius: 5px;
    background-color: khaki;
`;

function Home() {
    return (
        <Div>
            <P>App inspired by the New York Times best selling book "Essentialism" by Greg McKeown</P>
            <H1>Welcome To Essentialism</H1>
            <h3>Pitch</h3>
            <p>In a world with everything shouting for your attention, the disciplined pursuit of less has never been more needed. Enter Essentialism. The Way of the Essentialist involves doing less, but better, so you can make the highest possible contribution. It’s not about getting more done in less time or getting less done. It’s about getting only the right things done. It’s about regaining control of our own choices about where to spend our time and energies instead of giving others implicit permission to choose for us. The first step to essentialism is identifying your values.</p>
            <h3>Our Approach</h3>
            <p>We wanted to design an app that is easy to use and navigate, while also giving the user something that can actually help them in their daily life. The goal is to deliver an app to focus on the users ideals aka pillars and align these pillars with prompted questions. The prompts ask the user to provide information about current challenges or tasks at hand and think of how their pillars can be used to aid the completion on said challenges. There is also a tasks page that gives the user the chance to make smaller daily/weekly tasks for themselves. We hope you enjoy using it!</p>
        </Div>
    );
};

export default Home;