import { Specification } from '../entities/Specification';

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecicationsRepository {
  create({ description, name }: ICreateSpecificationDTO): void;
  findByName(name: string): Specification;
  list(): Specification[];
}

export { ISpecicationsRepository, ICreateSpecificationDTO };
