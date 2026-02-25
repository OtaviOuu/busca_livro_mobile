import BookDetails from "@/src/screens/bookDetails";
import { useLocalSearchParams } from "expo-router";

export default function BookDetailsScreen() {
  const { book_id } = useLocalSearchParams<{ book_id: string }>();

  return <BookDetails book_id={book_id} />;
}
