import { FastifyInstance } from "fastify"
import { z } from "zod"
import { prisma } from "../lib/prisma"

export default async function (app: FastifyInstance) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  app.post("/events", async (request, reply) => {
    const createEventSchema = z.object({
      title: z.string().min(1).max(100),
      details: z.string().nullable(),
      maximumAttendees: z.number().int().positive().nullable(),
    })

    const data = createEventSchema.parse(request.body)

    const event = await prisma.event.create({
      data: {
        title: data.title,
        details: data.details,
        maximumAttendees: data.maximumAttendees,
        slug: new Date().toISOString(),
      },
    })

    return reply.status(201).send({ eventID: event.id })
  })
}
