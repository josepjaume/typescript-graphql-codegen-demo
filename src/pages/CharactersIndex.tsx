import { useQuery } from "urql";
import { CharacterGrid } from "../components/CharacterGrid";
import { graphql } from "../gql";
import { PageLayout } from "../PageLayout";

const charactersIndexDocument = graphql(/* GraphQL */ `
  query CharactersIndex {
    characters {
      ...CharacterGrid
    }
  }
`);

export function CharactersIndexPage() {
  let [{ data, fetching, error }] = useQuery({
    query: charactersIndexDocument,
  });

  return (
    <PageLayout fetching={fetching} error={error}>
      {data?.characters && <CharacterGrid characters={data.characters} />}
    </PageLayout>
  );
}
