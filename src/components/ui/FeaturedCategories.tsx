import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./button";

interface Category {
  id: number;
  name: string;
  image: string;
  slug?: string;
}

interface FeaturedCategoriesProps {
  categories: Category[];
}

const FeaturedCategories: FC<FeaturedCategoriesProps> = ({ categories }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: Category) => {
    navigate(
      `/products/category/${category.slug || category.name.toLowerCase()}`
    );
  };

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
              onClick={() => handleCategoryClick(category)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleCategoryClick(category);
                }
              }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 transition-all group-hover:bg-black/60">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {category.name}
                </h3>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white text-white hover:bg-white hover:text-black opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                >
                  View All
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
