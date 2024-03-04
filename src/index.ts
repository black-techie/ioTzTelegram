import { Elysia, t } from "elysia";
const port = 6001;


const app = new Elysia()
    
    .get("*", ({ body }) => console.log(body))

    .post("*", ({ body }) => {
        console.log(body)
    })
    .listen(port)


console.log("Running on port: ", port)
