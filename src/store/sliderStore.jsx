// store/sliderStore.js
import { create } from 'zustand';

const useSliderStore = create((set) => ({
  currentSlide: 0,
  isAutoplaying: true,
  setCurrentSlide: (index) => set({ currentSlide: index }),
  setAutoplaying: (value) => set({ isAutoplaying: value }),
}));

export default useSliderStore;
