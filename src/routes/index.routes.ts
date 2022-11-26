import express, { Request, Response } from 'express';

const router = express.Router();

router.get('*', (req: Request, res: Response) => {
    res.json({
        "status": "404",
        "message": "not found"
    })
})

export default router;