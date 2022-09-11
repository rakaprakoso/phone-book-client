import "./App.css";

import styled from "@emotion/styled";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import ContactDetail from "./pages/ContactDetail";
import { GlobalStyles } from "./styling/Global";

const client = new ApolloClient({
  // link: new HttpLink({
  //     uri: 'https://wpe-hiring.tokopedia.net/graphql',
  //     fetchOptions: {
  //       mode: 'no-cors'
  //     }
  // }),
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles/>
      <BrowserRouter>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            overflow: "hidden",
            position: "relative",
            backgroundImage:"radial-gradient(100% 100% at 100% 0, #73ff5a 0, #0f7621 100%)"
          }}
        >
          <Routes>
            <Route path="/" element={<Contact />} />
            <Route path="/contact/:id" element={<ContactDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
