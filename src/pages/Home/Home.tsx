import { Button } from "@/components/ui/button";
import { Star, ChevronRight } from "lucide-react";
import FeaturedCategories from "@/components/ui/FeaturedCategories";
import NewArrivals from "@/components/ui/NewArrivals";
import SpecialOffer from "@/components/ui/SpecialOffer";

const Home = () => {
  const featuredCategories = [
    { id: 1, name: "Necklaces", image: "/images/categories/necklaces.jpg" },
    { id: 2, name: "Rings", image: "/images/categories/rings.jpg" },
    { id: 3, name: "Earrings", image: "/images/categories/earrings.jpg" },
    { id: 4, name: "Bracelets", image: "/images/categories/bracelets.jpg" },
  ];

  const newArrivals = [
    {
      id: 1,
      name: "Diamond Moon Necklace",
      price: 299.99,
      image: "/images/products/necklace1.jpg",
    },
    {
      id: 2,
      name: "Pearl Drop Earrings",
      price: 149.99,
      image: "/images/products/earrings1.jpg",
    },
    {
      id: 3,
      name: "Gold Band Ring",
      price: 199.99,
      image: "/images/products/ring1.jpg",
    },
    {
      id: 4,
      name: "Silver Chain Bracelet",
      price: 89.99,
      image: "/images/products/bracelet1.jpg",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      comment: "Beautiful pieces and excellent customer service!",
      rating: 5,
      image: "/images/testimonials/user1.jpg",
    },
    {
      id: 2,
      name: "Michael Brown",
      comment:
        "The quality exceeds my expectations. Will definitely buy again!",
      rating: 5,
      image: "/images/testimonials/user2.jpg",
    },
    {
      id: 3,
      name: "Emily Davis",
      comment: "Absolutely love my new necklace. Packaging was beautiful too!",
      rating: 5,
      image: "/images/testimonials/user3.jpg",
    },
  ];

  const handleSpecialOfferClick = () => {
    // Add navigation or other logic here
    window.location.href = "/products";
  };

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-[url('/images/hero-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-5xl font-bold">Timeless Elegance</h1>
          <p className="mb-8 text-xl">
            Discover our exclusive collection of handcrafted jewelry
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Shop Now <ChevronRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      {/* Featured Categories */}
      <FeaturedCategories categories={featuredCategories} />

      {/* New Arrivals */}
      <NewArrivals products={newArrivals} />

      {/* Special Offer */}
      <SpecialOffer
        title="Special Offer"
        description="Get 20% off on all diamond jewelry"
        backgroundImage="/images/offer-bg.jpg"
        onButtonClick={handleSpecialOfferClick}
      />

      {/* Testimonials */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="rounded-lg bg-background p-6 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <div className="flex text-yellow-400">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        )
                      )}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  {testimonial.comment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Subscribe to Our Newsletter
          </h2>
          <p className="mb-8">
            Be the first to know about new collections and exclusive offers
          </p>
          <div className="mx-auto flex max-w-md gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border bg-white px-4 py-2 text-black"
            />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
