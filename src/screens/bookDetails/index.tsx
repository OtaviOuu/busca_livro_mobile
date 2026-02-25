import useBook from "@/src/hooks/useBook";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

interface BookDetailsProps {
  book_id: string;
}

export default function BookDetails({ book_id }: BookDetailsProps) {
  const { data: book, isLoading, error } = useBook(book_id);
  const router = useRouter();

  if (isLoading) {
    return <Text>loading</Text>;
  }

  if (error || !book) {
    return <Text>loading</Text>;
  }

  const { title, price, image_url } = book.attributes;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.imageContainer}>
        <Image
          source={image_url}
          style={styles.image}
          contentFit="cover"
          transition={200}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.priceRow}>
          <Text style={styles.currency}>{price.currency}</Text>
          <Text style={styles.price}>{price.amount}</Text>
        </View>

        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonText}>abrir talvez</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  feedbackText: {
    fontSize: 15,
    color: "#1E1B4B",
  },
  scrollContent: {
    paddingBottom: 32,
  },
  imageContainer: {
    width: "100%",
    height: "65%",
    backgroundColor: "#EDE9FE",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  content: {
    padding: 24,
    gap: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1E1B4B",
    lineHeight: 30,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 4,
  },
  currency: {
    fontSize: 14,
    fontWeight: "600",
    color: "#7C3AED",
  },
  price: {
    fontSize: 28,
    fontWeight: "700",
    color: "#7C3AED",
  },
  button: {
    backgroundColor: "#7C3AED",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    shadowColor: "#4C1D95",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
    marginTop: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
});
