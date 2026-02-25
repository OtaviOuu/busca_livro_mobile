import { View, Text, StyleSheet } from "react-native";
import ProductList from "./components/productList";
import { Book } from "@/src/types/types";
import { useQuery } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";

const fetchAchadosBooks = async (): Promise<Book[]> => {
  const bearer = await AsyncStorage.getItem("authToken");

  const headers = {
    "Content-Type": "application/vnd.api+json",
    Authorization: `Bearer ${bearer}`,
  };

  const response = await fetch(
    "https://initiatives-episode-deaths-driven.trycloudflare.com/api/json/achados?page%5Blimit%5D=25&include=book&fields%5Bbook_user%5D=id%2Cbook_id",
    {
      method: "GET",
      headers,
    },
  );

  const data = await response.json();
  return data.included as Book[];
};

export default function Achados() {
  const {
    data: books,
    isPending,
    error,
  } = useQuery<Book[]>({
    queryKey: ["achados_books"],
    queryFn: fetchAchadosBooks,
    retry: false,
    refetchInterval: 2000,
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
