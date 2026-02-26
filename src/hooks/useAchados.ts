import { useQuery } from "@tanstack/react-query";
import { Book } from "@/src/types/types";
import { fetchAchados } from "@/src/api/achados";

export default function useAchados() {
  return useQuery<Book[]>({
    queryKey: ["books"],
    queryFn: () => fetchAchados("achados"),
    retry: false,
  });
}
