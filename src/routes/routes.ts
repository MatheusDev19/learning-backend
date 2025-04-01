import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyReply,
  FastifyRequest,
} from "fastify";

export const routes = async (
  fastify: FastifyInstance,

  options: FastifyPluginOptions,
) => {
  fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
    return { ok: true };
  });
};
