import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaPhoneAlt, FaTrash, FaAngleLeft, FaEllipsisV } from "react-icons/fa";

import { CardContainer } from "../molecules/Card";
import { ButtonSubmit } from "../molecules/Button";
import { Container, FlexCenter, H1, Input, SpaceTop } from "../styling/Global";

interface Contact {
  id: number;
  first_name: string;
  last_name: string;
  pic: string;
  phones: any[];
  search_query: string;
}

const ContactDetail = () => {
  const [value, setValue] = useState({
    title: "Minang neng",
  });

  const [contact, setContact] = useState<Contact | null>(null);

  useEffect(() => {
    var contacts = JSON.parse(localStorage.getItem("contacts") || "{}");
    console.log(contacts);
    let data: any | undefined;
    data = contacts?.contacts.find((contact: { id: string }) => {
      return contact.id == id;
    });
    setContact(data);
  }, []);

  let { id } = useParams();

  return (
    <>
      <Container style={{ marginBottom:'40px' }}>
          <SpaceTop>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              flexWrap:'wrap'
            }}
          >
              <Link to="/" style={{ fontSize: "2rem", color: "#FFFF" }}>
                <FaAngleLeft />
              </Link>
                <H1>Contact Detail</H1>
            <span
              style={{ fontSize: "1.5rem", color: "#FFFF" }}
              onClick={(e) => {
                  console.log("test");
                }}
                >
              <FaEllipsisV />
            </span>
          </div>
                </SpaceTop>
      </Container>
      <CardContainer>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "-80px",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "30%",
                maxWidth: "100px",
                overflow: "hidden",
              }}
            >
              <div style={{ width: "100%", paddingTop: "100%" }}></div>
              <img
                style={{
                  position: "absolute",
                  top: " 0",
                  bottom: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "100%",
                }}
                src={contact?.pic}
                alt={`${contact?.first_name} ${contact?.last_name}`}
              />
            </div>
          </div>
          <h1 style={{ textAlign: "center",marginBottom:"30px" }}>
            {contact?.first_name} {contact?.last_name}
          </h1>
          <div>
            {contact?.phones && contact.phones.map((phone,i)=>(
            <div key={i}
              style={{
                display: "flex",
                paddingBottom: "10px",
                marginBottom: "10px",
                alignItems: "center",
                borderBottom: "1px solid #ebebeb",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background: "#ffb733",
                  borderRadius: "100%",
                  display: "flex",
                }}
              >
                <FaPhoneAlt style={{ color: "white", margin: "auto" }} />
              </div>
              <div style={{ paddingLeft: "20px", width: "100%" }}>
                <h2 style={{ margin: "auto" }}>{phone.number}</h2>
                <span style={{ color: "#5a5a5a" }}>Phone {i+1}</span>
              </div>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  background: "#d71515",
                  borderRadius: "100%",
                  display: "flex",
                }}
              >
                <FaTrash style={{ color: "white", margin: "auto" }} />
              </div>
            </div>
            ))}
          </div>
          <div>
            <ButtonSubmit style={{ display:'block',width: "100%",}}>Save</ButtonSubmit>
          </div>
        </div>
      </CardContainer>
    </>
  );
};

export default ContactDetail;
