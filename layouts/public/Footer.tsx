import React, { FunctionComponent } from 'react';
import { AiOutlineTwitter, AiFillLinkedin, AiFillMail, AiFillInstagram } from 'react-icons/ai'

const Footer: FunctionComponent = () => {
	return (
		<footer className='text-purple-300 text-center py-6'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex flex-col md:flex-row md:justify-between'>
					<div className='mb-4 md:mb-0'>
						<p className='text-xs md:text-sm'>
							Copyright © 2023 IEEE SRM SB. All Rights Reserved.
						</p>
					</div>
					<div className='md:text-sm'>
						<ul className='flex flex-wrap space-x-4 lg:space-x-6 md:space-x-2 text-xs md:text-sm justify-center'>
							<li>
								<a
									href='https://www.linkedin.com/company/ieeesrmist/'
									className='hover:text-white text-2xl'
								>
									<AiFillLinkedin/>	
								</a>
							</li>

							<li>
								<a
									href='https://twitter.com/ieeesrmist?t=o9R7ph3-nF5ZdOE5yJyg8Q&s=08'
									className='hover:text-white text-2xl'
								>
									<AiOutlineTwitter/>
								</a>
							</li>
							<li>
								<a
									href='https://www.instagram.com/ieeesrmist/?igshid=MzRlODBiNWFlZA%3D%3D'
									className='hover:text-white text-2xl'
								>
									<AiFillInstagram/>
								</a>
							</li>
							<li>
								<a
									href='https://medium.com/'
									className='hover:text-white text-2xl'
								>
									<AiFillMail/>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
