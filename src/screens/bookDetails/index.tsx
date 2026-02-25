import useBook from "@/src/hooks/useBook";
import { Text } from "react-native";

interface BookDetailsProps {
  book_id: string;
}

export default function BookDetails({ book_id }: BookDetailsProps) {
  const { data: book, isLoading, error } = useBook(book_id);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error || !book) {
    return <Text>Error loading book details.</Text>;
  }

  return <Text>{book.attributes.title}</Text>;
}
