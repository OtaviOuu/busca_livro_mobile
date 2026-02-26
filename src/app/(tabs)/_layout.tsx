import { Stack, Tabs, useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { useAuthStore } from "../../hooks/useAuthStore";

export default function TabsLayout() {
  const user = useAuthStore((state) => state.userData);

  const router = useRouter();

  console.log(user);

  return (
    <Tabs>
      <Tabs.Screen
        name="books"
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
        name="achados"
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            if (!user) {
              e.preventDefault();
              router.push("/(auth)");
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
        name="perfil"
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            if (!user) {
              e.preventDefault();
              router.push("/(auth)");
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
  );
}
