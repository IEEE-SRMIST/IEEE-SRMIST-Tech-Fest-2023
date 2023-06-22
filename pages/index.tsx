import { useMemo } from 'react';
import Countdown, { CountdownRenderProps } from 'react-countdown';
// import Image from 'next/image';
// import logo from '../public/assets/ieee_logo.png';
import { dateWithTimeZone } from '@/utils/date';
import Head from 'next/head';

export default function Home() {
	const date = useMemo(() => {
		return dateWithTimeZone('Asia/Kolkata', 2023, 6, 24, 23, 59, 59);
	}, []);
	// Renderer callback with condition
	const renderer = ({
		days,
		hours,
		minutes,
		completed,
	}: CountdownRenderProps) => {
		if (completed) return <span>Time&apos;s up!</span>;
		else
			return (
				<span>
					{days}D:{hours}H:{minutes}M
				</span>
			);
	};

	return (
		<>
			<Head>
				<title>TechnoZest | IEEE SRM SB</title>
			</Head>
			<main className='relative flex flex-col justify-start items-center w-full min-h-screen'>
				<video
					id='videoBg'
					className='-z-10 absolute top-0'
					autoPlay
					loop
					muted
				>
					<source src='/assets/video.webm' />
				</video>
				<div className='img mt-60'></div>
				<p className='text-lg mt-4'>PRESENTS</p>
				<h1 className='md:text-7xl sm:text-5xl text-3xl font-extrabold font-syne mt-20'>
					TechnoZest
				</h1>
				<h3 className='md:text-2xl sm:text-xl text-lg text-center px-10'>
					Encounter your canon event across the TechnoVerse
				</h3>
				<p className='text-3xl font-extrabold mt-10 flex gap-8 items-center'>
					<span className='animate-pulse'>COMING SOON</span>
					<Countdown date={date} renderer={renderer} />
				</p>
			</main>
		</>
	);
}
