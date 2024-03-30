import { Org } from "@prisma/client";
import { OrgRepositoryInterface } from "../repositories/org-repository";
import { hash } from "bcryptjs";

interface CreateOrgUseCaseRequest {
  name: string;
  author_name: string;
  email: string;
  password: string;
  whatsapp: string;
  zipcode: string;
  address: string;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

interface CreateOrgUseCaseResponse {
  org: Org
}

export class CreateOrgUseCase {
  constructor(private orgRepository: OrgRepositoryInterface) {}

  async execute({
    address,
    author_name,
    city,
    email,
    latitude,
    longitude,
    name,
    password,
    state,
    whatsapp,
    zipcode,
  }: CreateOrgUseCaseRequest): Promise<CreateOrgUseCaseResponse> {
    const hashed_password = await hash(password, 8);
    const org = await this.orgRepository.create({
      address,
      author_name,
      city,
      email,
      latitude,
      longitude,
      name,
      password: hashed_password,
      state,
      whatsapp,
      zipcode,
    });

    return {
      org,
    };
  }
}
