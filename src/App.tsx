import { Container, SimpleGrid, Box, Image } from "@chakra-ui/react";
import { useGetCharactersQuery } from "./graphql";

function App() {
  let { data } = useGetCharactersQuery();

  return (
    <Container maxW="container.xl" marginY="4">
      <SimpleGrid minChildWidth="10em">
        {data?.characters?.results?.map((character) => (
          <Box>
            {character?.image && <Image src={character?.image} />}
            <div>
              <strong>{character?.name}</strong>
            </div>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default App;
