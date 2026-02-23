import { Book } from "@/src/types/types";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";

export default function ProductCard({ book }: { book: Book }) {
  const formattedPrice = book.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      {/* Image aq*/}
      <View style={styles.imageContainer}>
        {book.imageUrl ? (
          <Image
            source={{ uri: book.imageUrl }}
            style={styles.image}
            contentFit="cover"
            transition={200}
          />
        ) : (
          <View style={styles.imageFallback}>
            <Ionicons name="book-outline" size={44} color="#A78BFA" />
          </View>
        )}
      </View>

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {book.title}
        </Text>

        <View style={styles.priceRow}>
          <Text style={styles.price}>{formattedPrice}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 172,
    backgroundColor: "#fff",
    borderRadius: 16,
    margin: 8,
    shadowColor: "#4C1D95",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
    overflow: "hidden",
  },
  cardPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.97 }],
  },

  // Image
  imageContainer: {
    width: "100%",
    height: 160,
    backgroundColor: "#EDE9FE",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageFallback: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EDE9FE",
  },
  wishlistButton: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#fff",
    borderRadius: 20,
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 2,
  },

  // Content
  content: {
    padding: 12,
    gap: 8,
  },
  title: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1E1B4B",
    lineHeight: 18,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#7C3AED",
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    backgroundColor: "#7C3AED",
    borderRadius: 10,
    paddingVertical: 8,
  },
  addButtonText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#fff",
  },
});
