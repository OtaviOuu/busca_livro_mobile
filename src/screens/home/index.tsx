import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "@tanstack/react-query";
import { Book } from "@/src/types/types";
import ProductList from "./components/productList";

const fetchBooks = async (): Promise<Book[]> => {
  const response = await fetch(
    "https://ships-regulated-regardless-nova.trycloudflare.com/api/json/books?page%5Blimit%5D=25&fields%5Bbook%5D=id%2Ctitle%2Cprice%2Cimage_url%2Curl%2Cinserted_at%2Cupdated_at",
  );

  const data = await response.json();
  console.log(data);
  return data.data as Book[];
};

export default function Home() {
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
    flex: 0,
    alignItems: "center",
  },
});
