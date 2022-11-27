import express from 'express';
import { createTrip, deleteTrip, getTrip, getTrips, updateTrip } from '../controllers/trips';
const tripsRouter = express.Router();

tripsRouter
    .get('/', getTrips)
    .get('/:tripId', getTrip)
    .post('/', createTrip)
    .put('/:tripId', updateTrip)
    .delete('/:tripId', deleteTrip);

export default tripsRouter;