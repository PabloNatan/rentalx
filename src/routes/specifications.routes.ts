import { Router } from 'express';

import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';
import { ListCategoryController } from '../modules/cars/useCases/listCategories/ListCategoryController';

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListCategoryController();

specificationsRoutes.post('/', createSpecificationController.handle);

specificationsRoutes.get('/', listSpecificationsController.handle);

export { specificationsRoutes };
