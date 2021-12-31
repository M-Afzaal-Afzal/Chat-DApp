import Image from 'next/image';
import React from 'react'
import { useMoralis } from 'react-moralis'
import { Avatar } from './Avatar';
import { ChangeUsername } from './ChangeUsername';

export const Header = () => {

	const { user } = useMoralis();

	console.log(user);

	return (

		<div className='sticky top-0 p-5 z-50 border-b-4 border-pink-700 bg-black shadow-sm items-end lg:items-center grid grid-cols-5 lg:grid-cols-6'>
			<div className='w-24 h-24 mx-auto relative hidden lg:inline-grid'>
				<Image className='rounded-full' objectFit='cover' src={'/author.jpg'} layout='fill' />
			</div>

			<div className='text-left lg:text-center col-span-4'>
				{/* AVATAR */}
				<div className='relative w-48 h-48 lg:mx-auto border-pink-500 border-8 rounded-full'>
					<Avatar logoutOnPress />
				</div>

				{/* WELCOME MESSAGE */}
				<h1 className='text-3xl mt-4'>
					WELCOME TO THE METAVERSE
				</h1>

				{/* USERNAME */}
				<h2 className='mt-2 text-5xl font-bold truncate'>{user.getUsername()}</h2>

				{/* CHANGE USERNAME */}
				<ChangeUsername />
			</div>

		</div>

	)
}
