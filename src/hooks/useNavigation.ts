import { useQuery } from "@tanstack/react-query";

// utils
import { getNavigation } from "@/utils/fetch";

export function useNavigation() {
  const navQuery = useQuery({
    queryKey: ['navigation'],
    queryFn: async () => await getNavigation(),
    initialData: []
  })

  return navQuery.data;
}