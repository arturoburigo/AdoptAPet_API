import { Org, Prisma } from "@prisma/client";

export interface OrgRepositoryInterface {
  create(data: Prisma.OrgUncheckedCreateInput): Promise<Org>;
}
