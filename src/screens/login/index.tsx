import { View, Text, TextInput, Button } from "react-native";
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
    <SafeAreaView>
      <Text>Username</Text>
      <Controller
        control={control}
        name="username"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={{ borderWidth: 1, padding: 10 }}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.username && (
        <Text style={{ color: "red" }}>{errors.username.message}</Text>
      )}

      <Text>Password</Text>
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={{ borderWidth: 1, padding: 10 }}
            secureTextEntry
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.password && (
        <Text style={{ color: "red" }}>{errors.password.message}</Text>
      )}

      <Button title="Login" onPress={handleSubmit(onSubmit)} />
    </SafeAreaView>
  );
}
