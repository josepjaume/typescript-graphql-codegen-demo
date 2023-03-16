import { Box, Grid, GridItem } from "@chakra-ui/react";
import { FragmentType, graphql, useFragment } from "../gql";
import { CharacterCard } from "./CharacterCard";

const fragment = graphql(/* GraphQL */ `
  fragment CharacterGrid on Characters {
    results {
      ...CharacterCard
    }
    info {
      count
    }
  }
`);

export const CharacterGrid: React.FC<{
  characters: FragmentType<typeof fragment>;
}> = (props) => {
  let characters = useFragment(fragment, props.characters);

  return (
    <>
      <Box mb="4">{characters.info?.count} characters in total</Box>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {(characters.results || []).map(
          (character) =>
            character && (
              <GridItem>
                <CharacterCard character={character} />
              </GridItem>
            )
        )}
      </Grid>
    </>
  );
};
