import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { createUserSlice, UserSlice } from './slices/user';

type StoreState = UserSlice;

export const useAppStore = create<StoreState>()(
	persist(
		(...a) => ({
			...createUserSlice(...a),
		}),
		{ name: 'UserStore' }
	)
);
