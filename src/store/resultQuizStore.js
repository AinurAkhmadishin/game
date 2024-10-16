import { create } from 'zustand'

export const useResultQuiz = create((set) => ({
    result: [],
    addResult: (data) => set((state) => ({ result: [...state.result, data] })),
    clearResult: () => set(() => ({ result: [] })),
    addAllResult: (data) => set(() => ({ result: data })),
}))