import { onAuthStateChanged } from 'firebase/auth';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { FirebaseAuth } from '../firebase';
import { useAppStore } from '../store/store';
import { IUser } from '@/store/slices/user';
import { useRouter } from 'next/router';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [initialLoader, setInitialLoader] = useState<boolean>(true);
	const { setUser } = useAppStore();
	const router = useRouter();

	useEffect(
		() =>
			onAuthStateChanged(FirebaseAuth, (user) => {
				if (user) {
					setUser(user as IUser);
				} else {
					setUser(null);
				}
				setInitialLoader(false);
			}),
		[router, setUser]
	);

	return (
		<AuthContext.Provider value={{}}>
			{initialLoader ? (
				<main className='w-full min-h-screen flex items-center justify-center flex-col'>
					<div className='img'></div>
					<p>Loading...</p>
				</main>
			) : (
				children
			)}
		</AuthContext.Provider>
	);
};
