import { useQuery } from "@tanstack/react-query";
import { Book } from "@/src/types/types";
import { fetchBooks } from "@/src/api/books";

export default function useBooks() {
  return useQuery<Book[]>({
    queryKey: ["books"],
    queryFn: fetchBooks,
    retry: false,
  });
}
