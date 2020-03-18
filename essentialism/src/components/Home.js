import React from "react";
import EssentalismIMG from "../images/essentialism1.jpg";
import styled from "styled-components";

function Home() {
  return (
    <Div>
      <P>
        App inspired by the New York Times best selling book "Essentialism" by
        Greg McKeown
      </P>

      <section class="main">
        <div class="moto">
          <H1>Essentalism</H1>
          <P>The disciplined pursuit of less</P>
        </div>
        <Image class="essentialism-photo">
          <img
            id="delete"
            src={EssentalismIMG}
            alt="Photo of scribbled lines with arrow pointing to lines in a circle that encompass the word THIS"
          />
        </Image>
      </section>

      <article class="quote">
        <QuoteText>
          An essentalist produces more - brings forth more - by removing more
          instead of doing more
        </QuoteText>
      </article>
      <Prompt>
        <PromptList>
          <PromptListItem>
            Regain control of your time and energy
          </PromptListItem>
          <PromptListItem>
            If you do not priortize your life, someone else will
          </PromptListItem>
          <PromptListItem>
            No longer give people implicit permission to choose for us
          </PromptListItem>
          <PromptListItem>
            The ability to choose cannot be taken away or even given away - it
            can only be forgotten
          </PromptListItem>
        </PromptList>
      </Prompt>

      <QuestionSection>
        <QuestionsDiv>
          <ul>
            <QuestionItems>
              Have you ever found yourself stretched too thin at home or even at
              work?
            </QuestionItems>
            <QuestionItems>
              Have you ever felt both overworked and underutilised?
            </QuestionItems>
            <QuestionItems>
              Do you ever feel busy but not productive?
            </QuestionItems>
            <QuestionItems>
              Do you ever feel like you're constantly in motion, but never
              getting anywhere?
            </QuestionItems>
            <QuestionItems>
              If you answered yes to any of these, the way out is becoming an
              Essentialist
            </QuestionItems>
          </ul>
        </QuestionsDiv>
        <ProductDescription>
          <p>
            This is not a time-management strategy, but a systematic discipline
            you apply every time you are faced with a decision. By forcing us to
            apply a more selective criteria for what is essential, the pursuit
            of less allows us to regain control of our choices so we can make
            the highest possible contribution towards the things that really
            matter
          </p>
        </ProductDescription>
      </QuestionSection>

      <div>
        <QuoteText>
          If you answered yes to any of these, the way out is becoming an
          Essentialist
        </QuoteText>
      </div>

      <h3>Pitch</h3>
      <p>
        In a world with everything shouting for your attention, the disciplined
        pursuit of less has never been more needed. Enter Essentialism. The Way
        of the Essentialist involves doing less, but better, so you can make the
        highest possible contribution. It’s not about getting more done in less
        time or getting less done. It’s about getting only the right things
        done. It’s about regaining control of our own choices about where to
        spend our time and energies instead of giving others implicit permission
        to choose for us. The first step to essentialism is identifying your
        values.
      </p>
      <h3>Our Approach</h3>
      <p>
        We wanted to design an app that is easy to use and navigate, while also
        giving the user something that can actually help them in their daily
        life. The goal is to deliver an app to focus on the users ideals aka
        pillars and align these pillars with prompted questions. The prompts ask
        the user to provide information about current challenges or tasks at
        hand and think of how their pillars can be used to aid the completion on
        said challenges. There is also a tasks page that gives the user the
        chance to make smaller daily/weekly tasks for themselves. We hope you
        enjoy using it!
      </p>
    </Div>
  );
}

export default Home;

const Div = styled.div`
  text-align: left;
  border-radius: 5px;
`;
const P = styled.p`
  text-align: center;
`;
const H1 = styled.h1`
  text-align: center;
`;

const Prompt = styled.aside`
  display: flex;
`;
const PromptList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  flex-direction: column;
  margin: 0 auto;
`;
const PromptListItem = styled.li`
  font-size: 1.4rem;
  padding: 20px 0px;
  color: #c01515;
  margin: 0 auto;
  text-transform: capitalize;
`;
const QuestionSection = styled.section`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 0 auto;
  padding-top: 40px;
`;
const QuestionsDiv = styled.div`
  width: 49%;
  font-size: 1.2rem;
  padding: 7px;
`;
const QuestionItems = styled.li`
  border-bottom: 0.5px dashed black;
  line-height: 1.3;
  padding: 15px;
`;
const ProductDescription = styled.div`
  width: 49%;
  line-height: 1.74;
  font-size: 1.4rem;
  padding: 4px;
  margin-top: 35px;
  margin-left: 10px;
`;
const QuoteText = styled.p`
  font-size: 1.4rem;
  text-align: center;
  font-weight: 500;
  text-transform: capitalize;
  padding-top: 30px;
`;
const Image = styled.div`
  margin-left: 22.5%;
`;
