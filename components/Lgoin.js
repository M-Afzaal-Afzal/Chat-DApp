import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis';

export const Login = () => {

	const { authenticate } = useMoralis();

	return (
		<div className='bg-black min-h-screen text-white relative'>
			{/* <h1>I'm the Login screen</h1> */}

			<div className='flex flex-col z-10 relative min-h-screen items-center justify-center'>
				{/* Logo will go there */}

				{/* LOGIN BUTTON */}
				<button onClick={authenticate} className='py-4 px-8 bg-[#B1511B] flex items-center justify-center shadow-2xl font-bold text-3xl rounded-lg'>
					Login
				</button>
			</div>

			{/* BACKGROUND IMAGE */}
			<Image src={'/login/bg.jpg'} layout={'fill'} objectFit={'cover'} />

		</div>
	)
}
