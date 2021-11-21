import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://rickandmortyapi.com/graphql",
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
