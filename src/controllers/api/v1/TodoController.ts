import { getModelForClass } from '@typegoose/typegoose';
import { Request, response, Response } from 'express';
import { Todo } from '../../../models/Todo';


class TodoController {
    static model = getModelForClass(Todo)
    static findAll= async (req:Request, res:Response) => {
       return res.json({todos:await TodoController.model.find({})});
    }

    static create = async(req:Request, res:Response) => {
        return res.json(await TodoController.model.create(req.body));
    }
    static update = async(req:Request, res:Response) => {
        const {id} = req.params;
        return res.json(await TodoController.model.updateOne({_id:id}, req.body));
    }
    static delete = async(req:Request, res:Response) => {
        const {id} = req.params;
        return res.json(await TodoController.model.deleteOne({_id:id}));
    }
    static findById = async(req:Request, res:Response) => {
        const {id} = req.params;
        return res.json(await TodoController.model.findOne({_id:id}));
    }
}

export {TodoController};