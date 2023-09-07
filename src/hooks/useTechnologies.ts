import { useQuery } from "@tanstack/react-query";

// utils
import { getTechnologies } from "@/utils/fetch";

export function useTechnologies() {
  const techsQuery = useQuery({
    queryKey: ['technologies'],
    queryFn: async () => await getTechnologies(),
    initialData: []
  })

  return techsQuery.data;
}