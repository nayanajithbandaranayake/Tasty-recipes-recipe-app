import React from "react";
import styled from "styled-components";
import { Quote } from "../components";
import { CgScrollV } from "react-icons/cg";

const Breakfast = () => {
  return (
    <Wrapper>
      <section className="section section-center">
        <img
          src="/images/breakfast.jpeg"
          alt="lunch image nasi goreng"
          className="cover-image"
        />
        <Quote
          text="Breakfast is the most important meal of the Day."
          font_color="#0B0014"
        />
        <footer>
          <CgScrollV className="scroll" />
        </footer>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  .scroll {
    font-size: 3.5em;
    color: #016fb9;
  }
`;
export default Breakfast;
