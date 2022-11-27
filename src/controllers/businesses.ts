import { Request, Response } from "express";
import BusinessDataProperties from "../models/Business.model";
import { createOneBusiness, deleteOneBusiness, fetchOneBusiness, updateOneBusiness } from "../service/business.service";
import { createBusiness, deleteBusiness, fetchBusiness, fetchBusinesses, updateBusiness } from "../utils/firebase.utils";

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
    res.status(200).json({
        status: "success",
        message: "Businesses fetched succesfully",
        data: businesses
    });
}

export const getBusiness = async (req: Request, res: Response) => {
    const businessId = req.params.businessId;
    let searchedBusiness;
    try {
        searchedBusiness = await fetchBusiness(businessId);
    } catch(err: any) {
        console.error(err);
        res.status(500).json({
            status: "failed",
            message: "Internal Server Error"
        })
    }
    res.status(200).json({
        status: "success",
        message: "Business fetched succesfully",
        data: searchedBusiness
    });
}

export const postBusiness = async (req: Request, res: Response) => {
    const data: BusinessDataProperties = req.body;
    let newBusiness;
    try {
        newBusiness = await createBusiness(data);
        console.log(newBusiness);
    } catch(err) {
        console.error(err);
        res.status(500).json({
            status: "failed",
            message: "Internal Server Error"
        })
    }
    res.status(201).json({
        status: "success",
        message: "Business created succesfully!",
        data: []
    });
}

export const putBusiness = async (req: Request, res: Response) => {
    const businessId = req.params.businessId;
    const newData = req.body;
    try {
        await updateBusiness(businessId, newData);
    } catch(err: any) {
        console.log(err);
        res.status(400).json({
            status: "failed",
            message: "Bad Request"
        })
    }
    res.status(204).json({
        status: "success",
        message: "Business updated succesfully!",
        data: []
    });
};

export const delBusiness = async (req: Request, res: Response) => {
    const businessId = req.params.businessId;
    try {
        await deleteBusiness(businessId);
    } catch(err) {
        console.error(err);
        res.status(500).json({
            status: "failed",
            message: "Bad Request"
        });
    }

    res.status(210).json({
        status: "success",
        message: "Business deleted succesfully!",
        data: []
    });;
};