import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    text-align: left;
    padding: 2% 5% 2% 5%;
    border: 4px solid black;
    border-radius: 5px;
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
            <H1>Welocme To Essentialism</H1>
            <h3>Theme</h3>
                <ThemeDiv>
                    <Primary>Primary: indianred</Primary>
                    <Secondary>Secondary: khaki</Secondary>
                </ThemeDiv>
            <h3>Pitch</h3>
            <p>In a world with everything shouting for your attention, the disciplined pursuit of less has never been more needed. Enter Essentialism. The Way of the Essentialist involves doing less, but better, so you can make the highest possible contribution. It’s not about getting more done in less time or getting less done. It’s about getting only the right things done. It’s about regaining control of our own choices about where to spend our time and energies instead of giving others implicit permission to choose for us. The first step to essentialism is identifying your values.</p>
            <h3>MVP</h3>
            <p>1. An on-boarding process for a new user<br />
            2. Create a page that shows a list of values. User will swipe right or left (or tap a check or x button) if that value is important to them.<br /> (List: <br /><Span>• Athletic ability </Span><br /><Span>• Art and literature </Span><br /><Span>• Creativity, discovering, or inventing things to make a difference in the world </Span><br /><Span>• Independence </Span><br /><Span>• Kindness and generosity </Span><br /><Span>• Living in the moment </Span><br /><Span>• Membership in a social group (such as your community, racial group, or school club) </Span><br /><Span>• Music </Span><br /><Span>• My community </Span><br /><Span>• My moral principles </Span><br /><Span>• Nature and the environment </Span><br /><Span>• Relationships with friends and family </Span><br /><Span>• Sense of humor </Span><br /><Span>• Success in my career </Span><br /><Span>• Other: _________________).</Span><br />
            3. Create a page that then shows the list of values the person chose. Prompt the user to now choose the top 3 that are the MOST important to them. Then give students the prompt: In a few sentences, describe why the selected values are important to you. Focus on your thoughts/feelings, and don’t worry about spelling, grammar, or how well-written it is.<br />
            4. Prompt to list all your current projects and things you’re involved in<br />
            5. Page to Compare your values to your current projects.<br />
            6. Ability to easily edit / delete all data.</p>
            <h3>Stretch</h3>
            <p>Notifications to reflect on comparing your current projects to your values monthly.</p>
        </Div>
    );
};

export default Home;