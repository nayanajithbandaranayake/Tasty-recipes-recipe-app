import React from "react";
import styled from "styled-components";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const Quote = ({ text, font_color = "#067bc2", quote_color = "#214f4b" }) => {
  return (
    <Wrapper>
      <p style={{ color: font_color }}>
        <span>
          <ImQuotesLeft style={{ color: quote_color }} />
        </span>
        {text}
        <span>
          <ImQuotesRight style={{ color: quote_color }} />
        </span>
      </p>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  margin: 8em 10em 8em 10em;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    line-height: 1.2em;
    font-size: 4em;
    font-family: "Cedarville Cursive", cursive;
    font-weight: 600;
  }
  span {
    font-size: 1em;
    display: block;
  }
  span:nth-of-type(2) {
    position: absolute;
    right: 0;
  }
`;

export default Quote;
