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
  description?: string;
  discounted?: boolean;
  originalPrice?: number;
}

const ProductsList = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Diamond Moon Necklace",
      price: 299.99,
      originalPrice: 399.99,
      image: "/images/products/necklace1.jpg",
      rating: 5,
      category: "necklaces",
      description: "Elegant crescent moon pendant with diamond accents",
      discounted: true,
    },
    {
      id: 2,
      name: "Pearl Drop Earrings",
      price: 149.99,
      image: "/images/products/earrings1.jpg",
      rating: 4,
      category: "earrings",
      description: "Classic freshwater pearl drop earrings",
    },
    {
      id: 3,
      name: "Gold Band Ring",
      price: 199.99,
      image: "/images/products/ring1.jpg",
      rating: 5,
      category: "rings",
      description: "14k solid gold minimalist band",
    },
    {
      id: 4,
      name: "Silver Chain Bracelet",
      price: 89.99,
      image: "/images/products/bracelet1.jpg",
      rating: 4,
      category: "bracelets",
      description: "Sterling silver linked chain bracelet",
    },
    {
      id: 5,
      name: "Sapphire Stud Earrings",
      price: 249.99,
      image: "/images/products/earrings2.jpg",
      rating: 5,
      category: "earrings",
      description: "Blue sapphire studs in white gold setting",
    },
    {
      id: 6,
      name: "Rose Gold Anklet",
      price: 79.99,
      originalPrice: 99.99,
      image: "/images/products/anklet1.jpg",
      rating: 4,
      category: "anklets",
      description: "Delicate rose gold anklet with charm",
      discounted: true,
    },
    {
      id: 7,
      name: "Emerald Pendant Necklace",
      price: 399.99,
      image: "/images/products/necklace2.jpg",
      rating: 5,
      category: "necklaces",
      description: "Vintage-inspired emerald and diamond pendant",
    },
    {
      id: 8,
      name: "Diamond Tennis Bracelet",
      price: 599.99,
      image: "/images/products/bracelet2.jpg",
      rating: 5,
      category: "bracelets",
      description: "Classic diamond tennis bracelet in white gold",
    },
    {
      id: 9,
      name: "Pearl Cocktail Ring",
      price: 179.99,
      image: "/images/products/ring2.jpg",
      rating: 4,
      category: "rings",
      description: "Statement pearl ring with crystal accents",
    },
    {
      id: 10,
      name: "Ruby Drop Necklace",
      price: 299.99,
      originalPrice: 349.99,
      image: "/images/products/necklace3.jpg",
      rating: 5,
      category: "necklaces",
      description: "Elegant ruby pendant with diamond halo",
      discounted: true,
    },
    {
      id: 11,
      name: "Infinity Band Ring",
      price: 149.99,
      image: "/images/products/ring3.jpg",
      rating: 4,
      category: "rings",
      description: "Sterling silver infinity design band",
    },
    {
      id: 12,
      name: "Crystal Hoop Earrings",
      price: 129.99,
      image: "/images/products/earrings3.jpg",
      rating: 4,
      category: "earrings",
      description: "Medium-sized hoops with crystal accents",
    },
  ]);
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Our Collection</h1>
            <p className="mt-2 text-muted-foreground">
              Discover our handcrafted jewelry pieces
            </p>
          </div>

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
        </div>{" "}
        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                <p className="mt-1 text-sm text-muted-foreground">
                  {product.description}
                </p>
                <div className="mt-1 flex items-center gap-1">
                  {Array.from({ length: product.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-lg font-semibold text-primary">
                    ${product.price}
                  </span>
                  {product.discounted && product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
