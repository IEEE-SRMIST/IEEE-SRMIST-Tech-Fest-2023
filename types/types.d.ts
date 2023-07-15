import { Timestamp } from 'firebase/firestore';

export interface Event {
	id: string;
	name: string;
	date: {
		start: Timestamp;
		end: Timestamp;
	};
	speakers: any;
	description: string[];
	agenda: string[];
	cover: string;
	slug: string;
	venue: string;
}
export interface eventProps {
	event: Event;
	index: number;
}
export interface timelineProps {
	events: Event[];
}

export interface Sponsor {
	name: string;
	img: string;
	alt: string;
	prize?: string;
	link: string;
}
