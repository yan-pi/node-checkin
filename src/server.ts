import fastify from "fastify"
import testRoute from "./routes/test-route"

const app = fastify()

app.get("/test", async (request, reply) => {
  return { hello: "world" }
})

app.register(testRoute)

app.listen({ port: 8080 }).then(() => {
  console.log("Server listening on port 8080!")
})
