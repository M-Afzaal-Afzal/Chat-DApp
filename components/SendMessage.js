import React, { useState } from 'react'
import { useMoralis } from 'react-moralis'

export const SendMessage = ({ endOfMessagesRef }) => {

	const { user, Moralis } = useMoralis();

	const [message, setMessage] = useState('');

	const sendMessage = (e) => {
		e.preventDefault();

		if (!message) return;

		const Messages = Moralis.Object.extend('Messages');

		const messages = new Messages();

		messages.save({
			message,
			username: user.getUsername(),
			ethAddress: user.get('ethAddress'),
		}).then((message) => {
			console.log('Message send successfully');
		}, (error) => {
			console.log(error.message);
		})

		endOfMessagesRef.current.scrollIntoView({ behaviour: 'smooth' })

		setMessage("");

	}

	return (
		<form onSubmit={sendMessage} className='flex fixed bottom-10 bg-black opacity-80 px-6 py-4 max-w-2xl shadow-xl border-4 border-green-400 rounded-full w-11/12'>
			<input value={message} onChange={(e) => {
				setMessage(e.target.value);
			}} className='flex-grow pr-5 outline-none bg-transparent text-white placeholder-gray-500'
				placeholder={`Enter a Message ${user.getUsername()}`}
				type="text" />
			<button className='font-bold text-pink-500' type='submit'>Send</button>
		</form>
	)
}
