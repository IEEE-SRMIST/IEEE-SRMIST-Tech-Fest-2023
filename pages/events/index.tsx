import EventCard from '@/components/events/EventCard';
import Timeline from '@/components/events/Timeline';
import { Event } from './types/types';
import { useEffect, useRef } from 'react';

export const events: Event[] = [
	{
		name: 'Power and Utilities',
		description:
			'This industry is changing at an unprecedented rate. The amount of knowledge and expertise required to stay ahead of the curve as the industry shifts from traditional to renewables is too much for one person or team. Nesh can help to stay ahead of changes in legislation, market trends and consumer outlook. ',
		cover: '/testimg.jpg',
		slug: 'hackathon_start',
	},
	{
		name: 'Chemical',
		description:
			'In the Chemical business, the devil is in the details. The end product is only as good as the process used to produce it and affected by the wide variations in how the product is utilized. Nesh can provide support to employees and customers to achieve the highest quality experience in the manufacturing and utilization of the product. ',
		cover: '/testimg.jpg',
		slug: 'test_route',
	},
	{
		name: 'Oil and Gas',
		description:
			'Rising global demand, volatile prices, and increasing environmental regulations are forcing the industry to face three challenges: reducing costs, optimizing asset performance, and improving its environmental footprint. Nesh helps with these challenges by providing better operational visibility, market trends, competitive intel, and empowers users to gain efficiency at every step in the E&P process. ',
		cover: '/testimg.jpg',
		slug: 'lorem_12',
	},
	{
		name: 'Consulting Firms',
		description:
			'Consulting firms deal with a huge volumes of data - both internal intellectual property and client intellectual property. Nesh is powerful enough to create a center of gravity that allows for the orbiting of various stakeholders attached to projects - associates, team leads, SMEs, and partners; and sophisticated enough to honor privacy and security privileges. ',
		cover: '/testimg.jpg',
		slug: 'meow_meow',
	},
];

const EventsPage = () => {
	const scrollGradientRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const scrollGradientElement = scrollGradientRef.current;
		if (scrollGradientElement) {
			const handleScroll = () => {
				const { scrollTop, scrollHeight, clientHeight } =
					document.documentElement;
				const scrollRatio = scrollTop / (scrollHeight - clientHeight);
				const initialX = 0;
				const middleX = 90;
				const finalX = 50;
				const initialY = 50;
				const middleY = 70;
				const finalY = scrollRatio * 100;

				let currentX, currentY;

				if (scrollRatio < 0.5) {
					const ratio = scrollRatio / 0.5;
					currentX = initialX + (middleX - initialX) * ratio;
					currentY = initialY + (middleY - initialY) * ratio;
				} else {
					const ratio = (scrollRatio - 0.5) / 0.5;
					currentX = middleX + (finalX - middleX) * ratio;
					currentY = middleY + (finalY - middleY) * ratio;
				}

				const gradientColor = `radial-gradient(ellipse at ${currentX}% ${currentY}%, rgb(86, 53, 173) 0%,
				rgb(20, 9, 78) 50%`;

				scrollGradientElement.style.background = gradientColor;
			};

			window.addEventListener('scroll', handleScroll);
			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		}
	}, []);
	return (
		<>
			<div className='event' ref={scrollGradientRef}>
				<h1 className='text-center text-4xl font-syne font-extrabold mt-32'>
					EVENTS
				</h1>
				<div className='card-section flex justify-center items-center'>
					<div className='flex-col justify-start w-9/12'>
						<div className='flex flex-col mt-10'>
							{events.map((event, index) => {
								return (
									<div
										key={index}
										className={`mb-10 even:justify-end even:flex`}
									>
										<EventCard
											event={event}
											index={index}
										/>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<h1 className='font-syne font-bold text-center -mb-5 text-4xl mt-20'>
					TIMELINE
				</h1>
				<div className=''>
					<Timeline events={events} />
				</div>
			</div>
		</>
	);
};

export default EventsPage;
