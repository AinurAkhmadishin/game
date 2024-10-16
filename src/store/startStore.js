import { create } from 'zustand'

export const useStartStore = create((set) => ({
    isStart: false,
    setStartGame: () => set((state) => ({ isStart: !state.isStart })),
}))