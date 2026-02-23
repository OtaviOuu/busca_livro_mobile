import { FlatList, StyleSheet, Text, View } from "react-native";
import ProductCard from "./productCard";
import { Book } from "@/src/types/types";

export default function ProductList({ books }: { books: Book[] }) {
  return (
    <FlatList
      data={books}
      renderItem={({ item }) => <ProductCard book={item} />}
      keyExtractor={(item) => item.id}
    />
  );
}
