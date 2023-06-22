import Countdown from 'react-countdown';
import Image from 'next/image';
import logo from '../public/assets/ieee_logo.png'

export default function Home() {

	// Renderer callback with condition
	const renderer = ({ days, hours, minutes, completed }) => {
		if (completed) return <span>Time&apos;s up!</span>;
		else return <span>{days}:{hours}:{minutes}</span>;
	};

	return (
		<main className="relative flex flex-col justify-center items-center w-full min-h-screen">
			<video id="videoBg" className="-z-10 absolute top-0" autoPlay loop muted>
				<source src="/assets/video.webm" />
			</video>
			<p className="md:text-5xl sm:text-3xl text-2xl font-extrabold mt-10">
				<Countdown date={Date.now() + 10000000000} renderer={renderer}/>
			</p>
			<div className="img mt-20"></div>
			<p className="text-lg mt-4">
				PRESENTS
			</p>
			<h1 className="md:text-7xl sm:text-5xl text-3xl font-extrabold font-syne mt-12">
				TechnoZest
			</h1>
			<h3 className="md:text-2xl sm:text-xl text-lg text-center px-10">
				Encounter your canon event across the TechnoVerse
			</h3>
			<p className="text-3xl animate-pulse mt-10">
				COMING SOON
			</p>
		</main>
	);
}
