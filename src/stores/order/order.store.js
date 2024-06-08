import { create } from "zustand";

export const useOrderStore = create((set) => ({
  orders: [],
  addItemToCart: (newItem) =>
    set((state) => {
      const existingItem = state.orders.find((item) => item.id === newItem.id);

      if (existingItem) {
        return {
          orders: state.orders.map((item) =>
            item.id === newItem.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  totalPrice: newItem.price,
                }
              : item
          ),
        };
      } else {
        return {
          orders: [
            ...state.orders,
            { ...newItem, quantity: 1, totalPrice: newItem.price },
          ],
        };
      }
    }),
  removeItemFromCart: (itemId) =>
    set((state) => ({
      orders: state.orders.filter((item) => item.id !== itemId),
    })),
  incrementNumberOfItems: (itemId) =>
    set((state) => ({
      orders: state.orders.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.price * (item.quantity + 1),
            }
          : item
      ),
    })),
  decrementNumberOfItems: (itemId) =>
    set((state) => ({
      orders: state.orders.map((item) =>
        item.id === itemId && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      ),
    })),
}));
