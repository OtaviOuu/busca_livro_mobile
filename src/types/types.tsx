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
