import { ElysiaLogging } from "@otherguy/elysia-logging";
import { Elysia, t } from "elysia";
import sendMessage from "./controller/handleIncomingMessage";



const port = 6001;
const app = new Elysia()

    .get("*", ({ body }) => { return body; })

    .post("*", async ({ body }: { body: any }) => {
        if (body?.message) {
            return await sendMessage(body.message)
        }
    })


    .use(ElysiaLogging())
    .listen(port)


console.log("Running on port: ", app.server?.port)

