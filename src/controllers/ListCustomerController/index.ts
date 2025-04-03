import { FastifyReply, FastifyRequest } from "fastify";
import { ListCustomersService } from "../../services/ListCustomersService";

export class ListCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const customerService = new ListCustomersService();
    const customers = await customerService.execute();
    reply.send(customers);
  }
}
