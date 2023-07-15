import Link from 'next/link';

const DATA = [
	{
		name: 'Non-Tech Events',
		url: '/events',
	},
	{
		name: 'Hackathon',
		url: '/hackathon',
	},
];

function EventCategory() {
	return (
		<div className='w-full flex flex-col gap-6 items-center mt-20'>
			<div className='flex justify-center items-center w-full'>
				<h1 className='text-4xl font-syne font-extrabold uppercase'>
					Events
				</h1>
			</div>
			<div className='w-full grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-8'>
				{DATA.map((category) => (
					<Link
						href={category.url}
						key={category.name}
						className='border-4 border-white/25 shadow-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-sm backdrop-opacity-80 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105'
					>
						<h2 className='text-center text-4xl font-semibold'>
							{category.name}
						</h2>
					</Link>
				))}
			</div>
		</div>
	);
}

export default EventCategory;
