import { Stack } from "expo-router";

export default function BookDetailLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[id]" options={{ headerTitle: "Detalhes" }} />
    </Stack>
  );
}
