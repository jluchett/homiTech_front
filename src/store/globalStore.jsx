import { create } from 'zustand';

const useStore = create((set) => ({
  cart: [],
  favorites: [],
  
  addToCart: (product) => set((state) => ({
    cart: [...state.cart, product],
  })),

  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter(product => product.id !== productId),
  })),

  toggleFavorite: (product) => set((state) => ({
    favorites: state.favorites.includes(product)
      ? state.favorites.filter(fav => fav.id !== product.id)
      : [...state.favorites, product],
  })),
}));

export default useStore;