import type { FC } from "react";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  slug?: string;
}

interface NewArrivalsProps {
  products: Product[];
}

const NewArrivals: FC<NewArrivalsProps> = ({ products }) => {
  const navigate = useNavigate();

  const handleProductClick = (product: Product) => {
    // Navigate to product detail page using slug or id
    navigate(`/products/${product.slug || product.id}`);
  };

  return (
    <section className="bg-accent/30 py-16">
      <div className="container">
        <h2 className="mb-8 text-center text-3xl font-bold">New Arrivals</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer rounded-lg bg-background p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              onClick={() => handleProductClick(product)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleProductClick(product);
                }
              }}
            >
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="mt-2 text-primary">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
