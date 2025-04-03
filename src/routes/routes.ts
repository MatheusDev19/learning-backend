import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyReply,
  FastifyRequest,
} from "fastify";
import { CreateCustomerController } from "../controllers/CreateCustomerController";
import { ListCustomerController } from "../controllers/ListCustomerController";
import { DeleteCustomerController } from "../controllers/DeleteCustomerController";

export const routes = async (
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
) => {
  fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
    return { ok: true };
  });

  fastify.post(
    "/customer",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateCustomerController().handle(request, reply);
    },
  );

  fastify.get(
    "/customers",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListCustomerController().handle(request, reply);
    },
  );

  fastify.delete(
    "/customer",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteCustomerController().handle(request, reply);
    },
  );
};
