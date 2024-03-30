import { InMemoryOrgRepository } from "../repositories/in-memory/in-memory-org-repository";
import { InMemoryPetsRepository } from "../repositories/in-memory/in-memory-pets-repository";
import { CreateOrgUseCase } from "./create-org";
import { RegisterPetUseCase } from "./register-pet";

describe('Create Org Use Case', () => {
    let petRepository: InMemoryPetsRepository;
    let sut: RegisterPetUseCase;

    beforeEach(() => {
        petRepository = new InMemoryPetsRepository();
        sut = new RegisterPetUseCase(petRepository);
    });

    it('should be able to register a pet', async () => {
        const petData = {
            name: 'Godofredo', 
            about: 'Friendly and playful', 
            size: 'Medium', 
            age: '2 years', 
            energy_level: 'High', 
            dependency_level: 'Moderate', 
            org_id: '12345'     
        }
        const { pet } = await sut.execute(petData);
        console.log(pet)
        expect(pet).toHaveProperty('id');
        expect(pet.age).toEqual('2 years');
    });
});
