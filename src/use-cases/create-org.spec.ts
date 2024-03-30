import { InMemoryOrgRepository } from "../repositories/in-memory/in-memory-org-repository";
import { CreateOrgUseCase } from "./create-org";

describe('Create Org Use Case', () => {
    let orgRepository: InMemoryOrgRepository;
    let sut: CreateOrgUseCase;

    beforeEach(() => {
        orgRepository = new InMemoryOrgRepository();
        sut = new CreateOrgUseCase(orgRepository);
    });

    it('should be able to create an org', async () => {
        const orgData = {
            address: 'Anywhere street',
            author_name: 'Arturo Burigo',
            city: 'Criciuma',
            email: 'burigoarturo3@gmail.com',
            latitude: -0,
            longitude: -0,
            name: 'OrgPet',
            password: '121345',
            state: 'SC',
            whatsapp: '1234922929',
            zipcode: '00000'
        };

        const { org } = await sut.execute(orgData);
        console.log(org)
        expect(org).toHaveProperty('id');
        expect(org.address).toEqual(orgData.address);
        expect(org.name).toEqual(orgData.name);
    });
});
