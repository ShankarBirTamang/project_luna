import type { FC } from "react";
import { Button } from "./button";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart: FC = () => {
  // Example cart items - in a real app, this would come from your cart state
  const cartItems: CartItem[] = [
    {
      id: 1,
      name: "Diamond Ring",
      price: 999.99,
      quantity: 1,
      image: "/images/products/ring1.jpg",
    },
    {
      id: 2,
      name: "Gold Necklace",
      price: 599.99,
      quantity: 1,
      image: "/images/products/necklace1.jpg",
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 9.99;
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            {cartItems.length > 0 ? (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 bg-card p-4 rounded-lg"
                  >
                    <div className="w-20 h-20 bg-muted rounded-md overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-muted-foreground">
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center space-x-2 mt-2">
                        <button className="w-8 h-8 rounded-full border flex items-center justify-center">
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button className="w-8 h-8 rounded-full border flex items-center justify-center">
                          +
                        </button>
                      </div>
                    </div>
                    <button className="text-destructive hover:text-destructive/80">
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">Your cart is empty</p>
              </div>
            )}
          </div>

          <div className="bg-card p-6 rounded-lg h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <Button className="w-full mt-4">Proceed to Checkout</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
