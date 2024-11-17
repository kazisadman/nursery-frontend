export type TProduct = {
  _id: string;
  category: string;
  title: string;
  price: number;
  quantity: number;
  description: string;
  rating: number;
  image: string;
  popular: boolean;
};

export type TCard = {
  data: TProduct;
};

export type TResponse = {
  statusCode: number;
  success: string;
  data: TProduct[];
  message: string;
};
