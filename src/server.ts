import fastify from "fastify"
import createEvent from "./routes/create-event"

const app = fastify()

app.register(createEvent)

app.listen({ port: 8080 }).then(() => {
  console.log("Server listening on port 8080!")
})
