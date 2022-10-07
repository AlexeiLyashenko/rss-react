interface IGetProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
}

interface IMainProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  image: string;
}

export { IGetProduct, IMainProduct };
