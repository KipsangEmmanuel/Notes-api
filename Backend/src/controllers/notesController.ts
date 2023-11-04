import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { noteSchema } from '../validators/validator';
import mssql from 'mssql'
import { dbConfig } from '../config/sqlConfig'
import Connection from '../dbhelpers/dbhelper'


const createNote = async (req: Request, res: Response) => {
    try {

        const {error, value} = noteSchema.validate(req.body);

        if(error){
          return res.status(400).json({ error: error.details[0].message });
        }

        const { title, content } = value;
          

        const newNote = {
            id: uuidv4(),
            title,
            content,
        };

        res.status(201).json(newNote);
    } catch (error) {
        console.error('Error creating a note:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAllNotes = async (req: Request, res: Response) => {
    try {

      // const pool = await mssql.connect(dbConfig)
      // const pool = (await pool.request().execute('fetchAllEmployees')).recordset


    } catch (error) {
      console.error('Error fetching notes:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

export { createNote};
