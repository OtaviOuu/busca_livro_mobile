import { FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";
import ProductCard from "../components/bookCard";
import { Book } from "@/src/types/types";

interface ProductListProps {
  books: Book[];
  isRefreshing: boolean;
  onRefresh: () => void;
}

export default function ProductList({
  books,
  isRefreshing,
  onRefresh,
}: ProductListProps) {
  return (
    <FlatList
      data={books}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={styles.row}
      renderItem={({ item }) => <ProductCard book={item} />}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
      }
      keyExtractor={(item) => item.id}
    />
  );
}
const styles = StyleSheet.create({
  row: {
    justifyContent: "space-around",
    padding: 16,
  },
});
