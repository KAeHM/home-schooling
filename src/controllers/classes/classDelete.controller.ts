import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/AppError";
import classDeleteService from "../../services/classes/classDelete.service";

export const classDeleteController = async( req: Request, res: Response) => {
    try {
        const {id} = req.params

        const deletedClass = await classDeleteService(id)

        res.status(200).send(deletedClass)
    } catch (err) {
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}

export default classDeleteController