import React from "react";
import Card from "../components/Card";
import { Container, FlexCenter, H1, SpaceTop } from "../styling/Global";
import { jsx } from '@emotion/react'

const Contact = () => {
  return (
    <>
      <FlexCenter>
        <SpaceTop>
          <Container>
            <H1>
              Phone Book
            </H1>
          </Container>
        </SpaceTop>
      </FlexCenter>
      <Card />
    </>
  );
};

export default Contact;
