import { View, Text, StyleSheet } from "react-native";
import ProductList from "./components/productList";
import { Book } from "@/src/types/types";
import { useQuery } from "@tanstack/react-query";

const fetchBooks = async (): Promise<Book[]> => {
  const response = await fetch(
    "https://ships-regulated-regardless-nova.trycloudflare.com/api/json/books?page%5Blimit%5D=25&fields%5Bbook%5D=id%2Ctitle%2Cprice%2Cimage_url%2Curl%2Cinserted_at%2Cupdated_at",
  );

  const data = await response.json();
  console.log(data);
  return data.data as Book[];
};

export default function Achados() {
  const {
    data: books,
    isPending,
    error,
  } = useQuery<Book[]>({
    queryKey: ["books"],
    queryFn: fetchBooks,
    retry: false,
  });

  if (isPending) return <Text>Loading...</Text>;
  if (error) return <Text>Oops!</Text>;

  return (
    <View style={styles.container}>
      <Text>Achados</Text>
      <View style={styles.listContainer}>
        <ProductList books={books ?? []} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    padding: 20,
    alignItems: "center",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
