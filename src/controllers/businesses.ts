import { Request, Response } from "express";
import { DataProperties } from "../models/Business.model";
import { createOneBusiness, deleteOneBusiness, fetchOneBusiness, updateOneBusiness } from "../service/business.service";
import { fetchBusinesses } from "../utils/firebase.utils";

export const getBusinesses = async (req: Request, res: Response) => {
    let businesses;
    try {
        businesses = await fetchBusinesses();
    } catch(err: any) {
        console.log(err);
        res.send(500).json({
            status: "failed",
            message: "Internal Server Error"
        })
    }
    res.send(businesses);
}

export const getBusiness = async (req: Request, res: Response) => {
    const businessId = req.params.businessId;
    let searchedBusiness;
    try {
        searchedBusiness = await fetchOneBusiness(businessId);
    } catch(err: any) {
        console.error(err);
        res.status(500).json({
            status: "failed",
            message: "Internal Server Error"
        })
    }
    res.status(200).json(searchedBusiness);
}

export const createBusiness = async (req: Request, res: Response) => {
    const data: DataProperties = req.body;
    let newBusiness;
    try {
        newBusiness = await createOneBusiness(data);
    } catch(err) {
        console.error(err);
        res.status(500).json({
            status: "failed",
            message: "Internal Server Error"
        })
    }
    res.status(201).json({
        status: "success",
        message: "Document updated succesfully!"
    });
}

export const updateBusiness = async (req: Request, res: Response) => {
    const businessId = req.params.businessId;
    const newData = req.body;
    try {
        await updateOneBusiness(businessId, newData);
    } catch(err: any) {
        console.log(err);
        res.status(400).json({
            status: "failed",
            message: "Bad Request"
        })
    }
    res.status(204).json({
        status: "success",
        message: "Document updated succesfully!"
    });
};

export const deleteBusiness = async (req: Request, res: Response) => {
    const businessId = req.params.businessId;
    try {
        await deleteOneBusiness(businessId);
    } catch(err) {
        console.error(err);
        res.status(500).json({
            status: "failed",
            message: "Bad Request"
        });
    }

    res.status(210).json({
        status: "success",
        message: "Document deleted succesfully!"
    });;
};