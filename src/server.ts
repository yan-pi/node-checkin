import fastify from 'fastify';

const app = fastify();

app.get('/test', (request, reply) => {
  reply.send({ message: 'Hello World' });
});

app.listen(3000, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Server is running on port 3000');
});
