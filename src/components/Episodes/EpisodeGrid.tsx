import { Box, Grid, GridItem } from "@chakra-ui/react";
import { FragmentType, graphql, useFragment } from "../../gql";
import { LocationSelector, locationsFragment } from "../LocationSelector";
import { EpisodeCard } from "./EpisodeCard";

const fragment = graphql(/* GraphQL */ `
  fragment EpisodeGrid on Episodes {
    results {
      ...EpisodeCard
    }
    info {
      count
    }
  }
`);

export const EpisodeGrid: React.FC<{
  episodes: FragmentType<typeof fragment>;
  locations: FragmentType<typeof locationsFragment>;
}> = (props) => {
  let episodes = useFragment(fragment, props.episodes);

  return (
    <>
      <Box mb="4">{episodes.info?.count} episodes in total</Box>
      <LocationSelector locations={props.locations} />
      <Grid paddingTop="20px" templateColumns="repeat(5, 1fr)" gap={6}>
        {(episodes.results || []).map(
          (episode) =>
            episode && (
              <GridItem>
                <EpisodeCard episode={episode} />
              </GridItem>
            )
        )}
      </Grid>
    </>
  );
};
