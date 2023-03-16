import { FragmentType, graphql, useFragment } from "../../gql";
import { Card, CardBody, Image } from "@chakra-ui/react";

const fragment = graphql(/* GraphQL */ `
  fragment CharacterCard on Character {
    name
    image
  }
`);

export const CharacterCard: React.FC<{
  character: FragmentType<typeof fragment>;
}> = ({ character }) => {
  let { image, name } = useFragment(fragment, character);

  return (
    <Card>
      <CardBody>
        {name}
        {image && <Image src={image} />}
      </CardBody>
    </Card>
  );
};
