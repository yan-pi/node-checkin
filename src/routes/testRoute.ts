import { FastifyInstance } from 'fastify';

export default function (fastify: FastifyInstance) {
    fastify.get('/test', {
        handler: async (request, reply) => {
            return { message: 'Hello World' };
        }
    });
}
