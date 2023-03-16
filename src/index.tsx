import React from "react";
import ReactDOM from "react-dom";
import { CharactersIndexPage } from "./pages/CharactersIndex";
import { ChakraProvider } from "@chakra-ui/react";
import { createClient, dedupExchange, fetchExchange, Provider } from "urql";
import { devtoolsExchange } from "@urql/devtools";
import { cacheExchange } from "@urql/exchange-graphcache";

const client = createClient({
  url: "https://rickandmortyapi.com/graphql",
  exchanges: [
    devtoolsExchange,
    dedupExchange,
    cacheExchange({
      keys: {
        Location: () => null,
        Characters: () => null,
      },
    }),
    fetchExchange,
  ],
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider value={client}>
        <CharactersIndexPage />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
