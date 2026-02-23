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

export interface loginResponse {
  meta: {
    token: string;
  };
}
