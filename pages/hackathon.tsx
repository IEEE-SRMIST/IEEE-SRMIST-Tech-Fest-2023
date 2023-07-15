import HackathonHero from '@/components/hackathon/Hero';

function HackathonPage() {
	return (
		<main className='relative flex flex-col justify-start items-center w-full min-h-screen overflow-hidden'>
			<video
				id='videoBg'
				className='-z-10 absolute top-0'
				autoPlay
				loop
				muted
			>
				<source src='/assets/landing/bgVideo.mp4' />
			</video>
			<HackathonHero />
		</main>
	);
}

export default HackathonPage;
