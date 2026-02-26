import api_client from "./client";
import { Book } from "@/src/types/types";

interface BooksResponse {
  data: Book[];
}

export const fetchAchados = async (bookId: string): Promise<Book[]> => {
  const { data } = await api_client.get<BooksResponse>(`/api/json/achados`, {
    params: {
      "fields[book]": "id,title,price,image_url,url,inserted_at,updated_at",
    },
  });
  return data.data;
};
