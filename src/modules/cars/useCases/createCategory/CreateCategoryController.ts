import { Request, Response } from 'express';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const { name, description } = request.body;

      await this.createCategoryUseCase.execute({
        name,
        description,
      });

      return response.status(201).send();
    } catch (e) {
      return response.status(400).json({ error: e?.message });
    }
  }
}

export { CreateCategoryController };
