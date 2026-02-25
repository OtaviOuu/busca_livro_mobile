import api_client from "./client";
import { Book } from "@/src/types/types";

interface BookResponse {
  data: Book;
}

export const fetchBook = async (bookId: string): Promise<Book> => {
  const { data } = await api_client.get<BookResponse>(
    `/api/json/books/${bookId}`,
    {
      params: {
        "fields[book]": "id,title,price,image_url,url,inserted_at,updated_at",
      },
    },
  );
  return data.data;
};
