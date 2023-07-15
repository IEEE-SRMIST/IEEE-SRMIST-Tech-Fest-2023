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
		<section className='w-full min-h-screen'>
			<div
				className='apply-button w-[312px] h-[44px]'
				data-hackathon-slug='technozest'
				data-button-theme='light'
			></div>
		</section>
	);
};

export default HackathonHero;
