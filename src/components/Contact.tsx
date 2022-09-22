import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";
import {
  FaRegHeart,
  FaTrash,
  FaHeart,
  FaExclamation,
  FaExclamationCircle,
} from "react-icons/fa";
import { Console } from "console";
import contactData from "../data/contact";

interface Contact {
  id: number;
  first_name: string;
  last_name: string;
  pic: string;
  phones: any[];
  search_query: string;
}

interface ContactData {
  contacts: Contact[];
}

interface ContactVars {
  first_name: string;
}

const GET_CONTACT = gql`
  query GetContactList($first_name: String) {
    contacts(first_name: $first_name) {
      created_at
      first_name
      id
      last_name
      pic
      phones {
        number
      }
    }
  }
`;

const handleAddFavorite = (id: any) => {
  const getList = JSON.parse(localStorage.getItem("contacts") || "{}");
  let contacts: any | undefined;
  contacts = [
    getList?.contacts.find((contact: { id: string }) => {
      return contact.id == id;
    }),
  ];
  var favorite_contact = JSON.parse(
    localStorage.getItem("favorite_contact") || "{}"
  );
  if (
    favorite_contact.contacts == undefined &&
    Object.keys(favorite_contact).length === 0
  ) {
    favorite_contact = [...contacts];
  } else {
    favorite_contact = [...favorite_contact.contacts, ...contacts];
  }
  favorite_contact = {
    contacts: favorite_contact,
  };
  localStorage.setItem("favorite_contact", JSON.stringify(favorite_contact));
};

const handleRemoveFavorite = (id: any) => {
  var favorite_contact = JSON.parse(
    localStorage.getItem("favorite_contact") || "{}"
  );
  let contacts: any | undefined;
  contacts = favorite_contact?.contacts.filter((contact: { id: string }) => {
    return contact.id != id;
  });
  favorite_contact = {
    contacts,
  };
  localStorage.setItem("favorite_contact", JSON.stringify(favorite_contact));
};

const handleRemoveData = (id: any) => {
  var current_contacts = JSON.parse(localStorage.getItem("contacts") || "{}");
  let contacts: any | undefined;
  contacts = current_contacts?.contacts.filter((contact: { id: string }) => {
    return contact.id != id;
  });
  current_contacts = {
    contacts,
  };
  localStorage.setItem("contacts", JSON.stringify(current_contacts));
};

