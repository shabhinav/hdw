import { useQuery } from "@apollo/client";
import { GET_ALL_DATA, GET_TEAM_SEARCH } from "./Search/query";

export const useSearchData = (timing, type) => {
  console.log(timing, type);
  const { loading, error, data, refetch } = useQuery(GET_ALL_DATA, {
    variables: { type: type, status: timing.toLowerCase(), page: 1 },
  });

  return { loading, error, data, refetch };
};

export const useTeamSearch = () => {
  const { loading, error, data } = useQuery(GET_TEAM_SEARCH, {
    variables: { name: "India" },
  });
  return { loading, error, data };
};
