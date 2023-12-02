import { useQuery } from "@tanstack/react-query";

// utils
import { getIcons } from "@/utils/fetch";

export function useBenefits() {
  const benefsQuery = useQuery({
    queryKey: ['benefits'],
    queryFn: async () => await getIcons('/json/benefits.json'),
    initialData: []
  })

  return benefsQuery.data;
}