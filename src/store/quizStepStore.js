import { create } from 'zustand'

export const useQuizStep = create((set) => ({
    step: 0,
    nextStep: () => set((state) => ({ step: state.step + 1 })),
    clearStep: () => set(() => ({ step: 0 })),
    setStep: (data) => set(() => ({ step: data }))
}))