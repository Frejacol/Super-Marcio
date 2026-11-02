import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product) => {
        const id = Number(product.id);
        const currentCart = get().cart;
        const productExists = currentCart.find((item) => item.id === id);

        set({
          cart: productExists
            ? currentCart.map((item) =>
                item.id === id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              )
            : [...currentCart, { ...product, id, quantity: 1 }],
        });
      },

      removeFromCart: (productId) => {
        const id = Number(productId);
        const currentCart = get().cart;

        set({
          cart: currentCart
            .map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
            )
            .filter((item) => item.quantity > 0),
        });
      },

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage",
      version: 1,
      migrate: () => ({ cart: [] }),
    },
  ),
);

export default useStore;
