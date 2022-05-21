import { ISpecicationsRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationsRepositoty: ISpecicationsRepository) {}

  execute({ description, name }: IRequest): void {
    const specificationsAlreadyExists =
      this.specificationsRepositoty.findByName(name);

    if (specificationsAlreadyExists) {
      throw new Error('Specification Already Exists!');
    }

    this.specificationsRepositoty.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
