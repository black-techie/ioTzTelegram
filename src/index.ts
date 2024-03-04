import { Elysia } from "elysia";
const port = 6001;


const app = new Elysia()
            .get("/", () => "Hello World!")
            .listen(port)


console.log("Running on port: ", port)
            