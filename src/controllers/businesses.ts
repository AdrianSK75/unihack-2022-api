import { Request, Response } from "express";

export const getBusinesses = (req: Request, res: Response) => {
    res.send('Sent a list of businesses');
}

export const getBusiness = (req: Request, res: Response) => {
    const businessId = req.params.businessId;
    res.send(`Sent business with id ${businessId}`);
}

export const createBusiness = (req: Request, res: Response) => {
    res.send('Posted New Business');
}

export const updateBusiness = (req: Request, res: Response) => {
    const businessId = req.params.businessId;
    res.send(`Updated business with id ${businessId}`);
};

export const deleteBusiness = (req: Request, res: Response) => {
    const businessId = req.params.businessId;
    res.send(`Delete business with id ${businessId}`);
};