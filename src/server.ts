import fastify from 'fastify';

const app = fastify();

const start = async () => {
  try {
    await app.listen({
      port: 8080,
    });
    console.log('Server is running on port 8080');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
