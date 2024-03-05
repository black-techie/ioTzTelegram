import { Elysia, t } from "elysia";
const port = 6001;


const app = new Elysia()

    .get("*", ({ body }) => {console.log("INCOMING: ", body);return {}})

    .post("*", async ({ body }) => {
        console.log("INCOMING: ", body)
        const id = body.message.chat.id;
        const text = body.message.text;
        const user = body.message.chat.first_name;
        try {
            const res = await fetch(`https://api.telegram.org/bot7152328164:AAGzkucP0M9Mtq3QEJQMqwbZd0xkrhZqWIA/sendMessage?chat_id=${id}&text=${"Greetings " + user}`);
            const res_1 = await res.json();
            return console.log("RESPONSE: ", res_1);
        } catch {
            return ({});
        }
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

