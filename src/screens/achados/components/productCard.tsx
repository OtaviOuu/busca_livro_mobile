import { Book } from "@/src/types/types";
import { View, Text } from "react-native";

export default function ProductCard({ book }: { book: Book }) {
  return (
    <View>
      <Text>{book.title}</Text>
    </View>
  );
}
