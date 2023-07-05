import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FirebaseAuth, FirebaseDb } from '@/firebase';
import { GoogleAuthProvider } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [color, setColor] = useState('bg-transparent');

	const changeNavbarColor = () => {
		if (window.scrollY >= 50) {
			setColor('bg-primary bg-opacity-[80%] backdrop-blur-md shadow-xl');
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

	const handleLoginWithFirebase = async () => {};

	return (
		<nav className='fixed w-screen' style={{ zIndex: 2 }}>
			<div
				className={`${color} flex justify-between px-10 py-6 transition-all duration-300`}
			>
				<div className='cursor-pointer'>
					<div>
						<Image
							src='/assets/logo.svg'
							alt='logo'
							width={50}
							height={50}
							className='w-full h-auto object-contain'
						/>
					</div>
				</div>
				<div className='hidden lg:flex text-purple-200 space-x-8'>
					<ul className='flex items-center space-x-20'>
						<li className='cursor-pointer  duration-200 link link-underline link-underline-black decoration-purple-200 text-purple-200'>
							HOME
						</li>
						<li className='cursor-pointer  duration-200 link link-underline link-underline-black decoration-purple-200 text-purple-200'>
							EVENTS
						</li>
						<li className='cursor-pointer  duration-200 link link-underline link-underline-black decoration-purple-200 text-purple-200'>
							HACKATHON
						</li>
					</ul>
				</div>
				<button className='border px-10 py-2 rounded-full bg-[#14094fe6] font-semibold hover:bg-purple-600 duration-300 lg:block hidden'>
					LOGIN
				</button>
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
						<li className='cursor-pointer hover:underline underline-offset-8 duration-200  decoration-purple-200 text-purple-200 text-xl'>
							Home
						</li>
						<li className='cursor-pointer hover:underline underline-offset-8 duration-200  decoration-purple-200 text-purple-200 text-xl'>
							Events
						</li>
						<li className='cursor-pointer hover:underline underline-offset-8 duration-200 decoration-purple-200 text-purple-200 text-xl'>
							Hackathon
						</li>
						<button className='border px-6 py-2 rounded-full bg-[#14094fe6] font-semibold hover:bg-purple-600 duration-300 text-xl'>
							Login
						</button>
					</ul>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
