import { Specification } from '../../entities/Specification';
import {
  ICreateSpecificationDTO,
  ISpecicationsRepository,
} from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecicationsRepository {
  private specifications: Specification[];

  private static INSTANCE: ISpecicationsRepository;

  constructor() {
    this.specifications = [];
  }

  public static getInstance(): ISpecicationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }

    return SpecificationsRepository.INSTANCE;
  }

  create({ description, name }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    return this.specifications.find(
      (specification) => specification.name === name
    );
  }

  list(): Specification[] {
    return this.specifications;
  }
}

export { SpecificationsRepository };
