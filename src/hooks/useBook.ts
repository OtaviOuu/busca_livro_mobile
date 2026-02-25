import { useQuery } from "@tanstack/react-query";
import { Book } from "@/src/types/types";
import { fetchBook } from "@/src/api/book";

export default function useBook(id: string) {
  return useQuery<Book>({
    queryKey: ["book", id],
    queryFn: () => fetchBook(id),
    retry: false,
  });
}
