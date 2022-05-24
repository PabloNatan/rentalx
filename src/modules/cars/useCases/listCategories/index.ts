import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ListCategoryController } from './ListCategoryController';
import { ListCategoriesUseCase } from './ListCategoryUseCase';

const categoriesRepository = new CategoriesRepository();

const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);

const listCategoriesController = new ListCategoryController(
  listCategoriesUseCase
);

export { listCategoriesController };
