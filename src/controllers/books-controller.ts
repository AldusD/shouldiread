import { Request, Response, NextFunction } from "express";
import connection from "../database/db.js";
const getRawBooks = async (req: Request, res: Response) => {
    const name = req.query.name || '';

    const query = `
        SELECT 
            books.id, 
            books.name, 
            books."coverPicture", 
            books.description
        FROM books`;
        
    try {
        const books = (name) ?
            await connection.query(`${query} WHERE books.name LIKE $1 ;`, ['%' + name + '%'])
            :
            await connection.query(query);
        
        return res.send(books.rows).status(200);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

export {
    getRawBooks
}
