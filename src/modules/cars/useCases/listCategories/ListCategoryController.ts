import { Request, Response } from 'express';

import { ListCategoriesUseCase } from './ListCategoryUseCase';

class ListCategoryController {
  constructor(private listCategoiriesUseCase: ListCategoriesUseCase) {}
  handle(request: Request, response: Response) {
    const all = this.listCategoiriesUseCase.execute();

    return response.json(all);
  }
}

export { ListCategoryController };
