import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Syne, Space_Mono } from '@next/font/google';
import Head from 'next/head';
import { AuthProvider } from '@/context/AppContext';
import PublicLayout from '@/layouts/public/Layout';
import { Toaster } from 'react-hot-toast';

const syne = Syne({
	style: ['normal'],
	display: 'swap',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
	variable: '--font-syne',
});

const spaceMono = Space_Mono({
	style: ['normal'],
	display: 'swap',
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-space-mono',
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<title>TechnoZest | IEEE SRM SB</title>
			</Head>
			<AuthProvider>
				<PublicLayout>
					<main
						className={`${syne.variable} ${spaceMono.variable} font-spaceMono w-full`}
					>
						<Component {...pageProps} />
						<Toaster position='bottom-right' />
					</main>
				</PublicLayout>
			</AuthProvider>
		</>
	);
}
