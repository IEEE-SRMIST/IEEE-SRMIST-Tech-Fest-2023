import Image from 'next/image';
import React, { FunctionComponent } from 'react';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';

const Prizes: FunctionComponent = () => {
	return (
		<div className='container mx-auto h-screen flex flex-col lg:flex-row justify-evenly items-center px-10 lg:px-0'>
			<div className='flex flex-col gap-5'>
				<p className='text-lg font-medium bg-[#14094fe6] uppercase px-3 flex justify-center rounded-3xl py-2 w-48 hover:bg-[#130a2e]'>
					Coming soon!
				</p>
				<p className='md:text-6xl text-4xl font-bold'>
					Get Notified <br /> When we launch
				</p>
				<p className='text-base'>
					Don&apos;t worry we will not spam you
				</p>
				<div className='flex gap-5'>
					<input
						placeholder='Enter your email...'
						type='email'
						className='border-gray-200 rounded-xl px-4 focus:outline-none focus:shadow-xl shadow-sm text-[#14094fe6]'
					/>
					<button className='px-6 py-3 bg-gradient-to-r from-purple-300 to-purple-200 rounded-2xl hover:scale-95 duration-300 transition text-[#14094fe6] shadow-xl font-medium'>
						Submit
					</button>
				</div>
				<div className='flex gap-5'>
					<BsTwitter className='text-4xl rounded-xl text-[#14094fe6] bg-purple-200 px-2 py-2 hover:scale-95 duration-300 transition cursor-pointer' />
					<RiInstagramFill className='text-4xl rounded-xl text-[#14094fe6] bg-purple-200 px-2 py-2 hover:scale-95 duration-300 transition cursor-pointer' />
					<BsLinkedin className='text-4xl rounded-xl text-[#14094fe6] bg-purple-200 px-2 py-2 hover:scale-95 duration-300 transition cursor-pointer' />
				</div>
			</div>
			<div className='flex justify-center'>
				<Image
					src='/assets/hey.gif'
					alt='image'
					width={500}
					height={300}
				/>
			</div>
		</div>
	);
};

export default Prizes;
