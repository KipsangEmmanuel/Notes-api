import { Request, Response } from 'express';
import { v4 } from 'uuid';
import { noteSchema } from '../validators/validator';
import mssql from 'mssql'
import { dbConfig } from '../config/sqlConfig'
import Connection from '../dbhelpers/dbhelper'
import { formartDate } from '../utils/formartDate';

let dbhelpers = new Connection;

const createNote = async (req: Request, res: Response) => {
    try {

        const {error, value} = noteSchema.validate(req.body);

        if(error){
          return res.status(400).json({ error: error.details[0].message });
        }

        const { title, content } = req.body;
        let id = v4()

        let createdAt = formartDate();
        const result = dbhelpers.execute('create_note', {id, title, content, createdAt})

        return res.status(201).json({
          message: 'Note created successfully!'
        });

    } catch (error) {
        console.error('Error creating a note:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAllNotes = async (req: Request, res: Response) => {
    try {

      const pool = await mssql.connect(dbConfig)
      const notes = (await pool.request().execute('fetchAllEmployees')).recordset

      return res.status(200).json({
        notes: notes
      })


    } catch (error) {
      console.error('Error fetching notes:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

export { createNote, getAllNotes};
