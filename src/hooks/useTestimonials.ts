import { useQuery } from "@tanstack/react-query";

// utils
import { getTestimonials } from "@/utils/fetch";

export function useTestimonials() {
  const testisQuery = useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => await getTestimonials(),
    initialData: []
  })

  return testisQuery.data;
}