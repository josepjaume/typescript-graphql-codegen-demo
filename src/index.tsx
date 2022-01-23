import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { createClient, dedupExchange, fetchExchange, Provider } from 'urql';
import { devtoolsExchange } from '@urql/devtools';
import { cacheExchange } from '@urql/exchange-graphcache';

const client = createClient({
  url: "https://rickandmortyapi.com/graphql",
  exchanges: [devtoolsExchange, dedupExchange, cacheExchange({
    keys: {
      Location: () => null,
      Characters: () => null,
    }
  }), fetchExchange],

});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider value={client}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
