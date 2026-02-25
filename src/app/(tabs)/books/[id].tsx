import BookDetails from "@/src/screens/bookDetails";
import { useLocalSearchParams } from "expo-router";

export default function BookDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return <BookDetails book_id={id} />;
}
