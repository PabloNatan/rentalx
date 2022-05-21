import { Request, Response } from 'express';

import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';

class ListSpecificationsController {
  constructor(
    private readonly listSpecificationsUseCase: ListSpecificationsUseCase
  ) {}

  handle(request: Request, response: Response) {
    const all = this.listSpecificationsUseCase.execute();
    return response.json(all);
  }
}

export { ListSpecificationsController };
