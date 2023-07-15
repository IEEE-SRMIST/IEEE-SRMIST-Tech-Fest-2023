import EventCard from '@/components/events/EventCard';
import Timeline from '@/components/events/Timeline';
import { useEffect, useRef } from 'react';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { FirebaseDb } from '@/firebase';
import { Event } from '@/types/types';
import safeJsonStringify from 'safe-json-stringify';

const EventsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
	events,
}) => {
	console.log(events);
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
								console.log(event.description.length);
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

export const getStaticProps: GetStaticProps<{ events: Event[] }> = async (
	context
) => {
	const events = [] as Event[];
	const eventsRef = collection(FirebaseDb, 'events');
	const q = query(eventsRef, orderBy('date.start', 'asc'));
	const eventsSnapshot = await getDocs(q);
	eventsSnapshot.forEach((doc) =>
		events.push(
			JSON.parse(
				safeJsonStringify({ id: doc.id, ...doc.data() })
			) as Event
		)
	);

	return {
		props: { events },
	};
};
