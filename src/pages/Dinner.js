import React from "react";
import styled from "styled-components";
import { Quote } from "../components";
import { CgScrollV } from "react-icons/cg";
import { connect } from "react-redux";

const Dinner = () => {
  return (
    <Wrapper>
      <section className="section section-center">
        <img
          src="/images/dinner.jpg"
          alt="dinner image chillie soup"
          className="cover-image"
        />
        <Quote
          text="Table is ready, Is the Dinner ready?"
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

const mapStateToProps = (state) => {
  const { dinner_recipes } = state;
  return { dinner_recipes };
};

export default connect(mapStateToProps)(Dinner);
