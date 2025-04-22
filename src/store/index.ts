import { create } from 'zustand';
import type { User, SearchFilters, Hotel } from '../types';

interface StoreState {
  user: User | null;
  searchFilters: SearchFilters | null;
  searchResults: Hotel[];
  setUser: (user: User | null) => void;
  setSearchFilters: (filters: SearchFilters) => void;
  setSearchResults: (results: Hotel[]) => void;
}

export const useStore = create<StoreState>((set) => ({
  user: null,
  searchFilters: null,
  searchResults: [],
  setUser: (user) => set({ user }),
  setSearchFilters: (filters) => set({ searchFilters: filters }),
  setSearchResults: (results) => set({ searchResults: results }),
}));