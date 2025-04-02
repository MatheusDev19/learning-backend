import { PrismaClient } from "@prisma/client";

export class CreateCustomerService {
  async execute() {
    return { ok: true };
  }
}
