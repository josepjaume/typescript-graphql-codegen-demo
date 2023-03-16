/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment CharacterCard on Character {\n    name\n    image\n  }\n": types.CharacterCardFragmentDoc,
    "\n  fragment CharacterGrid on Characters {\n    results {\n      ...CharacterCard\n    }\n    info {\n      count\n    }\n  }\n": types.CharacterGridFragmentDoc,
    "\n  fragment EpisodeCard on Episode {\n    id\n    name\n  }\n": types.EpisodeCardFragmentDoc,
    "\n  fragment EpisodeGrid on Episodes {\n    results {\n      ...EpisodeCard\n    }\n    info {\n      count\n    }\n  }\n": types.EpisodeGridFragmentDoc,
    "\n  fragment LocationSelector on Locations {\n    results {\n      id\n      name\n      dimension\n    }\n    info {\n      count\n    }\n  }\n": types.LocationSelectorFragmentDoc,
    "\n  query CharactersIndex {\n    characters {\n      ...CharacterGrid\n    }\n    episodes {\n      ...EpisodeGrid\n    }\n    locations {\n      ...LocationSelector\n    }\n  }\n": types.CharactersIndexDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CharacterCard on Character {\n    name\n    image\n  }\n"): (typeof documents)["\n  fragment CharacterCard on Character {\n    name\n    image\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CharacterGrid on Characters {\n    results {\n      ...CharacterCard\n    }\n    info {\n      count\n    }\n  }\n"): (typeof documents)["\n  fragment CharacterGrid on Characters {\n    results {\n      ...CharacterCard\n    }\n    info {\n      count\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment EpisodeCard on Episode {\n    id\n    name\n  }\n"): (typeof documents)["\n  fragment EpisodeCard on Episode {\n    id\n    name\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment EpisodeGrid on Episodes {\n    results {\n      ...EpisodeCard\n    }\n    info {\n      count\n    }\n  }\n"): (typeof documents)["\n  fragment EpisodeGrid on Episodes {\n    results {\n      ...EpisodeCard\n    }\n    info {\n      count\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment LocationSelector on Locations {\n    results {\n      id\n      name\n      dimension\n    }\n    info {\n      count\n    }\n  }\n"): (typeof documents)["\n  fragment LocationSelector on Locations {\n    results {\n      id\n      name\n      dimension\n    }\n    info {\n      count\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CharactersIndex {\n    characters {\n      ...CharacterGrid\n    }\n    episodes {\n      ...EpisodeGrid\n    }\n    locations {\n      ...LocationSelector\n    }\n  }\n"): (typeof documents)["\n  query CharactersIndex {\n    characters {\n      ...CharacterGrid\n    }\n    episodes {\n      ...EpisodeGrid\n    }\n    locations {\n      ...LocationSelector\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;