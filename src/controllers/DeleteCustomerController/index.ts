import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteCustomerProps, DeleteCustomerService } from "../../services/DeleteCustomerService";

export class DeleteCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as DeleteCustomerProps;
    const deleteCustomerService = new DeleteCustomerService();
    const customer = await deleteCustomerService.execute(id);
    reply.send(customer);
  }
}
