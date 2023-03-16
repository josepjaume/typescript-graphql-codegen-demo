import React from "react";
import { CombinedError } from "urql";
import { Container } from "@chakra-ui/react";

export const PageLayout: React.FC<{
  children: React.ReactNode;
  fetching: Boolean;
  error?: CombinedError;
}> = ({ children, fetching, error }) => {
  return (
    <Container maxWidth="container.xl" py="4">
      {fetching && <>Fetching...</>}
      {error && <>Error!</>}

      {children}
    </Container>
  );
};
