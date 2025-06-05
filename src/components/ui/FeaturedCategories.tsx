import type { FC } from "react";

interface Category {
  id: number;
  name: string;
  image: string;
}

interface FeaturedCategoriesProps {
  categories: Category[];
}

const FeaturedCategories: FC<FeaturedCategoriesProps> = ({ categories }) => {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative cursor-pointer overflow-hidden rounded-lg"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <h3 className="text-2xl font-semibold text-white">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
