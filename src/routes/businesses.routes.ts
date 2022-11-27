import express from 'express';
import { 
    getBusinesses,
    getBusiness,
    createBusiness,
    updateBusiness,
    deleteBusiness,
} from '../controllers/businesses';
const businessRouter = express.Router();

businessRouter
    .get('/', getBusinesses)
    .get('/:businessId', getBusiness)
    .post('/', createBusiness)
    .put('/:businessId', updateBusiness)
    .delete('/:businessId', deleteBusiness)

export default businessRouter;