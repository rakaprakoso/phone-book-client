import React, { useState } from "react";
import Card from "../components/Card";
import { Container, FlexCenter, H1, SpaceTop } from "../styling/Global";
import { jsx } from '@emotion/react'
import { FaInfoCircle } from "react-icons/fa";
import SweetAlert2 from "react-sweetalert2";

const Contact = () => {
  const [infoModal, setInfoModal] = useState({});
  return (
    <>
      <FlexCenter>
        <SpaceTop>
          <Container>
            <H1>
              Phone Book
              <span
              onClick={() => {
                setInfoModal({
                  show: true,
                  icon: 'info',
                  title: "Disclaimer",
                });
              }}
            >
              <FaInfoCircle style={{
                marginLeft:'1rem',
                marginBottom:'-0.2rem',
                cursor: 'pointer',
              }}/>
            </span>
            </H1>
          </Container>
        </SpaceTop>
      </FlexCenter>
      <Card />
      <SweetAlert2
        {...infoModal}
        didClose={() => {
          setInfoModal({
            show: false,
          });
        }}
      >
        <ul>
          <li>Fetch Data locally due to limitness deployment graphql server.</li>
          <li>Add & Edit Contact still not available.</li>
          <li>Pagination still not available.</li>
        </ul>
      </SweetAlert2>
    </>
  );
};

export default Contact;
