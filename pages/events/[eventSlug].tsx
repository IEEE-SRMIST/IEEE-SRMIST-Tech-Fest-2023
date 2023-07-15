import Image from 'next/image';
import {
	Timestamp,
	collection,
	getDocs,
	query,
	where,
} from 'firebase/firestore';
import { FirebaseDb } from '@/firebase';
import { Event } from '@/types/types';
import {
	GetStaticPaths,
	GetStaticPathsResult,
	GetStaticProps,
	InferGetStaticPropsType,
	NextPage,
} from 'next';
import safeJsonStringify from 'safe-json-stringify';
import { AiFillCalendar } from 'react-icons/ai';
import { BiMapAlt, BiTime } from 'react-icons/bi';
import Head from 'next/head';
import RegisterEventButton from '@/components/events/RegisterEventButton';

const SingleEventPage: NextPage<
	InferGetStaticPropsType<typeof getStaticProps>
> = ({ event }) => {
	return (
		<>
			<Head>
				<title>{event.name}</title>
			</Head>
			<main className='flex flex-col justify-center items-center'>
				<div className='w-3/4 p-10 z-20 shadow-[0_8px_32px_0_rgba(_31,38,135,0.37_)] rounded-3xl backdrop-blur-[_4px_] bg-white/10 backdrop-opacity-25 flex flex-col space-y-10 my-20'>
					<h1 className='font-syne font-extrabold text-center uppercase text-4xl'>
						{event.name}
					</h1>
					<div className='image-section space-x-5 flex items-center mb-10'>
						<div className='rounded-3xl overflow-hidden aspect-video w-full'>
							<Image
								src={event.cover ?? '/testimg.jpg'}
								alt={event.name}
								className='w-full h-auto object-contain'
								height={850}
								width={850}
							/>
						</div>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-3'>
						<div className='flex gap-8 md:col-span-2 item-center flex-wrap'>
							<div className='flex gap-8'>
								<AiFillCalendar size={40} />
								<p className='max-w-[20ch] text-sm md:text-base'>
									{new Timestamp(
										event.date.start.seconds,
										event.date.start.nanoseconds
									)
										.toDate()
										.toDateString()}{' '}
									-{' '}
									{new Timestamp(
										event.date.end.seconds,
										event.date.end.nanoseconds
									)
										.toDate()
										.toDateString()}
								</p>
							</div>
							<div className='flex gap-8'>
								<BiTime size={40} />
								<p className='max-w-[20ch] text-sm md:text-base'>
									{new Timestamp(
										event.date.start.seconds,
										event.date.start.nanoseconds
									)
										.toDate()
										.toLocaleTimeString()}{' '}
									-{' '}
									{new Timestamp(
										event.date.end.seconds,
										event.date.end.nanoseconds
									)
										.toDate()
										.toLocaleTimeString()}
								</p>
							</div>
							<div className='flex gap-8'>
								<BiMapAlt size={40} />
								<p className='max-w-[20ch] text-sm md:text-base'>
									{event.venue}
								</p>
							</div>
						</div>
						<div>
							<RegisterEventButton eventId={event.id} />
						</div>
					</div>
					<div className='event-description'>
						<h1 className='font-syne font-bold text-xl'>
							Event Description
						</h1>
						<ul className='font-spaceMono text-cardDescription'>
							{event.description.map((description, idx) => (
								<li key={idx} className='mt-2'>
									{description}
								</li>
							))}
						</ul>
					</div>
					<div className='event-agenda'>
						<h1 className='font-syne font-bold text-xl mb-2'>
							Event Agenda
						</h1>
						<ul className='font-spaceMono text-cardDescription list-disc flex flex-col space-y-5 ml-5'>
							{event.agenda.map((agenda, idx) => (
								<li key={idx}>{agenda}</li>
							))}
						</ul>
					</div>
				</div>
			</main>
		</>
	);
};

export default SingleEventPage;

export const getStaticPaths: GetStaticPaths = async (context) => {
	const paths = [] as GetStaticPathsResult['paths'];
	const eventsRef = collection(FirebaseDb, 'events');
	const eventsSnap = await getDocs(eventsRef);
	eventsSnap.forEach((doc) =>
		paths.push({ params: { eventSlug: doc.data().slug } })
	);
	return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{ event: Event }> = async (
	context
) => {
	const { eventSlug } = context.params!;
	let event = {} as Event;
	if (!eventSlug) {
		return {
			redirect: {
				destination: '/events',
				permanent: false,
			},
		};
	}
	const eventsRef = collection(FirebaseDb, 'events');
	const q = query(eventsRef, where('slug', '==', eventSlug));
	const eventSnap = await getDocs(q);
	if (eventSnap.empty) {
		return {
			redirect: {
				destination: '/events',
				permanent: false,
			},
		};
	}
	eventSnap.forEach((doc) => {
		event = JSON.parse(
			safeJsonStringify({ ...doc.data(), id: doc.id })
		) as Event;
	});
	return {
		props: { event },
	};
};
