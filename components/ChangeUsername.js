import React from 'react'
import { useMoralis } from 'react-moralis'

export const ChangeUsername = () => {

	const { user, isUserUpdating, userError, setUserData } = useMoralis();

	const updateUserName = () => {

		const username = prompt(`Enter your new Username (current: ${user.getUsername()})`);

		if (!username) return;

		setUserData({ username })

	}

	return (
		<div>
			<button onClick={updateUserName} disabled={isUserUpdating} className='text-sm cursor-pointer hover:text-pink-700 absolute top-5 right-5'>
				Change Username
			</button>
		</div>
	)
}
