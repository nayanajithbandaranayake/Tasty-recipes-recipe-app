import React from "react";
import styled from "styled-components";
import { CgScrollV } from "react-icons/cg";

import { Quote } from "../components";
const Dessert = () => {
  return (
    <Wrapper>
      <section className="section section-center">
        <img
          src="/images/dessert.jpg"
          alt="dinner image chillie soup"
          className="cover-image"
        />
        <Quote text="Donut worry, be happy." font_color="#0B0014"></Quote>
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
export default Dessert;
