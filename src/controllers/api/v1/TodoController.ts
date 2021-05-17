import { Request, response, Response } from 'express';

const todos = [{name:'todo1', description:'jhdg jdshgf dqjhg qdsjhfg'}, {name:'todo1', description:'jhdg jdshgf dqjhg qdsjhfg'}];
class TodoController {
    static findAll=(req:Request, res:Response) => {
       return res.json({todos});
    }
}

export {TodoController};