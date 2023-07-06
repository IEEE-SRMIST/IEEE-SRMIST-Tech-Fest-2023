import React, { PropsWithChildren } from 'react';
import PublicNavbar from './Navbar';
import PublicFooter from './Footer';

const PublicLayout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<PublicNavbar />
			{children}
			<PublicFooter />
		</>
	);
};

export default PublicLayout;
