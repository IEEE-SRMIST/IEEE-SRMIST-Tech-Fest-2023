import Countdown, { CountdownRenderProps } from 'react-countdown';
import { dateWithTimeZone } from '@/utils/date';
import { useMemo } from 'react';

function Hero() {

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
    <div className="relative flex flex-col justify-start items-center w-full min-h-screen">
      <video id="videoBg" className="-z-10 absolute top-0" autoPlay loop muted>
        <source src="/assets/video.mp4" />
      </video>
      <div className="img mt-40 2xl:mt-60"></div>
      <p className="text-lg mt-4">PRESENTS</p>
      <h1 className="md:text-7xl sm:text-5xl text-3xl font-extrabold font-syne mt-20">
        TechnoZest
      </h1>
      <h3 className="md:text-2xl sm:text-xl text-lg text-center px-10">
        Encounter your canon event across the TechnoVerse
      </h3>
      <p className="text-3xl animate-pulse font-extrabold mt-10 flex flex-col sm:flex-row justify-center gap-2 sm:gap-8 items-center">
        <Countdown date={date} renderer={renderer} />
      </p>
    </div>
  );
}

export default Hero;
