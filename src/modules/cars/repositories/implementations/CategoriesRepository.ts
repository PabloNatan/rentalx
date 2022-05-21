import { Repository } from 'typeorm';

import DataSourceConfig from '../../../../database/data-source';
import { Category } from '../../entities/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  private static INSTANCE: ICategoriesRepository;

  private constructor() {
    this.repository = DataSourceConfig.getRepository(Category);
  }

  public static getInstance(): ICategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }

    return CategoriesRepository.INSTANCE;
  }

  create = async ({ description, name }: ICreateCategoryDTO): Promise<void> => {
    const category = this.repository.create({
      description,
      name,
    });
    console.log('EAE');

    await this.repository.save(category);
  };

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ where: { name } });

    return category;
  }
}

export { CategoriesRepository };
