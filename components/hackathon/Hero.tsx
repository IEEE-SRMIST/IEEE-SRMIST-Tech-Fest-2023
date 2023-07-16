import Image from 'next/image';
import { useEffect } from 'react';

const HackathonHero = () => {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://apply.devfolio.co/v2/sdk.js';
		script.async = true;
		script.defer = true;
		document.body.appendChild(script);
		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<section className='relative flex flex-col md:justify-center items-center w-full min-h-screen gap-8'>
			<div className='w-full md:w-1/2 mt-40 md:mt-0'>
				<Image
					src={'/assets/technozest.png'}
					alt='Technozest'
					width={100}
					height={100}
					className='w-full h-auto object-contain'
					priority
					unoptimized
				/>
			</div>
			<div
				className='apply-button w-[312px] h-[44px]'
				data-hackathon-slug='technozest'
				data-button-theme='light'
			></div>
			<h3 className='md:text-2xl sm:text-xl text-lg text-center px-10'>
				Encounter your canon event across the TechnoVerse
			</h3>
		</section>
	);
};

export default HackathonHero;
