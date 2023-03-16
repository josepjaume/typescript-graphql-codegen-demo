import { FragmentType, graphql, useFragment } from "../gql";
import { Select } from "@chakra-ui/react";

export const locationsFragment = graphql(/* GraphQL */ `
  fragment LocationSelector on Locations {
    results {
      id
      name
      dimension
    }
    info {
      count
    }
  }
`);

export const LocationSelector: React.FC<{
  locations: FragmentType<typeof locationsFragment>;
}> = (props) => {
  let locations = useFragment(locationsFragment, props.locations);

  return (
    <Select placeholder="Select a location">
      {locations.results &&
        locations.results.map((location) => (
          <option key={location?.id} value={location?.name!}>
            {location?.name}
          </option>
        ))}
    </Select>
  );
};
