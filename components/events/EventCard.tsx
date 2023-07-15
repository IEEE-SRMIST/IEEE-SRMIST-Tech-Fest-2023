import { Event } from '@/types/types';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

interface EventCardProps {
	event: Event;
	index: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
	const linkName = 'Read More >> ';
	return (
		<div
			className={`flex flex-col md:flex-row rounded-lg border border-white/25 shadow-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-sm backdrop-opacity-80 transition ease-in-out duration-500 hover:transition hover:ease-in-out hover:duration-500 lg:w-[800px] ${
				index % 2 === 0 ? '' : 'md:flex-row-reverse'
			}`}
		>
			<div className='image-container w-3/3 md:w-1/2 lg:w-1/3 m-5'>
				<Image
					alt='Event-image'
					className='w-full h-full object-cover rounded-lg'
					src={event.cover ?? '/testimg.jpg'}
					width={300}
					height={350}
				/>
			</div>
			<div className='card-contents flex flex-col w-3/3 md:w-1/2 lg:w-2/3 p-5'>
				<Link href={`events/${event.slug}`}>
					<h1 className='font-syne text-start text-2xl font-bold'>
						{event.name}
					</h1>
				</Link>
				{event.description.length > 0 ? (
					<p className='font-spaceMono text-white text-md'>
						{`${event.description[0].slice(0, 200)}... `}
						<Link href={`events/${event.slug}`}>
							<span className='text-cardDescription'>
								{linkName}
							</span>
						</Link>
					</p>
				) : (
					<p className='font-spaceMono text-white text-md'>
						{event.description}
					</p>
				)}
			</div>
		</div>
	);
};

export default EventCard;
