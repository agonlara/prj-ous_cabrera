import { create } from 'zustand'

interface AppState {
  appName: string
}

const useAppStore = create<AppState>(() => ({
  appName: 'Ous Cabrera',
}))

export default useAppStore
