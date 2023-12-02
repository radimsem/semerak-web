import { useQuery } from "@tanstack/react-query";

// utils
import { getIcons } from "@/utils/fetch";

export function useProcess() {
  const processQuery = useQuery({
    queryKey: ['process'],
    queryFn: async () => await getIcons('/json/process.json'),
    initialData: []
  })

  return processQuery.data;
}