import { PrismaClient } from "@prisma/client";

export interface DeleteCustomerProps {
  id: string;
}

export class DeleteCustomerService {
  async execute(id: string) {
    if (!id) {
      throw new Error("Id is required");
    }

    const customer = new PrismaClient();
    const findCustomer = await customer.customer.findFirst({
      where: { id: id },
    });

    if (!findCustomer) {
      throw new Error("Customer not found");
    }

    await customer.customer.delete({ // como se chamase PrismaClient.customer.delete, pois customer esta dentro de PrismaClient;
      where: { id: findCustomer.id },
    });

    return findCustomer;
  }
}
