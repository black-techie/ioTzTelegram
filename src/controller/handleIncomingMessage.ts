import type { Message, sendMessage } from "../interfaces/controllers";
import { verifyUser } from "./user";



const sendMessage = async (message: sendMessage) => {
    const res = await fetch(`https://api.telegram.org/bot7152328164:AAGzkucP0M9Mtq3QEJQMqwbZd0xkrhZqWIA/sendMessage`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            method: "POST",
            chat_id: message.chatId,
            text: `${message.text} 😍`
        })
    });
    return await res.json()
}

export default async function handleMessage(message: Message) {
    const isUserRegistered = await verifyUser(message.from.id)
    if(isUserRegistered.error){
        const text = "Please provide your secret key to continue !!"
        return await sendMessage({chatId: message.chat.id, text})
    }
}