import api_client from "./client";
import { loginRequest, loginResponse } from "../types/types";

interface loginData {
  email: string;
  password: string;
}
export const fetchUser: (
  userData: loginData,
) => Promise<loginResponse> = async (userData: loginData) => {
  const payload: loginRequest = {
    type: "user",
    attributes: {
      email: userData.email,
      password: userData.password,
    },
    relationships: {},
  };

  const { data } = await api_client.post(
    "/api/json/users/sign-in",
    {
      data: {
        ...payload,
      },
    },
    {
      params: {
        "fields[user]": "id,email",
      },
    },
  );

  return data.data;
};
