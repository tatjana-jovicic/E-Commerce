import { create } from "zustand";

export const useOrderStore = create((set) => ({
  orders: [],
  addItemToOrderCart: (newItem) =>
    set((state) => ({
      orders: [...state.orders, newItem],
    })),
}));
