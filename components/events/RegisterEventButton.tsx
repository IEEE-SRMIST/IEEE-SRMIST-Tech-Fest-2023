import { FirebaseAuth, FirebaseDb } from '@/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, setDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import React, { useState } from 'react';
import { useAppStore } from '@/store/store';
import { IUser } from '@/store/slices/user';
import { FirebaseError } from 'firebase/app';
import { toast } from 'react-hot-toast';

interface RegisterEventButtonProps {
	eventId: string;
}

const RegisterEventButton: React.FC<RegisterEventButtonProps> = ({
	eventId,
}) => {
	const [loading, setLoading] = useState(false);
	const { user, setUser } = useAppStore();

	const handleLoginWithFirebase = async () => {
		const provider = new GoogleAuthProvider();
		try {
			setLoading(true);
			const response = await signInWithPopup(FirebaseAuth, provider);
			if (
				response.user.metadata.creationTime ===
				response.user.metadata.lastSignInTime
			) {
				const userRef = doc(FirebaseDb, 'users', response.user.uid);
				setDoc(userRef, {
					displayName: response.user.displayName,
					email: response.user.email,
					phoneNumber: response.user.phoneNumber,
					photoURL: response.user.photoURL,
					...(/[a-z]{2}[0-9]{4}@srmist\.edu\.in/g.test(
						response.user.email!
					) && { collegeEmail: response.user.email }),
				});
			}
			setUser(response.user as IUser);
		} catch (error) {
			if (error instanceof FirebaseError) {
				switch (error.code) {
					case 'auth/popup-closed-by-user': {
						toast.error(
							'Do not close popup before selecting email.'
						);
						break;
					}
					default: {
						toast.error('Unable to login. Try again later.');
						break;
					}
				}
			}
		} finally {
			setLoading(false);
		}
	};

	const RegisterButton = () => {
		const [registering, setRegistering] = useState(false);

		const handleRegisterForEvent = async () => {
			try {
				setRegistering(true);
				const userRef = doc(FirebaseDb, 'users', user?.uid as string);
				const eventRef = doc(FirebaseDb, 'events', eventId);
				await updateDoc(userRef, {
					attending: arrayUnion(eventId),
				});
				await updateDoc(eventRef, {
					attendees: arrayUnion(user?.email),
				});
				setUser({
					...user,
					attending: user?.attending
						? [...user?.attending, eventId]
						: [eventId],
				} as IUser);
				toast.success('Registered for event!');
			} catch (error) {
				console.log(error);
				toast.error('Unable to Register. Try again later.');
			} finally {
				setRegistering(false);
			}
		};

		return (
			<button
				onClick={handleRegisterForEvent}
				className={`${
					registering
						? 'grayscale text-gray-500 border-gray-500'
						: 'hover:bg-white hover:text-primary'
				} border w-full text-2xl px-10 py-2 rounded-full font-semibold duration-300`}
				disabled={registering}
			>
				{registering ? 'Registering...' : 'Register'}
			</button>
		);
	};

	return (
		<div className='w-full'>
			{!user ? (
				<button
					onClick={handleLoginWithFirebase}
					className={`${
						loading
							? 'grayscale text-gray-500 border-gray-500'
							: 'hover:bg-white hover:text-primary'
					} border w-full text-2xl px-10 py-2 rounded-full font-semibold duration-300`}
					disabled={loading}
				>
					{loading ? 'Logging In...' : 'Login to Register'}
				</button>
			) : user?.attending &&
			  user?.attending.findIndex((ids) => ids === eventId) > -1 ? (
				<p>
					You&apos;ve registered for this event. Visit Dashboard to
					view your events.
				</p>
			) : (
				<RegisterButton />
			)}
		</div>
	);
};

export default RegisterEventButton;
