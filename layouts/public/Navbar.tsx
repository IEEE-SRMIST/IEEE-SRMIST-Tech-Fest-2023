import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FirebaseAuth, FirebaseDb } from '@/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { FirebaseError } from 'firebase/app';
import { toast } from 'react-hot-toast';
import { useAppStore } from '@/store/store';
import { IUser } from '@/store/slices/user';
import Link from 'next/link';

const links = [
	{ name: 'HOME', href: '/' },
	{ name: 'EVENTS', href: '/events' },
	{ name: 'HACKATHON', href: '/hackathon' },
];

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [color, setColor] = useState('bg-transparent');
	const [loading, setLoading] = useState(false);

	const { user, setUser } = useAppStore();

	const changeNavbarColor = () => {
		if (window.scrollY >= 30) {
			setColor('bg-primary bg-opacity-[70%] backdrop-blur-md shadow-xl');
		} else {
			setColor('bg-transparent');
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', changeNavbarColor);
		return () => window.removeEventListener('scroll', changeNavbarColor);
	}, []);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

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

	return (
		<nav className='fixed w-screen' style={{ zIndex: 100 }}>
			<div
				className={`${color} flex justify-between px-10 py-4 transition-all duration-300`}
			>
				<div className='cursor-pointer'>
					<div>
						<Image
							src='/assets/layouts/logo.svg'
							alt='logo'
							width={50}
							height={50}
							className='w-full h-auto object-contain'
						/>
					</div>
				</div>
				<div className='hidden lg:flex text-purple-200 space-x-8'>
					<ul className='flex items-center font-semibold space-x-20'>
						{links.map((link, index) => (
							<Link
								key={index}
								href={link.href}
								className='cursor-pointer  duration-200 link link-underline link-underline-black decoration-purple-200 text-purple-200'
							>
								{link.name}
							</Link>
						))}
					</ul>
				</div>
				{!user ? (
					<button
						onClick={handleLoginWithFirebase}
						disabled={loading}
						className='border px-10 py-2 rounded-full bg-[#14094fe6] font-semibold hover:bg-purple-600 duration-300 lg:block hidden'
					>
						{loading ? 'Loading...' : 'REGISTER'}
					</button>
				) : (
					<Link
						href={'/dashboard'}
						className='border px-10 py-2 rounded-full font-semibold hover:bg-white hover:text-primary duration-300 lg:block hidden'
					>
						Dashboard
					</Link>
				)}
				<div className='lg:hidden flex'>
					<button onClick={toggleMenu} className='focus:outline-none'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6 text-[#FFFFFF]'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M4 6h16M4 12h16M4 18h16'
							/>
						</svg>
					</button>
				</div>
			</div>
			{isOpen && (
				<div className='bg-[#14094fe6]  w-screen py-8 lg:hidden text-[#FFFFFF]'>
					<ul className='flex flex-col items-center space-y-4 '>
						{links.map((link, index) => (
							<Link
								key={index}
								href={link.href}
								onClick={() => {
									setIsOpen(false);
								}}
								className='cursor-pointer  duration-200 link link-underline link-underline-black decoration-purple-200 text-purple-200'
							>
								{link.name}
							</Link>
						))}
						{!user ? (
							<button
								onClick={handleLoginWithFirebase}
								disabled={loading}
								className='border px-6 py-2 rounded-full bg-[#14094fe6] font-semibold hover:bg-purple-600 duration-300 text-xl'
							>
								{loading ? 'Loading...' : 'REGISTER'}
							</button>
						) : (
							<Link
								href={'/dashboard'}
								className='border px-6 py-2 rounded-full bg-[#14094fe6] font-semibold hover:bg-purple-600 duration-300 text-xl'
							>
								Dashboard
							</Link>
						)}
					</ul>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
