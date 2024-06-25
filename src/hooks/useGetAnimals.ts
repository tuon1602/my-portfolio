import { useQuery } from "@tanstack/react-query";
import { getDuck } from "@/app/actions/getAnimals";

export function useGetDuck() {
  return useQuery({
    queryFn: async () => getDuck(),
    queryKey: ["duck"],
  });
}
