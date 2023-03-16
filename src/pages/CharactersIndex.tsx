import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { useQuery } from "urql";
import { CharacterGrid } from "../components/Characters/CharacterGrid";
import { EpisodeGrid } from "../components/Episodes/EpisodeGrid";
import { graphql } from "../gql";
import { PageLayout } from "../PageLayout";

const pageIndexDocument = graphql(/* GraphQL */ `
  query CharactersIndex {
    characters {
      ...CharacterGrid
    }
    episodes {
      ...EpisodeGrid
    }
    locations {
      ...LocationSelector
    }
  }
`);

export function CharactersIndexPage() {
  let [{ data, fetching, error }] = useQuery({
    query: pageIndexDocument,
  });

  return (
    <PageLayout fetching={fetching} error={error}>
      <Tabs>
        <TabList>
          <Tab>Characters</Tab>
          <Tab>Episodes</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {data?.characters && data?.locations && (
              <CharacterGrid
                characters={data.characters}
                locations={data.locations}
              />
            )}
          </TabPanel>
          <TabPanel>
            {data?.episodes && data.locations && (
              <EpisodeGrid
                episodes={data.episodes}
                locations={data.locations}
              />
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </PageLayout>
  );
}
