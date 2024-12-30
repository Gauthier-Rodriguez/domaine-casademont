import { create } from 'zustand';

export const wineStore = create((set) => ({
  wine: { num: 1 }, // Initial state
  updateWine: (newNum: number) =>
    set((state: { wine: { num: number } }) => ({
      wine: { ...state.wine, num: newNum }, // Update `num` without overwriting `wine`
    })),
}));
