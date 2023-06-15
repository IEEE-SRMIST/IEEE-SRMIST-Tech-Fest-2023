import React, { PropsWithChildren } from 'react';
import PublicNavbar from './Navbar';
import PublicFooter from './Footer';

const PublicLayout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<PublicNavbar />
			<main className='w-full'>{children}</main>
			<PublicFooter />
		</>
	);
};

export default PublicLayout;
