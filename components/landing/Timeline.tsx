import { MdOutlineEventNote } from 'react-icons/md';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Timeline() {
	const timelineElements = [
		{
			id: 1,
			title: 'Opening Ceremony',
			time: '09:00 - 10:00',
			description: '',
			date: '24.7.23',
		},
		{
			id: 2,
			title: 'Project submission ends',
			time: '10:00 - 11:00',
			description: '',
			date: '24.7.23',
		},
		{
			id: 3,
			title: 'Game 1 (Imposter artist)',
			time: '11:00 - 12:00',
			description: '',
			date: '24.7.23',
		},
		{
			id: 4,
			title: 'Project pitch ',
			time: '01:00 - 03:00',
			description:
				'Tech talk series on electronics in the industry by 2 speakers',
			date: '24.7.23',
		},
		{
			id: 5,
			title: 'Close of Day 1',
			time: '03:00 - 04:00',
			description: '',
			date: '24.7.23',
		},
		{
			id: 6,
			title: 'Opens day 2',
			time: '09:00 - 9:15',
			description: '',
			date: '25.7.23',
		},
		{
			id: 7,
			title: 'Comic strip design',
			time: '09:00 - 9:15',
			description:
				'R&D Tech talk/Hands-on workshop delivered by 1 speaker',
			date: '25.7.23',
		},
		{
			id: 8,
			title: 'Typing Round',
			time: '10:15 - 11:00 ',
			description: '',
			date: '25.7.23',
		},
		{
			id: 9,
			title: 'Scavenger Hunt',
			time: '01:00 - 03:00  ',
			description: '',
			date: '25.7.23',
		},
		{
			id: 10,
			title: 'Closing Ceremony',
			time: '03:00 - 04:00',
			description: '',
			date: '25.7.23',
		},
	];

	const icon = {
		background: '#3D248D',
		color: '#fff',
	};

	return (
		<div className='my-20 mx-4'>
			<div className='flex justify-center items-center'>
				<h1 className='text-4xl uppercase font-syne font-extrabold'>
					TimeLine
				</h1>
			</div>
			<div className='mt-10'>
				<VerticalTimeline layout='1-column-left' lineColor={icon.color}>
					{timelineElements.map((element) => {
						return (
							<VerticalTimelineElement
								key={element.id}
								date={element.date}
								dateClassName='date'
								icon={<MdOutlineEventNote />}
								contentStyle={{
									background: 'rgb(61, 36, 141, 0.5)',
									color: '#fff',
									border: '2px solid #fff',
									borderBottom: 'none',
									borderRadius: '10px',
								}}
								iconStyle={{ background: '#3D248D' }}
							>
								<h3 className='vertical-timeline-element-title text-xl text-white'>
									{element.title}
								</h3>
								<h5 className='vertical-timeline-element-subtitle text-xs text-white pt-2'>
									{element.time}
								</h5>
								<p
									id='description'
									className='text-sm text-white'
								>
									{element.description}
								</p>
							</VerticalTimelineElement>
						);
					})}
				</VerticalTimeline>
			</div>
		</div>
	);
}

export default Timeline;
