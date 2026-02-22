import { Stack, Tabs } from "expo-router";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <Tabs>
          <Tabs.Screen
            name="index"
            options={{
              headerShown: false,
              headerTitle: "Home",
              tabBarLabel: "Home",
            }}
          />
          <Tabs.Screen
            name="achados"
            options={{
              headerShown: false,
              headerTitle: "Achados",
              tabBarLabel: "Achados",
            }}
          />
        </Tabs>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
