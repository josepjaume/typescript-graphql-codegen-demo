import {
  SimpleGrid,
  Input,
  Box,
  Flex,
  Container,
  Spinner,
  Popover,
  PopoverTrigger,
  PopoverContent,
  ListItem,
  PopoverBody,
  PopoverHeader,
  List,
  PopoverArrow,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";

import { useRef, useState } from "react";
import { useGetCharactersQuery } from "./graphql";

function App() {
  let [search, setSearch] = useState("");

  let searchRef = useRef<HTMLInputElement>(null);

  let [{data, fetching}] = useGetCharactersQuery({
    variables: {
      search,
    },
  });

  return (
    <Container maxW="container.xl" marginY="4">
      <Box marginBottom={4}>
        <form
          onSubmit={(event) => {
            setSearch(searchRef?.current?.value || "");
            event.preventDefault();
          }}
        >
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input ref={searchRef} placeholder="Search..." />
          </InputGroup>
        </form>
      </Box>

      {fetching? (
        <Spinner />
      ) : (
        <SimpleGrid minChildWidth="12rem" spacing={4}>
          {data?.characters?.results?.map((character) => (
            <Flex align="center" flexDirection="column" key={character?.id}>
              <Popover trigger="hover">
                <PopoverTrigger>
                  {character?.image && (
                    <img
                      src={character?.image}
                      alt={character.name || "A Rick & Morty's character"}
                    />
                  )}
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader>
                    <strong>{character?.name}</strong>,{" "}
                    {character?.episode.length} episodes
                  </PopoverHeader>
                  <PopoverBody>
                    <List>
                      <ListItem>
                        {character?.species} ({character?.gender})
                      </ListItem>
                      <ListItem>
                        {character?.origin?.name} (
                        {character?.origin?.dimension})
                      </ListItem>
                      {character?.type && (
                        <ListItem>{character?.type}</ListItem>
                      )}
                    </List>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
              <Box marginTop={2}>
                <strong>{character?.name}</strong>
              </Box>
            </Flex>
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
}

export default App;