export function PhoneContactList(props: any) {
  const [items, setItems] = useState<ContactData | null>(null);
  const [favorite_contact, set_favorite_contact] = useState<
    ContactData | undefined
  >(undefined);

  var is_skip = localStorage.getItem("contacts") ? true : false;
  // const { loading, data } = useQuery<ContactData, ContactVars>(GET_CONTACT, {
  //   variables: { first_name: props.search_query },
  //   skip: is_skip,
  // });

  const data = contactData;
  const [loading, setLoading] = useState(true);
  const updateList = () => {
    const  contactExist = JSON.parse(localStorage.getItem("contacts") || "{}");
    const isDataSet = Object.keys(contactExist).length === 0 ? false : true;
    if ((data && !isDataSet) || props.syncServer) {
      localStorage.setItem("contacts", JSON.stringify(data));
      props.setSyncServer(false)
    }
    
    var items = JSON.parse(localStorage.getItem("contacts") || "{}");
    props.setTotalContact(items?.contacts?.length ?? 0);

    if (props.search_query != "" && props.search_query != null) {
      items =
        {
          contacts: items?.contacts.filter(
            (cha: { first_name: string; last_name: string }) => {
              return (
                cha.first_name
                  .toLowerCase()
                  .indexOf(props.search_query.toLowerCase()) >= 0 ||
                cha.last_name
                  .toLowerCase()
                  .indexOf(props.search_query.toLowerCase()) >= 0
              );
            }
          ),
        } || undefined;
    }

    var favorite_contact = JSON.parse(
      localStorage.getItem("favorite_contact") || "{}"
    );
    if (
      favorite_contact &&
      favorite_contact.contacts != undefined &&
      Object.keys(favorite_contact).length !== 0
    ) {
      favorite_contact =
        {
          contacts: favorite_contact?.contacts.filter(
            (cha: { first_name: string; last_name: string }) => {
              return (
                cha.first_name
                  .toLowerCase()
                  .indexOf(props.search_query.toLowerCase()) >= 0 ||
                cha.last_name
                  .toLowerCase()
                  .indexOf(props.search_query.toLowerCase()) >= 0
              );
            }
          ),
        } || undefined;
      set_favorite_contact(favorite_contact);

      var ids = new Set(
        favorite_contact.contacts.map((contact: any) => contact.id)
      );
      items = {
        contacts: items?.contacts.filter(
          (contact: any) => !ids.has(contact.id)
        ),
      };
      // setItems(items);
      // console.log('list item baru',items);
    }

    setItems(items);
  };

  useEffect(() => {
    updateList();
    setLoading(false);
  }, []);

  useEffect(() => {
    updateList();
  }, [props.search_query, data, props.syncServer]);

  const navigate = useNavigate();

  function ContactListBox(props: {
    currentItems: ContactData;
    navigate: any;
    type: string;
  }) {
    return (
      <>
        {props.currentItems &&
          props.currentItems.contacts.map((contact) => (
            <div key={contact.id}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingBottom: "10px",
                  marginBottom: "10px",
                  borderBottom: "1px solid #e3e3e3",
                  position: "relative",
                }}
              >
                <div
                  onClick={() => navigate(`/contact/${contact.id}`)}
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <div style={{ width: "20%", maxWidth: "80px" }}>
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
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
                        src={contact.pic}
                        alt={contact.first_name}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      paddingLeft: "20px",
                      position: "relative",
                      width: "100%",
                      paddingRight: "70px",
                    }}
                  >
                    <div style={{ fontWeight: "700" }}>
                      {contact.first_name} {contact.last_name}
                    </div>
                    <div>{contact.phones[0]["number"]}</div>
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "20px",
                    position: "absolute",
                    right: "10px",
                  }}
                >
                  <span
                    style={{
                      padding: "3px",
                      color: "#e12222",
                      marginRight: "10px",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      if (props.type == "favorite") {
                        handleRemoveFavorite(contact.id);
                      } else {
                        handleAddFavorite(contact.id);
                      }
                      updateList();
                    }}
                  >
                    {props.type == "favorite" ? <FaHeart /> : <FaRegHeart />}
                  </span>
                  {props.type != "favorite" && (
                    <span
                      style={{ padding: "3px", color: "#a7a7a7" }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleRemoveData(contact.id);
                        updateList();
                      }}
                    >
                      <FaTrash />
                    </span>
                  )}
                </span>
              </div>
            </div>
          ))}
      </>
    );
  }

  return (
    <div style={{ flex: "1", position: "relative" }}>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div
          style={{
            overflowY: "scroll",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          <>
            <div style={{ marginBottom: "20px" }}>
              <h3 style={{ marginBottom: "10px" }}>Favorite</h3>
              {favorite_contact?.contacts && (
                <ContactListBox
                  currentItems={favorite_contact}
                  navigate={navigate}
                  type="favorite"
                />
              )}
              {(favorite_contact == undefined ||
                Object.keys(favorite_contact).length === 0 ||
                favorite_contact.contacts.length === 0) && (
                <div style={{ textAlign: "center" }}>
                  <h4 style={{ fontSize: "3rem", color: "#8f8f8f" }}>
                    <FaExclamationCircle />
                  </h4>
                  <p>No Data Found</p>
                </div>
              )}
            </div>
            <div>
              <h3 style={{ marginBottom: "10px" }}>Contact</h3>
              {items?.contacts && items?.contacts?.length > 0 && (
                <ContactListBox
                  currentItems={items}
                  navigate={navigate}
                  type=""
                />
              )}
              {items?.contacts?.length == 0 && (
                <div style={{ textAlign: "center" }}>
                  <h4 style={{ fontSize: "3rem", color: "#8f8f8f" }}>
                    <FaExclamationCircle />
                  </h4>
                  <p>No Data Found</p>
                </div>
              )}
            </div>
          </>
        </div>
      )}
    </div>
  );
}
