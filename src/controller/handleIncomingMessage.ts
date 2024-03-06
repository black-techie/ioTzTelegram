import type { Message } from "../interfaces/controllers";



export default async function sendMessage(message: Message) {
    const res = await fetch(`https://api.telegram.org/bot7152328164:AAGzkucP0M9Mtq3QEJQMqwbZd0xkrhZqWIA/sendMessage`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            method: "POST",
            chat_id: message.chat.id,
            text: `Hello ${message.from.first_name} 😍`
        })
    });
    return await res.json()
}