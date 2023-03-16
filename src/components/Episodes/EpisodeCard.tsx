import { FragmentType, graphql, useFragment } from "../../gql";
import { Card, CardBody } from "@chakra-ui/react";

const fragment = graphql(/* GraphQL */ `
  fragment EpisodeCard on Episode {
    id
    name
  }
`);

export const EpisodeCard: React.FC<{
  episode: FragmentType<typeof fragment>;
}> = ({ episode }) => {
  let { name } = useFragment(fragment, episode);

  return (
    <Card>
      <CardBody>{name}</CardBody>
    </Card>
  );
};
