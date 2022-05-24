import { Repository } from 'typeorm';

import DataSourceConfig from '../../../../database/data-source';
import { Specification } from '../../entities/Specification';
import {
  ICreateSpecificationDTO,
  ISpecicationsRepository,
} from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecicationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = DataSourceConfig.getRepository(Specification);
  }

  async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      name,
      description,
    });

    await this.repository.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({ where: { name } });

    return specification;
  }

  async list(): Promise<Specification[]> {
    const specifications = await this.repository.find();

    return specifications;
  }
}

export { SpecificationsRepository };
