import { FastifyReply, FastifyRequest } from "fastify";
import {
  CreateCustomerProps,
  CreateCustomerService,
} from "../../services/CreateCustomerService";

export class CreateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, email } = request.body as CreateCustomerProps;

    const customerService = new CreateCustomerService();
    const customer = await customerService.execute({ name, email });
    reply.send(customer);
  }
}
