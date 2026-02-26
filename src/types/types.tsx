export interface Book {
  id: string;
  attributes: {
    title: string;
    price: {
      amount: number;
      currency: string;
    };
    image_url: string;
  };
}

export interface User {
  id: string;
  attributes: {
    email: string;
  };
}

export interface loginRequest {
  attributes: {
    email: string;
    password: string;
  };
  type: string;
  relationships: {};
}

export interface loginResponse {
  attributes: {
    email: string;
  };
  id: string;

  meta: {
    token: string;
  };
}
