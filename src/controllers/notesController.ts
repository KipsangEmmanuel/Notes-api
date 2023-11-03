import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Notes } from '../Types/interface';

const createNote = async (req: Request, res: Response) => {
    try {
        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).json({ error: 'Both title and content are required.' });
        }

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
      // const notes = await Notes.find(); 
      // res.status(200).json(notes);
    } catch (error) {
      console.error('Error fetching notes:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

export { createNote, getAllNotes };
