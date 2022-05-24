import { inject, injectable } from 'tsyringe';

import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepositoty: ISpecificationsRepository
  ) {}

  async execute({ description, name }: IRequest): Promise<void> {
    const specificationsAlreadyExists =
      await this.specificationsRepositoty.findByName(name);

    if (specificationsAlreadyExists) {
      throw new Error('Specification Already Exists!');
    }

    await this.specificationsRepositoty.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
