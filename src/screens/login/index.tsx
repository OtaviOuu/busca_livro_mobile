import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginResponse } from "@/src/types/types";

export const loginSchema = yup.object({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is required"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters")
    .required("Password is required"),
});

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    const endpoint =
      "http://ships-regulated-regardless-nova.trycloudflare.com/api/json/users/sign-in?fields%5Buser%5D=id%2Cemail";

    const payload = {
      data: {
        attributes: {
          email: data.username,
          password: data.password,
        },
      },
    };

    const response = fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/vnd.api+json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((json: loginResponse) => {
        console.log("Response from server:", json);
        const token = json.meta.token;
        console.log("Login successful, token:", token);
        AsyncStorage.setItem("authToken", token)
          .then(() => console.log("Token salvo com sucesso"))
          .catch((err) => console.error("Erro ao salvar token:", err));
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.heading}>Entrar</Text>

        <View style={styles.field}>
          <Text style={styles.label}>Usuário</Text>
          <Controller
            control={control}
            name="username"
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={[styles.input, errors.username && styles.inputError]}
                onChangeText={onChange}
                value={value}
                autoCapitalize="none"
                placeholder="seu@email.com"
                placeholderTextColor="#A78BFA"
              />
            )}
          />
          {errors.username && (
            <Text style={styles.errorText}>{errors.username.message}</Text>
          )}
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Senha</Text>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={[styles.input, errors.password && styles.inputError]}
                secureTextEntry
                onChangeText={onChange}
                value={value}
                placeholder="••••••••"
                placeholderTextColor="#A78BFA"
              />
            )}
          />
          {errors.password && (
            <Text style={styles.errorText}>{errors.password.message}</Text>
          )}
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F5F3FF",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    gap: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1E1B4B",
    marginBottom: 8,
  },
  field: {
    gap: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1E1B4B",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#DDD6FE",
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
    color: "#1E1B4B",
    shadowColor: "#4C1D95",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  inputError: {
    borderColor: "#EF4444",
  },
  errorText: {
    fontSize: 12,
    color: "#EF4444",
    marginTop: 2,
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
  buttonPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
});
