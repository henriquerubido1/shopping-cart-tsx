import { useQuery } from "react-query";
import ProductCard from "./components/ProductCard";

export type CartItemType = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    rate: number,
    count: number,
  };
  title: string;
}

const getProducts = async (): Promise<CartItemType[]> => 
  await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
  const { data } = useQuery<CartItemType[]>(
    'products',
     getProducts
    );
    console.log(data);

  return (
    <div className="App">
      { data?.map((item) => (
      <ProductCard
        category={ item.category }
        description={ item.description }
        id={ item.id }
        image={ item.image }
        price={ item.price }
        rating={ item.rating }
        title={ item.title }
      />
      ))}
    </div>
  );
}

export default App;
