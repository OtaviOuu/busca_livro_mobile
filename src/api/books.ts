import { Book } from "@/src/types/types";
import api_client from "./client";

interface BooksResponse {
  data: Book[];
}

export const fetchBooks = async (): Promise<Book[]> => {
  const response = await api_client.get<BooksResponse>("/api/json/books", {
    params: {
      "page[limit]": 25,
      "fields[book]": "id,title,price,image_url,url,inserted_at,updated_at",
    },
  });
  console.log("Fetched books:", response.data.data);
  return response.data.data;
};
