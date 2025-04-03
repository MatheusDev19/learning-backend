import { fastify } from "fastify";
import { routes } from "../routes/routes";

const server = fastify({ logger: true });
const PORT = 3333;

server.setErrorHandler((error, request, reply) => {
  server.log.error(error);
  reply.send({ message: error.message });
});

const start = async () => {
  await server.register(routes);
  try {
    await server.listen({ port: PORT });
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

start();
