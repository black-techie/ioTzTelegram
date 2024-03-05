import { ElysiaLogging } from "@otherguy/elysia-logging";
import { Elysia, t } from "elysia";
const port = 6001;


interface Message {
    message_id: number;
    from: {
        id: number;
        is_bot: boolean;
        first_name: string;
        language_code: string;
    };
    chat: {
        id: number;
        first_name: string;
        type: string;
    };
    date: number;
    text: string;
}

interface BodyType {
    message: Message;
}

const app = new Elysia()

    .get("*", ({ body }) => { console.log("INCOMING GET: ", body); return {} })
    .post("*", async ({ body }: { body: any }) => {
        if (body?.message) {
            const res = await fetch(`https://api.telegram.org/bot7152328164:AAGzkucP0M9Mtq3QEJQMqwbZd0xkrhZqWIA/sendMessage`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    method: "POST",
                    chat_id: body.message.chat.id,
                    text: `Hello ${body.message.from.first_name} 😍`
                })
            });
            const res_1 = await res.json();
            console.log(res_1)
            return {
                res_1
            }

        }
    })


    .use(
        ElysiaLogging()
    )

    .listen(port)


console.log("Running on port: ", app.server?.port)

