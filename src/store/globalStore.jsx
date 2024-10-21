import { create } from 'zustand';

const useStore = create((set) => ({
  

  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter(product => product.id !== productId),
  })),

  toggleFavorite: (product) => set((state) => ({
    favorites: state.favorites.includes(product)
      ? state.favorites.filter(fav => fav.id !== product.id)
      : [...state.favorites, product],
  })),
  cartItems: [],
  favorites: [],
  addToCart: (item) => set((state) => ({ cartItems: [...state.cartItems, item] })),
  addToFavorites: (item) => set((state) => ({ favorites: [...state.favorites, item] })),
}));

export default useStore;