import { StateCreator } from 'zustand';
import { User } from 'firebase/auth';

export interface IUser extends User {
	registerNo: string;
	year: string;
	dept: string;
	collegeEmail: string;
	attending: string[];
}

export interface UserSlice {
	user: IUser | null;
	setUser: (user: IUser | null) => void;
}

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
	user: null,
	setUser: (user) => set({ user }),
});
