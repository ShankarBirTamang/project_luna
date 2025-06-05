import type { FC } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface NewArrivalsProps {
  products: Product[];
}

const NewArrivals: FC<NewArrivalsProps> = ({ products }) => {
  return (
    <section className="bg-accent/30 py-16">
      <div className="container">
        <h2 className="mb-8 text-center text-3xl font-bold">New Arrivals</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer rounded-lg bg-background p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
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
