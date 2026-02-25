import { Text } from "react-native";

interface BookDetailsProps {
  book_id: string;
}

export default function BookDetails({ book_id }: BookDetailsProps) {
  return <Text>Detalhes do livro: {book_id}</Text>;
}
