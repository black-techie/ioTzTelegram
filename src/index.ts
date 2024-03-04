import { Elysia, t } from "elysia";
const port = 6001;


const app = new Elysia()
    .get("*", ({body}) => body)
    .post("*", ({body}) => {
        const id = body.chat.id;
        const text = body.text;
        const user = body.chat.first_name;

        fetch("https://api.telegram.org/bot7152328164:AAGzkucP0M9Mtq3QEJQMqwbZd0xkrhZqWIA",{
            method: "POST",
            body: JSON.stringify({ chat_id:id, text: `Greetings ${user}` })
        })

        



        return {    }
    }, {
        body: t.Object({
            messages: t.Object({}),
            chat: t.Object({
                id: t.Numeric(),
                first_name: t.String()
            }),
            text: t.String()
        })
    })
    .listen(port)


console.log("Running on port: ", port)
