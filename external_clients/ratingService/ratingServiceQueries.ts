import { useQuery } from "@tanstack/react-query";
import { ratingService } from "@/external_clients/ratingService/ratingService";

const TOP_10_RATED_DOGS_KEY = "top10RatedDogs";

export const useTop10RatedDogs = () =>
  useQuery({
    queryKey: [TOP_10_RATED_DOGS_KEY],
    queryFn: () => ratingService.getTopRatedDogs(10),
  });
