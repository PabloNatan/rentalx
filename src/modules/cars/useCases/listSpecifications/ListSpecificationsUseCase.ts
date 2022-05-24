import { inject, injectable } from 'tsyringe';

import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

@injectable()
class ListSpecificationsUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private readonly specicatonsRepository: ISpecificationsRepository
  ) {}

  execute() {
    const all = this.specicatonsRepository.list();

    return all;
  }
}

export { ListSpecificationsUseCase };
