import { Org, Prisma } from "@prisma/client";
import { OrgRepositoryInterface } from "../org-repository";
import { randomUUID } from "crypto";

export class InMemoryOrgRepository implements OrgRepositoryInterface {
  public items: Org[] = [];

  async create(data: Prisma.OrgUncheckedCreateInput) {
    const org = {
      id: randomUUID(),
      name: data.name,
      author_name: data.author_name,
      email: data.email,
      password: data.password,
      whatsapp: data.whatsapp,
      zipcode: data.zipcode,
      address: data.address,
      city: data.city,
      state: data.state,
      latitude: new Prisma.Decimal(data.latitude.toString()),
      longitude: new Prisma.Decimal(data.longitude.toString()),
    };
    this.items.push(org);
    return org;
  }
}
