import Head from 'next/head'
import { Login } from '../components/Lgoin';
import { useMoralis } from 'react-moralis';
import { Header } from '../components/Header';
import { Messages } from '../components/Messages';

export default function Home() {

	const { isAuthenticated } = useMoralis();

	if (!isAuthenticated) return <Login />

	return (
		<div className="h-screen text-blue-600 overflow-y-scroll bg-gradient-to-b from-green-500 to-yellow-300">
			<Head>
				<title>Chat Dapp</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className='max-w-screen-2xl mx-auto'>
				{/* HEADER */}
				<Header />
				{/* MESSAGE */}
				<Messages />
			</div>

		</div>
	)
}
