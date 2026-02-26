import { Text, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthStore } from "@/src/hooks/useAuthStore";
import { useRouter } from "expo-router";

interface LoginFormData {
  email: string;
  password: string;
}

export default function Login() {
  const router = useRouter();
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    router.replace("/(auth)");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <Text>Profile</Text>
      <Button onPress={handleLogout} title="logout" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F5F3FF",
  },
});
