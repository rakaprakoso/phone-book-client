import React, { useState } from "react";
import { PhoneContactList } from "./Contact";

import { FaAngleLeft, FaAngleRight, FaInfoCircle, FaSearch, FaSyncAlt } from "react-icons/fa";
import { CardContainer } from "../molecules/Card";
import {
  BoxContainer,
  BoxFull,
  Container,
  FlexCenter,
  Input,
  InputBox,
  PaginationItem,
} from "../styling/Global";
import { ButtonAdd, ButtonSubmit } from "../molecules/Button";

const Card = () => {
  const [search, setSearch] = useState("");
  const [skip, setSkip] = useState(true);
  const [syncServer, setSyncServer] = useState(false);
  const [totalContact, setTotalContact] = useState(0);
  return (
    <CardContainer>
      <BoxContainer>
        <BoxFull>
          <h2>
            Contact List
          </h2>
          <p>{totalContact} Contacts</p>
          <button
            style={{
              border: "1px solid #0f7621",
              background: "white",
              padding: "4px 8px",
              borderRadius: "4px",
              color: "#0f7621",
              cursor: "pointer",
            }}
            onClick={(e) => {
              setSyncServer(true);
            }}
          >
            <FaSyncAlt
              style={{
                marginRight: "5px",
                marginBottom: "-2px",
              }}
            />
            Sync Contact from Server
          </button>
        </BoxFull>
        <InputBox>
          <Input
            type="text"
            defaultValue={search}
            placeholder="Search Contact"
            onChange={(e) => {
              setSearch(e.target.value);
              setSkip(false);
            }}
          />
          <FaSearch />
        </InputBox>
      </BoxContainer>
      <PhoneContactList
        search_query={search}
        skip={skip}
        setTotalContact={setTotalContact}
        syncServer={syncServer}
        setSyncServer={setSyncServer}
      />
      <FlexCenter
        style={{
          margin: "25px -32px 0",
          boxShadow: " -1px -13px 20px 4px #d1d1d121",
        }}
      >
        <Container>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "12px 0",
            }}
          >
            <ul
              style={{
                listStyleType: "none",
                border: "1px solid #e3e3e3",
                borderRadius: "8px",
                width: "fit-content",
                padding: "6px",
                display: "inline-block",
                margin: "0",
              }}
            >
              <PaginationItem onClick={() => console.log("Go Back")}>
                <FaAngleLeft style={{ marginBottom: "-2px" }} />
              </PaginationItem>
              <PaginationItem onClick={() => console.log("1")}>
                1
              </PaginationItem>
              <PaginationItem onClick={() => console.log("2")}>
                2
              </PaginationItem>
              <PaginationItem onClick={() => console.log("3")}>
                3
              </PaginationItem>
              <PaginationItem onClick={() => console.log("4")}>
                4
              </PaginationItem>
              <PaginationItem onClick={() => console.log("5")}>
                5
              </PaginationItem>
              <PaginationItem onClick={() => console.log("6")}>
                6
              </PaginationItem>
              <PaginationItem onClick={() => console.log("Next")}>
                <FaAngleRight style={{ marginBottom: "-2px" }} />
              </PaginationItem>
            </ul>
            <ButtonAdd>Add Contact</ButtonAdd>
          </div>
        </Container>
      </FlexCenter>
    </CardContainer>
  );
};

export default Card;
