import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "@tanstack/react-query";
import { Book } from "@/src/types/types";
import ProductList from "./components/productList";

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

export default function Home() {
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
    <SafeAreaView>
      <Text>Titulo</Text>
      <View style={styles.listContainer}>
        <ProductList books={books ?? []} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 20,
    alignItems: "center",
  },
});
