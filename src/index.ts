import { Elysia, t } from "elysia";
const port = 6001;


const app = new Elysia()

    .get("*", ({ body }) => body)

    .post("*", ({ body }) => {
        const id = body.message.chat.id;
        const text = body.message.text;
        const user = body.message.chat.first_name;
        fetch("https://api.telegram.org/bot7152328164:AAGzkucP0M9Mtq3QEJQMqwbZd0xkrhZqWIA", {
            method: "POST",
            body: JSON.stringify({ chat_id: id, text: `Greetings ${user}` })
        })
            .then(res => res.json())
            .then(res => console.log(`response from sent data : ${res}`))
        return {}
    }, {
        body: t.Object({
            message: t.Object({
                chat: t.Object({
                    id: t.Numeric(),
                    first_name: t.String()
                }),
                text: t.String()
            }),
        })
    })
    .listen(port)


console.log("Running on port: ", port)
