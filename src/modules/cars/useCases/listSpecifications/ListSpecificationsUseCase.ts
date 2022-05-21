import { ISpecicationsRepository } from 'modules/cars/repositories/ISpecificationsRepository';

class ListSpecificationsUseCase {
  constructor(
    private readonly specicatonsRepository: ISpecicationsRepository
  ) {}

  execute() {
    const all = this.specicatonsRepository.list();

    return all;
  }
}

export { ListSpecificationsUseCase };
