import { Stack, Tabs, useRouter } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Feather } from "@expo/vector-icons";
import { useAuthStore } from "../hooks/useAuthStore";

const queryClient = new QueryClient();

export default function RootLayout() {
  const user = useAuthStore((state) => state.userData);
  console.log(user);

  const router = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <Tabs>
          <Tabs.Screen
            name="(tabs)/books"
            options={{
              tabBarIcon: ({ color, size }) => (
                <Feather name="book" size={24} color="black" />
              ),

              headerShown: false,
              headerTitle: "Home",
              tabBarLabel: "Home",
            }}
          />
          <Tabs.Screen
            name="(tabs)/achados"
            listeners={({ navigation }) => ({
              tabPress: (e) => {
                if (!user) {
                  e.preventDefault();
                  router.push("/(tabs)/perfil");
                }
              },
            })}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Feather name="bookmark" size={24} color="black" />
              ),
              headerShown: false,
              headerTitle: "Achados",
              tabBarLabel: "Achados",
            }}
          />
          <Tabs.Screen
            name="(tabs)/perfil"
            listeners={({ navigation }) => ({
              tabPress: (e) => {
                if (!user) {
                  e.preventDefault();
                  router.push("/(tabs)/perfil");
                }
              },
            })}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Feather name="user" size={24} color="black" />
              ),
              headerShown: false,
              headerTitle: "Perfil",
              tabBarLabel: "Perfil",
            }}
          />
        </Tabs>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
