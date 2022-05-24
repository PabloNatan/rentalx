import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCategoriesUseCase } from './ListCategoryUseCase';

class ListCategoryController {
  async handle(request: Request, response: Response) {
    const listCategoiriesUseCase = container.resolve(ListCategoriesUseCase);

    const all = await listCategoiriesUseCase.execute();

    return response.json(all);
  }
}

export { ListCategoryController };
