import { Pet } from "@prisma/client"
import { PetRepositoryInterface } from "../repositories/pet-repository"

interface RegisterPetUseCaseRequest{
    name: string,
    about: string,
    size: string,
    age: string,
    energy_level: string,
    dependency_level: string,   
    org_id: string,
    photos?: string
}

interface RegisterPetUseCaseResponse{
    pet: Pet
}

export class RegisterPetUseCase {
    constructor(private petRepository: PetRepositoryInterface){}
    async execute({
        about, 
        age, 
        dependency_level, 
        energy_level, 
        name,
        org_id,
        size,
        photos
    }: RegisterPetUseCaseRequest): Promise<RegisterPetUseCaseResponse> {
        const pet = await this.petRepository.create({
            about,
            age,
            dependency_level,
            energy_level,
            name,
            org_id,
            size,
            photos,
        })
        return {
            pet
        }
    }
}