import { PrismaClient } from "@prisma/client";

export interface CreateCustomerProps {
  name: string;
  email: string;
}

export class CreateCustomerService {
  async execute({ name, email }: CreateCustomerProps) {
    if (!name || !email) {
      throw new Error("UserName and email are required");
    }

    const customer = new PrismaClient();
    const createCustomer = await customer.customer.create({
      data: {
        name,
        email,
        status: true,
      },
    });

    return createCustomer;
  }
}
