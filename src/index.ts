import { ElysiaLogging } from "@otherguy/elysia-logging";
import { Elysia, t } from "elysia";
const port = 6001;


const app = new Elysia()

    .get("*", ({ body }) => { console.log("INCOMING GET: ", body); return {} })

    .post("*", async ({ body }) => {console.log("INCOMING POST: ", body);  return {}})
    .use(
        ElysiaLogging()
      )

    .listen(port)


console.log("Running on port: ", port)

