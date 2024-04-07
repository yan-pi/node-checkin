import fastify from "fastify"
import { createEvent } from "./routes/create-event"
import {
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from "fastify-type-provider-zod"

export const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createEvent)

app.listen({ port: 8080 }).then(() => {
  console.log("Server listening on port 8080!")
})
