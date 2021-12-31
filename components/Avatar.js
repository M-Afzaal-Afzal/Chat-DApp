import Image from 'next/image';
import React from 'react'
import { useMoralis } from 'react-moralis'

export const Avatar = ({ username, logoutOnPress }) => {

	const { user, logout } = useMoralis();

	return (
		<Image priority className={`rounded-full bg-black cursor-pointer hover:opacity-75`} src={`https://avatars.dicebear.com/api/pixel-art/${username || user.getUsername()}.svg`} layout='fill' objectFit='cover' onClick={() => logoutOnPress && logout()} />
	)
}
