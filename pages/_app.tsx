import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Syne, Space_Mono } from '@next/font/google';
import Head from 'next/head';

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
			</Head>
			<main
				className={`${syne.variable} ${spaceMono.variable} font-spaceMono`}
			>
				<Component {...pageProps} />
			</main>
		</>
	);
}
