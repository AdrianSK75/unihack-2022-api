import express from 'express';
import { 
    getBusinesses,
    getBusiness,
    postBusiness,
    putBusiness,
    delBusiness,
} from '../controllers/businesses';
const businessRouter = express.Router();

businessRouter
    .get('/', getBusinesses)
    .get('/:businessId', getBusiness)
    .post('/', postBusiness)
    .put('/:businessId', putBusiness)
    .delete('/:businessId', delBusiness)

export default businessRouter;