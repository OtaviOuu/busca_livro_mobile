import { View, Text, StyleSheet } from "react-native";
import ProductList from "./components/productList";
import { Book } from "@/src/types/types";
import { useQuery } from "@tanstack/react-query";

const fetchUniversity = async (): Promise<Book[]> => {
  const books = [
    {
      id: "1",
      title: "Livro 1",
      price: 10,
    },
    {
      id: "2",
      title: "Livro 2",
      price: 20,
    },
  ];

  return books;
};

export default function Achados() {
  const {
    data: books,
    isLoading,
    isError,
  } = useQuery<Book[]>({
    queryKey: ["books"],
    queryFn: fetchUniversity,
    retry: false,
  });

  return (
    <View style={styles.container}>
      <Text>Achados</Text>
      <ProductList books={books ?? []} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
