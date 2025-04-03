import { PrismaClient } from "@prisma/client";

export class ListCustomersService {
  async execute() {
    const customer = new PrismaClient();
    const listCustomer = await customer.customer.findMany({
      where: {
        status: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return listCustomer;
  }
}
