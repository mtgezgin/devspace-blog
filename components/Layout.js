import Head from 'next/head';
import Header from './Header';
import Search from './Search';

export default function Layout({ title, keyworrds, description, children }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='keywords' content={keyworrds} />
				<meta name='description' content={description} />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<Search />
			<main className='container mx-auto my-7'>{children}</main>
		</div>
	);
}

Layout.defaultProps = {
	title: 'Welcome to DevSpace',
	description: 'The best info and news in programming',
	keywords: 'programming, coding, nextjs, react',
};
