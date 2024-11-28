import { StateCreator } from 'zustand';

export interface GameSlice {
  hearts: number;
  loseHeart: () => void;
}

export const createGameSlice: StateCreator<GameSlice> = (set) => ({
  hearts: 5,
  loseHeart: () =>
    set((state) => ({
      hearts: Math.max(0, state.hearts - 1)
    }))
});