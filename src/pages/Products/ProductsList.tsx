import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, Search, SlidersHorizontal } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  category: string;
}

const ProductsList = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Diamond Moon Necklace",
      price: 299.99,
      image: "/images/products/necklace1.jpg",
      rating: 5,
      category: "necklaces",
    },
    {
      id: 2,
      name: "Pearl Drop Earrings",
      price: 149.99,
      image: "/images/products/earrings1.jpg",
      rating: 4,
      category: "earrings",
    },
    // Add more products as needed
  ]);

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold">Our Collection</h1>

          {/* Search and Filter */}
          <div className="flex gap-4">
            <div className="relative flex-1 sm:max-w-[300px]">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full rounded-lg border bg-background px-9 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button variant="outline" size="icon">
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer rounded-lg bg-background p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
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
                <div className="mt-1 flex items-center gap-1">
                  {Array.from({ length: product.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mt-2 text-primary font-semibold">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
