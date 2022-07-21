import { useQuery } from "urql";

import { GET_COLLECTIONS_LIST } from "./query";

export const useGetCollections = (subString: string) => {
  const [result] = useQuery({
    query: GET_COLLECTIONS_LIST,
    variables: { subString },
  });

  const { data, fetching, error } = result;

  return {
    collections: !fetching && data.collections,
    collectionsLoading: fetching,
    collectionsError: error,
  };
};
