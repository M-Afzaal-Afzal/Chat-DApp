import Head from 'next/head'
import { Login } from '../components/Lgoin';
import { useMoralis } from 'react-moralis';

export default function Home() {

	const { isAuthenticated } = useMoralis();

	if (!isAuthenticated) return <Login />

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>Chat Dapp</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				Main page
			</main>
		</div>
	)
}
