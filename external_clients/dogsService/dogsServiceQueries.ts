import { useQuery, useQueryClient } from "@tanstack/react-query";
import { dogsService } from "@/external_clients/dogsService/dogsService";

const RANDOM_DOG_QUERY_KEY = "dog";

export const useRandomDog = () => {
  return useQuery({
    queryKey: [RANDOM_DOG_QUERY_KEY],
    queryFn: () => dogsService.getRandomDog(),
  });
};

export const useInvalidateRandomDog = () => {
  const queryClient = useQueryClient();
  return () => {
    return queryClient.invalidateQueries({ queryKey: [RANDOM_DOG_QUERY_KEY] });
  };
};
