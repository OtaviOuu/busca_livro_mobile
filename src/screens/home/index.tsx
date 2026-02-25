import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductList from "./components/productList";
import useBooks from "@/src/hooks/useBooks";

export default function Home() {
  const { data: books, isPending, error, refetch, isFetching } = useBooks();

  if (isPending) return <Text>Loading...</Text>;
  if (error) return <Text>Oops!</Text>;

  return (
    <SafeAreaView>
      <Text>Titulo</Text>
      <View style={styles.listContainer}>
        <ProductList
          books={books ?? []}
          isRefreshing={isFetching}
          onRefresh={refetch}
        />
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
