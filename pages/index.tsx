import { useMemo } from 'react';
import Countdown, { CountdownRenderProps } from 'react-countdown';
// import Image from 'next/image';
// import logo from '../public/assets/ieee_logo.png';
import { dateWithTimeZone } from '@/utils/date';
import Head from 'next/head';
import Timeline from '@/components/landing/Timeline';
import FAQs from '@/components/landing/FAQs';
import Hero from '@/components/landing/Hero';
import Sponsors from '@/components/landing/Sponsors';

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
					<source src='/assets/landing/bgVideo.mp4' />
				</video>
				<Hero />
				<Sponsors />
				<Timeline />
				<FAQs />
			</main>
		</>
	);
}
