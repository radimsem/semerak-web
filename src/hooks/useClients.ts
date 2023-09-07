import { useQuery } from "@tanstack/react-query";

// utils
import { getClients } from "@/utils/fetch";

export function useClients() {
  const clientsQuery = useQuery({
    queryKey: ['clients'],
    queryFn: async () => await getClients(),
    initialData: []
  })

  return clientsQuery.data;
}