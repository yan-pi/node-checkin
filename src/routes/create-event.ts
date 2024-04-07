import { FastifyInstance } from "fastify"
import { z } from "zod"
import { prisma } from "../lib/prisma"
import { generateSlug } from "../utils/generate-slug"

export default async function (app: FastifyInstance) {
  app.post("/events", async (request, reply) => {
    const createEventSchema = z.object({
      title: z.string().min(1).max(100),
      details: z.string().nullable(),
      maximumAttendees: z.number().int().positive().nullable(),
    })

    const { title, details, maximumAttendees } = createEventSchema.parse(
      request.body,
    )

    const slug = generateSlug(title)
    const eventWithSameSlug = await prisma.event.findUnique({
      where: { slug },
    })

    if (eventWithSameSlug !== null) {
      throw new Error("An event with the same title already exists")
    }

    const event = await prisma.event.create({
      data: {
        title,
        details,
        maximumAttendees,
        slug,
      },
    })

    return reply.status(201).send({ eventID: event.id })
  })
}
