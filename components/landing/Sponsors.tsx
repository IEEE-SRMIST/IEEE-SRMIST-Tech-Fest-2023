import Image from 'next/image';
import sponsors from '@/data/sponsors';

function Sponsors() {
	return (
		<div className='w-full flex flex-col gap-6 items-center mt-20 overflow-hidden'>
			<div className='flex justify-center items-center w-full'>
				<h1 className='text-4xl font-syne font-extrabold'>SPONSORS</h1>
			</div>
			<section className='w-full'>
				<div className='mx-auto block w-[120%] -translate-x-16 bg-themes-txt_primary px-10 py-16 text-themes-bg_primary'>
					<div className='animate-marquee whitespace-nowrap'>
						{sponsors.concat(sponsors).map((sponsor, index) => (
							<span
								key={index}
								className='mx-10 inline-block h-[120px] max-w-[120px] lg:mx-16'
								title={sponsor.name}
							>
								<Image
									src={sponsor.img}
									alt={sponsor.alt}
									width={40}
									height={40}
									className='h-full w-full object-contain'
									unoptimized={true}
								/>
							</span>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

export default Sponsors;
