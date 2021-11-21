import "./App.css";

import { SimpleGrid, Input, Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useGetCharactersQuery } from "./graphql";

function App() {
  let [search, setSearch] = useState("");

  let { data } = useGetCharactersQuery({
    variables: {
      search,
    },
  });

  return (
    <div className="App">
      <Box m={4}>
        <Input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
      </Box>

      <SimpleGrid minChildWidth="10em" spacing={4} m={4}>
        {data?.characters?.results?.map((character) => (
          <Flex align="center" flexDirection="column">
            {character?.image && (
              <img
                src={character?.image}
                alt={character.name || "A Rick & Morty's character"}
              />
            )}
            {character?.name} ({character?.status})
          </Flex>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default App;
