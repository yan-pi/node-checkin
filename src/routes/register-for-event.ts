import z from "zod"
import { FastifyInstance } from "fastify"
import { ZodTypeProvider } from "fastify-type-provider-zod"
import { prisma } from "../lib/prisma"

export async function registerForEvent(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/events/:eventId/attendees",
    {
      schema: {
        body: z.object({
          name: z.string().min(4),
          email: z.string().email(),
        }),
        params: z.object({
          eventId: z.string().uuid(),
        }),
        reponse: {
          201: z.object({
            attendeeId: z.string().uuid(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { eventId } = request.params
      const { name, email } = request.body

      const attendeeForEmail = await prisma.attendee.findFirst({
        where: {
          AND: [{ email }, { eventId }],
        },
      })
      if (attendeeForEmail !== null) {
        throw new Error(
          "Attendee with this email already exists for this event",
        )
      }

      const attendee = await prisma.attendee.create({
        data: {
          name,
          email,
          eventId,
        },
      })

      return reply.status(201).send({ attendeeId: attendee.id })
    },
  )
}
