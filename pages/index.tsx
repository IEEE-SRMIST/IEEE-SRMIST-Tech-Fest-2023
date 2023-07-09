import { useMemo, useEffect, useRef } from 'react';
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

	const scrollGradientRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const scrollGradientElement = scrollGradientRef.current;
		if (scrollGradientElement) {
			const handleScroll = () => {
				const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
				const scrollRatio = scrollTop / (scrollHeight - clientHeight);
				const viewportWidth = window.innerWidth;
				const viewportHeight = window.innerHeight;
				const initialX = 0;
				const middleX = 90;
				const finalX = 50;
				const initialY = 0;
				const middleY = 50;
				const finalY = scrollRatio * 100;
		

				let currentX, currentY;
				const isMobile = window.innerWidth <= 768; 

		
				if (isMobile) {
				  const ratio = scrollRatio/0.5;
				  currentX = initialX + (middleX - initialX) * ratio;
				  currentY = initialY + (middleY - initialY) * ratio;
				} 
				else{
				if (scrollRatio < 0.5) {
					const ratio = scrollRatio / 0.5;
					currentX = initialX + (middleX - initialX) * ratio;
					currentY = initialY + (middleY - initialY) * ratio;
				} else {
					const ratio = (scrollRatio - 0.5) / 0.5;
					currentX = middleX + (finalX - middleX) * ratio;
					currentY = middleY + (finalY - middleY) * ratio;
				}
			}
			if(window.innerWidth>768){
				const gradientColor = `radial-gradient(ellipse at ${currentX}% ${currentY}%, rgb(86, 53, 173) 0%,
				rgb(20, 9, 78) 40%`;

				scrollGradientElement.style.background = gradientColor;
			}
			else{
				const gradientColor = `radial-gradient(circle at ${currentX}% ${currentY}%, rgb(86, 53, 173) 0%,
				rgb(20, 9, 78) 20%`;

				scrollGradientElement.style.background = gradientColor;
			}
			};

			window.addEventListener('scroll', handleScroll);
			window.addEventListener('resize', handleScroll);
			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		}
	}, []);


	const date = useMemo(() => {
		return dateWithTimeZone('Asia/Kolkata', 2023, 6, 24, 23, 59, 59);
	}, []);

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
				<div className='content' ref={scrollGradientRef} >
					<Sponsors />
					<Timeline />
					<FAQs />
				</div>
			</main>
		</>
	);
}
