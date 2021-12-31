import React from 'react'
import { useMoralis } from 'react-moralis'
import TimeAgo from 'timeago-react';
import { Avatar } from './Avatar';

export const Message = ({ message }) => {

   const { user } = useMoralis();

   const isUserMessage = message.get('ethAddress') === user.get('ethAddress');

   console.log(message.get('ethAddress'), 'eth address is there');

   return (
      <div className={`flex items-end space-x-2 relative ${isUserMessage && "justify-end"
         }`}>

         <div className={`relative h-8 w-8 ${isUserMessage && "order-last ml-2"}`}>
            <Avatar username={message.get('username')} />
         </div>

         <div
            className={`flex space-x-4 px-3 py-3 rounded-lg 
             ${isUserMessage ?
                  "rounded-br-none bg-green-300" :
                  "rounded-bl-none text-green-800 bg-blue-200"
               }`}
         >
            <p>{message.get('message')}</p>
         </div>

         {/* TIME STAMP */}
         <TimeAgo
            datetime={message.get('createdAt')}
            className={`text-[12px] italic text-gray-500 ${isUserMessage && 'order-first pr-1'}`}
         />

         <p className={`absolute -bottom-5 text-xs ${isUserMessage ? "text-green-800" : "text-blue-800"}`}>{message.get('username')}</p>
      </div>
   )
}
