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

  let { data, loading } = useGetCharactersQuery({
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

      {loading ? (
        <Spinner />
      ) : (
        <SimpleGrid minChildWidth="12rem" spacing={4}>
          {data?.characters?.results?.map((character) => (
            <Popover trigger="hover">
              <PopoverTrigger>
                <Flex align="center" flexDirection="column">
                  {character?.image && (
                    <img
                      src={character?.image}
                      alt={character.name || "A Rick & Morty's character"}
                    />
                  )}
                </Flex>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>
                  <strong>{character?.name}</strong>
                </PopoverHeader>
                <PopoverBody>
                  <List>
                    <ListItem>
                      {character?.species} ({character?.gender})
                    </ListItem>
                    <ListItem>{character?.episode?.length} episodes</ListItem>
                  </List>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
}

export default App;
