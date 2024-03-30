import { Pet, Prisma } from "@prisma/client";
import { PetRepositoryInterface } from "../pet-repository";
import { randomUUID } from "crypto";

export class InMemoryPetsRepository implements PetRepositoryInterface{
    public items: Pet[] = []
    async create(data: Prisma.PetUncheckedCreateInput) {
        const pet = {
            id: randomUUID(),
            name: data.name,
            about: data.about,
            size: data.size,
            age: data.age,
            energy_level: data.energy_level,
            dependency_level: data.dependency_level,
            org_id: data.org_id,
            photos: data.photos ?? ''
        }
        this.items.push(pet)
        return pet
    }
}